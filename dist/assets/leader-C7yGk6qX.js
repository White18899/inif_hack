import"./modulepreload-polyfill-B5Qt9EMX.js";let t=null,o=null,p={email:"",password:""};const y=document.getElementById("sec-login"),O=document.getElementById("sec-dashboard"),P=document.getElementById("form-leader-login"),u=document.getElementById("login-err"),h=document.getElementById("btn-logout"),g=document.getElementById("btn-refresh");async function E(e,s,a=!1){a||(u.style.display="none");try{const l=await fetch("/api/teams/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s})}),i=await l.json();if(!l.ok||!i.success)throw new Error(i.error||"Authentication failed.");t=i.team,o=i.domainInfo,p={email:e,password:s};try{const n=JSON.stringify({email:e,password:s});sessionStorage.setItem("infinity_leader_auth",n),localStorage.setItem("infinity_leader_auth",n)}catch{}return D(),!0}catch(l){if(!a)u.textContent=l.message,u.style.display="block";else try{sessionStorage.removeItem("infinity_leader_auth"),localStorage.removeItem("infinity_leader_auth")}catch{}return!1}}g.addEventListener("click",async()=>{g.classList.add("spinning");try{let e=p;if(!e.email||!e.password)try{const s=sessionStorage.getItem("infinity_leader_auth")||localStorage.getItem("infinity_leader_auth");s&&(e=JSON.parse(s))}catch{}e.email&&e.password?await E(e.email,e.password,!0):window.location.reload()}catch(e){console.error("Leader portal refresh failed:",e)}finally{setTimeout(()=>{g.classList.remove("spinning")},500)}});P.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("txt-email").value.trim(),a=document.getElementById("txt-password").value;await E(s,a,!1)});h.addEventListener("click",()=>{try{sessionStorage.removeItem("infinity_leader_auth"),localStorage.removeItem("infinity_leader_auth")}catch{}t=null,o=null,p={email:"",password:""},O.style.display="none",y.style.display="block",h.style.display="none"});try{const e=sessionStorage.getItem("infinity_leader_auth")||localStorage.getItem("infinity_leader_auth");if(e){const s=JSON.parse(e);s.email&&s.password&&(y.style.display="none",E(s.email,s.password,!0).then(a=>{a||(y.style.display="block")}))}}catch{y.style.display="block"}function D(){var l,i,n,d,r,m,b,v,I,S,T,L,w,N,B,C,k,$,_,M,A;y.style.display="none",O.style.display="block",h.style.display="inline-block",document.getElementById("dash-team-id").textContent=t.id,document.getElementById("dash-team-name").textContent=t.teamName,document.getElementById("dash-college").textContent=t.college,document.getElementById("dash-team-size").textContent=`${t.teamSize} Members`,document.getElementById("dash-room").textContent=t.roomAllocated||"Lab Block 3";const e=(t.preferredDomain||"mind").toUpperCase();document.getElementById("dash-domain-tag").textContent=`${e} STONE // ${(o==null?void 0:o.domainName)||""}`;const s=document.getElementById("dash-payment-badge");((l=t.payment)==null?void 0:l.status)==="verified"?s.innerHTML=`<div class="status-badge status-verified">✓ PAYMENT VERIFIED (UTR: ${t.payment.utr})</div>`:s.innerHTML=`<div class="status-badge status-pending">⏳ PAYMENT UNDER VERIFICATION (UTR: ${((i=t.payment)==null?void 0:i.utr)||"N/A"})</div>`,c("status-r1",(d=(n=t.reviews)==null?void 0:n.r1)==null?void 0:d.attended),c("status-r2",(m=(r=t.reviews)==null?void 0:r.r2)==null?void 0:m.attended),c("status-r3",(v=(b=t.reviews)==null?void 0:b.r3)==null?void 0:v.attended),c("food-highTea",(S=(I=t.food)==null?void 0:I.highTea)==null?void 0:S.collected),c("food-dinner",(L=(T=t.food)==null?void 0:T.dinner)==null?void 0:L.collected),c("food-midnightFuel",(N=(w=t.food)==null?void 0:w.midnightFuel)==null?void 0:N.collected),c("food-breakfast",(C=(B=t.food)==null?void 0:B.breakfast)==null?void 0:C.collected),c("food-lunch",($=(k=t.food)==null?void 0:k.lunch)==null?void 0:$.collected);const a=document.getElementById("roster-list");a.innerHTML=`
        <div class="member-row">
          <div>
            <strong>${((_=t.leader)==null?void 0:_.name)||"Leader"}</strong>
            <div style="font-size:0.7rem; color:#999;">${(M=t.leader)==null?void 0:M.email} • ${(A=t.leader)==null?void 0:A.phone}</div>
          </div>
          <span class="m-role">TEAM LEADER</span>
        </div>
      `,(t.members||[]).forEach((f,R)=>{a.innerHTML+=`
          <div class="member-row">
            <div>
              <strong>${f.name||"Member "+(R+2)}</strong>
              <div style="font-size:0.7rem; color:#999;">${f.email} • ${f.phone}</div>
            </div>
            <span class="m-role">MEMBER 0${R+2}</span>
          </div>
        `}),x()}function c(e,s){const a=document.getElementById(e);a&&(s?(a.className="badge-check badge-done",a.textContent="RECEIVED / ATTENDED"):(a.className="badge-check badge-wait",a.textContent="PENDING"))}function x(){const e=document.getElementById("ps-container"),s=document.getElementById("ps-status-pill");if(!(o==null?void 0:o.isPsReleased)){s.textContent="RELEASE STATUS: LOCKED",s.style.color="#ffd000",e.innerHTML=`
          <div class="ps-locked-box">
            <div class="lock-icon">🔒</div>
            <h4 class="lock-title">PROBLEM STATEMENTS LOCKED</h4>
            <p class="lock-sub">
              Classified problem statements for the <strong>${(o==null?void 0:o.domainName)||""}</strong> domain will be unlocked by the organizer command post 1 to 2 days prior to hackathon kickoff.
            </p>
          </div>
        `;return}s.textContent="RELEASE STATUS: UNLOCKED",s.style.color="#00ff88";const l=o.problemStatements||[];if(l.length===0){e.innerHTML='<p style="color:#aaa; font-size:0.85rem;">No problem statements uploaded yet for this domain.</p>';return}let i="";l.forEach(n=>{var r;const d=((r=t.selectedProblemStatement)==null?void 0:r.id)===n.id;i+=`
          <div class="ps-card ${d?"selected":""}">
            <div class="ps-meta-row">
              <span class="ps-code">${n.code}</span>
              <span class="ps-diff">${n.difficulty}</span>
            </div>
            <h4 class="ps-title">${n.title}</h4>
            <p class="ps-desc">${n.description}</p>
            <button class="btn-select-ps ${d?"active":""}" data-ps-id="${n.id}">
              ${d?"✓ CHOSEN PROBLEM STATEMENT":"SELECT THIS STATEMENT"}
            </button>
          </div>
        `}),e.innerHTML=i,e.querySelectorAll(".btn-select-ps").forEach(n=>{n.addEventListener("click",async()=>{const d=n.getAttribute("data-ps-id");n.textContent="Locking selection...";try{const m=await(await fetch("/api/teams/update-selection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p.email,password:p.password,problemStatementId:d})})).json();m.success&&(t=m.team,x())}catch(r){alert("Error selecting problem statement: "+r.message)}})})}
