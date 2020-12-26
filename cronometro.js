window.onload = function() {
    pantalla = document.getElementById("pantalla");
 }
 var isMarch = false; 
 var acumularTime = 0;
 
 
 function start () {
          if (isMarch == false) { 
             timeInicial = new Date();
             control = setInterval(cronometro,10);
             isMarch = true;
             document.getElementById("florAnimada").innerHTML = "<lottie-player src=\"https://assets4.lottiefiles.com/packages/lf20_5q8bgbxc.json\"background= \"transparent\"  speed=\"1\"  style= \"width: 300px; height: 300px;\"  loop autoplay></lottie-player>";          
             let mostrar = document.getElementById("florAnimada");
             mostrar.classList.replace("hidden", "show");
            
             };
          }
 function cronometro () { 
          timeActual = new Date();
          acumularTime = timeActual - timeInicial;
          acumularTime2 = new Date();
          acumularTime2.setTime(acumularTime); 
          cc = Math.round(acumularTime2.getMilliseconds()/10);
          ss = acumularTime2.getSeconds();
          mm = acumularTime2.getMinutes();
          if (cc < 10) {cc = "0"+cc;}
          if (ss < 10) {ss = "0"+ss;} 
          if (mm < 10) {mm = "0"+mm;}
          if (ss<=5){
            pantalla.innerHTML = "Contrae!<br>\n" + mm +":"+ ss;
          }
          if (ss>5){
            pantalla.innerHTML = "Relaja!<br>\n" + mm + ":0" + (ss-5);
          }
          if(ss>10){
            clearInterval(control);
            acumularTime = 0;
            pantalla.innerHTML = "Empieza!<br>\n00 : 00";
            clearInterval(control);
             isMarch = false;   
         
         }  
            
            /*timeInicial = new Date();
             control = setInterval(cronometro,10);
             isMarch = true;
             document.getElementById("florAnimada").innerHTML = "<lottie-player src=\"https://assets4.lottiefiles.com/packages/lf20_5q8bgbxc.json\"background= \"transparent\"  speed=\"1\"  style= \"width: 300px; height: 300px;\"  loop autoplay></lottie-player>";          
             let mostrar = document.getElementById("florAnimada");
             mostrar.classList.replace("hidden", "show"); */
          }
 
 function stop () { 
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             document.getElementById("florAnimada").innerHTML = "";
             let ocultar = document.getElementById("florAnimada");
             ocultar.classList.replace("show", "hidden");
             }     
          }      
 
 function resume () {
          if (isMarch == false) {
             timeActu2 = new Date();
             timeActu2 = timeActu2.getTime();
             acumularResume = timeActu2-acumularTime;
             
             timeInicial.setTime(acumularResume);
             control = setInterval(cronometro,10);
             isMarch = true;
             }     
          }
 function reset () {
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             }
          acumularTime = 0;
          pantalla.innerHTML = "Empezar<br>00:00";
          document.getElementById("florAnimada").innerHTML = "";
          }