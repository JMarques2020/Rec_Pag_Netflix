$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionar(){
    window.open("https://help.netflix.com/pt/node/412");
}

function mensagem(){
    alert("ESTA PÁGINA É FAKE ABESTADO!!!");
}