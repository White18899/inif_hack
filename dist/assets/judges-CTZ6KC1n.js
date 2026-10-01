import"./modulepreload-polyfill-B5Qt9EMX.js";let f=[],y="all",s=null;const b=document.getElementById("sec-login"),h=document.getElementById("sec-dashboard"),M=document.getElementById("form-judge-login"),m=document.getElementById("login-err"),p=document.getElementById("btn-logout"),u=document.getElementById("btn-refresh");u.addEventListener("click",async()=>{u.classList.add("spinning");try{h.style.display!=="none"?await k():window.location.reload()}catch(e){console.error("Judges refresh failed:",e)}finally{setTimeout(()=>{u.classList.remove("spinning")},500)}});const v=document.getElementById("teams-grid"),E=document.getElementById("modal-eval"),w=document.getElementById("btn-close-eval"),c=document.getElementById("score-inno"),i=document.getElementById("score-tech"),l=document.getElementById("score-exec"),d=document.getElementById("score-pres"),C=document.getElementById("eval-total-display"),L=document.getElementById("txt-remarks"),g=document.getElementById("btn-save-score");async function T(e,n=!1){n||(m.style.display="none");try{const t=await fetch("/api/judges/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})}),a=await t.json();if(!t.ok||!a.success)throw new Error(a.error||"Invalid judges passphrase.");return sessionStorage.setItem("infinity_judge_auth",JSON.stringify({password:e})),b.style.display="none",h.style.display="block",p.style.display="inline-block",await k(),!0}catch(t){return n?sessionStorage.removeItem("infinity_judge_auth"):(m.textContent=t.message,m.style.display="block"),!1}}M.addEventListener("submit",async e=>{e.preventDefault();const n=document.getElementById("txt-passcode").value;await T(n,!1)});p.addEventListener("click",()=>{sessionStorage.removeItem("infinity_judge_auth"),h.style.display="none",b.style.display="block",p.style.display="none"});const x=sessionStorage.getItem("infinity_judge_auth");if(x)try{const e=JSON.parse(x);e.password&&T(e.password,!0)}catch{}async function k(){try{f=(await(await fetch("/api/judges/teams")).json()).teams||[],I()}catch(e){console.error("Error fetching judges teams:",e)}}function I(){const e=f.filter(t=>y==="all"||t.preferredDomain&&t.preferredDomain.toLowerCase()===y);if(e.length===0){v.innerHTML='<div style="grid-column: 1/-1; text-align:center; padding:50px; color:#888;">No teams registered under this domain yet.</div>';return}let n="";e.forEach(t=>{const o=(t.scores||{}).total||0,r=t.selectedProblemStatement;n+=`
          <div class="team-card">
            <div>
              <div class="t-header">
                <div>
                  <h4 class="t-name">${t.teamName}</h4>
                  <div class="t-college">${t.college}</div>
                </div>
                <span class="t-id">${t.id}</span>
              </div>

              <div class="t-ps-box">
                ${r?`<span class="t-ps-code">${r.code}:</span> ${r.title}`:'<span style="color:#888;">No Problem Statement Locked Yet</span>'}
              </div>

              <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:10px;">
                <strong>Domain:</strong> ${(t.preferredDomain||"MIND").toUpperCase()} • <strong>Tech:</strong> ${Array.isArray(t.techStack)?t.techStack.join(", "):t.techStack||"Standard"}
              </div>
            </div>

            <div class="score-badge-row">
              <div>
                <span style="font-size:0.65rem; color:var(--text-muted); font-family:'JetBrains Mono';">CURRENT MARKS:</span>
                <div class="score-val">${o>0?`${o} / 100`:'<span style="color:#666; font-size:1rem;">UNRATED</span>'}</div>
              </div>
              <button class="btn-eval" data-team-id="${t.id}">
                ${o>0?"EDIT SCORES":"EVALUATE SQUAD"}
              </button>
            </div>
          </div>
        `}),v.innerHTML=n,v.querySelectorAll(".btn-eval").forEach(t=>{t.addEventListener("click",()=>{const a=t.getAttribute("data-team-id");j(a)})})}function j(e){if(s=f.find(t=>t.id===e),!s)return;document.getElementById("eval-modal-id").textContent=s.id,document.getElementById("eval-modal-name").textContent=s.teamName,document.getElementById("eval-modal-domain").textContent=`${(s.preferredDomain||"").toUpperCase()} STONE // ${s.college}`;const n=s.scores||{};c.value=n.innovation||20,i.value=n.technical||20,l.value=n.execution||20,d.value=n.presentation||20,L.value=n.remarks||"",B(),E.classList.add("is-open")}function B(){const e=Math.min(25,Math.max(0,parseFloat(c.value)||0)),n=Math.min(25,Math.max(0,parseFloat(i.value)||0)),t=Math.min(25,Math.max(0,parseFloat(l.value)||0)),a=Math.min(25,Math.max(0,parseFloat(d.value)||0)),o=e+n+t+a;return C.textContent=`${o} / 100`,o}[c,i,l,d].forEach(e=>{e.addEventListener("input",B)});w.addEventListener("click",()=>E.classList.remove("is-open"));g.addEventListener("click",async()=>{if(!s)return;g.textContent="Saving to R2...";const e=parseFloat(c.value)||0,n=parseFloat(i.value)||0,t=parseFloat(l.value)||0,a=parseFloat(d.value)||0,o=L.value.trim();try{const S=await(await fetch("/api/judges/score",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({teamId:s.id,innovation:e,technical:n,execution:t,presentation:a,remarks:o})})).json();S.success&&(s.scores=S.scores,E.classList.remove("is-open"),I())}catch(r){alert("Error saving marks: "+r.message)}finally{g.textContent="CONFIRM & COMMIT MARKS TO R2"}});document.querySelectorAll("#domain-filters .d-pill").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("#domain-filters .d-pill").forEach(n=>n.classList.remove("active")),e.classList.add("active"),y=e.getAttribute("data-domain"),I()})});
