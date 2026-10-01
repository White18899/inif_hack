import"./modulepreload-polyfill-B5Qt9EMX.js";let g=[],E=[],J="",c=null;function d(a){return a==null?"":String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function O(a){if(!a||typeof a!="string")return"";const i=a.trim();return/^https?:\/\/[^\s"'<>]+$/i.test(i)||/^\/uploads\/[a-zA-Z0-9_\-\.]+$/i.test(i)?d(i):""}function q(){try{const a=sessionStorage.getItem("infinity_admin_auth");if(!a)return"";const i=JSON.parse(a);return i.token||i.password||""}catch{return""}}function B(a={}){const i=q(),t={...a};return i&&(t.Authorization=`Bearer ${i}`),t}const S=document.getElementById("sec-login"),$=document.getElementById("sec-dashboard"),R=document.getElementById("form-admin-login"),h=document.getElementById("login-err"),w=document.getElementById("btn-logout"),D=document.getElementById("btn-refresh");D.addEventListener("click",async()=>{D.classList.add("spinning");try{$.style.display!=="none"?await F():window.location.reload()}catch(a){console.error("Admin refresh failed:",a)}finally{setTimeout(()=>{D.classList.remove("spinning")},500)}});const A=document.getElementById("admin-tbody"),V=document.getElementById("admin-search"),z=document.getElementById("modal-edit-team"),G=document.getElementById("btn-close-edit"),K=document.getElementById("form-edit-team"),_=document.getElementById("modal-ps-mgr"),Y=document.getElementById("btn-open-ps-mgr"),Q=document.getElementById("btn-close-ps-mgr"),x=document.getElementById("ps-mgr-domains-list");async function M(a,i=!1){!i&&h&&(h.style.display="none");try{const t=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:(a||"").trim()})}),e=await t.json();if(!t.ok||!e.success)throw new Error(e.error||"Invalid administrator passphrase.");return sessionStorage.setItem("infinity_admin_auth",JSON.stringify({password:a,token:e.token})),S&&(S.style.display="none"),$&&($.style.display="block"),w&&(w.style.display="inline-block"),await F(),!0}catch(t){return!i&&h?(h.textContent=t.message,h.style.display="block"):sessionStorage.removeItem("infinity_admin_auth"),!1}}R&&R.addEventListener("submit",async a=>{var t;a.preventDefault(),a.stopPropagation();const i=((t=document.getElementById("txt-passphrase"))==null?void 0:t.value)||"";await M(i,!1)});const j=document.getElementById("btn-do-login");j&&j.addEventListener("click",async a=>{var t;a.preventDefault();const i=((t=document.getElementById("txt-passphrase"))==null?void 0:t.value)||"";await M(i,!1)});w&&w.addEventListener("click",()=>{sessionStorage.removeItem("infinity_admin_auth"),$&&($.style.display="none"),S&&(S.style.display="block"),w.style.display="none"});const U=sessionStorage.getItem("infinity_admin_auth");if(U)try{const a=JSON.parse(U);a.password&&M(a.password,!0)}catch{}async function F(){try{const[a,i]=await Promise.all([fetch("/api/admin/teams",{headers:B()}),fetch("/api/domains")]);if(a.status===401){sessionStorage.removeItem("infinity_admin_auth"),$&&($.style.display="none"),S&&(S.style.display="block"),w&&(w.style.display="none"),h&&(h.textContent="Session expired or unauthorized. Please log in again.",h.style.display="block");return}const t=await a.json(),e=await i.json();g=t.teams||[],E=e.domains||[];const n=document.querySelector(".btn-excel");if(n){const o=q();n.href=`/api/admin/export${o?"?token="+encodeURIComponent(o):""}`}I(),N()}catch(a){console.error("Error loading admin data:",a)}}function N(){document.getElementById("kpi-total-teams").textContent=g.length;let a=0,i=0,t=0;g.forEach(e=>{var l,r;const n=e.teamSize||4;t+=n;const o=((l=e.payment)==null?void 0:l.amount)||n*349;a+=o,((r=e.payment)==null?void 0:r.status)==="verified"&&i++}),document.getElementById("kpi-total-fees").textContent=`₹${a.toLocaleString("en-IN")}`,document.getElementById("kpi-verified-payments").textContent=i,document.getElementById("kpi-total-hackers").textContent=t}function I(){const a=J.toLowerCase(),i=g.filter(e=>{var n,o;return!a||e.teamName.toLowerCase().includes(a)||e.id.toLowerCase().includes(a)||e.college&&e.college.toLowerCase().includes(a)||((n=e.leader)==null?void 0:n.email)&&e.leader.email.toLowerCase().includes(a)||((o=e.payment)==null?void 0:o.utr)&&e.payment.utr.toLowerCase().includes(a)});if(i.length===0){const e=g.length===0?"No squads registered yet. The system is clean and ready for live registrations.":"No teams match the search criteria.";A.innerHTML=`<tr><td colspan="8" style="text-align:center; padding:45px 20px; color:#888; font-family:'JetBrains Mono', monospace; font-size:0.8rem; letter-spacing:0.04em;">${e}</td></tr>`;return}let t="";i.forEach(e=>{var b;const n=e.payment||{},o=e.food||{},l=e.reviews||{},r=e.scores||{};let s=0;["highTea","dinner","midnightFuel","breakfast","lunch"].forEach(y=>{var f;(f=o[y])!=null&&f.collected&&s++});let p=0;["r1","r2","r3"].forEach(y=>{var f;(f=l[y])!=null&&f.attended&&p++});const m=n.status||"pending";let u='<span class="badge-status badge-pending">PENDING</span>';m==="verified"&&(u='<span class="badge-status badge-verified">VERIFIED</span>'),m==="rejected"&&(u='<span class="badge-status badge-rejected">REJECTED</span>'),t+=`
          <tr>
            <td>
              <strong>${d(e.teamName)}</strong>
              <div style="font-family:'JetBrains Mono'; font-size:0.7rem; color:var(--red);">${d(e.id)}</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">${d(e.college)}</div>
            </td>
            <td>
              <span class="portal-badge font-mono">${d((e.preferredDomain||"MIND").toUpperCase())}</span>
              <div style="font-size:0.68rem; color:#888;">${d(e.teamSize||4)} Members</div>
            </td>
            <td>
              ${u}
              <div style="font-size:0.7rem; color:#aaa; margin-top:2px;">₹${n.amount||(e.teamSize||4)*349}</div>
            </td>
            <td>
              <div class="font-mono" style="font-size:0.72rem;">${d(n.utr||"N/A")}</div>
              <div style="font-size:0.68rem; color:#888;">Phone: ${d(n.phone||((b=e.leader)==null?void 0:b.phone)||"N/A")}</div>
              ${O(n.screenshotUrl)?`<a href="${O(n.screenshotUrl)}" target="_blank" rel="noopener noreferrer" style="font-size:0.68rem; color:var(--cyan);">View Receipt ↗</a>`:n.screenshotUrl?'<span style="font-size:0.68rem; color:#888;">Receipt Attached</span>':""}
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${s} / 5</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:700;">${p} / 3</span>
            </td>
            <td>
              <span class="font-mono" style="font-weight:800; color:var(--green); font-size:0.95rem;">${r.total||0}</span>
            </td>
            <td>
              <div class="tbl-actions">
                <select class="sel-quick-status ${m}" data-status-id="${d(e.id)}" title="Select payment verification status">
                  <option value="verified" ${m==="verified"?"selected":""}>✓ VERIFIED</option>
                  <option value="pending" ${m==="pending"?"selected":""}>⏳ PENDING</option>
                  <option value="rejected" ${m==="rejected"?"selected":""}>✕ REJECTED</option>
                </select>
                <button class="btn-tbl-edit" data-edit-id="${d(e.id)}">EDIT</button>
                <button class="btn-tbl-del" data-del-id="${d(e.id)}">DEL</button>
              </div>
            </td>
          </tr>
        `}),A.innerHTML=t,A.querySelectorAll(".sel-quick-status").forEach(e=>{e.addEventListener("change",async n=>{const o=e.getAttribute("data-status-id"),l=g.find(s=>s.id===o);if(!l)return;const r=n.target.value;e.disabled=!0;try{const p=await(await fetch(`/api/admin/teams/${o}`,{method:"PUT",headers:B({"Content-Type":"application/json"}),body:JSON.stringify({payment:{...l.payment,status:r}})})).json();if(p.success){const m=g.findIndex(u=>u.id===o);m>=0&&(g[m]=p.team),I(),N()}else alert("Failed to update status: "+(p.error||"Unknown error")),I()}catch(s){alert("Error updating payment status: "+s.message),I()}})}),A.querySelectorAll(".btn-tbl-edit").forEach(e=>{e.addEventListener("click",()=>{W(e.getAttribute("data-edit-id"))})}),A.querySelectorAll(".btn-tbl-del").forEach(e=>{e.addEventListener("click",async()=>{const n=e.getAttribute("data-del-id");if(confirm(`Are you sure you want to completely delete team ${n}?`))try{(await(await fetch(`/api/admin/teams/${n}`,{method:"DELETE",headers:B()})).json()).success&&(g=g.filter(r=>r.id!==n),I(),N())}catch(o){alert("Error deleting squad: "+o.message)}})})}V.addEventListener("input",a=>{J=a.target.value,I()});function W(a){var r,s,p,m,u,b,y,f,L,C,v;if(c=g.find(T=>T.id===a),!c)return;document.getElementById("edit-team-id").textContent=c.id,document.getElementById("edt-team-name").value=c.teamName||"",document.getElementById("edt-college").value=c.college||"",document.getElementById("edt-room").value=c.roomAllocated||"";const i=(c.preferredDomain||"intelligence").toLowerCase(),t={mind:"intelligence",space:"connectivity",reality:"digital",power:"automation",time:"analytics",soul:"impact",intelligence:"intelligence",connectivity:"connectivity",digital:"digital",automation:"automation",analytics:"analytics",impact:"impact"};document.getElementById("edt-domain").value=t[i]||"intelligence",document.getElementById("edt-size").value=c.teamSize||4,document.getElementById("edt-password").value=c.teamPassword||"",document.getElementById("edt-leader-name").value=((r=c.leader)==null?void 0:r.name)||"",document.getElementById("edt-leader-email").value=((s=c.leader)==null?void 0:s.email)||"",document.getElementById("edt-leader-phone").value=((p=c.leader)==null?void 0:p.phone)||"";const e=c.payment||{};document.getElementById("edt-pay-status").value=e.status||"pending",document.getElementById("edt-pay-utr").value=e.utr||"",document.getElementById("edt-pay-amount").value=e.amount||(c.teamSize||4)*349;const n=c.food||{};document.getElementById("edt-food-ht").checked=!!((m=n.highTea)!=null&&m.collected),document.getElementById("edt-food-din").checked=!!((u=n.dinner)!=null&&u.collected),document.getElementById("edt-food-mid").checked=!!((b=n.midnightFuel)!=null&&b.collected),document.getElementById("edt-food-bf").checked=!!((y=n.breakfast)!=null&&y.collected),document.getElementById("edt-food-ln").checked=!!((f=n.lunch)!=null&&f.collected);const o=c.reviews||{};document.getElementById("edt-rev-r1").checked=!!((L=o.r1)!=null&&L.attended),document.getElementById("edt-rev-r2").checked=!!((C=o.r2)!=null&&C.attended),document.getElementById("edt-rev-r3").checked=!!((v=o.r3)!=null&&v.attended);const l=c.scores||{};document.getElementById("edt-score-total").value=l.total||0,document.getElementById("edt-score-remarks").value=l.remarks||"",z.classList.add("is-open")}G.addEventListener("click",()=>z.classList.remove("is-open"));K.addEventListener("submit",async a=>{if(a.preventDefault(),!c)return;const i={teamName:document.getElementById("edt-team-name").value.trim(),college:document.getElementById("edt-college").value.trim(),roomAllocated:document.getElementById("edt-room").value.trim(),preferredDomain:document.getElementById("edt-domain").value,teamSize:parseInt(document.getElementById("edt-size").value,10)||4,teamPassword:document.getElementById("edt-password").value,leader:{name:document.getElementById("edt-leader-name").value.trim(),email:document.getElementById("edt-leader-email").value.trim(),phone:document.getElementById("edt-leader-phone").value.trim()},payment:{...c.payment,status:document.getElementById("edt-pay-status").value,utr:document.getElementById("edt-pay-utr").value.trim(),amount:parseFloat(document.getElementById("edt-pay-amount").value)||0},food:{highTea:{collected:document.getElementById("edt-food-ht").checked},dinner:{collected:document.getElementById("edt-food-din").checked},midnightFuel:{collected:document.getElementById("edt-food-mid").checked},breakfast:{collected:document.getElementById("edt-food-bf").checked},lunch:{collected:document.getElementById("edt-food-ln").checked}},reviews:{r1:{attended:document.getElementById("edt-rev-r1").checked},r2:{attended:document.getElementById("edt-rev-r2").checked},r3:{attended:document.getElementById("edt-rev-r3").checked}},scores:{...c.scores,total:parseFloat(document.getElementById("edt-score-total").value)||0,remarks:document.getElementById("edt-score-remarks").value.trim()}};try{const e=await(await fetch(`/api/admin/teams/${c.id}`,{method:"PUT",headers:B({"Content-Type":"application/json"}),body:JSON.stringify(i)})).json();if(e.success){const n=g.findIndex(o=>o.id===c.id);n>=0&&(g[n]=e.team),z.classList.remove("is-open"),I(),N()}}catch(t){alert("Error updating team: "+t.message)}});Y.addEventListener("click",()=>{k(),_.classList.add("is-open")});Q.addEventListener("click",()=>_.classList.remove("is-open"));function k(){const a={intelligence:"INTEL",connectivity:"CONN",digital:"DIG",automation:"AUTO",analytics:"ANA",impact:"IMP",mind:"INTEL",space:"CONN",reality:"DIG",power:"AUTO",time:"ANA",soul:"IMP"};let i="";E.forEach(t=>{const e=!!t.isPsReleased,n=t.problemStatements||[],l=`PS-${a[t.id]||t.id.substring(0,4).toUpperCase()}-${String(n.length+1).padStart(2,"0")}`,r=t.accentHex||"#ffd000";i+=`
          <div class="field-card" style="border-left: 4px solid ${r}; margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:12px;">
              <div>
                <h4 style="font-size:1.15rem; color:#fff; display:flex; align-items:center; gap:8px;">
                  <span>${d(t.domainName)}</span>
                  <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:${r}; font-weight:700;">(${d(t.stoneName)})</span>
                </h4>
                <div style="font-size:0.75rem; color:var(--text-muted);">${d(t.tagline||"")}</div>
              </div>

              <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
                <button class="btn-toggle-add-ps" data-domain-id="${d(t.id)}" style="padding:6px 12px; border-radius:6px; background:rgba(255,255,255,0.06); border:1px solid ${r}50; color:${r}; font-family:'JetBrains Mono',monospace; font-size:0.72rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                  + ADD STATEMENT
                </button>
                <label class="switch-wrap">
                  <input type="checkbox" class="toggle-release-ps" data-domain-id="${d(t.id)}" ${e?"checked":""}>
                  <span style="font-family:'JetBrains Mono'; font-size:0.72rem; font-weight:700; color:${e?"var(--green)":"var(--gold)"};">
                    ${e?"RELEASED (LIVE)":"LOCKED (HIDDEN)"}
                  </span>
                </label>
              </div>
            </div>

            <!-- Expandable Add Problem Statement Panel -->
            <div id="add-panel-${d(t.id)}" style="display:none; margin: 12px 0 16px 0; padding:16px; border-radius:10px; background:rgba(6,6,12,0.95); border:1px solid ${r}60; box-shadow:0 8px 25px rgba(0,0,0,0.6);">
              <div style="font-family:'Syne',sans-serif; font-size:0.86rem; font-weight:700; color:${r}; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>✦</span> NEW PROBLEM STATEMENT // ${d(t.stoneName.toUpperCase())} (${d(t.domainName)})
              </div>

              <div class="edit-grid-3" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CHALLENGE CODE</label>
                  <input type="text" id="new-code-${d(t.id)}" class="form-input font-mono" value="${d(l)}" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">PROBLEM TITLE</label>
                  <input type="text" id="new-title-${d(t.id)}" class="form-input" placeholder="e.g. Distributed Telemetry Mesh Engine" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DIFFICULTY</label>
                  <select id="new-diff-${d(t.id)}" class="form-input custom-select" style="padding:8px 10px; font-size:0.82rem;">
                    <option value="Advanced" selected>Advanced</option>
                    <option value="Hardcore">Hardcore</option>
                    <option value="Intermediate">Intermediate</option>
                  </select>
                </div>
              </div>

              <div class="edit-grid-2" style="margin-bottom:10px;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label">CATEGORY / TRACK</label>
                  <input type="text" id="new-cat-${d(t.id)}" class="form-input" value="${d(t.domainName)} & Systems" style="padding:8px 10px; font-size:0.82rem;">
                </div>
                <div class="form-group" style="margin:0;">
                  <label class="form-label">DELIVERABLES (COMMA-SEPARATED)</label>
                  <input type="text" id="new-deliv-${d(t.id)}" class="form-input" placeholder="Interactive UI visualizer, Core architecture daemon, Benchmark testbench" style="padding:8px 10px; font-size:0.82rem;">
                </div>
              </div>

              <div class="form-group" style="margin-bottom:12px;">
                <label class="form-label">PROBLEM STATEMENT DESCRIPTION</label>
                <textarea id="new-desc-${d(t.id)}" class="form-input" rows="3" placeholder="Provide background context, technical specifications, and key engineering expectations..." style="padding:8px 10px; font-size:0.82rem;"></textarea>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
                <button class="btn-cancel-add-ps" data-domain-id="${d(t.id)}" style="padding:7px 14px; border-radius:6px; background:transparent; border:1px solid var(--border-subtle); color:var(--text-muted); font-size:0.75rem; cursor:pointer;">
                  Cancel
                </button>
                <button class="btn-save-new-ps" data-domain-id="${d(t.id)}" style="padding:7px 18px; border-radius:6px; background:${r}; color:#000; font-family:'Syne',sans-serif; font-size:0.8rem; font-weight:800; border:none; cursor:pointer; box-shadow:0 0 12px ${r}40;">
                  SAVE STATEMENT TO ${d(t.stoneName.toUpperCase())}
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
                  ${n.map((s,p)=>`
                    <div style="padding:10px 14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:8px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                      <div style="flex:1;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                          <span style="color:${r}; font-family:'JetBrains Mono'; font-weight:700; font-size:0.75rem;">${d(s.code)}:</span>
                          <strong style="font-size:0.82rem; color:#fff;">${d(s.title)}</strong>
                          <span style="font-size:0.65rem; padding:2px 6px; border-radius:4px; background:rgba(255,255,255,0.06); color:#aaa; font-family:'JetBrains Mono';">
                            ${d(s.difficulty||"Advanced")}
                          </span>
                        </div>
                        <div style="font-size:0.74rem; color:#888; line-height:1.4;">${d(s.description)}</div>
                        ${s.deliverables&&s.deliverables.length>0?`
                          <div style="margin-top:6px; display:flex; gap:6px; flex-wrap:wrap;">
                            ${s.deliverables.map(m=>`
                              <span style="font-size:0.65rem; padding:1px 6px; border-radius:3px; background:rgba(255,255,255,0.04); color:#aaa;">✦ ${d(m)}</span>
                            `).join("")}
                          </div>
                        `:""}
                      </div>

                      <button class="btn-del-ps" data-domain-id="${d(t.id)}" data-ps-id="${d(s.id||s.code)}" title="Remove this problem statement" style="padding:4px 8px; border-radius:4px; background:rgba(255,42,75,0.1); border:1px solid var(--red); color:var(--red); font-size:0.68rem; cursor:pointer; white-space:nowrap;">
                        ✕ REMOVE
                      </button>
                    </div>
                  `).join("")}
                </div>
              `}
            </div>
          </div>
        `}),x.innerHTML=i,x.querySelectorAll(".btn-toggle-add-ps").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-domain-id"),n=document.getElementById(`add-panel-${e}`);if(n){const o=n.style.display!=="none";n.style.display=o?"none":"block",t.textContent=o?"+ ADD STATEMENT":"✕ CLOSE FORM"}})}),x.querySelectorAll(".btn-cancel-add-ps").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-domain-id"),n=document.getElementById(`add-panel-${e}`),o=x.querySelector(`.btn-toggle-add-ps[data-domain-id="${e}"]`);n&&(n.style.display="none"),o&&(o.textContent="+ ADD STATEMENT")})}),x.querySelectorAll(".btn-save-new-ps").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-domain-id"),n=E.find(v=>v.id===e);if(!n)return;const o=document.getElementById(`new-code-${e}`),l=document.getElementById(`new-title-${e}`),r=document.getElementById(`new-cat-${e}`),s=document.getElementById(`new-diff-${e}`),p=document.getElementById(`new-desc-${e}`),m=document.getElementById(`new-deliv-${e}`),u=o?o.value.trim().toUpperCase():"",b=l?l.value.trim():"",y=p?p.value.trim():"";if(!u||!b||!y){alert("Please provide at least the Problem Code, Title, and Description.");return}const f=m?m.value.trim():"",L=f?f.split(",").map(v=>v.trim()).filter(Boolean):["Architecture document and testbench report","Interactive demonstration visualizer"],C={id:u.toLowerCase().replace(/[^a-z0-9]/g,"-"),code:u,title:b,category:r&&r.value.trim()||n.domainName,difficulty:s&&s.value||"Advanced",description:y,deliverables:L};n.problemStatements||(n.problemStatements=[]),n.problemStatements.push(C),t.disabled=!0,t.textContent="SAVING TO R2...";try{const T=await(await fetch("/api/admin/domains",{method:"PUT",headers:B({"Content-Type":"application/json"}),body:JSON.stringify(n)})).json();if(T.success){const P=E.findIndex(H=>H.id===e);P>=0&&(E[P]=T.domain),k()}else alert("Failed to save statement: "+(T.error||"Unknown error")),k()}catch(v){alert("Error saving statement: "+v.message),k()}})}),x.querySelectorAll(".btn-del-ps").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-domain-id"),n=t.getAttribute("data-ps-id"),o=E.find(s=>s.id===e);if(!o)return;const l=(o.problemStatements||[]).find(s=>s.id===n||s.code===n),r=l?l.code:n;if(confirm(`Are you sure you want to remove problem statement "${r}" from ${o.stoneName}?`)){o.problemStatements=(o.problemStatements||[]).filter(s=>s.id!==n&&s.code!==n);try{const p=await(await fetch("/api/admin/domains",{method:"PUT",headers:B({"Content-Type":"application/json"}),body:JSON.stringify(o)})).json();if(p.success){const m=E.findIndex(u=>u.id===e);m>=0&&(E[m]=p.domain),k()}}catch(s){alert("Error removing statement: "+s.message)}}})}),x.querySelectorAll(".toggle-release-ps").forEach(t=>{t.addEventListener("change",async()=>{const e=t.getAttribute("data-domain-id"),n=t.checked,o=E.find(l=>l.id===e);if(o){o.isPsReleased=n;try{await fetch("/api/admin/domains",{method:"PUT",headers:B({"Content-Type":"application/json"}),body:JSON.stringify(o)}),k()}catch(l){alert("Error updating domain status: "+l.message)}}})})}
