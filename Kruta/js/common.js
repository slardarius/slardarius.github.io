
$(document).ready(function(){

    var menu = $(".header__top_line");
    
           $(window).scroll(function(){
               if ( $(this).scrollTop() > 140 && menu.hasClass("default") ){
                   menu.removeClass("default").addClass("fixed");
               } else if($(this).scrollTop() <= 140 && menu.hasClass("fixed")) {
                   menu.removeClass("fixed").addClass("default");
               }
           });

    var owl_menu = $("#Carusel_Menu");
    var owl_reviews = $('#Carusel_Reviews');
    owl_reviews.owlCarousel({
        center:true,
        items: 1
    });
    $('.next_slide_reviews').click(function() {
        owl_reviews.trigger('next.owl.carousel');
    })
    $('.prev_slide_reviews').click(function() {
        owl_reviews.trigger('prev.owl.carousel', [300]);
    })
    owl_menu.owlCarousel({
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1,
                center:true,
            },
            600:{
                items:3,
                nav:false
            }
        }
    });
    $('.next_slide_menu').click(function() {
        owl_menu.trigger('next.owl.carousel');
    })
    $('.prev_slide_menu').click(function() {
        owl_menu.trigger('prev.owl.carousel', [300]);
    })
  });