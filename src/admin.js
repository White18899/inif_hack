let allTeams = [];
let allDomains = [];
let searchQuery = '';
let editingTeam = null;

function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getAdminToken() {
  try {
    const saved = sessionStorage.getItem('infinity_admin_auth');
    if (!saved) return '';
    const parsed = JSON.parse(saved);
    return parsed.token || parsed.password || '';
  } catch (e) {
    return '';
  }
}

function authHeaders(extra = {}) {
  const token = getAdminToken();
  const headers = { ...extra };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

    const secLogin = document.getElementById('sec-login');
    const secDash = document.getElementById('sec-dashboard');
    const formLogin = document.getElementById('form-admin-login');
    const loginErr = document.getElementById('login-err');
    const btnLogout = document.getElementById('btn-logout');
    const btnRefresh = document.getElementById('btn-refresh');

    btnRefresh.addEventListener('click', async () => {
      btnRefresh.classList.add('spinning');
      try {
        if (secDash.style.display !== 'none') {
          await loadData();
        } else {
          window.location.reload();
        }
      } catch (err) {
        console.error('Admin refresh failed:', err);
      } finally {
        setTimeout(() => {
          btnRefresh.classList.remove('spinning');
        }, 500);
      }
    });

    const tbody = document.getElementById('admin-tbody');
    const searchInput = document.getElementById('admin-search');

    const modalEdit = document.getElementById('modal-edit-team');
    const btnCloseEdit = document.getElementById('btn-close-edit');
    const formEdit = document.getElementById('form-edit-team');

    const modalPsMgr = document.getElementById('modal-ps-mgr');
    const btnOpenPsMgr = document.getElementById('btn-open-ps-mgr');
    const btnClosePsMgr = document.getElementById('btn-close-ps-mgr');
    const psMgrList = document.getElementById('ps-mgr-domains-list');

    async function doAdminLogin(password, isSilent = false) {
      if (!isSilent && loginErr) loginErr.style.display = 'none';

      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: (password || '').trim() }),
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error || 'Invalid administrator passphrase.');
        }

        sessionStorage.setItem('infinity_admin_auth', JSON.stringify({ password, token: data.token }));
        if (secLogin) secLogin.style.display = 'none';
        if (secDash) secDash.style.display = 'block';
        if (btnLogout) btnLogout.style.display = 'inline-block';

        await loadData();
        return true;
      } catch (err) {
        if (!isSilent && loginErr) {
          loginErr.textContent = err.message;
          loginErr.style.display = 'block';
        } else {
          sessionStorage.removeItem('infinity_admin_auth');
        }
        return false;
      }
    }

    if (formLogin) {
      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const password = document.getElementById('txt-passphrase')?.value || '';
        await doAdminLogin(password, false);
      });
    }

    const btnDoLogin = document.getElementById('btn-do-login');
    if (btnDoLogin) {
      btnDoLogin.addEventListener('click', async (e) => {
        e.preventDefault();
        const password = document.getElementById('txt-passphrase')?.value || '';
        await doAdminLogin(password, false);
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        sessionStorage.removeItem('infinity_admin_auth');
        if (secDash) secDash.style.display = 'none';
        if (secLogin) secLogin.style.display = 'block';
        btnLogout.style.display = 'none';
      });
    }

    // Auto-restore admin session if browser is refreshed (F5 / reload)
    const savedAdmin = sessionStorage.getItem('infinity_admin_auth');
    if (savedAdmin) {
      try {
        const creds = JSON.parse(savedAdmin);
        if (creds.password) doAdminLogin(creds.password, true);
      } catch (e) { }
    }

    async function loadData() {
      try {
        const [teamsRes, domainsRes] = await Promise.all([
          fetch('/api/admin/teams', { headers: authHeaders() }),
          fetch('/api/domains')
        ]);

        if (teamsRes.status === 401) {
          sessionStorage.removeItem('infinity_admin_auth');
          if (secDash) secDash.style.display = 'none';
          if (secLogin) secLogin.style.display = 'block';
          if (btnLogout) btnLogout.style.display = 'none';
          if (loginErr) {
            loginErr.textContent = 'Session expired or unauthorized. Please log in again.';
            loginErr.style.display = 'block';
          }
          return;
        }

        const teamsData = await teamsRes.json();
        const domainsData = await domainsRes.json();

        allTeams = teamsData.teams || [];
        allDomains = domainsData.domains || [];

        const btnExcel = document.querySelector('.btn-excel');
        if (btnExcel) {
          const token = getAdminToken();
          btnExcel.href = `/api/admin/export${token ? '?token=' + encodeURIComponent(token) : ''}`;
        }

        renderTable();
        updateKPIs();
      } catch (e) {
        console.error('Error loading admin data:', e);
      }
    }

    function updateKPIs() {
      document.getElementById('kpi-total-teams').textContent = allTeams.length;

      let totalFee = 0;
      let verifiedCount = 0;
      let totalHackers = 0;

      allTeams.forEach(t => {
        const size = t.teamSize || 4;
        totalHackers += size;
        const fee = t.payment?.amount || (size * 349);
        totalFee += fee;
        if (t.payment?.status === 'verified') verifiedCount++;
      });

      document.getElementById('kpi-total-fees').textContent = `₹${totalFee.toLocaleString('en-IN')}`;
      document.getElementById('kpi-verified-payments').textContent = verifiedCount;
      document.getElementById('kpi-total-hackers').textContent = totalHackers;
    }

    function renderTable() {
      const q = searchQuery.toLowerCase();
      const filtered = allTeams.filter(t => {
        return !q ||
          t.teamName.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q) ||
          (t.college && t.college.toLowerCase().includes(q)) ||
          (t.leader?.email && t.leader.email.toLowerCase().includes(q)) ||
          (t.payment?.utr && t.payment.utr.toLowerCase().includes(q));
      });

      if (filtered.length === 0) {
        const emptyMsg = allTeams.length === 0
          ? 'No squads registered yet. The system is clean and ready for live registrations.'
          : 'No teams match the search criteria.';
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:45px 20px; color:#888; font-family:'JetBrains Mono', monospace; font-size:0.8rem; letter-spacing:0.04em;">${emptyMsg}</td></tr>`;
        return;
      }

      let html = '';
      filtered.forEach(t => {
        const pay = t.payment || {};
        const food = t.food || {};
        const rev = t.reviews || {};
        const scores = t.scores || {};

        let foodCount = 0;
        ['highTea', 'dinner', 'midnightFuel', 'breakfast', 'lunch'].forEach(k => {
          if (food[k]?.collected) foodCount++;
        });

        let revCount = 0;
        ['r1', 'r2', 'r3'].forEach(k => {
          if (rev[k]?.attended) revCount++;
        });

        const payStatus = pay.status || 'pending';
        let statusBadge = `<span class="badge-status badge-pending">PENDING</span>`;
        if (payStatus === 'verified') statusBadge = `<span class="badge-status badge-verified">VERIFIED</span>`;
        if (payStatus === 'rejected') statusBadge = `<span class="badge-status badge-rejected">REJECTED</span>`;

        html += `
          <tr>
            <td>
              <strong>${escapeHTML(t.teamName)}</strong>
              <div style="font-family:'JetBrains Mono'; font-size:0.7rem; color:var(--red);">${escapeHTML(t.id)}</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">${escapeHTML(t.college)}</div>
            </td>
            <td>
              <span class="portal-badge font-mono">${escapeHTML((t.preferredDomain || 'MIND').toUpperCase())}</span>
              <div style="font-size:0.68rem; color:#888;">${escapeHTML(t.teamSize || 4)} Members</div>
            </td>
            <td>
              ${statusBadge}
              <div style="font-size:0.7rem; color:#aaa; margin-top:2px;">₹${pay.amount || (t.teamSize || 4) * 349}</div>
            </td>
            <td>
              <div class="font-mono" style="font-size:0.72rem;">${escapeHTML(pay.utr || 'N/A')}</div>
              <div style="font-size:0.68rem; color:#888;">Phone: ${escapeHTML(pay.phone || t.leader?.phone || 'N/A')}</div>
              ${pay.screenshotUrl ? `<a href="${encodeURI(pay.screenshotUrl)}" target="_blank" style="font-size:0.68rem; color:var(--cyan);">View Receipt ↗</a>` : ''}
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${foodCount} / 5</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${revCount} / 3</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:800; color:var(--green); font-size:0.95rem;">${scores.total || 0}</span>
            </td>
            <td>
              <div class="tbl-actions">
                <select class="sel-quick-status ${payStatus}" data-status-id="${escapeHTML(t.id)}" title="Select payment verification status">
                  <option value="verified" ${payStatus === 'verified' ? 'selected' : ''}>✓ VERIFIED</option>
                  <option value="pending" ${payStatus === 'pending' ? 'selected' : ''}>⏳ PENDING</option>
                  <option value="rejected" ${payStatus === 'rejected' ? 'selected' : ''}>✕ REJECTED</option>
                </select>
                <button class="btn-tbl-edit" data-edit-id="${escapeHTML(t.id)}">EDIT</button>
                <button class="btn-tbl-del" data-del-id="${escapeHTML(t.id)}">DEL</button>
              </div>
            </td>
          </tr>
        `;
      });
      tbody.innerHTML = html;

      // Bind Quick Payment Status Dropdown Buttons
      tbody.querySelectorAll('.sel-quick-status').forEach(select => {
        select.addEventListener('change', async (e) => {
          const tId = select.getAttribute('data-status-id');
          const targetTeam = allTeams.find(t => t.id === tId);
          if (!targetTeam) return;

          const newStatus = e.target.value;
          select.disabled = true;

          try {
            const res = await fetch(`/api/admin/teams/${tId}`, {
              method: 'PUT',
              headers: authHeaders({ 'Content-Type': 'application/json' }),
              body: JSON.stringify({
                payment: {
                  ...targetTeam.payment,
                  status: newStatus
                }
              })
            });
            const data = await res.json();
            if (data.success) {
              const idx = allTeams.findIndex(t => t.id === tId);
              if (idx >= 0) allTeams[idx] = data.team;
              renderTable();
              updateKPIs();
            } else {
              alert('Failed to update status: ' + (data.error || 'Unknown error'));
              renderTable();
            }
          } catch (err) {
            alert('Error updating payment status: ' + err.message);
            renderTable();
          }
        });
      });

      // Bind Edit & Delete buttons
      tbody.querySelectorAll('.btn-tbl-edit').forEach(btn => {
        btn.addEventListener('click', () => {
          openEditModal(btn.getAttribute('data-edit-id'));
        });
      });

      tbody.querySelectorAll('.btn-tbl-del').forEach(btn => {
        btn.addEventListener('click', async () => {
          const tId = btn.getAttribute('data-del-id');
          if (confirm(`Are you sure you want to completely delete team ${tId}?`)) {
            try {
              const res = await fetch(`/api/admin/teams/${tId}`, {
                method: 'DELETE',
                headers: authHeaders(),
              });
              const data = await res.json();
              if (data.success) {
                allTeams = allTeams.filter(t => t.id !== tId);
                renderTable();
                updateKPIs();
              }
            } catch (err) {
              alert('Error deleting squad: ' + err.message);
            }
          }
        });
      });
    }

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderTable();
    });

    // EDIT MODAL
    function openEditModal(teamId) {
      editingTeam = allTeams.find(t => t.id === teamId);
      if (!editingTeam) return;

      document.getElementById('edit-team-id').textContent = editingTeam.id;
      document.getElementById('edt-team-name').value = editingTeam.teamName || '';
      document.getElementById('edt-college').value = editingTeam.college || '';
      document.getElementById('edt-room').value = editingTeam.roomAllocated || '';
      const rawDomain = (editingTeam.preferredDomain || 'intelligence').toLowerCase();
      const domainMap = {
        mind: 'intelligence',
        space: 'connectivity',
        reality: 'digital',
        power: 'automation',
        time: 'analytics',
        soul: 'impact',
        intelligence: 'intelligence',
        connectivity: 'connectivity',
        digital: 'digital',
        automation: 'automation',
        analytics: 'analytics',
        impact: 'impact'
      };
      document.getElementById('edt-domain').value = domainMap[rawDomain] || 'intelligence';
      document.getElementById('edt-size').value = editingTeam.teamSize || 4;
      document.getElementById('edt-password').value = editingTeam.teamPassword || '';

      document.getElementById('edt-leader-name').value = editingTeam.leader?.name || '';
      document.getElementById('edt-leader-email').value = editingTeam.leader?.email || '';
      document.getElementById('edt-leader-phone').value = editingTeam.leader?.phone || '';

      const pay = editingTeam.payment || {};
      document.getElementById('edt-pay-status').value = pay.status || 'pending';
      document.getElementById('edt-pay-utr').value = pay.utr || '';
      document.getElementById('edt-pay-amount').value = pay.amount || (editingTeam.teamSize || 4) * 349;

      const food = editingTeam.food || {};
      document.getElementById('edt-food-ht').checked = Boolean(food.highTea?.collected);
      document.getElementById('edt-food-din').checked = Boolean(food.dinner?.collected);
      document.getElementById('edt-food-mid').checked = Boolean(food.midnightFuel?.collected);
      document.getElementById('edt-food-bf').checked = Boolean(food.breakfast?.collected);
      document.getElementById('edt-food-ln').checked = Boolean(food.lunch?.collected);

      const rev = editingTeam.reviews || {};
      document.getElementById('edt-rev-r1').checked = Boolean(rev.r1?.attended);
      document.getElementById('edt-rev-r2').checked = Boolean(rev.r2?.attended);
      document.getElementById('edt-rev-r3').checked = Boolean(rev.r3?.attended);

      const scores = editingTeam.scores || {};
      document.getElementById('edt-score-total').value = scores.total || 0;
      document.getElementById('edt-score-remarks').value = scores.remarks || '';

      modalEdit.classList.add('is-open');
    }

    btnCloseEdit.addEventListener('click', () => modalEdit.classList.remove('is-open'));

    formEdit.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!editingTeam) return;

      const updates = {
        teamName: document.getElementById('edt-team-name').value.trim(),
        college: document.getElementById('edt-college').value.trim(),
        roomAllocated: document.getElementById('edt-room').value.trim(),
        preferredDomain: document.getElementById('edt-domain').value,
        teamSize: parseInt(document.getElementById('edt-size').value, 10) || 4,
        teamPassword: document.getElementById('edt-password').value,
        leader: {
          name: document.getElementById('edt-leader-name').value.trim(),
          email: document.getElementById('edt-leader-email').value.trim(),
          phone: document.getElementById('edt-leader-phone').value.trim(),
        },
        payment: {
          ...editingTeam.payment,
          status: document.getElementById('edt-pay-status').value,
          utr: document.getElementById('edt-pay-utr').value.trim(),
          amount: parseFloat(document.getElementById('edt-pay-amount').value) || 0,
        },
        food: {
          highTea: { collected: document.getElementById('edt-food-ht').checked },
          dinner: { collected: document.getElementById('edt-food-din').checked },
          midnightFuel: { collected: document.getElementById('edt-food-mid').checked },
          breakfast: { collected: document.getElementById('edt-food-bf').checked },
          lunch: { collected: document.getElementById('edt-food-ln').checked },
        },
        reviews: {
          r1: { attended: document.getElementById('edt-rev-r1').checked },
          r2: { attended: document.getElementById('edt-rev-r2').checked },
          r3: { attended: document.getElementById('edt-rev-r3').checked },
        },
        scores: {
          ...editingTeam.scores,
          total: parseFloat(document.getElementById('edt-score-total').value) || 0,
          remarks: document.getElementById('edt-score-remarks').value.trim(),
        }
      };

      try {
        const res = await fetch(`/api/admin/teams/${editingTeam.id}`, {
          method: 'PUT',
          headers: authHeaders({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(updates),
        });
        const data = await res.json();
        if (data.success) {
          const idx = allTeams.findIndex(t => t.id === editingTeam.id);
          if (idx >= 0) allTeams[idx] = data.team;
          modalEdit.classList.remove('is-open');
          renderTable();
          updateKPIs();
        }
      } catch (err) {
        alert('Error updating team: ' + err.message);
      }
    });

    // PROBLEM STATEMENTS MANAGER
    btnOpenPsMgr.addEventListener('click', () => {
      renderPsManager();
      modalPsMgr.classList.add('is-open');
    });

    btnClosePsMgr.addEventListener('click', () => modalPsMgr.classList.remove('is-open'));

    function renderPsManager() {
      const prefixMap = {
        intelligence: 'INTEL',
        connectivity: 'CONN',
        digital: 'DIG',
        automation: 'AUTO',
        analytics: 'ANA',
        impact: 'IMP',
        mind: 'INTEL',
        space: 'CONN',
        reality: 'DIG',
        power: 'AUTO',
        time: 'ANA',
        soul: 'IMP'
      };

      let html = '';
      allDomains.forEach(dom => {
        const isReleased = Boolean(dom.isPsReleased);
        const psList = dom.problemStatements || [];
        const pfx = prefixMap[dom.id] || dom.id.substring(0, 4).toUpperCase();
        const nextCode = `PS-${pfx}-${String(psList.length + 1).padStart(2, '0')}`;
        const accent = dom.accentHex || '#ffd000';

        html += `
          <div class="field-card" style="border-left: 4px solid ${accent}; margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:12px;">
              <div>
                <h4 style="font-size:1.15rem; color:#fff; display:flex; align-items:center; gap:8px;">
                  <span>${dom.domainName}</span>
                  <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:${accent}; font-weight:700;">(${dom.stoneName})</span>
                </h4>
                <div style="font-size:0.75rem; color:var(--text-muted);">${dom.tagline || ''}</div>
              </div>

              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <button class="btn-toggle-add-ps" data-domain-id="${dom.id}" style="padding:6px 12px; border-radius:6px; background:rgba(255,255,255,0.06); border:1px solid ${accent}50; color:${accent}; font-family:'JetBrains Mono',monospace; font-size:0.72rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                  + ADD STATEMENT
                </button>
                <label class="switch-wrap">
                  <input type="checkbox" class="toggle-release-ps" data-domain-id="${dom.id}" ${isReleased ? 'checked' : ''}>
                  <span style="font-family:'JetBrains Mono'; font-size:0.72rem; font-weight:700; color:${isReleased ? 'var(--green)' : 'var(--gold)'};">
                    ${isReleased ? 'RELEASED (LIVE)' : 'LOCKED (HIDDEN)'}
                  </span>
                </label>
              </div>
            </div>

            <!-- Expandable Add Problem Statement Panel -->
            <div id="add-panel-${dom.id}" style="display:none; margin: 12px 0 16px 0; padding:16px; border-radius:10px; background:rgba(6,6,12,0.95); border:1px solid ${accent}60; box-shadow:0 8px 25px rgba(0,0,0,0.6);">
              <div style="font-family:'Syne',sans-serif; font-size:0.86rem; font-weight:700; color:${accent}; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>✦</span> NEW PROBLEM STATEMENT // ${dom.stoneName.toUpperCase()} (${dom.domainName})
              </div>

              <div class="edit-grid-3" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CHALLENGE CODE</label>
                  <input type="text" id="new-code-${dom.id}" class="form-input font-mono" value="${nextCode}" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">PROBLEM TITLE</label>
                  <input type="text" id="new-title-${dom.id}" class="form-input" placeholder="e.g. Distributed Telemetry Mesh Engine" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DIFFICULTY</label>
                  <select id="new-diff-${dom.id}" class="form-input custom-select" style="padding:8px 10px; font-size:0.82rem;">
                    <option value="Advanced" selected>Advanced</option>
                    <option value="Hardcore">Hardcore</option>
                    <option value="Intermediate">Intermediate</option>
                  </select>
                </div>
              </div>

              <div class="edit-grid-2" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CATEGORY / TRACK</label>
                  <input type="text" id="new-cat-${dom.id}" class="form-input" value="${dom.domainName} & Systems" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DELIVERABLES (COMMA-SEPARATED)</label>
                  <input type="text" id="new-deliv-${dom.id}" class="form-input" placeholder="Interactive UI visualizer, Core architecture daemon, Benchmark testbench" style="padding:8px 10px; font-size:0.82rem;">
                </div>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label class="form-label">PROBLEM STATEMENT DESCRIPTION</label>
                <textarea id="new-desc-${dom.id}" class="form-input" rows="3" placeholder="Provide background context, technical specifications, and key engineering expectations..." style="padding:8px 10px; font-size:0.82rem;"></textarea>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
                <button class="btn-cancel-add-ps" data-domain-id="${dom.id}" style="padding:7px 14px; border-radius:6px; background:transparent; border:1px solid var(--border-subtle); color:var(--text-muted); font-size:0.75rem; cursor:pointer;">
                  Cancel
                </button>
                <button class="btn-save-new-ps" data-domain-id="${dom.id}" style="padding:7px 18px; border-radius:6px; background:${accent}; color:#000; font-family:'Syne',sans-serif; font-size:0.8rem; font-weight:800; border:none; cursor:pointer; box-shadow:0 0 12px ${accent}40;">
                  SAVE STATEMENT TO ${dom.stoneName.toUpperCase()}
                </button>
              </div>
            </div>

            <!-- Active Statements List -->
            <div style="margin-top:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.75rem; color:#bbb; text-transform:uppercase;">
                  Active Statements (${psList.length}):
                </strong>
              </div>

              ${psList.length === 0 ? `
                <div style="padding:14px; text-align:center; font-size:0.75rem; color:#777; background:rgba(255,255,255,0.01); border-radius:6px; border:1px dashed rgba(255,255,255,0.08);">
                  No problem statements for this stone yet. Click <strong>+ ADD STATEMENT</strong> above to create one.
                </div>
              ` : `
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${psList.map((p, idx) => `
                    <div style="padding:10px 14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:8px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                      <div style="flex:1;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                          <span style="color:${accent}; font-family:'JetBrains Mono'; font-weight:700; font-size:0.75rem;">${p.code}:</span>
                          <strong style="font-size:0.82rem; color:#fff;">${p.title}</strong>
                          <span style="font-size:0.65rem; padding:2px 6px; border-radius:4px; background:rgba(255,255,255,0.06); color:#aaa; font-family:'JetBrains Mono';">
                            ${p.difficulty || 'Advanced'}
                          </span>
                        </div>
                        <div style="font-size:0.74rem; color:#888; line-height:1.4;">${p.description}</div>
                        ${(p.deliverables && p.deliverables.length > 0) ? `
                          <div style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap;">
                            ${p.deliverables.map(d => `
                              <span style="font-size:0.65rem; padding:1px 6px; border-radius:3px; background:rgba(255,255,255,0.04); color:#aaa;">✦ ${d}</span>
                            `).join('')}
                          </div>
                        ` : ''}
                      </div>

                      <button class="btn-del-ps" data-domain-id="${dom.id}" data-ps-id="${p.id || p.code}" title="Remove this problem statement" style="padding:4px 8px; border-radius:4px; background:rgba(255,42,75,0.1); border:1px solid var(--red); color:var(--red); font-size:0.68rem; cursor:pointer; white-space:nowrap;">
                        ✕ REMOVE
                      </button>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          </div>
        `;
      });
      psMgrList.innerHTML = html;

      // Bind Toggle Add Panel Buttons
      psMgrList.querySelectorAll('.btn-toggle-add-ps').forEach(btn => {
        btn.addEventListener('click', () => {
          const domId = btn.getAttribute('data-domain-id');
          const panel = document.getElementById(`add-panel-${domId}`);
          if (panel) {
            const isOpen = panel.style.display !== 'none';
            panel.style.display = isOpen ? 'none' : 'block';
            btn.textContent = isOpen ? '+ ADD STATEMENT' : '✕ CLOSE FORM';
          }
        });
      });

      // Bind Cancel Add Panel Buttons
      psMgrList.querySelectorAll('.btn-cancel-add-ps').forEach(btn => {
        btn.addEventListener('click', () => {
          const domId = btn.getAttribute('data-domain-id');
          const panel = document.getElementById(`add-panel-${domId}`);
          const toggleBtn = psMgrList.querySelector(`.btn-toggle-add-ps[data-domain-id="${domId}"]`);
          if (panel) panel.style.display = 'none';
          if (toggleBtn) toggleBtn.textContent = '+ ADD STATEMENT';
        });
      });

      // Bind Save New Problem Statement Buttons
      psMgrList.querySelectorAll('.btn-save-new-ps').forEach(btn => {
        btn.addEventListener('click', async () => {
          const domId = btn.getAttribute('data-domain-id');
          const targetDomain = allDomains.find(d => d.id === domId);
          if (!targetDomain) return;

          const codeInput = document.getElementById(`new-code-${domId}`);
          const titleInput = document.getElementById(`new-title-${domId}`);
          const catInput = document.getElementById(`new-cat-${domId}`);
          const diffInput = document.getElementById(`new-diff-${domId}`);
          const descInput = document.getElementById(`new-desc-${domId}`);
          const delivInput = document.getElementById(`new-deliv-${domId}`);

          const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
          const title = titleInput ? titleInput.value.trim() : '';
          const description = descInput ? descInput.value.trim() : '';

          if (!code || !title || !description) {
            alert('Please provide at least the Problem Code, Title, and Description.');
            return;
          }

          const rawDeliv = delivInput ? delivInput.value.trim() : '';
          const deliverables = rawDeliv ? rawDeliv.split(',').map(s => s.trim()).filter(Boolean) : [
            'Architecture document and testbench report',
            'Interactive demonstration visualizer'
          ];

          const newPs = {
            id: code.toLowerCase().replace(/[^a-z0-9]/g, '-'),
            code: code,
            title: title,
            category: (catInput && catInput.value.trim()) || targetDomain.domainName,
            difficulty: (diffInput && diffInput.value) || 'Advanced',
            description: description,
            deliverables: deliverables
          };

          if (!targetDomain.problemStatements) {
            targetDomain.problemStatements = [];
          }

          targetDomain.problemStatements.push(newPs);

          btn.disabled = true;
          btn.textContent = 'SAVING TO R2...';

          try {
            const res = await fetch('/api/admin/domains', {
              method: 'PUT',
              headers: authHeaders({ 'Content-Type': 'application/json' }),
              body: JSON.stringify(targetDomain)
            });
            const data = await res.json();
            if (data.success) {
              const idx = allDomains.findIndex(d => d.id === domId);
              if (idx >= 0) allDomains[idx] = data.domain;
              renderPsManager();
            } else {
              alert('Failed to save statement: ' + (data.error || 'Unknown error'));
              renderPsManager();
            }
          } catch (e) {
            alert('Error saving statement: ' + e.message);
            renderPsManager();
          }
        });
      });

      // Bind Delete Problem Statement Buttons
      psMgrList.querySelectorAll('.btn-del-ps').forEach(btn => {
        btn.addEventListener('click', async () => {
          const domId = btn.getAttribute('data-domain-id');
          const psId = btn.getAttribute('data-ps-id');
          const targetDomain = allDomains.find(d => d.id === domId);
          if (!targetDomain) return;

          const ps = (targetDomain.problemStatements || []).find(p => p.id === psId || p.code === psId);
          const psCode = ps ? ps.code : psId;

          if (confirm(`Are you sure you want to remove problem statement "${psCode}" from ${targetDomain.stoneName}?`)) {
            targetDomain.problemStatements = (targetDomain.problemStatements || []).filter(p => p.id !== psId && p.code !== psId);

            try {
              const res = await fetch('/api/admin/domains', {
                method: 'PUT',
                headers: authHeaders({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(targetDomain)
              });
              const data = await res.json();
              if (data.success) {
                const idx = allDomains.findIndex(d => d.id === domId);
                if (idx >= 0) allDomains[idx] = data.domain;
                renderPsManager();
              }
            } catch (e) {
              alert('Error removing statement: ' + e.message);
            }
          }
        });
      });

      // Bind Release Toggle switches
      psMgrList.querySelectorAll('.toggle-release-ps').forEach(toggle => {
        toggle.addEventListener('change', async () => {
          const domId = toggle.getAttribute('data-domain-id');
          const isReleased = toggle.checked;

          const targetDomain = allDomains.find(d => d.id === domId);
          if (!targetDomain) return;

          targetDomain.isPsReleased = isReleased;

          try {
            await fetch('/api/admin/domains', {
              method: 'PUT',
              headers: authHeaders({ 'Content-Type': 'application/json' }),
              body: JSON.stringify(targetDomain),
            });
            renderPsManager();
          } catch (e) {
            alert('Error updating domain status: ' + e.message);
          }
        });
      });
    }