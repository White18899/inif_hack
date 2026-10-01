import"./modulepreload-polyfill-B5Qt9EMX.js";let u=[],w="all",O="";const $=document.getElementById("sec-login"),k=document.getElementById("sec-dashboard"),H=document.getElementById("form-coord-login"),f=document.getElementById("login-err"),g=document.getElementById("btn-logout"),b=document.getElementById("btn-refresh");function c(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function J(){try{const t=sessionStorage.getItem("infinity_coord_auth");if(!t)return"";const a=JSON.parse(t);return a.token||a.password||""}catch{return""}}function M(t={}){const a=J();return{...t,...a?{Authorization:`Bearer ${a}`}:{}}}b.addEventListener("click",async()=>{b.classList.add("spinning");try{k.style.display!=="none"?await q():window.location.reload()}catch(t){console.error("Coordinator refresh failed:",t)}finally{setTimeout(()=>{b.classList.remove("spinning")},500)}});const v=document.getElementById("teams-tbody"),j=document.getElementById("search-teams");async function P(t,a=!1){a||(f.style.display="none");try{const n=await fetch("/api/coordinator/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})}),e=await n.json();if(!n.ok||!e.success)throw new Error(e.error||"Invalid coordinator passphrase.");return sessionStorage.setItem("infinity_coord_auth",JSON.stringify({token:e.token,password:t})),$.style.display="none",k.style.display="block",g.style.display="inline-block",await q(),!0}catch(n){return a?sessionStorage.removeItem("infinity_coord_auth"):(f.textContent=n.message,f.style.display="block"),!1}}H.addEventListener("submit",async t=>{t.preventDefault();const a=document.getElementById("txt-passcode").value;await P(a,!1)});g.addEventListener("click",()=>{sessionStorage.removeItem("infinity_coord_auth"),k.style.display="none",$.style.display="block",g.style.display="none"});const D=sessionStorage.getItem("infinity_coord_auth");if(D)try{const t=JSON.parse(D);t.password&&P(t.password,!0)}catch{}async function q(){try{const t=await fetch("/api/coordinator/teams",{headers:M()});if(t.status===401){sessionStorage.removeItem("infinity_coord_auth"),k.style.display="none",$.style.display="block",g.style.display="none",f.textContent="Coordinator session expired. Please enter passphrase.",f.style.display="block";return}u=(await t.json()).teams||[],L(),F()}catch(t){console.error("Error fetching coordinator teams:",t)}}function F(){document.getElementById("kpi-total-teams").textContent=u.length;let t=0,a=0,n=0;u.forEach(e=>{var d,l,i,r,h,p,s,y,m;(l=(d=e.reviews)==null?void 0:d.r1)!=null&&l.attended&&t++,(r=(i=e.reviews)==null?void 0:i.r2)!=null&&r.attended&&a++;const o=e.food||{};(h=o.highTea)!=null&&h.collected&&n++,(p=o.dinner)!=null&&p.collected&&n++,(s=o.midnightFuel)!=null&&s.collected&&n++,(y=o.breakfast)!=null&&y.collected&&n++,(m=o.lunch)!=null&&m.collected&&n++}),document.getElementById("kpi-r1-attended").textContent=t,document.getElementById("kpi-r2-attended").textContent=a,document.getElementById("kpi-meals-served").textContent=n}function L(){const t=O.toLowerCase(),a=u.filter(e=>{var l;const o=w==="all"||e.preferredDomain&&e.preferredDomain.toLowerCase()===w,d=!t||e.teamName&&e.teamName.toLowerCase().includes(t)||e.id&&e.id.toLowerCase().includes(t)||e.college&&e.college.toLowerCase().includes(t)||((l=e.leader)==null?void 0:l.email)&&e.leader.email.toLowerCase().includes(t);return o&&d});if(a.length===0){v.innerHTML='<tr><td colspan="4" style="text-align:center; padding:30px; color:#888;">No teams found matching filter criteria.</td></tr>';return}let n="";a.forEach(e=>{var l,i,r,h,p,s,y,m,E,I,C,x,S,T,B,_,A,N;const o=e.food||{},d=e.reviews||{};n+=`
          <tr data-team-id="${c(e.id)}">
            <td>
              <div class="team-cell-title">${c(e.teamName)} <span class="font-mono" style="color:var(--cyan); font-size:0.7rem;">(${c(e.id)})</span></div>
              <div class="team-cell-sub">${c(e.college)} • Leader: ${c(((l=e.leader)==null?void 0:l.name)||"N/A")} (${c(((i=e.leader)==null?void 0:i.phone)||"")})</div>
            </td>
            <td>
              <span class="portal-badge">${c((e.preferredDomain||"MIND").toUpperCase())}</span>
              <div class="team-cell-sub">${c(e.roomAllocated||"Lab Block 3")}</div>
            </td>
            <td>
              <div class="chip-group">
                <label class="check-chip ${(r=o.highTea)!=null&&r.collected?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="food" data-key="highTea" ${(h=o.highTea)!=null&&h.collected?"checked":""}>
                  High Tea
                </label>
                <label class="check-chip ${(p=o.dinner)!=null&&p.collected?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="food" data-key="dinner" ${(s=o.dinner)!=null&&s.collected?"checked":""}>
                  Dinner
                </label>
                <label class="check-chip ${(y=o.midnightFuel)!=null&&y.collected?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="food" data-key="midnightFuel" ${(m=o.midnightFuel)!=null&&m.collected?"checked":""}>
                  Midnight
                </label>
                <label class="check-chip ${(E=o.breakfast)!=null&&E.collected?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="food" data-key="breakfast" ${(I=o.breakfast)!=null&&I.collected?"checked":""}>
                  Breakfast
                </label>
                <label class="check-chip ${(C=o.lunch)!=null&&C.collected?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="food" data-key="lunch" ${(x=o.lunch)!=null&&x.collected?"checked":""}>
                  Lunch
                </label>
              </div>
            </td>
            <td>
              <div class="chip-group">
                <label class="check-chip ${(S=d.r1)!=null&&S.attended?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="review" data-key="r1" ${(T=d.r1)!=null&&T.attended?"checked":""}>
                  R1: Idea
                </label>
                <label class="check-chip ${(B=d.r2)!=null&&B.attended?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="review" data-key="r2" ${(_=d.r2)!=null&&_.attended?"checked":""}>
                  R2: Logic
                </label>
                <label class="check-chip ${(A=d.r3)!=null&&A.attended?"checked":""}">
                  <input type="checkbox" data-team="${c(e.id)}" data-type="review" data-key="r3" ${(N=d.r3)!=null&&N.attended?"checked":""}>
                  R3: Pitch
                </label>
              </div>
            </td>
          </tr>
        `}),v.innerHTML=n,v.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",async o=>{const d=e.getAttribute("data-team"),l=e.getAttribute("data-type"),i=e.getAttribute("data-key"),r=e.checked,h=e.closest(".check-chip");h.classList.toggle("checked",r);try{if((await fetch("/api/coordinator/mark",{method:"POST",headers:M({"Content-Type":"application/json"}),body:JSON.stringify({teamId:d,type:l,key:i,value:r})})).status===401){alert("Coordinator session expired. Please log in again."),window.location.reload();return}const s=u.find(y=>y.id===d);s&&(l==="food"?(s.food||(s.food={}),s.food[i]={collected:r}):l==="review"&&(s.reviews||(s.reviews={}),s.reviews[i]={attended:r})),F()}catch(p){console.error("Error saving checkmark:",p),e.checked=!r,h.classList.toggle("checked",!r)}})})}j.addEventListener("input",t=>{O=t.target.value,L()});document.querySelectorAll("#domain-filters .f-pill").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("#domain-filters .f-pill").forEach(a=>a.classList.remove("active")),t.classList.add("active"),w=t.getAttribute("data-domain"),L()})});
