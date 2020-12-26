window.addEventListener("load", function() {
    let imagenesportada = [];
    let indiceSlider = 0;
    imagenesportada [0] = "/recursos/portada1.png";
    imagenesportada [1] = "/recursos/portada2.png";
        function cambiarImagenes() {
            document.getElementById("imagenportada").src=imagenesportada [indiceSlider];
            if(indiceSlider < 1){indiceSlider++;}
            else{indiceSlider = 0;}
        }       
    
   setInterval(cambiarImagenes, 2000);
});

let opacity = 0;
let intervalTransition = 0;
function fadeOut () {
    intervalTransition = setInterval(hide, 200);
}
function hide() {
    let imagenEsconder = document.getElementById("imagenportada");
    opacity = Number(window.getComputedStyle(imagenEsconder).getPropertyValue("opacity"));
    if(opacity>0){opacity=opacity-0.1; imagenEsconder.style.opacity=opacity;}
    else{clearInterval(intervalTransition);}
}

function fadeIn() {
    intervalTransition = setInterval(show, 200);
    alert("Funciona");
    console.log("funciona");
}
function show() {
    let imagenMostrar = document.getElementById("imagenportada");
    opacity = Number(window.getComputedStyle(imagenMostrar).getPropertyValue("opacity"));
    if(opacity<1){opacity=opacity+0.1; imagenEsconder.style.opacity=opacity;}
    else{clearInterval(intervalTransition);}
}

