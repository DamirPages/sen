window.closeModal=e=>{document.querySelector(e).classList.remove("active"),document.body.style.overflow=""};window.openModal=e=>{document.querySelector(e).classList.add("active"),document.body.style.overflow="hidden"};const k=document.querySelectorAll(".modal__overlay, [data-modal-close]"),B=document.querySelectorAll("[data-modal-open]");B.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-modal-open");window.openModal(t)})});k.forEach(e=>{const t=e.closest(".modal").getAttribute("id");e.addEventListener("click",()=>window.closeModal(`#${t}`))});const I=document.querySelectorAll("a");I.forEach(e=>{e.addEventListener("click",t=>{e.getAttribute("href")==="#"&&t.preventDefault()})});const M=document.querySelectorAll(".input");M.forEach(e=>{e.addEventListener("input",()=>{e.value.length>0?e.classList.add("input--filled"):e.classList.remove("input--filled")})});function z(){const e=document.querySelector(".test__container");if(!e)return;const t=e.querySelectorAll(".test__item"),n=document.querySelector("#current-question"),s=document.querySelector("#total-questions"),m=document.querySelector("#progress"),i=document.querySelector("#progress-bar");s&&(s.textContent=t.length),n&&(n.textContent=1),m.textContent="0%",i.style.width="0%",t.forEach((p,r)=>{const x=p.querySelectorAll("input"),L=p.querySelector(".modal__button");x.forEach(_=>{_.addEventListener("change",()=>{!!p.querySelector("input:checked")?L.disabled=!1:L.disabled=!0})}),L.addEventListener("click",()=>{r+1<t.length&&(e.querySelector(".test__item.active").classList.remove("active"),t[r+1].classList.add("active"),n.textContent=r+2,m.textContent=`${Math.round((r+1)/t.length*100)}%`,i.style.width=`${Math.round((r+1)/t.length*100)}%`)})})}z();let d=288,a=0,b=!1,l=null,o=null,y=null,f=null,v=null,w=null,c=null,S=null,E=null,q=null,g=null,A=null,u=null;const h=document.querySelector("#check-input"),F=document.querySelector(".upload-file");function D(){l=document.getElementById("video"),o=document.getElementById("canvas"),y=document.getElementById("photo"),f=document.getElementById("startbutton"),v=document.getElementById("savebutton"),c=document.getElementById("imgContainer"),S=document.querySelector("#file-name"),E=document.querySelector("#file-size"),q=document.querySelector("#file-format"),g=document.querySelector("#result-file-info"),A=document.querySelector(".result__close"),u=document.querySelector("#final-result-file"),!(!h||!F)&&(f.addEventListener("click",function(e){c.classList.add("hide"),l.classList.remove("hide"),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(t){l.srcObject=t,l.play(),f.classList.add("hide"),v.classList.remove("hide"),w=t.getTracks()[0]}).catch(function(t){console.log("An error occurred: "+t)})}),l.addEventListener("canplay",function(e){b||(a=l.videoHeight/(l.videoWidth/d),l.setAttribute("width",d),l.setAttribute("height",a),o.setAttribute("width",d),o.setAttribute("height",a),b=!0)},!1),v.addEventListener("click",function(e){R(),e.preventDefault()},!1),h.addEventListener("change",function(e){const t=e.target.files[0];if(t){const n=`${(Math.round(+t.size/1024)/1e3).toFixed(2)}MB`,s=t.name.split(".").pop().toUpperCase(),m=t.name;S.textContent=m,E.textContent=n,q.textContent=s;const i=new FileReader;i.readAsDataURL(t),i.addEventListener("load",function(){y.setAttribute("src",i.result)}),c.classList.remove("hide"),g.classList.remove("hide"),U(t,u)}else g.classList.add("hide"),u.value="",c.classList.add("hide")}),A.addEventListener("click",function(e){h.value=null,h.dispatchEvent(new Event("change")),c.classList.add("hide")}),C())}function C(){let e=o.getContext("2d");e.fillStyle="#AAA",e.fillRect(0,0,o.width,o.height);let t=o.toDataURL("image/png");y.setAttribute("src",t),u.value=""}function R(){let e=o.getContext("2d");if(a){o.width=d,o.height=a,e.drawImage(l,0,0,d,a);let t=o.toDataURL("image/png");y.setAttribute("src",t),u.value=t,S.textContent="Фото с камеры",E.textContent=$(t),q.textContent="PNG",g.classList.remove("hide")}else C();f.classList.remove("hide"),v.classList.add("hide"),w.stop(),l.classList.add("hide"),c.classList.remove("hide")}function U(e,t){t.value="";let n=new FileReader;n.readAsDataURL(e),n.onload=function(){t.value=n.result},n.onerror=function(s){console.log("Error: ",s)}}function $(e){let t=1;e.endsWith("==")&&(t=2);const n=e.length*(3/4)-t;return`${(+Math.round(n/1024)/1e3).toFixed(2)}MB`}D();
