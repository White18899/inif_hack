let currentTeam = null;
    let currentDomain = null;
    let authCredentials = { email: '', password: '' };

    const secLogin = document.getElementById('sec-login');
    const secDash = document.getElementById('sec-dashboard');
    const formLogin = document.getElementById('form-leader-login');
    const loginErr = document.getElementById('login-err');
    const btnLogout = document.getElementById('btn-logout');
    const btnRefresh = document.getElementById('btn-refresh');

    async function doLeaderLogin(email, password, isSilent = false) {
      if (!isSilent) loginErr.style.display = 'none';

      try {
        const res = await fetch('/api/teams/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error || 'Authentication failed.');
        }

        currentTeam = data.team;
        currentDomain = data.domainInfo;
        authCredentials = { email, password };

        try {
          const authStr = JSON.stringify({ email, password });
          sessionStorage.setItem('infinity_leader_auth', authStr);
          localStorage.setItem('infinity_leader_auth', authStr);
        } catch (e) { }

        renderDashboard();
        return true;
      } catch (err) {
        if (!isSilent) {
          loginErr.textContent = err.message;
          loginErr.style.display = 'block';
        } else {
          try {
            sessionStorage.removeItem('infinity_leader_auth');
            localStorage.removeItem('infinity_leader_auth');
          } catch (e) { }
        }
        return false;
      }
    }

    btnRefresh.addEventListener('click', async () => {
      btnRefresh.classList.add('spinning');
      try {
        let creds = authCredentials;
        if (!creds.email || !creds.password) {
          try {
            const raw = sessionStorage.getItem('infinity_leader_auth') || localStorage.getItem('infinity_leader_auth');
            if (raw) creds = JSON.parse(raw);
          } catch (e) { }
        }

        if (creds.email && creds.password) {
          await doLeaderLogin(creds.email, creds.password, true);
        } else {
          window.location.reload();
        }
      } catch (err) {
        console.error('Leader portal refresh failed:', err);
      } finally {
        setTimeout(() => {
          btnRefresh.classList.remove('spinning');
        }, 500);
      }
    });

    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('txt-email').value.trim();
      const password = document.getElementById('txt-password').value;
      await doLeaderLogin(email, password, false);
    });

    btnLogout.addEventListener('click', () => {
      try {
        sessionStorage.removeItem('infinity_leader_auth');
        localStorage.removeItem('infinity_leader_auth');
      } catch (e) { }
      currentTeam = null;
      currentDomain = null;
      authCredentials = { email: '', password: '' };
      secDash.style.display = 'none';
      secLogin.style.display = 'block';
      btnLogout.style.display = 'none';
    });

    // Auto-restore leader session if browser is refreshed (F5 / reload)
    try {
      const savedLeader = sessionStorage.getItem('infinity_leader_auth') || localStorage.getItem('infinity_leader_auth');
      if (savedLeader) {
        const creds = JSON.parse(savedLeader);
        if (creds.email && creds.password) {
          secLogin.style.display = 'none';
          doLeaderLogin(creds.email, creds.password, true).then(ok => {
            if (!ok) secLogin.style.display = 'block';
          });
        }
      }
    } catch (e) {
      secLogin.style.display = 'block';
    }

    function renderDashboard() {
      secLogin.style.display = 'none';
      secDash.style.display = 'block';
      btnLogout.style.display = 'inline-block';

      // Meta Header
      document.getElementById('dash-team-id').textContent = currentTeam.id;
      document.getElementById('dash-team-name').textContent = currentTeam.teamName;
      document.getElementById('dash-college').textContent = currentTeam.college;
      document.getElementById('dash-team-size').textContent = `${currentTeam.teamSize} Members`;
      document.getElementById('dash-room').textContent = currentTeam.roomAllocated || 'Lab Block 3';

      const domainName = (currentTeam.preferredDomain || 'mind').toUpperCase();
      document.getElementById('dash-domain-tag').textContent = `${domainName} STONE // ${currentDomain?.domainName || ''}`;

      // Payment Status
      const payBadge = document.getElementById('dash-payment-badge');
      if (currentTeam.payment?.status === 'verified') {
        payBadge.innerHTML = `<div class="status-badge status-verified">✓ PAYMENT VERIFIED (UTR: ${currentTeam.payment.utr})</div>`;
      } else {
        payBadge.innerHTML = `<div class="status-badge status-pending">⏳ PAYMENT UNDER VERIFICATION (UTR: ${currentTeam.payment?.utr || 'N/A'})</div>`;
      }

      // Review Statuses
      updateStatusBadge('status-r1', currentTeam.reviews?.r1?.attended);
      updateStatusBadge('status-r2', currentTeam.reviews?.r2?.attended);
      updateStatusBadge('status-r3', currentTeam.reviews?.r3?.attended);

      // Food Statuses
      updateStatusBadge('food-highTea', currentTeam.food?.highTea?.collected);
      updateStatusBadge('food-dinner', currentTeam.food?.dinner?.collected);
      updateStatusBadge('food-midnightFuel', currentTeam.food?.midnightFuel?.collected);
      updateStatusBadge('food-breakfast', currentTeam.food?.breakfast?.collected);
      updateStatusBadge('food-lunch', currentTeam.food?.lunch?.collected);

      // Members Roster
      const rosterList = document.getElementById('roster-list');
      rosterList.innerHTML = `
        <div class="member-row">
          <div>
            <strong>${currentTeam.leader?.name || 'Leader'}</strong>
            <div style="font-size:0.7rem; color:#999;">${currentTeam.leader?.email} • ${currentTeam.leader?.phone}</div>
          </div>
          <span class="m-role">TEAM LEADER</span>
        </div>
      `;
      (currentTeam.members || []).forEach((m, idx) => {
        rosterList.innerHTML += `
          <div class="member-row">
            <div>
              <strong>${m.name || 'Member ' + (idx + 2)}</strong>
              <div style="font-size:0.7rem; color:#999;">${m.email} • ${m.phone}</div>
            </div>
            <span class="m-role">MEMBER 0${idx + 2}</span>
          </div>
        `;
      });

      // Problem Statements
      renderProblemStatements();
    }

    function updateStatusBadge(elemId, isDone) {
      const el = document.getElementById(elemId);
      if (!el) return;
      if (isDone) {
        el.className = 'badge-check badge-done';
        el.textContent = 'RECEIVED / ATTENDED';
      } else {
        el.className = 'badge-check badge-wait';
        el.textContent = 'PENDING';
      }
    }

    function renderProblemStatements() {
      const psContainer = document.getElementById('ps-container');
      const psStatusPill = document.getElementById('ps-status-pill');

      // Check if problem statements are unlocked by organizers
      const isReleased = currentDomain?.isPsReleased;

      if (!isReleased) {
        psStatusPill.textContent = 'RELEASE STATUS: LOCKED';
        psStatusPill.style.color = '#ffd000';
        psContainer.innerHTML = `
          <div class="ps-locked-box">
            <div class="lock-icon">🔒</div>
            <h4 class="lock-title">PROBLEM STATEMENTS LOCKED</h4>
            <p class="lock-sub">
              Classified problem statements for the <strong>${currentDomain?.domainName || ''}</strong> domain will be unlocked by the organizer command post 1 to 2 days prior to hackathon kickoff.
            </p>
          </div>
        `;
        return;
      }

      psStatusPill.textContent = 'RELEASE STATUS: UNLOCKED';
      psStatusPill.style.color = '#00ff88';

      const statements = currentDomain.problemStatements || [];
      if (statements.length === 0) {
        psContainer.innerHTML = `<p style="color:#aaa; font-size:0.85rem;">No problem statements uploaded yet for this domain.</p>`;
        return;
      }

      let html = '';
      statements.forEach(ps => {
        const isSelected = currentTeam.selectedProblemStatement?.id === ps.id;
        html += `
          <div class="ps-card ${isSelected ? 'selected' : ''}">
            <div class="ps-meta-row">
              <span class="ps-code">${ps.code}</span>
              <span class="ps-diff">${ps.difficulty}</span>
            </div>
            <h4 class="ps-title">${ps.title}</h4>
            <p class="ps-desc">${ps.description}</p>
            <button class="btn-select-ps ${isSelected ? 'active' : ''}" data-ps-id="${ps.id}">
              ${isSelected ? '✓ CHOSEN PROBLEM STATEMENT' : 'SELECT THIS STATEMENT'}
            </button>
          </div>
        `;
      });
      psContainer.innerHTML = html;

      // Bind selection buttons
      psContainer.querySelectorAll('.btn-select-ps').forEach(btn => {
        btn.addEventListener('click', async () => {
          const psId = btn.getAttribute('data-ps-id');
          btn.textContent = 'Locking selection...';

          try {
            const res = await fetch('/api/teams/update-selection', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: authCredentials.email,
                password: authCredentials.password,
                problemStatementId: psId,
              }),
            });
            const data = await res.json();
            if (data.success) {
              currentTeam = data.team;
              renderProblemStatements();
            }
          } catch (e) {
            alert('Error selecting problem statement: ' + e.message);
          }
        });
      });
    }