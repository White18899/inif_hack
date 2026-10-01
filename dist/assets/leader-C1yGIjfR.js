import"./modulepreload-polyfill-B5Qt9EMX.js";let t=null,l=null,y={email:"",password:""};function o(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const u=document.getElementById("sec-login"),x=document.getElementById("sec-dashboard"),H=document.getElementById("form-leader-login"),f=document.getElementById("login-err"),E=document.getElementById("btn-logout"),h=document.getElementById("btn-refresh");async function b(e,s,a=!1){a||(f.style.display="none");try{const d=await fetch("/api/teams/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s})}),i=await d.json();if(!d.ok||!i.success)throw new Error(i.error||"Authentication failed.");t=i.team,l=i.domainInfo,y={email:e,password:s};try{const n=JSON.stringify({email:e,password:s});sessionStorage.setItem("infinity_leader_auth",n),localStorage.setItem("infinity_leader_auth",n)}catch{}return D(),!0}catch(d){if(!a)f.textContent=d.message,f.style.display="block";else try{sessionStorage.removeItem("infinity_leader_auth"),localStorage.removeItem("infinity_leader_auth")}catch{}return!1}}h.addEventListener("click",async()=>{h.classList.add("spinning");try{let e=y;if(!e.email||!e.password)try{const s=sessionStorage.getItem("infinity_leader_auth")||localStorage.getItem("infinity_leader_auth");s&&(e=JSON.parse(s))}catch{}e.email&&e.password?await b(e.email,e.password,!0):window.location.reload()}catch(e){console.error("Leader portal refresh failed:",e)}finally{setTimeout(()=>{h.classList.remove("spinning")},500)}});H.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("txt-email").value.trim(),a=document.getElementById("txt-password").value;await b(s,a,!1)});E.addEventListener("click",()=>{try{sessionStorage.removeItem("infinity_leader_auth"),localStorage.removeItem("infinity_leader_auth")}catch{}t=null,l=null,y={email:"",password:""},x.style.display="none",u.style.display="block",E.style.display="none"});try{const e=sessionStorage.getItem("infinity_leader_auth")||localStorage.getItem("infinity_leader_auth");if(e){const s=JSON.parse(e);s.email&&s.password&&(u.style.display="none",b(s.email,s.password,!0).then(a=>{a||(u.style.display="block")}))}}catch{u.style.display="block"}function D(){var d,i,n,r,c,p,v,S,I,T,L,w,N,B,C,k,$,M,_,A,R;u.style.display="none",x.style.display="block",E.style.display="inline-block",document.getElementById("dash-team-id").textContent=t.id,document.getElementById("dash-team-name").textContent=t.teamName,document.getElementById("dash-college").textContent=t.college,document.getElementById("dash-team-size").textContent=`${t.teamSize} Members`,document.getElementById("dash-room").textContent=t.roomAllocated||"Lab Block 3";const e=(t.preferredDomain||"mind").toUpperCase();document.getElementById("dash-domain-tag").textContent=`${e} STONE // ${(l==null?void 0:l.domainName)||""}`;const s=document.getElementById("dash-payment-badge");((d=t.payment)==null?void 0:d.status)==="verified"?s.innerHTML=`<div class="status-badge status-verified">✓ PAYMENT VERIFIED (UTR: ${o(t.payment.utr||"N/A")})</div>`:s.innerHTML=`<div class="status-badge status-pending">⏳ PAYMENT UNDER VERIFICATION (UTR: ${o(((i=t.payment)==null?void 0:i.utr)||"N/A")})</div>`,m("status-r1",(r=(n=t.reviews)==null?void 0:n.r1)==null?void 0:r.attended),m("status-r2",(p=(c=t.reviews)==null?void 0:c.r2)==null?void 0:p.attended),m("status-r3",(S=(v=t.reviews)==null?void 0:v.r3)==null?void 0:S.attended),m("food-highTea",(T=(I=t.food)==null?void 0:I.highTea)==null?void 0:T.collected),m("food-dinner",(w=(L=t.food)==null?void 0:L.dinner)==null?void 0:w.collected),m("food-midnightFuel",(B=(N=t.food)==null?void 0:N.midnightFuel)==null?void 0:B.collected),m("food-breakfast",(k=(C=t.food)==null?void 0:C.breakfast)==null?void 0:k.collected),m("food-lunch",(M=($=t.food)==null?void 0:$.lunch)==null?void 0:M.collected);const a=document.getElementById("roster-list");a.innerHTML=`
        <div class="member-row">
          <div>
            <strong>${o(((_=t.leader)==null?void 0:_.name)||"Leader")}</strong>
            <div style="font-size:0.7rem; color:#999;">${o(((A=t.leader)==null?void 0:A.email)||"")} • ${o(((R=t.leader)==null?void 0:R.phone)||"")}</div>
          </div>
          <span class="m-role">TEAM LEADER</span>
        </div>
      `,(t.members||[]).forEach((g,O)=>{a.innerHTML+=`
          <div class="member-row">
            <div>
              <strong>${o(g.name||"Member "+(O+2))}</strong>
              <div style="font-size:0.7rem; color:#999;">${o(g.email||"")} • ${o(g.phone||"")}</div>
            </div>
            <span class="m-role">MEMBER 0${O+2}</span>
          </div>
        `}),P()}function m(e,s){const a=document.getElementById(e);a&&(s?(a.className="badge-check badge-done",a.textContent="RECEIVED / ATTENDED"):(a.className="badge-check badge-wait",a.textContent="PENDING"))}function P(){const e=document.getElementById("ps-container"),s=document.getElementById("ps-status-pill");if(!(l==null?void 0:l.isPsReleased)){s.textContent="RELEASE STATUS: LOCKED",s.style.color="#ffd000",e.innerHTML=`
          <div class="ps-locked-box">
            <div class="lock-icon">🔒</div>
            <h4 class="lock-title">PROBLEM STATEMENTS LOCKED</h4>
            <p class="lock-sub">
              Classified problem statements for the <strong>${o((l==null?void 0:l.domainName)||"")}</strong> domain will be unlocked by the organizer command post 1 to 2 days prior to hackathon kickoff.
            </p>
          </div>
        `;return}s.textContent="RELEASE STATUS: UNLOCKED",s.style.color="#00ff88";const d=l.problemStatements||[];if(d.length===0){e.innerHTML='<p style="color:#aaa; font-size:0.85rem;">No problem statements uploaded yet for this domain.</p>';return}let i="";d.forEach(n=>{var c;const r=((c=t.selectedProblemStatement)==null?void 0:c.id)===n.id;i+=`
          <div class="ps-card ${r?"selected":""}">
            <div class="ps-meta-row">
              <span class="ps-code">${o(n.code)}</span>
              <span class="ps-diff">${o(n.difficulty)}</span>
            </div>
            <h4 class="ps-title">${o(n.title)}</h4>
            <p class="ps-desc">${o(n.description)}</p>
            <button class="btn-select-ps ${r?"active":""}" data-ps-id="${o(n.id)}">
              ${r?"✓ CHOSEN PROBLEM STATEMENT":"SELECT THIS STATEMENT"}
            </button>
          </div>
        `}),e.innerHTML=i,e.querySelectorAll(".btn-select-ps").forEach(n=>{n.addEventListener("click",async()=>{const r=n.getAttribute("data-ps-id");n.textContent="Locking selection...";try{const p=await(await fetch("/api/teams/update-selection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:y.email,password:y.password,problemStatementId:r})})).json();p.success&&(t=p.team,P())}catch(c){alert("Error selecting problem statement: "+c.message)}})})}
