var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--mobile-nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--mobile-closed")?(navMain.classList.remove("main-nav--mobile-closed"),navMain.classList.add("main-nav--mobile-opened")):(navMain.classList.add("main-nav--mobile-closed"),navMain.classList.remove("main-nav--mobile-opened"))});for(var сontactsMap,center,btn=document.getElementsByClassName("btn-js"),modal=document.querySelector(".modal-form"),overlay=document.querySelector(".overlay"),i=0;i<btn.length;i++)btn[i].addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal-form--show"),overlay.classList.add("overlay--show")});function initMap(){сontactsMap=new google.maps.Map(document.getElementById("contactsMap"),{center:{lat:59.938969,lng:30.3227574},zoom:18});new google.maps.Marker({position:center,"сontactsMap":сontactsMap,icon:"img/icon-map-pin.svg"})}window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modal.classList.contains("modal-form--show")&&(modal.classList.remove("modal-form--show"),overlay.classList.remove("overlay--show")))}),overlay.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal-form--show"),overlay.classList.remove("overlay--show")});