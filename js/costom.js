var percentFlag=!1;function essayScroll(){const e=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;result<=99||(result=99),!percentFlag&&e+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?setTimeout((()=>{waterfall("#waterfall")}),500):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const t=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<t||90<result)&&(percentFlag=!0)}function replaceAll(e,t,n){return e.split(t).join(n)}var Tlp={diffDate:function(e,t=!1){const n=new Date,l=new Date(e),a=n.getTime()-l.getTime(),o=36e5,s=24*o;let c;if(t){const e=a/s,t=a/o,n=a/6e4;c=a/2592e6>=1?l.toLocaleDateString().replace(/\//g,"-"):e>=1?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.day:t>=1?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.hour:n>=1?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just}else c=parseInt(a/s);return c},changeTimeInEssay:function(){document.querySelector("#bber")&&document.querySelectorAll("#bber time").forEach((function(e){var t=e,n=t.getAttribute("datetime");t.innerText=Tlp.diffDate(n,!0),t.style.display="inline"}))},reflashEssayWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},commentText:function(e){"undefined"!=e&&"null"!=e||(e="好棒！");var t=document.getElementsByClassName("el-textarea__inner")[0],n=document.createEvent("HTMLEvents");if(t){n.initEvent("input",!0,!0);var l=replaceAll(e,"\n","\n> ");t.value="> "+l+"\n\n",t.dispatchEvent(n);var a=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,a-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}},initIndexEssay:function(){setTimeout((()=>{let e=new Swiper(".essay_bar_swiper_container",{passiveListeners:!0,direction:"vertical",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0}),t=document.getElementById("bbtalk");null!==t&&(t.onmouseenter=function(){e.autoplay.stop()},t.onmouseleave=function(){e.autoplay.start()})}),100)}};Tlp.initIndexEssay(),Tlp.changeTimeInEssay(),Tlp.reflashEssayWaterFall();