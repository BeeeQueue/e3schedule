"use strict";function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t,e,o,i,n=[{company:{name:"EA Play",logo:"ea.svg"},time:new Date("June 7 2019 12:00 pm PDT")},{company:{name:"Microsoft",logo:"microsoft.svg"},time:new Date("June 9 2019 4:00 pm EDT")},{company:{name:"Bethesda",logo:"bethesda.svg"},time:new Date("June 9 2019 8:30 pm EDT")},{company:{name:"Devolver Digital",logo:"devolver_digital.svg"},time:new Date("June 9 2019 11:00 pm EDT")},{company:{name:"UploadVR",logo:"upload_vr.svg"},time:new Date("June 10 2019 16:00 UTC")},{company:{name:"PC Gaming Show",logo:"pc_gaming.svg"},time:new Date("June 10 2019 17:00 UTC")},{company:{name:"Limited Run",logo:"limited_run.svg"},time:new Date("June 10 2019 19:00 UTC")},{company:{name:"Ubisoft",logo:"ubisoft.svg"},time:new Date("June 10 2019 20:00 UTC")},{company:{name:"Kinda Funny Showcase",logo:"kinda_funny_showcase.svg"},time:new Date("June 10 2019 23:00 UTC")},{company:{name:"Square Enix",logo:"square_enix.svg"},time:new Date("June 11 2019 01:00 UTC")},{company:{name:"Nintendo Direct",logo:"nintendo_direct.svg"},time:new Date("June 11 2019 16:00 UTC")}],m=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.schedule=e,this.el='\n      <div class="conference">\n        <div class="company">'.concat(e.company.name,'</div>\n        <div class="time">').concat(this.getTime(),"</div>\n      </div>\n    ")}return function(e,n,t){n&&a(e.prototype,n),t&&a(e,t)}(n,[{key:"getTime",value:function(){return Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(this.schedule.time)}},{key:"getDayOfMonth",value:function(){return Number(Intl.DateTimeFormat(void 0,{day:"numeric"}).format(this.schedule.time))}},{key:"getDayString",value:function(){return Intl.DateTimeFormat(void 0,{weekday:"long",month:"long",day:"numeric"}).format(this.schedule.time)}},{key:"appendTo",value:function(e){e.insertAdjacentHTML("beforeend",this.el)}}]),n}();t=document.getElementById("container"),e=n.map(function(e){return new m(e)}),o=null,i=-1,e.forEach(function(e){var n=e.getDayOfMonth();i!==n&&(i=n,(o=document.createElement("section")).classList.add("day"),t.append(o),o.insertAdjacentHTML("beforebegin",'<h1 class="title">'.concat(e.getDayString(),"</h1>"))),e.appendTo(o)});
//# sourceMappingURL=index.js.map
