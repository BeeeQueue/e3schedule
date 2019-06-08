"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function e(e){var t="general";return e.includes("youtube")&&(t="youtube"),e.includes("twitch")&&(t="twitch"),e.includes("mixer")&&(t="mixer"),{type:t,url:e}}var n,t,o,a,c=[{company:{name:"EA Play",logo:"ea.svg"},time:new Date("June 8 2019 16:30 UTC"),links:[e("https://www.twitch.tv/ea"),e("https://www.youtube.com/channel/UCIHBybdoneVVpaQK7xMz1ww")]},{company:{name:"Microsoft",logo:"microsoft.svg"},time:new Date("June 9 2019 4:00 pm EDT"),links:[e("https://mixer.com/xbox")]},{company:{name:"Bethesda",logo:"bethesda.svg"},time:new Date("June 9 2019 8:30 pm EDT"),links:[e("https://www.twitch.tv/Bethesda"),e("https://www.youtube.com/Bethesda"),e("https://mixer.com/Bethesda")]},{company:{name:"Devolver Digital",logo:"devolver_digital.svg"},time:new Date("June 9 2019 11:00 pm EDT"),links:[e("https://www.twitch.tv/devolverdigital"),e("https://www.youtube.com/user/pcgamer"),e("https://mixer.com/pcgamer")]},{company:{name:"UploadVR",logo:"upload_vr.svg"},time:new Date("June 10 2019 16:00 UTC"),links:[e("https://www.youtube.com/channel/UCqDMvCa1tGak6AmijajiKOw")]},{company:{name:"PC Gaming Show",logo:"pc_gaming.svg"},time:new Date("June 10 2019 17:00 UTC"),links:[e("https://www.twitch.tv/pcgamer")]},{company:{name:"Limited Run",logo:"limited_run.svg"},time:new Date("June 10 2019 19:00 UTC"),links:[e("https://www.twitch.tv/limitedrungames")]},{company:{name:"Ubisoft",logo:"ubisoft.svg"},time:new Date("June 10 2019 20:00 UTC"),links:[e("https://www.twitch.tv/ubisoft"),e("https://www.youtube.com/user/ubisoft"),e("https://mixer.com/pcgamer")]},{company:{name:"Kinda Funny Showcase",logo:"kinda_funny_showcase.svg"},time:new Date("June 10 2019 23:00 UTC"),links:[e("https://www.youtube.com/kindafunnygames")]},{company:{name:"Square Enix",logo:"square_enix.svg"},time:new Date("June 11 2019 01:00 UTC"),links:[e("https://e3.square-enix-games.com")]},{company:{name:"Nintendo Direct",logo:"nintendo_direct.svg"},time:new Date("June 11 2019 16:00 UTC"),links:[e("https://e3.nintendo.com/"),e("https://www.youtube.com/channel/UCGIY_O-8vW4rfX98KlMkvRg")]}],m=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.schedule=e,this.el='\n      <div class="conference">\n        <div class="company">'.concat(e.company.name,'</div>\n        <div class="lower">\n          ').concat(this.mapHTML(e.links,function(e){return'\n              <a class="link '.concat(e.type,'" href="').concat(e.url,'" target="_blank" rel="noref">\n                <img src="img/').concat(e.type,'.svg" alt="').concat(e.type,'"/>\n              </a>\n            ')}),'\n          <div class="time">').concat(this.getTime(),"</div>\n        </div>\n      </div>\n    ")}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(t,[{key:"getTime",value:function(){return Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(this.schedule.time)}},{key:"mapHTML",value:function(e,t){return e.map(function(e){return t(e).trim()}).join("\n")}},{key:"getDayOfMonth",value:function(){return Number(Intl.DateTimeFormat(void 0,{day:"numeric"}).format(this.schedule.time))}},{key:"getDayString",value:function(){return Intl.DateTimeFormat(void 0,{weekday:"long",month:"long",day:"numeric"}).format(this.schedule.time)}},{key:"appendTo",value:function(e){e.insertAdjacentHTML("beforeend",this.el)}}]),t}();n=document.getElementById("container"),t=c.map(function(e){return new m(e)}),o=null,a=-1,t.forEach(function(e){var t=e.getDayOfMonth();a!==t&&(a=t,(o=document.createElement("section")).classList.add("day"),n.append(o),o.insertAdjacentHTML("beforebegin",'<h1 class="title">'.concat(e.getDayString(),"</h1>"))),e.appendTo(o)});var r=[],s=document.getElementById("notification-checkbox");s.onchange=function(e){e.currentTarget.checked?u():l()};var u=function t(){"granted"!==Notification.permission&&Notification.requestPermission().then(function(e){if("granted"===e)return t();s.checked=!1}),c.forEach(function(e){var t=e.time.getTime(),n=Date.now();if(!(t<=n)){var i=setTimeout(function(){new Notification("".concat(e.company.name,"'s E3 has started!"),{vibrate:[500,500,500,500,500]}).onclick=function(){location.href=e.links[0].url}},t-n);r.push(i)}})},l=function(){r.forEach(function(e){return clearTimeout(e)}),r.splice(0,r.length)};
//# sourceMappingURL=index.js.map