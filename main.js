
$('#google').on('click', function(){

$('.top-midle').slideToggle()

});



$(window).resize(function(){


var screenSize = $(window).width();


if(screenSize > 991) {

$('.top-midle').removeAttr('style');  

}

});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;








