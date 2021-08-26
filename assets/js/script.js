window.onscroll = function(){
    
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if(scroll > 20){
        header.classList.add('nav-mod')
    }else if(scroll < 20){
        header.classList.remove('nav-mod')
    }

}

document.getElementById("btn-menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container-all");
nav = document.getElementById("nav");

function mostrar_menu(){
    menu.classList.toggle('move-content');
    body.classList.toggle('move-content');
    nav.classList.toggle('move-nav');
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        menu.classList.remove('move-content');
        body.classList.remove('move-content');
        nav.classList.remove('move-nav');
    }
})


/* SLIDER */
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 2000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = "translate(" + (-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        },1000)
    }
}