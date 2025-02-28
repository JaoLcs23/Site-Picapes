//Seleciona todos os elementos da classe item
var slides = document.querySelectorAll('.item');

//Seleciona as setas de next e prev
var next = document.querySelector(".right-slide");
var prev = document.querySelector(".left-slide");

//Armazena o número total de itens na lista 'slides'
var totalSlides = slides.length;
var index = 0;

next.addEventListener('click', () =>{
    //se o "ir" foi pressionado
    index++;

    if(index==totalSlides){
        index=0;
    }
    ativar()
})

prev.addEventListener('click', () =>{
    //se o "voltar" foi pressionado
    if(index==0){
        index=totalSlides-1; //Volta para o último slide
    }
    else{
        index--; //retorna para o índice do slide anterior
    }
    ativar()
})

function ativar() {
    for(i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}