const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
})

let imagenes = [
    "/imagenes/1.jpg",
    "/imagenes/2.jpg",
    "/imagenes/3.jpg",
    "/imagenes/4.jpg",
    "/imagenes/5.jpg",
];
document.Imagen.src = imagenes[0];

let sliderDerecha = document.querySelector(".slider-derecha");
let sliderIzquierda = document.querySelector(".slider-izquierda");

sliderDerecha.addEventListener("click", moverDerecha);

let contador = 0;

function moverDerecha(){
    contador++;
    if(contador > imagenes.length - 1)
    {
        contador = 0;
    }
    document.Imagen.src = imagenes[contador];
}
let intervalo = setInterval(moverDerecha, 2000);
sliderDerecha.addEventListener("click", function(){
    clearInterval(intervalo);
    moverDerecha();
    intervalo = setInterval(moverDerecha, 2000);
});

function moverIzquierda(){
    contador--;
    if(contador < 0){
        contador = imagenes.length -1;
    }
    document.Imagen.src = imagenes[contador];
}
sliderIzquierda.addEventListener("click", function(){
    clearInterval(intervalo);
    moverIzquierda();
    intervalo = setInterval(moverIzquierda, 2000);

})

