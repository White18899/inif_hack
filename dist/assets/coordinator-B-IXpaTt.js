import"./modulepreload-polyfill-B5Qt9EMX.js";let p=[],k="all",D="";const _=document.getElementById("sec-login"),v=document.getElementById("sec-dashboard"),j=document.getElementById("form-coord-login"),f=document.getElementById("login-err"),b=document.getElementById("btn-logout"),u=document.getElementById("btn-refresh");u.addEventListener("click",async()=>{u.classList.add("spinning");try{v.style.display!=="none"?await F():window.location.reload()}catch(t){console.error("Coordinator refresh failed:",t)}finally{setTimeout(()=>{u.classList.remove("spinning")},500)}});const g=document.getElementById("teams-tbody"),q=document.getElementById("search-teams");async function O(t,n=!1){n||(f.style.display="none");try{const o=await fetch("/api/coordinator/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})}),e=await o.json();if(!o.ok||!e.success)throw new Error(e.error||"Invalid coordinator passphrase.");return sessionStorage.setItem("infinity_coord_auth",JSON.stringify({password:t})),_.style.display="none",v.style.display="block",b.style.display="inline-block",await F(),!0}catch(o){return n?sessionStorage.removeItem("infinity_coord_auth"):(f.textContent=o.message,f.style.display="block"),!1}}j.addEventListener("submit",async t=>{t.preventDefault();const n=document.getElementById("txt-passcode").value;await O(n,!1)});b.addEventListener("click",()=>{sessionStorage.removeItem("infinity_coord_auth"),v.style.display="none",_.style.display="block",b.style.display="none"});const N=sessionStorage.getItem("infinity_coord_auth");if(N)try{const t=JSON.parse(N);t.password&&O(t.password,!0)}catch{}async function F(){try{p=(await(await fetch("/api/coordinator/teams")).json()).teams||[],$(),M()}catch(t){console.error("Error fetching coordinator teams:",t)}}function M(){document.getElementById("kpi-total-teams").textContent=p.length;let t=0,n=0,o=0;p.forEach(e=>{var d,l,s,i,r,c,h,m,y;(l=(d=e.reviews)==null?void 0:d.r1)!=null&&l.attended&&t++,(i=(s=e.reviews)==null?void 0:s.r2)!=null&&i.attended&&n++;const a=e.food||{};(r=a.highTea)!=null&&r.collected&&o++,(c=a.dinner)!=null&&c.collected&&o++,(h=a.midnightFuel)!=null&&h.collected&&o++,(m=a.breakfast)!=null&&m.collected&&o++,(y=a.lunch)!=null&&y.collected&&o++}),document.getElementById("kpi-r1-attended").textContent=t,document.getElementById("kpi-r2-attended").textContent=n,document.getElementById("kpi-meals-served").textContent=o}function $(){const t=D.toLowerCase(),n=p.filter(e=>{var l;const a=k==="all"||e.preferredDomain&&e.preferredDomain.toLowerCase()===k,d=!t||e.teamName.toLowerCase().includes(t)||e.id.toLowerCase().includes(t)||e.college&&e.college.toLowerCase().includes(t)||((l=e.leader)==null?void 0:l.email)&&e.leader.email.toLowerCase().includes(t);return a&&d});if(n.length===0){g.innerHTML='<tr><td colspan="4" style="text-align:center; padding:30px; color:#888;">No teams found matching filter criteria.</td></tr>';return}let o="";n.forEach(e=>{var l,s,i,r,c,h,m,y,w,E,L,I,C,x,B,T,S,A;const a=e.food||{},d=e.reviews||{};o+=`
          <tr data-team-id="${e.id}">
            <td>
              <div class="team-cell-title">${e.teamName} <span class="font-mono" style="color:var(--cyan); font-size:0.7rem;">(${e.id})</span></div>
              <div class="team-cell-sub">${e.college} • Leader: ${((l=e.leader)==null?void 0:l.name)||"N/A"} (${((s=e.leader)==null?void 0:s.phone)||""})</div>
            </td>
            <td>
              <span class="portal-badge">${(e.preferredDomain||"MIND").toUpperCase()}</span>
              <div class="team-cell-sub">${e.roomAllocated||"Lab Block 3"}</div>
            </td>
            <td>
              <div class="chip-group">
                <label class="check-chip ${(i=a.highTea)!=null&&i.collected?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="food" data-key="highTea" ${(r=a.highTea)!=null&&r.collected?"checked":""}>
                  High Tea
                </label>
                <label class="check-chip ${(c=a.dinner)!=null&&c.collected?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="food" data-key="dinner" ${(h=a.dinner)!=null&&h.collected?"checked":""}>
                  Dinner
                </label>
                <label class="check-chip ${(m=a.midnightFuel)!=null&&m.collected?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="food" data-key="midnightFuel" ${(y=a.midnightFuel)!=null&&y.collected?"checked":""}>
                  Midnight
                </label>
                <label class="check-chip ${(w=a.breakfast)!=null&&w.collected?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="food" data-key="breakfast" ${(E=a.breakfast)!=null&&E.collected?"checked":""}>
                  Breakfast
                </label>
                <label class="check-chip ${(L=a.lunch)!=null&&L.collected?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="food" data-key="lunch" ${(I=a.lunch)!=null&&I.collected?"checked":""}>
                  Lunch
                </label>
              </div>
            </td>
            <td>
              <div class="chip-group">
                <label class="check-chip ${(C=d.r1)!=null&&C.attended?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="review" data-key="r1" ${(x=d.r1)!=null&&x.attended?"checked":""}>
                  R1: Idea
                </label>
                <label class="check-chip ${(B=d.r2)!=null&&B.attended?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="review" data-key="r2" ${(T=d.r2)!=null&&T.attended?"checked":""}>
                  R2: Logic
                </label>
                <label class="check-chip ${(S=d.r3)!=null&&S.attended?"checked":""}">
                  <input type="checkbox" data-team="${e.id}" data-type="review" data-key="r3" ${(A=d.r3)!=null&&A.attended?"checked":""}>
                  R3: Pitch
                </label>
              </div>
            </td>
          </tr>
        `}),g.innerHTML=o,g.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",async a=>{const d=e.getAttribute("data-team"),l=e.getAttribute("data-type"),s=e.getAttribute("data-key"),i=e.checked,r=e.closest(".check-chip");r.classList.toggle("checked",i);try{await fetch("/api/coordinator/mark",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({teamId:d,type:l,key:s,value:i})});const c=p.find(h=>h.id===d);c&&(l==="food"?(c.food||(c.food={}),c.food[s]={collected:i}):l==="review"&&(c.reviews||(c.reviews={}),c.reviews[s]={attended:i})),M()}catch(c){console.error("Error saving checkmark:",c),e.checked=!i,r.classList.toggle("checked",!i)}})})}q.addEventListener("input",t=>{D=t.target.value,$()});document.querySelectorAll("#domain-filters .f-pill").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("#domain-filters .f-pill").forEach(n=>n.classList.remove("active")),t.classList.add("active"),k=t.getAttribute("data-domain"),$()})});
