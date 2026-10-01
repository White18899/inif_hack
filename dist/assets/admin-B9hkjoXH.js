import"./modulepreload-polyfill-B5Qt9EMX.js";let u=[],v=[],R="",l=null;const L=document.getElementById("sec-login"),k=document.getElementById("sec-dashboard"),M=document.getElementById("form-admin-login"),B=document.getElementById("login-err"),$=document.getElementById("btn-logout"),C=document.getElementById("btn-refresh");C.addEventListener("click",async()=>{C.classList.add("spinning");try{k.style.display!=="none"?await U():window.location.reload()}catch(o){console.error("Admin refresh failed:",o)}finally{setTimeout(()=>{C.classList.remove("spinning")},500)}});const w=document.getElementById("admin-tbody"),q=document.getElementById("admin-search"),N=document.getElementById("modal-edit-team"),F=document.getElementById("btn-close-edit"),H=document.getElementById("form-edit-team"),j=document.getElementById("modal-ps-mgr"),_=document.getElementById("btn-open-ps-mgr"),V=document.getElementById("btn-close-ps-mgr"),b=document.getElementById("ps-mgr-domains-list");async function D(o,r=!1){!r&&B&&(B.style.display="none");try{const t=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:(o||"").trim()})}),e=await t.json();if(!t.ok||!e.success)throw new Error(e.error||"Invalid administrator passphrase.");return sessionStorage.setItem("infinity_admin_auth",JSON.stringify({password:o})),L&&(L.style.display="none"),k&&(k.style.display="block"),$&&($.style.display="inline-block"),await U(),!0}catch(t){return!r&&B?(B.textContent=t.message,B.style.display="block"):sessionStorage.removeItem("infinity_admin_auth"),!1}}M&&M.addEventListener("submit",async o=>{var t;o.preventDefault(),o.stopPropagation();const r=((t=document.getElementById("txt-passphrase"))==null?void 0:t.value)||"";await D(r,!1)});const P=document.getElementById("btn-do-login");P&&P.addEventListener("click",async o=>{var t;o.preventDefault();const r=((t=document.getElementById("txt-passphrase"))==null?void 0:t.value)||"";await D(r,!1)});$&&$.addEventListener("click",()=>{sessionStorage.removeItem("infinity_admin_auth"),k&&(k.style.display="none"),L&&(L.style.display="block"),$.style.display="none"});const O=sessionStorage.getItem("infinity_admin_auth");if(O)try{const o=JSON.parse(O);o.password&&D(o.password,!0)}catch{}async function U(){try{const[o,r]=await Promise.all([fetch("/api/admin/teams"),fetch("/api/domains")]),t=await o.json(),e=await r.json();u=t.teams||[],v=e.domains||[],h(),S()}catch(o){console.error("Error loading admin data:",o)}}function S(){document.getElementById("kpi-total-teams").textContent=u.length;let o=0,r=0,t=0;u.forEach(e=>{var i,s;const n=e.teamSize||4;t+=n;const a=((i=e.payment)==null?void 0:i.amount)||n*349;o+=a,((s=e.payment)==null?void 0:s.status)==="verified"&&r++}),document.getElementById("kpi-total-fees").textContent=`₹${o.toLocaleString("en-IN")}`,document.getElementById("kpi-verified-payments").textContent=r,document.getElementById("kpi-total-hackers").textContent=t}function h(){const o=R.toLowerCase(),r=u.filter(e=>{var n,a;return!o||e.teamName.toLowerCase().includes(o)||e.id.toLowerCase().includes(o)||e.college&&e.college.toLowerCase().includes(o)||((n=e.leader)==null?void 0:n.email)&&e.leader.email.toLowerCase().includes(o)||((a=e.payment)==null?void 0:a.utr)&&e.payment.utr.toLowerCase().includes(o)});if(r.length===0){const e=u.length===0?"No squads registered yet. The system is clean and ready for live registrations.":"No teams match the search criteria.";w.innerHTML=`<tr><td colspan="8" style="text-align:center; padding:45px 20px; color:#888; font-family:'JetBrains Mono', monospace; font-size:0.8rem; letter-spacing:0.04em;">${e}</td></tr>`;return}let t="";r.forEach(e=>{var E;const n=e.payment||{},a=e.food||{},i=e.reviews||{},s=e.scores||{};let d=0;["highTea","dinner","midnightFuel","breakfast","lunch"].forEach(y=>{var g;(g=a[y])!=null&&g.collected&&d++});let m=0;["r1","r2","r3"].forEach(y=>{var g;(g=i[y])!=null&&g.attended&&m++});const c=n.status||"pending";let p='<span class="badge-status badge-pending">PENDING</span>';c==="verified"&&(p='<span class="badge-status badge-verified">VERIFIED</span>'),c==="rejected"&&(p='<span class="badge-status badge-rejected">REJECTED</span>'),t+=`
          <tr>
            <td>
              <strong>${e.teamName}</strong>
              <div style="font-family:'JetBrains Mono'; font-size:0.7rem; color:var(--red);">${e.id}</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">${e.college}</div>
            </td>
            <td>
              <span class="portal-badge font-mono">${(e.preferredDomain||"MIND").toUpperCase()}</span>
              <div style="font-size:0.68rem; color:#888;">${e.teamSize||4} Members</div>
            </td>
            <td>
              ${p}
              <div style="font-size:0.7rem; color:#aaa; margin-top:2px;">₹${n.amount||(e.teamSize||4)*349}</div>
            </td>
            <td>
              <div class="font-mono" style="font-size:0.72rem;">${n.utr||"N/A"}</div>
              <div style="font-size:0.68rem; color:#888;">Phone: ${n.phone||((E=e.leader)==null?void 0:E.phone)||"N/A"}</div>
              ${n.screenshotUrl?`<a href="${n.screenshotUrl}" target="_blank" style="font-size:0.68rem; color:var(--cyan);">View Receipt ↗</a>`:""}
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${d} / 5</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${m} / 3</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:800; color:var(--green); font-size:0.95rem;">${s.total||0}</span>
            </td>
            <td>
              <div class="tbl-actions">
                <select class="sel-quick-status ${c}" data-status-id="${e.id}" title="Select payment verification status">
                  <option value="verified" ${c==="verified"?"selected":""}>✓ VERIFIED</option>
                  <option value="pending" ${c==="pending"?"selected":""}>⏳ PENDING</option>
                  <option value="rejected" ${c==="rejected"?"selected":""}>✕ REJECTED</option>
                </select>
                <button class="btn-tbl-edit" data-edit-id="${e.id}">EDIT</button>
                <button class="btn-tbl-del" data-del-id="${e.id}">DEL</button>
              </div>
            </td>
          </tr>
        `}),w.innerHTML=t,w.querySelectorAll(".sel-quick-status").forEach(e=>{e.addEventListener("change",async n=>{const a=e.getAttribute("data-status-id"),i=u.find(d=>d.id===a);if(!i)return;const s=n.target.value;e.disabled=!0;try{const m=await(await fetch(`/api/admin/teams/${a}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({payment:{...i.payment,status:s}})})).json();if(m.success){const c=u.findIndex(p=>p.id===a);c>=0&&(u[c]=m.team),h(),S()}else alert("Failed to update status: "+(m.error||"Unknown error")),h()}catch(d){alert("Error updating payment status: "+d.message),h()}})}),w.querySelectorAll(".btn-tbl-edit").forEach(e=>{e.addEventListener("click",()=>{G(e.getAttribute("data-edit-id"))})}),w.querySelectorAll(".btn-tbl-del").forEach(e=>{e.addEventListener("click",async()=>{const n=e.getAttribute("data-del-id");if(confirm(`Are you sure you want to completely delete team ${n}?`))try{(await(await fetch(`/api/admin/teams/${n}`,{method:"DELETE"})).json()).success&&(u=u.filter(s=>s.id!==n),h(),S())}catch(a){alert("Error deleting squad: "+a.message)}})})}q.addEventListener("input",o=>{R=o.target.value,h()});function G(o){var s,d,m,c,p,E,y,g,T,A,f;if(l=u.find(I=>I.id===o),!l)return;document.getElementById("edit-team-id").textContent=l.id,document.getElementById("edt-team-name").value=l.teamName||"",document.getElementById("edt-college").value=l.college||"",document.getElementById("edt-room").value=l.roomAllocated||"";const r=(l.preferredDomain||"intelligence").toLowerCase(),t={mind:"intelligence",space:"connectivity",reality:"digital",power:"automation",time:"analytics",soul:"impact",intelligence:"intelligence",connectivity:"connectivity",digital:"digital",automation:"automation",analytics:"analytics",impact:"impact"};document.getElementById("edt-domain").value=t[r]||"intelligence",document.getElementById("edt-size").value=l.teamSize||4,document.getElementById("edt-password").value=l.teamPassword||"",document.getElementById("edt-leader-name").value=((s=l.leader)==null?void 0:s.name)||"",document.getElementById("edt-leader-email").value=((d=l.leader)==null?void 0:d.email)||"",document.getElementById("edt-leader-phone").value=((m=l.leader)==null?void 0:m.phone)||"";const e=l.payment||{};document.getElementById("edt-pay-status").value=e.status||"pending",document.getElementById("edt-pay-utr").value=e.utr||"",document.getElementById("edt-pay-amount").value=e.amount||(l.teamSize||4)*349;const n=l.food||{};document.getElementById("edt-food-ht").checked=!!((c=n.highTea)!=null&&c.collected),document.getElementById("edt-food-din").checked=!!((p=n.dinner)!=null&&p.collected),document.getElementById("edt-food-mid").checked=!!((E=n.midnightFuel)!=null&&E.collected),document.getElementById("edt-food-bf").checked=!!((y=n.breakfast)!=null&&y.collected),document.getElementById("edt-food-ln").checked=!!((g=n.lunch)!=null&&g.collected);const a=l.reviews||{};document.getElementById("edt-rev-r1").checked=!!((T=a.r1)!=null&&T.attended),document.getElementById("edt-rev-r2").checked=!!((A=a.r2)!=null&&A.attended),document.getElementById("edt-rev-r3").checked=!!((f=a.r3)!=null&&f.attended);const i=l.scores||{};document.getElementById("edt-score-total").value=i.total||0,document.getElementById("edt-score-remarks").value=i.remarks||"",N.classList.add("is-open")}F.addEventListener("click",()=>N.classList.remove("is-open"));H.addEventListener("submit",async o=>{if(o.preventDefault(),!l)return;const r={teamName:document.getElementById("edt-team-name").value.trim(),college:document.getElementById("edt-college").value.trim(),roomAllocated:document.getElementById("edt-room").value.trim(),preferredDomain:document.getElementById("edt-domain").value,teamSize:parseInt(document.getElementById("edt-size").value,10)||4,teamPassword:document.getElementById("edt-password").value,leader:{name:document.getElementById("edt-leader-name").value.trim(),email:document.getElementById("edt-leader-email").value.trim(),phone:document.getElementById("edt-leader-phone").value.trim()},payment:{...l.payment,status:document.getElementById("edt-pay-status").value,utr:document.getElementById("edt-pay-utr").value.trim(),amount:parseFloat(document.getElementById("edt-pay-amount").value)||0},food:{highTea:{collected:document.getElementById("edt-food-ht").checked},dinner:{collected:document.getElementById("edt-food-din").checked},midnightFuel:{collected:document.getElementById("edt-food-mid").checked},breakfast:{collected:document.getElementById("edt-food-bf").checked},lunch:{collected:document.getElementById("edt-food-ln").checked}},reviews:{r1:{attended:document.getElementById("edt-rev-r1").checked},r2:{attended:document.getElementById("edt-rev-r2").checked},r3:{attended:document.getElementById("edt-rev-r3").checked}},scores:{...l.scores,total:parseFloat(document.getElementById("edt-score-total").value)||0,remarks:document.getElementById("edt-score-remarks").value.trim()}};try{const e=await(await fetch(`/api/admin/teams/${l.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json();if(e.success){const n=u.findIndex(a=>a.id===l.id);n>=0&&(u[n]=e.team),N.classList.remove("is-open"),h(),S()}}catch(t){alert("Error updating team: "+t.message)}});_.addEventListener("click",()=>{x(),j.classList.add("is-open")});V.addEventListener("click",()=>j.classList.remove("is-open"));function x(){const o={intelligence:"INTEL",connectivity:"CONN",digital:"DIG",automation:"AUTO",analytics:"ANA",impact:"IMP",mind:"INTEL",space:"CONN",reality:"DIG",power:"AUTO",time:"ANA",soul:"IMP"};let r="";v.forEach(t=>{const e=!!t.isPsReleased,n=t.problemStatements||[],i=`PS-${o[t.id]||t.id.substring(0,4).toUpperCase()}-${String(n.length+1).padStart(2,"0")}`,s=t.accentHex||"#ffd000";r+=`
          <div class="field-card" style="border-left: 4px solid ${s}; margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:12px;">
              <div>
                <h4 style="font-size:1.15rem; color:#fff; display:flex; align-items:center; gap:8px;">
                  <span>${t.domainName}</span>
                  <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:${s}; font-weight:700;">(${t.stoneName})</span>
                </h4>
                <div style="font-size:0.75rem; color:var(--text-muted);">${t.tagline||""}</div>
              </div>

              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <button class="btn-toggle-add-ps" data-domain-id="${t.id}" style="padding:6px 12px; border-radius:6px; background:rgba(255,255,255,0.06); border:1px solid ${s}50; color:${s}; font-family:'JetBrains Mono',monospace; font-size:0.72rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                  + ADD STATEMENT
                </button>
                <label class="switch-wrap">
                  <input type="checkbox" class="toggle-release-ps" data-domain-id="${t.id}" ${e?"checked":""}>
                  <span style="font-family:'JetBrains Mono'; font-size:0.72rem; font-weight:700; color:${e?"var(--green)":"var(--gold)"};">
                    ${e?"RELEASED (LIVE)":"LOCKED (HIDDEN)"}
                  </span>
                </label>
              </div>
            </div>

            <!-- Expandable Add Problem Statement Panel -->
            <div id="add-panel-${t.id}" style="display:none; margin: 12px 0 16px 0; padding:16px; border-radius:10px; background:rgba(6,6,12,0.95); border:1px solid ${s}60; box-shadow:0 8px 25px rgba(0,0,0,0.6);">
              <div style="font-family:'Syne',sans-serif; font-size:0.86rem; font-weight:700; color:${s}; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>✦</span> NEW PROBLEM STATEMENT // ${t.stoneName.toUpperCase()} (${t.domainName})
              </div>

              <div class="edit-grid-3" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CHALLENGE CODE</label>
                  <input type="text" id="new-code-${t.id}" class="form-input font-mono" value="${i}" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">PROBLEM TITLE</label>
                  <input type="text" id="new-title-${t.id}" class="form-input" placeholder="e.g. Distributed Telemetry Mesh Engine" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DIFFICULTY</label>
                  <select id="new-diff-${t.id}" class="form-input custom-select" style="padding:8px 10px; font-size:0.82rem;">
                    <option value="Advanced" selected>Advanced</option>
                    <option value="Hardcore">Hardcore</option>
                    <option value="Intermediate">Intermediate</option>
                  </select>
                </div>
              </div>

              <div class="edit-grid-2" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CATEGORY / TRACK</label>
                  <input type="text" id="new-cat-${t.id}" class="form-input" value="${t.domainName} & Systems" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DELIVERABLES (COMMA-SEPARATED)</label>
                  <input type="text" id="new-deliv-${t.id}" class="form-input" placeholder="Interactive UI visualizer, Core architecture daemon, Benchmark testbench" style="padding:8px 10px; font-size:0.82rem;">
                </div>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label class="form-label">PROBLEM STATEMENT DESCRIPTION</label>
                <textarea id="new-desc-${t.id}" class="form-input" rows="3" placeholder="Provide background context, technical specifications, and key engineering expectations..." style="padding:8px 10px; font-size:0.82rem;"></textarea>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
                <button class="btn-cancel-add-ps" data-domain-id="${t.id}" style="padding:7px 14px; border-radius:6px; background:transparent; border:1px solid var(--border-subtle); color:var(--text-muted); font-size:0.75rem; cursor:pointer;">
                  Cancel
                </button>
                <button class="btn-save-new-ps" data-domain-id="${t.id}" style="padding:7px 18px; border-radius:6px; background:${s}; color:#000; font-family:'Syne',sans-serif; font-size:0.8rem; font-weight:800; border:none; cursor:pointer; box-shadow:0 0 12px ${s}40;">
                  SAVE STATEMENT TO ${t.stoneName.toUpperCase()}
                </button>
              </div>
            </div>

            <!-- Active Statements List -->
            <div style="margin-top:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.75rem; color:#bbb; text-transform:uppercase;">
                  Active Statements (${n.length}):
                </strong>
              </div>

              ${n.length===0?`
                <div style="padding:14px; text-align:center; font-size:0.75rem; color:#777; background:rgba(255,255,255,0.01); border-radius:6px; border:1px dashed rgba(255,255,255,0.08);">
                  No problem statements for this stone yet. Click <strong>+ ADD STATEMENT</strong> above to create one.
                </div>
              `:`
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${n.map((d,m)=>`
                    <div style="padding:10px 14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:8px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                      <div style="flex:1;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                          <span style="color:${s}; font-family:'JetBrains Mono'; font-weight:700; font-size:0.75rem;">${d.code}:</span>
                          <strong style="font-size:0.82rem; color:#fff;">${d.title}</strong>
                          <span style="font-size:0.65rem; padding:2px 6px; border-radius:4px; background:rgba(255,255,255,0.06); color:#aaa; font-family:'JetBrains Mono';">
                            ${d.difficulty||"Advanced"}
                          </span>
                        </div>
                        <div style="font-size:0.74rem; color:#888; line-height:1.4;">${d.description}</div>
                        ${d.deliverables&&d.deliverables.length>0?`
                          <div style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap;">
                            ${d.deliverables.map(c=>`
                              <span style="font-size:0.65rem; padding:1px 6px; border-radius:3px; background:rgba(255,255,255,0.04); color:#aaa;">✦ ${c}</span>
                            `).join("")}
                          </div>
                        `:""}
                      </div>

                      <button class="btn-del-ps" data-domain-id="${t.id}" data-ps-id="${d.id||d.code}" title="Remove this problem statement" style="padding:4px 8px; border-radius:4px; background:rgba(255,42,75,0.1); border:1px solid var(--red); color:var(--red); font-size:0.68rem; cursor:pointer; white-space:nowrap;">
                        ✕ REMOVE
                      </button>
                    </div>
                  `).join("")}
                </div>
              `}
            </div>
          </div>
        `}),b.innerHTML=r,b.querySelectorAll(".btn-toggle-add-ps").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-domain-id"),n=document.getElementById(`add-panel-${e}`);if(n){const a=n.style.display!=="none";n.style.display=a?"none":"block",t.textContent=a?"+ ADD STATEMENT":"✕ CLOSE FORM"}})}),b.querySelectorAll(".btn-cancel-add-ps").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-domain-id"),n=document.getElementById(`add-panel-${e}`),a=b.querySelector(`.btn-toggle-add-ps[data-domain-id="${e}"]`);n&&(n.style.display="none"),a&&(a.textContent="+ ADD STATEMENT")})}),b.querySelectorAll(".btn-save-new-ps").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-domain-id"),n=v.find(f=>f.id===e);if(!n)return;const a=document.getElementById(`new-code-${e}`),i=document.getElementById(`new-title-${e}`),s=document.getElementById(`new-cat-${e}`),d=document.getElementById(`new-diff-${e}`),m=document.getElementById(`new-desc-${e}`),c=document.getElementById(`new-deliv-${e}`),p=a?a.value.trim().toUpperCase():"",E=i?i.value.trim():"",y=m?m.value.trim():"";if(!p||!E||!y){alert("Please provide at least the Problem Code, Title, and Description.");return}const g=c?c.value.trim():"",T=g?g.split(",").map(f=>f.trim()).filter(Boolean):["Architecture document and testbench report","Interactive demonstration visualizer"],A={id:p.toLowerCase().replace(/[^a-z0-9]/g,"-"),code:p,title:E,category:s&&s.value.trim()||n.domainName,difficulty:d&&d.value||"Advanced",description:y,deliverables:T};n.problemStatements||(n.problemStatements=[]),n.problemStatements.push(A),t.disabled=!0,t.textContent="SAVING TO R2...";try{const I=await(await fetch("/api/admin/domains",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();if(I.success){const z=v.findIndex(J=>J.id===e);z>=0&&(v[z]=I.domain),x()}else alert("Failed to save statement: "+(I.error||"Unknown error")),x()}catch(f){alert("Error saving statement: "+f.message),x()}})}),b.querySelectorAll(".btn-del-ps").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-domain-id"),n=t.getAttribute("data-ps-id"),a=v.find(d=>d.id===e);if(!a)return;const i=(a.problemStatements||[]).find(d=>d.id===n||d.code===n),s=i?i.code:n;if(confirm(`Are you sure you want to remove problem statement "${s}" from ${a.stoneName}?`)){a.problemStatements=(a.problemStatements||[]).filter(d=>d.id!==n&&d.code!==n);try{const m=await(await fetch("/api/admin/domains",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();if(m.success){const c=v.findIndex(p=>p.id===e);c>=0&&(v[c]=m.domain),x()}}catch(d){alert("Error removing statement: "+d.message)}}})}),b.querySelectorAll(".toggle-release-ps").forEach(t=>{t.addEventListener("change",async()=>{const e=t.getAttribute("data-domain-id"),n=t.checked,a=v.find(i=>i.id===e);if(a){a.isPsReleased=n;try{await fetch("/api/admin/domains",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),x()}catch(i){alert("Error updating domain status: "+i.message)}}})})}
