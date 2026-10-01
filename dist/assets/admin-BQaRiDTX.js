import"./modulepreload-polyfill-B5Qt9EMX.js";let b=[],C=[],ie="",m=null;function i(n){return n==null?"":String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ee(n){if(!n||typeof n!="string")return"";const o=n.trim();return/^https?:\/\/[^\s"'<>]+$/i.test(o)||/^\/uploads\/[a-zA-Z0-9_\-\.]+$/i.test(o)?i(o):""}function de(){try{const n=sessionStorage.getItem("infinity_admin_auth");if(!n)return"";const o=JSON.parse(n);return o.token||(typeof o=="string"?o:"")}catch{return""}}function h(n={}){const o=de(),t={...n};return o&&(t.Authorization=`Bearer ${o}`),t}const S=document.getElementById("sec-login"),k=document.getElementById("sec-dashboard"),te=document.getElementById("form-admin-login"),A=document.getElementById("login-err"),$=document.getElementById("btn-logout"),Y=document.getElementById("btn-refresh");Y.addEventListener("click",async()=>{Y.classList.add("spinning");try{k.style.display!=="none"?await X():window.location.reload()}catch(n){console.error("Admin refresh failed:",n)}finally{setTimeout(()=>{Y.classList.remove("spinning")},500)}});const J=document.getElementById("admin-tbody"),ce=document.getElementById("admin-search"),K=document.getElementById("modal-edit-team"),me=document.getElementById("btn-close-edit"),pe=document.getElementById("form-edit-team"),re=document.getElementById("modal-ps-mgr"),ue=document.getElementById("btn-open-ps-mgr"),fe=document.getElementById("btn-close-ps-mgr"),R=document.getElementById("ps-mgr-domains-list");async function Z(n,o=!1){!o&&A&&(A.style.display="none");try{const t=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:(n||"").trim()})}),e=await t.json();if(!t.ok||!e.success)throw new Error(e.error||"Invalid administrator passphrase.");return sessionStorage.setItem("infinity_admin_auth",JSON.stringify({token:e.token})),S&&(S.style.display="none"),k&&(k.style.display="block"),$&&($.style.display="inline-block"),await X(),!0}catch(t){return!o&&A?(A.textContent=t.message,A.style.display="block"):sessionStorage.removeItem("infinity_admin_auth"),!1}}te&&te.addEventListener("submit",async n=>{var t;n.preventDefault(),n.stopPropagation();const o=((t=document.getElementById("txt-passphrase"))==null?void 0:t.value)||"";await Z(o,!1)});const ne=document.getElementById("btn-do-login");ne&&ne.addEventListener("click",async n=>{var t;n.preventDefault();const o=((t=document.getElementById("txt-passphrase"))==null?void 0:t.value)||"";await Z(o,!1)});$&&$.addEventListener("click",()=>{sessionStorage.removeItem("infinity_admin_auth"),k&&(k.style.display="none"),S&&(S.style.display="block"),$.style.display="none"});const ae=sessionStorage.getItem("infinity_admin_auth");if(ae)try{const n=JSON.parse(ae);n.token?(S&&(S.style.display="none"),k&&(k.style.display="block"),$&&($.style.display="inline-block"),X()):n.password&&Z(n.password,!0)}catch{}async function X(){try{const[n,o]=await Promise.all([fetch("/api/admin/teams",{headers:h()}),fetch("/api/domains")]);if(n.status===401){sessionStorage.removeItem("infinity_admin_auth"),k&&(k.style.display="none"),S&&(S.style.display="block"),$&&($.style.display="none"),A&&(A.textContent="Session expired or unauthorized. Please log in again.",A.style.display="block");return}const t=await n.json(),e=await o.json();b=t.teams||[],C=e.domains||[];const a=document.querySelector(".btn-excel");if(a){const s=de();a.href=`/api/admin/export${s?"?token="+encodeURIComponent(s):""}`}M(),W()}catch(n){console.error("Error loading admin data:",n)}}function W(){document.getElementById("kpi-total-teams").textContent=b.length;let n=0,o=0,t=0;b.forEach(e=>{var c,l;const a=e.teamSize||4;t+=a;const s=((c=e.payment)==null?void 0:c.amount)||a*349;n+=s,((l=e.payment)==null?void 0:l.status)==="verified"&&o++}),document.getElementById("kpi-total-fees").textContent=`₹${n.toLocaleString("en-IN")}`,document.getElementById("kpi-verified-payments").textContent=o,document.getElementById("kpi-total-hackers").textContent=t}function M(){const n=ie.toLowerCase(),o=b.filter(e=>{var a,s;return!n||e.teamName.toLowerCase().includes(n)||e.id.toLowerCase().includes(n)||e.college&&e.college.toLowerCase().includes(n)||((a=e.leader)==null?void 0:a.email)&&e.leader.email.toLowerCase().includes(n)||((s=e.payment)==null?void 0:s.utr)&&e.payment.utr.toLowerCase().includes(n)});if(o.length===0){const e=b.length===0?"No squads registered yet. The system is clean and ready for live registrations.":"No teams match the search criteria.";J.innerHTML=`<tr><td colspan="8" style="text-align:center; padding:45px 20px; color:#888; font-family:'JetBrains Mono', monospace; font-size:0.8rem; letter-spacing:0.04em;">${e}</td></tr>`;return}let t="";o.forEach(e=>{var L;const a=e.payment||{},s=e.food||{},c=e.reviews||{},l=e.scores||{};let d=0;["highTea","dinner","midnightFuel","breakfast","lunch"].forEach(w=>{var E;(E=s[w])!=null&&E.collected&&d++});let f=0;["r1","r2","r3"].forEach(w=>{var E;(E=c[w])!=null&&E.attended&&f++});const p=a.status||"pending";let v='<span class="badge-status badge-pending">PENDING</span>';p==="verified"&&(v='<span class="badge-status badge-verified">VERIFIED</span>'),p==="rejected"&&(v='<span class="badge-status badge-rejected">REJECTED</span>'),t+=`
          <tr>
            <td>
              <strong>${i(e.teamName)}</strong>
              <div style="font-family:'JetBrains Mono'; font-size:0.7rem; color:var(--red);">${i(e.id)}</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">${i(e.college)}</div>
            </td>
            <td>
              <span class="portal-badge font-mono">${i((e.preferredDomain||"MIND").toUpperCase())}</span>
              <div style="font-size:0.68rem; color:#888;">${i(e.teamSize||4)} Members</div>
            </td>
            <td>
              ${v}
              <div style="font-size:0.7rem; color:#aaa; margin-top:2px;">₹${a.amount||(e.teamSize||4)*349}</div>
            </td>
            <td>
              <div class="font-mono" style="font-size:0.72rem;">${i(a.utr||"N/A")}</div>
              <div style="font-size:0.68rem; color:#888;">Phone: ${i(a.phone||((L=e.leader)==null?void 0:L.phone)||"N/A")}</div>
              ${ee(a.screenshotUrl)?`<a href="${ee(a.screenshotUrl)}" target="_blank" rel="noopener noreferrer" style="font-size:0.68rem; color:var(--cyan);">View Receipt ↗</a>`:a.screenshotUrl?'<span style="font-size:0.68rem; color:#888;">Receipt Attached</span>':""}
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${d} / 5</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${f} / 3</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:800; color:var(--green); font-size:0.95rem;">${l.total||0}</span>
            </td>
            <td>
              <div class="tbl-actions">
                <select class="sel-quick-status ${p}" data-status-id="${i(e.id)}" title="Select payment verification status">
                  <option value="verified" ${p==="verified"?"selected":""}>✓ VERIFIED</option>
                  <option value="pending" ${p==="pending"?"selected":""}>⏳ PENDING</option>
                  <option value="rejected" ${p==="rejected"?"selected":""}>✕ REJECTED</option>
                </select>
                <button class="btn-tbl-edit" data-edit-id="${i(e.id)}">EDIT</button>
                <button class="btn-tbl-del" data-del-id="${i(e.id)}">DEL</button>
              </div>
            </td>
          </tr>
        `}),J.innerHTML=t,J.querySelectorAll(".sel-quick-status").forEach(e=>{e.addEventListener("change",async a=>{const s=e.getAttribute("data-status-id"),c=b.find(d=>d.id===s);if(!c)return;const l=a.target.value;e.disabled=!0;try{const f=await(await fetch(`/api/admin/teams/${s}`,{method:"PUT",headers:h({"Content-Type":"application/json"}),body:JSON.stringify({payment:{...c.payment,status:l}})})).json();if(f.success){const p=b.findIndex(v=>v.id===s);p>=0&&(b[p]=f.team),M(),W()}else alert("Failed to update status: "+(f.error||"Unknown error")),M()}catch(d){alert("Error updating payment status: "+d.message),M()}})}),J.querySelectorAll(".btn-tbl-edit").forEach(e=>{e.addEventListener("click",()=>{ge(e.getAttribute("data-edit-id"))})}),J.querySelectorAll(".btn-tbl-del").forEach(e=>{e.addEventListener("click",async()=>{const a=e.getAttribute("data-del-id");if(confirm(`Are you sure you want to completely delete team ${a}?`))try{(await(await fetch(`/api/admin/teams/${a}`,{method:"DELETE",headers:h()})).json()).success&&(b=b.filter(l=>l.id!==a),M(),W())}catch(s){alert("Error deleting squad: "+s.message)}})})}ce.addEventListener("input",n=>{ie=n.target.value,M()});function ge(n){var d,f,p,v,L,w,E,G,V,B,U;if(m=b.find(_=>_.id===n),!m)return;document.getElementById("edit-team-id").textContent=m.id,document.getElementById("edt-team-name").value=m.teamName||"",document.getElementById("edt-college").value=m.college||"",document.getElementById("edt-room").value=m.roomAllocated||"";const o=(m.preferredDomain||"intelligence").toLowerCase(),t={mind:"intelligence",space:"connectivity",reality:"digital",power:"automation",time:"analytics",soul:"impact",intelligence:"intelligence",connectivity:"connectivity",digital:"digital",automation:"automation",analytics:"analytics",impact:"impact"};document.getElementById("edt-domain").value=t[o]||"intelligence",document.getElementById("edt-size").value=m.teamSize||4;const e=document.getElementById("edt-password");e&&(e.value="",e.placeholder=m.hasPassword?"•••••••• (Leave blank to keep current)":"Enter new password"),document.getElementById("edt-leader-name").value=((d=m.leader)==null?void 0:d.name)||"",document.getElementById("edt-leader-email").value=((f=m.leader)==null?void 0:f.email)||"",document.getElementById("edt-leader-phone").value=((p=m.leader)==null?void 0:p.phone)||"";const a=m.payment||{};document.getElementById("edt-pay-status").value=a.status||"pending",document.getElementById("edt-pay-utr").value=a.utr||"",document.getElementById("edt-pay-amount").value=a.amount||(m.teamSize||4)*349;const s=m.food||{};document.getElementById("edt-food-ht").checked=!!((v=s.highTea)!=null&&v.collected),document.getElementById("edt-food-din").checked=!!((L=s.dinner)!=null&&L.collected),document.getElementById("edt-food-mid").checked=!!((w=s.midnightFuel)!=null&&w.collected),document.getElementById("edt-food-bf").checked=!!((E=s.breakfast)!=null&&E.collected),document.getElementById("edt-food-ln").checked=!!((G=s.lunch)!=null&&G.collected);const c=m.reviews||{};document.getElementById("edt-rev-r1").checked=!!((V=c.r1)!=null&&V.attended),document.getElementById("edt-rev-r2").checked=!!((B=c.r2)!=null&&B.attended),document.getElementById("edt-rev-r3").checked=!!((U=c.r3)!=null&&U.attended);const l=m.scores||{};document.getElementById("edt-score-total").value=l.total||0,document.getElementById("edt-score-remarks").value=l.remarks||"",K.classList.add("is-open")}me.addEventListener("click",()=>K.classList.remove("is-open"));pe.addEventListener("submit",async n=>{var e,a;if(n.preventDefault(),!m)return;const o={teamName:document.getElementById("edt-team-name").value.trim(),college:document.getElementById("edt-college").value.trim(),roomAllocated:document.getElementById("edt-room").value.trim(),preferredDomain:document.getElementById("edt-domain").value,teamSize:parseInt(document.getElementById("edt-size").value,10)||4,leader:{name:document.getElementById("edt-leader-name").value.trim(),email:document.getElementById("edt-leader-email").value.trim(),phone:document.getElementById("edt-leader-phone").value.trim()},payment:{...m.payment,status:document.getElementById("edt-pay-status").value,utr:document.getElementById("edt-pay-utr").value.trim(),amount:parseFloat(document.getElementById("edt-pay-amount").value)||0},food:{highTea:{collected:document.getElementById("edt-food-ht").checked},dinner:{collected:document.getElementById("edt-food-din").checked},midnightFuel:{collected:document.getElementById("edt-food-mid").checked},breakfast:{collected:document.getElementById("edt-food-bf").checked},lunch:{collected:document.getElementById("edt-food-ln").checked}},reviews:{r1:{attended:document.getElementById("edt-rev-r1").checked},r2:{attended:document.getElementById("edt-rev-r2").checked},r3:{attended:document.getElementById("edt-rev-r3").checked}},scores:{...m.scores,total:parseFloat(document.getElementById("edt-score-total").value)||0,remarks:document.getElementById("edt-score-remarks").value.trim()}},t=(a=(e=document.getElementById("edt-password"))==null?void 0:e.value)==null?void 0:a.trim();t&&(o.teamPassword=t);try{const c=await(await fetch(`/api/admin/teams/${m.id}`,{method:"PUT",headers:h({"Content-Type":"application/json"}),body:JSON.stringify(o)})).json();if(c.success){const l=b.findIndex(d=>d.id===m.id);l>=0&&(b[l]=c.team),K.classList.remove("is-open"),M(),W()}}catch(s){alert("Error updating team: "+s.message)}});ue.addEventListener("click",()=>{q(),re.classList.add("is-open")});fe.addEventListener("click",()=>re.classList.remove("is-open"));function q(){const n={intelligence:"INTEL",connectivity:"CONN",digital:"DIG",automation:"AUTO",analytics:"ANA",impact:"IMP",mind:"INTEL",space:"CONN",reality:"DIG",power:"AUTO",time:"ANA",soul:"IMP"};let o="";C.forEach(t=>{const e=!!t.isPsReleased,a=t.problemStatements||[],c=`PS-${n[t.id]||t.id.substring(0,4).toUpperCase()}-${String(a.length+1).padStart(2,"0")}`,l=t.accentHex||"#ffd000";o+=`
          <div class="field-card" style="border-left: 4px solid ${l}; margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:12px;">
              <div>
                <h4 style="font-size:1.15rem; color:#fff; display:flex; align-items:center; gap:8px;">
                  <span>${i(t.domainName)}</span>
                  <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:${l}; font-weight:700;">(${i(t.stoneName)})</span>
                </h4>
                <div style="font-size:0.75rem; color:var(--text-muted);">${i(t.tagline||"")}</div>
              </div>

              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <button class="btn-toggle-add-ps" data-domain-id="${i(t.id)}" style="padding:6px 12px; border-radius:6px; background:rgba(255,255,255,0.06); border:1px solid ${l}50; color:${l}; font-family:'JetBrains Mono',monospace; font-size:0.72rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                  + ADD STATEMENT
                </button>
                <label class="switch-wrap">
                  <input type="checkbox" class="toggle-release-ps" data-domain-id="${i(t.id)}" ${e?"checked":""}>
                  <span style="font-family:'JetBrains Mono'; font-size:0.72rem; font-weight:700; color:${e?"var(--green)":"var(--gold)"};">
                    ${e?"RELEASED (LIVE)":"LOCKED (HIDDEN)"}
                  </span>
                </label>
              </div>
            </div>

            <!-- Expandable Add Problem Statement Panel -->
            <div id="add-panel-${i(t.id)}" style="display:none; margin: 12px 0 16px 0; padding:16px; border-radius:10px; background:rgba(6,6,12,0.95); border:1px solid ${l}60; box-shadow:0 8px 25px rgba(0,0,0,0.6);">
              <div style="font-family:'Syne',sans-serif; font-size:0.86rem; font-weight:700; color:${l}; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>✦</span> NEW PROBLEM STATEMENT // ${i(t.stoneName.toUpperCase())} (${i(t.domainName)})
              </div>

              <div class="edit-grid-3" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CHALLENGE CODE</label>
                  <input type="text" id="new-code-${i(t.id)}" class="form-input font-mono" value="${i(c)}" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">PROBLEM TITLE</label>
                  <input type="text" id="new-title-${i(t.id)}" class="form-input" placeholder="e.g. Distributed Telemetry Mesh Engine" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DIFFICULTY</label>
                  <select id="new-diff-${i(t.id)}" class="form-input custom-select" style="padding:8px 10px; font-size:0.82rem;">
                    <option value="Advanced" selected>Advanced</option>
                    <option value="Hardcore">Hardcore</option>
                    <option value="Intermediate">Intermediate</option>
                  </select>
                </div>
              </div>

              <div class="edit-grid-2" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CATEGORY / TRACK</label>
                  <input type="text" id="new-cat-${i(t.id)}" class="form-input" value="${i(t.domainName)} & Systems" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DELIVERABLES (COMMA-SEPARATED)</label>
                  <input type="text" id="new-deliv-${i(t.id)}" class="form-input" placeholder="Interactive UI visualizer, Core architecture daemon, Benchmark testbench" style="padding:8px 10px; font-size:0.82rem;">
                </div>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label class="form-label">PROBLEM STATEMENT DESCRIPTION</label>
                <textarea id="new-desc-${i(t.id)}" class="form-input" rows="3" placeholder="Provide background context, technical specifications, and key engineering expectations..." style="padding:8px 10px; font-size:0.82rem;"></textarea>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
                <button class="btn-cancel-add-ps" data-domain-id="${i(t.id)}" style="padding:7px 14px; border-radius:6px; background:transparent; border:1px solid var(--border-subtle); color:var(--text-muted); font-size:0.75rem; cursor:pointer;">
                  Cancel
                </button>
                <button class="btn-save-new-ps" data-domain-id="${i(t.id)}" style="padding:7px 18px; border-radius:6px; background:${l}; color:#000; font-family:'Syne',sans-serif; font-size:0.8rem; font-weight:800; border:none; cursor:pointer; box-shadow:0 0 12px ${l}40;">
                  SAVE STATEMENT TO ${i(t.stoneName.toUpperCase())}
                </button>
              </div>
            </div>

            <!-- Active Statements List -->
            <div style="margin-top:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <strong style="font-size:0.75rem; color:#bbb; text-transform:uppercase;">
                  Active Statements (${a.length}):
                </strong>
              </div>

              ${a.length===0?`
                <div style="padding:14px; text-align:center; font-size:0.75rem; color:#777; background:rgba(255,255,255,0.01); border-radius:6px; border:1px dashed rgba(255,255,255,0.08);">
                  No problem statements for this stone yet. Click <strong>+ ADD STATEMENT</strong> above to create one.
                </div>
              `:`
                <div style="display:flex; flex-direction:column; gap:8px;">
                  ${a.map((d,f)=>`
                    <div style="padding:10px 14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:8px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                      <div style="flex:1;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                          <span style="color:${l}; font-family:'JetBrains Mono'; font-weight:700; font-size:0.75rem;">${i(d.code)}:</span>
                          <strong style="font-size:0.82rem; color:#fff;">${i(d.title)}</strong>
                          <span style="font-size:0.65rem; padding:2px 6px; border-radius:4px; background:rgba(255,255,255,0.06); color:#aaa; font-family:'JetBrains Mono';">
                            ${i(d.difficulty||"Advanced")}
                          </span>
                        </div>
                        <div style="font-size:0.74rem; color:#888; line-height:1.4;">${i(d.description)}</div>
                        ${d.deliverables&&d.deliverables.length>0?`
                          <div style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap;">
                            ${d.deliverables.map(p=>`
                              <span style="font-size:0.65rem; padding:1px 6px; border-radius:3px; background:rgba(255,255,255,0.04); color:#aaa;">✦ ${i(p)}</span>
                            `).join("")}
                          </div>
                        `:""}
                      </div>

                      <button class="btn-del-ps" data-domain-id="${i(t.id)}" data-ps-id="${i(d.id||d.code)}" title="Remove this problem statement" style="padding:4px 8px; border-radius:4px; background:rgba(255,42,75,0.1); border:1px solid var(--red); color:var(--red); font-size:0.68rem; cursor:pointer; white-space:nowrap;">
                        ✕ REMOVE
                      </button>
                    </div>
                  `).join("")}
                </div>
              `}
            </div>
          </div>
        `}),R.innerHTML=o,R.querySelectorAll(".btn-toggle-add-ps").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-domain-id"),a=document.getElementById(`add-panel-${e}`);if(a){const s=a.style.display!=="none";a.style.display=s?"none":"block",t.textContent=s?"+ ADD STATEMENT":"✕ CLOSE FORM"}})}),R.querySelectorAll(".btn-cancel-add-ps").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-domain-id"),a=document.getElementById(`add-panel-${e}`),s=R.querySelector(`.btn-toggle-add-ps[data-domain-id="${e}"]`);a&&(a.style.display="none"),s&&(s.textContent="+ ADD STATEMENT")})}),R.querySelectorAll(".btn-save-new-ps").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-domain-id"),a=C.find(B=>B.id===e);if(!a)return;const s=document.getElementById(`new-code-${e}`),c=document.getElementById(`new-title-${e}`),l=document.getElementById(`new-cat-${e}`),d=document.getElementById(`new-diff-${e}`),f=document.getElementById(`new-desc-${e}`),p=document.getElementById(`new-deliv-${e}`),v=s?s.value.trim().toUpperCase():"",L=c?c.value.trim():"",w=f?f.value.trim():"";if(!v||!L||!w){alert("Please provide at least the Problem Code, Title, and Description.");return}const E=p?p.value.trim():"",G=E?E.split(",").map(B=>B.trim()).filter(Boolean):["Architecture document and testbench report","Interactive demonstration visualizer"],V={id:v.toLowerCase().replace(/[^a-z0-9]/g,"-"),code:v,title:L,category:l&&l.value.trim()||a.domainName,difficulty:d&&d.value||"Advanced",description:w,deliverables:G};a.problemStatements||(a.problemStatements=[]),a.problemStatements.push(V),t.disabled=!0,t.textContent="SAVING TO R2...";try{const U=await(await fetch("/api/admin/domains",{method:"PUT",headers:h({"Content-Type":"application/json"}),body:JSON.stringify(a)})).json();if(U.success){const _=C.findIndex(le=>le.id===e);_>=0&&(C[_]=U.domain),q()}else alert("Failed to save statement: "+(U.error||"Unknown error")),q()}catch(B){alert("Error saving statement: "+B.message),q()}})}),R.querySelectorAll(".btn-del-ps").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-domain-id"),a=t.getAttribute("data-ps-id"),s=C.find(d=>d.id===e);if(!s)return;const c=(s.problemStatements||[]).find(d=>d.id===a||d.code===a),l=c?c.code:a;if(confirm(`Are you sure you want to remove problem statement "${l}" from ${s.stoneName}?`)){s.problemStatements=(s.problemStatements||[]).filter(d=>d.id!==a&&d.code!==a);try{const f=await(await fetch("/api/admin/domains",{method:"PUT",headers:h({"Content-Type":"application/json"}),body:JSON.stringify(s)})).json();if(f.success){const p=C.findIndex(v=>v.id===e);p>=0&&(C[p]=f.domain),q()}}catch(d){alert("Error removing statement: "+d.message)}}})}),R.querySelectorAll(".toggle-release-ps").forEach(t=>{t.addEventListener("change",async()=>{const e=t.getAttribute("data-domain-id"),a=t.checked,s=C.find(c=>c.id===e);if(s){s.isPsReleased=a;try{await fetch("/api/admin/domains",{method:"PUT",headers:h({"Content-Type":"application/json"}),body:JSON.stringify(s)}),q()}catch(c){alert("Error updating domain status: "+c.message)}}})})}const P=document.getElementById("modal-qr-mgr"),oe=document.getElementById("btn-open-qr-mgr"),se=document.getElementById("btn-close-qr-mgr"),x=document.getElementById("preview-qr-3"),I=document.getElementById("preview-qr-4"),F=document.getElementById("file-qr-3"),j=document.getElementById("file-qr-4"),T=document.getElementById("lbl-file-qr-3"),N=document.getElementById("lbl-file-qr-4"),g=document.getElementById("txt-qr-3"),y=document.getElementById("txt-qr-4"),D=document.getElementById("btn-save-qrs"),H=document.getElementById("btn-reset-qrs"),r=document.getElementById("qr-mgr-status"),z=document.getElementById("qr-last-updated");let u={member3:"/3mem.png",member4:"/4mem.png"},Q=null,O=null;async function ye(){r&&(r.textContent="Fetching current payment QR codes...",r.style.color="var(--text-muted)");try{const o=await(await fetch("/api/admin/payment-qrs",{headers:h()})).json();if(o.success&&o.paymentQrs){if(u=o.paymentQrs,Q=null,O=null,x&&(x.src=u.member3||"/3mem.png"),I&&(I.src=u.member4||"/4mem.png"),g&&(g.value=u.member3||""),y&&(y.value=u.member4||""),T&&(T.textContent="Upload 3-Member QR Image"),N&&(N.textContent="Upload 4-Member QR Image"),z)if(u.updatedAt){const t=new Date(u.updatedAt).toLocaleString();z.textContent=`✦ ACTIVE CONFIGURATION // Last synchronized: ${t}`}else z.textContent="✦ DEFAULT PRE-CONFIGURED PAYMENT QRS ACTIVE";r&&(r.textContent="Payment QR codes loaded.",r.style.color="var(--green)")}}catch(n){r&&(r.textContent="Error loading QR codes: "+n.message,r.style.color="var(--red)")}}oe&&P&&oe.addEventListener("click",()=>{P.classList.add("is-open"),ye()});se&&P&&se.addEventListener("click",()=>{P.classList.remove("is-open")});window.addEventListener("click",n=>{P&&n.target===P&&P.classList.remove("is-open")});F&&F.addEventListener("change",n=>{const o=n.target.files&&n.target.files[0];if(!o)return;if(!o.type.startsWith("image/")){alert("Please select a valid image file (PNG, JPG, WebP, SVG).");return}const t=new FileReader;t.onload=e=>{Q=e.target.result,x&&(x.src=Q),T&&(T.textContent=`Selected: ${o.name} (${Math.round(o.size/1024)} KB)`),g&&(g.value=`[Uploaded File: ${o.name}]`),r&&(r.textContent='3-member QR preview updated. Click "SAVE & DEPLOY" to commit.',r.style.color="var(--gold)")},t.readAsDataURL(o)});j&&j.addEventListener("change",n=>{const o=n.target.files&&n.target.files[0];if(!o)return;if(!o.type.startsWith("image/")){alert("Please select a valid image file (PNG, JPG, WebP, SVG).");return}const t=new FileReader;t.onload=e=>{O=e.target.result,I&&(I.src=O),N&&(N.textContent=`Selected: ${o.name} (${Math.round(o.size/1024)} KB)`),y&&(y.value=`[Uploaded File: ${o.name}]`),r&&(r.textContent='4-member QR preview updated. Click "SAVE & DEPLOY" to commit.',r.style.color="var(--cyan)")},t.readAsDataURL(o)});g&&g.addEventListener("input",()=>{const n=g.value.trim();n&&!n.startsWith("[Uploaded File:")&&(Q=null,x&&(x.src=n))});y&&y.addEventListener("input",()=>{const n=y.value.trim();n&&!n.startsWith("[Uploaded File:")&&(O=null,I&&(I.src=n))});D&&D.addEventListener("click",async()=>{D.disabled=!0;const n=D.textContent;D.textContent="COMMITTING TO R2...",r&&(r.textContent="Uploading and committing new QR codes to Cloudflare R2...",r.style.color="var(--cyan)");const o=Q||(g&&g.value.trim()&&!g.value.startsWith("[Uploaded File:")?g.value.trim():null)||u.member3,t=O||(y&&y.value.trim()&&!y.value.startsWith("[Uploaded File:")?y.value.trim():null)||u.member4;try{const a=await(await fetch("/api/admin/payment-qrs",{method:"POST",headers:h({"Content-Type":"application/json"}),body:JSON.stringify({member3:o,member4:t})})).json();if(a.success&&a.paymentQrs)u=a.paymentQrs,Q=null,O=null,F&&(F.value=""),j&&(j.value=""),x&&(x.src=u.member3),I&&(I.src=u.member4),g&&(g.value=u.member3),y&&(y.value=u.member4),T&&(T.textContent="Upload 3-Member QR Image"),N&&(N.textContent="Upload 4-Member QR Image"),z&&u.updatedAt&&(z.textContent=`✦ ACTIVE CONFIGURATION // Last synchronized: ${new Date(u.updatedAt).toLocaleString()}`),r&&(r.textContent="✓ Payment QR codes updated and deployed to Cloudflare R2 successfully!",r.style.color="var(--green)");else throw new Error(a.error||"Failed to update payment QR codes.")}catch(e){r&&(r.textContent="✕ Error saving QRs: "+e.message,r.style.color="var(--red)")}finally{D.disabled=!1,D.textContent=n}});H&&H.addEventListener("click",async()=>{if(confirm("Are you sure you want to restore both payment QR codes back to defaults (/3mem.png and /4mem.png)?")){H.disabled=!0,r&&(r.textContent="Resetting to default QR codes...",r.style.color="var(--gold)");try{const o=await(await fetch("/api/admin/payment-qrs/reset",{method:"POST",headers:h()})).json();o.success&&o.paymentQrs&&(u=o.paymentQrs,Q=null,O=null,F&&(F.value=""),j&&(j.value=""),x&&(x.src="/3mem.png"),I&&(I.src="/4mem.png"),g&&(g.value="/3mem.png"),y&&(y.value="/4mem.png"),T&&(T.textContent="Upload 3-Member QR Image"),N&&(N.textContent="Upload 4-Member QR Image"),z&&(z.textContent="✦ DEFAULT PRE-CONFIGURED PAYMENT QRS ACTIVE"),r&&(r.textContent="✓ Restored default payment QR codes.",r.style.color="var(--green)"))}catch(n){r&&(r.textContent="✕ Reset failed: "+n.message,r.style.color="var(--red)")}finally{H.disabled=!1}}});
