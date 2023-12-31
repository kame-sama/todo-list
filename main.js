(()=>{"use strict";function t(t){let{parent:e,type:s,id:i,classes:a,content:n,attributes:l}=t;const d=document.querySelector(e),o=document.createElement(s);i&&(o.id=i),a&&(o.className=a),n&&(o.innerHTML=n),l&&l.forEach((t=>{o.setAttribute(t.name,t.value)})),d.appendChild(o)}function e(t){const e=[],s=[];return{title:t,tasks:e,completed:s,add:(t,s,i,a)=>{e.push(function(t,e,s,i){return{title:t,description:e,date:s,priority:i}}(t,s,i,a))},complete:t=>{s.push(...e.splice(t,1))},redo:t=>{e.push(...s.splice(t,1))},remove:t=>{e.splice(t,1)},removeCompleted:t=>{s.splice(t,1)}}}const s={lists:[e("Default")],index:0,add(t){this.lists.push(e(t)),this.index=this.lists.length-1},remove(){this.lists.splice(this.index,1),this.index-=1}};function i(){document.querySelector(".lists").textContent="",s.lists.forEach(((e,i)=>{t({parent:".lists",type:"li",classes:i===s.index?"selected":"",content:e.title,attributes:[{name:"data-index",value:i}]})}))}function a(){const e=document.querySelector(".tasks"),i=document.querySelector(".completed");e.textContent="",i.textContent="",[s.lists[s.index].tasks,s.lists[s.index].completed].forEach(((e,s)=>{e.forEach(((e,i)=>{t({parent:0===s?".tasks":".completed",type:"li",classes:`${e.priority}-priority`,content:`\n            <div class="task-complete" data-complete="${i}"></div>\n            <div class="task-title">${e.title}</div>\n            <div class="task-description">${e.description}</div>\n            <div class="task-date">${e.date}</div>\n            <div class="task-delete" data-del="${i}">delete</div>`,attributes:[{name:"data-index",value:`${i}`}]})}))}))}function n(){const t=[];s.lists.forEach(((e,s)=>{t.push({title:e.title,tasks:[],completed:[]}),e.tasks.forEach((e=>{t[s].tasks.push({title:e.title,description:e.description,date:e.date,priority:e.priority})})),e.completed.forEach((e=>{t[s].completed.push({title:e.title,description:e.description,date:e.date,priority:e.priority})}))}));const e=JSON.stringify(t);localStorage.setItem("todo",e)}document.querySelector("body").innerHTML='\n    <div class="content">\n      <header class="main-header">\n        <h1 data-content="TO DO!">TO DO!</h1>\n      </header>\n      <nav>\n        <div class="buttons">\n          <div class="icon new-list-button">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n              <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />\n            </svg>\n          </div>\n          <div class="icon edit-list-button">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />\n            </svg>\n          </div>\n        </div>\n        <ul class="lists">\n        </ul>\n        <div class="list-pop-up">\n          <header class="secondary-header">\n            <h2>Create list</h2>\n            <div class="icon list-close">\n              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                <path\n                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"\n                />\n              </svg>\n            </div>\n          </header>\n          <form>\n            <label for="list-title">\n              <span>Title:</span>\n              <textarea id="list-title" maxlength=19"></textarea>\n            </label>\n            <button id="list-submit">Done</button>\n          </form>\n        </div>\n        <div class="list-edit">\n          <div class="icon">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n              <path\n                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"\n              />\n            </svg>\n          </div>\n          <div class="list-to-edit">Default</div>\n          <button id="list-rename">Rename</button>\n          <button id="list-delete">Delete</button>\n        </div>\n      </nav>\n      <main>\n        <div class="buttons">\n          <div class="icon new-task-button">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n              <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />\n            </svg>\n          </div>\n        </div>\n        <ul class="tasks">\n        </ul>\n        <ul class="completed">\n        </ul>\n      </main>\n      <div class="task-pop-up">\n      <header class="secondary-header">\n        <h2>Create task</h2>\n        <div class="icon">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n            <path\n              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"\n            />\n          </svg>\n        </div>\n      </header>\n      <form>\n        <label for="task-title">\n          <span>Title:</span>\n          <textarea id="task-title" maxlength="30"></textarea>\n        </label>\n        <label for="task-description">\n          <span>Description:</span>\n          <textarea id="task-description" maxlength="115"></textarea>\n        </label>\n        <label for="task-date">\n          <span>Due Date:</span>\n          <input type="date" id="task-date" />\n        </label>\n        <label for="task-priority">\n          <span>Priority:</span>\n          <select id="task-priority">\n            <option value="none" selected disabled>---</option>\n            <option value="low">Low!</option>\n            <option value="medium">Medium!!</option>\n            <option value="high">High!!!</option>\n          </select>\n        </label>\n        <button id="task-submit">Done</button>\n      </form>\n    </div>\n    </div>',function(){const t=localStorage.getItem("todo");t&&JSON.parse(t).forEach(((t,e)=>{0===e&&(s.lists[0].title=t.title),e>0&&s.add(t.title),t.tasks.forEach((t=>{s.lists[e].add(t.title,t.description,t.date,t.priority)})),t.completed.forEach((t=>{s.lists[e].add(t.title,t.description,t.date,t.priority),s.lists[e].complete(s.lists[e].tasks.length-1)}))}))}(),i(),a(),function(){const t=document.querySelector(".new-list-button"),e=document.querySelector(".edit-list-button"),l=document.querySelector(".lists"),d=document.querySelector(".list-pop-up"),o=document.querySelector(".list-pop-up .icon"),c=document.querySelector(".list-pop-up h2"),r=document.querySelector(".list-edit"),u=document.querySelector(".list-edit .icon"),v=document.querySelector(".new-task-button"),p=document.querySelector(".task-pop-up"),m=document.querySelector(".task-pop-up .icon"),g=document.querySelector(".task-pop-up h2"),b=document.querySelector("#list-title"),x=document.querySelector("#list-submit"),L=document.querySelector("#list-rename"),h=document.querySelector("#list-delete"),y=document.querySelector(".list-to-edit"),k=document.querySelector("#task-title"),S=document.querySelector("#task-description"),f=document.querySelector("#task-date"),q=document.querySelector("#task-priority"),w=document.querySelector("#task-submit"),E=document.querySelector(".tasks"),A=document.querySelector(".completed");let H,V,C=!1;t.addEventListener("click",(()=>{const t=document.querySelector(".active");t&&t.classList.toggle("active"),d.classList.toggle("active"),b.value="",b.select(),x.setAttribute("disabled",""),C=!1,c.textContent="Create list"})),b.addEventListener("input",(()=>{""===b.value?x.setAttribute("disabled",""):x.removeAttribute("disabled","")})),x.addEventListener("click",(t=>{t.preventDefault(),C?s.lists[s.index].title=b.value:s.add(b.value),d.classList.toggle("active"),i(),a(),n()})),o.addEventListener("click",(()=>{d.classList.toggle("active")})),e.addEventListener("click",(()=>{const t=document.querySelector(".active");t&&t.classList.toggle("active"),r.classList.toggle("active"),y.textContent=s.lists[s.index].title,0===s.index?h.setAttribute("disabled",""):h.removeAttribute("disabled","")})),h.addEventListener("click",(()=>{s.remove(),r.classList.toggle("active"),i(),a(),n()})),L.addEventListener("click",(()=>{C=!0,c.textContent="Rename list",r.classList.toggle("active"),d.classList.toggle("active"),b.value=s.lists[s.index].title,b.select()})),u.addEventListener("click",(()=>{r.classList.toggle("active")})),l.addEventListener("click",(t=>{t.target.dataset.index&&+t.target.dataset.index!==s.index&&(s.index=+t.target.dataset.index,i(),a())})),v.addEventListener("click",(()=>{C=!1;const t=document.querySelector(".active");t&&t.classList.toggle("active"),p.classList.toggle("active"),k.value="",S.value="",f.value="",q.value="",w.setAttribute("disabled",""),k.removeAttribute("disabled",""),S.removeAttribute("disabled",""),f.removeAttribute("disabled",""),q.removeAttribute("disabled",""),g.textContent="Create task"})),k.addEventListener("input",(()=>{""===k.value?w.setAttribute("disabled",""):w.removeAttribute("disabled","")})),w.addEventListener("click",(t=>{t.preventDefault(),C?(s.lists[s.index][V][H].title=k.value,s.lists[s.index][V][H].description=S.value,s.lists[s.index][V][H].date=f.value,s.lists[s.index][V][H].priority=q.value):s.lists[s.index].add(k.value,S.value,f.value,q.value),p.classList.toggle("active"),a(),n()})),m.addEventListener("click",(()=>{p.classList.toggle("active")})),E.addEventListener("click",(t=>{if(t.target.dataset.complete){s.lists[s.index].complete(t.target.dataset.complete);const e=document.querySelector(".active");e&&e.classList.remove("active"),a(),n()}if(t.target.dataset.del&&(s.lists[s.index].remove(t.target.dataset.del),a(),n()),t.target.dataset.index){C=!0,g.textContent="Edit task",V="tasks";const e=document.querySelector(".active");e&&e.classList.toggle("active"),p.classList.toggle("active"),H=t.target.dataset.index,k.value=s.lists[s.index].tasks[t.target.dataset.index].title,S.value=s.lists[s.index].tasks[t.target.dataset.index].description,f.value=s.lists[s.index].tasks[t.target.dataset.index].date,q.value=s.lists[s.index].tasks[t.target.dataset.index].priority,k.removeAttribute("disabled",""),S.removeAttribute("disabled",""),f.removeAttribute("disabled",""),q.removeAttribute("disabled",""),w.removeAttribute("disabled","")}})),A.addEventListener("click",(t=>{if(t.target.dataset.complete){s.lists[s.index].redo(t.target.dataset.complete);const e=document.querySelector(".active");e&&e.classList.remove("active"),a(),n()}if(t.target.dataset.del&&(s.lists[s.index].removeCompleted(t.target.dataset.del),a(),n()),t.target.dataset.index){C=!0,g.textContent="Edit task",V="completed";const e=document.querySelector(".active");e&&e.classList.toggle("active"),p.classList.toggle("active"),H=t.target.dataset.index,k.value=s.lists[s.index].completed[t.target.dataset.index].title,S.value=s.lists[s.index].completed[t.target.dataset.index].description,f.value=s.lists[s.index].completed[t.target.dataset.index].date,q.value=s.lists[s.index].completed[t.target.dataset.index].priority,k.setAttribute("disabled",""),S.setAttribute("disabled",""),f.setAttribute("disabled",""),q.setAttribute("disabled",""),w.setAttribute("disabled","")}}))}()})();
//# sourceMappingURL=main.js.map