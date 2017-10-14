
$(document).ready(function(){

   var tovar = $('.tovar');
   var zakaz = '';
    tovar.on('click',function(){
        zakaz += $(this).attr('value') + ';' ;
        $('#zakaz').val('' + zakaz);
        alert('Вы можете так-же выбрать еще блюда.');
        
    });
    tovar.click(function() {
        $.scrollTo($(".Callback__forma"), 800, {
            offset: -100
        });
    });

    /* КАРТОЧКИ */
    var days = ['Monday','Tuesday','Wednesday','Thursday','Saturday'];

    $('.day').on('click',function(){
        for(var i =0; i < days.length; i++){
            if($(this).attr('id') == days[i]){
                
                for(var j =0; j < days.length;j++){
                   
                    $('.' + days[j]).addClass('HIDE');
                    $('.day').removeClass('ACTIVE');
                }
                $(this).addClass('ACTIVE');
                $('.' + days[i]).removeClass('HIDE').attr('id','Carusel_Menu');
            }    
        }
    });
    

    /* МЕНЮ */
    $("#Menu").click(function() {
		$.scrollTo($(".Menu"), 800, {
			offset: -100
		});
    });
    $("#AboutUs").click(function() {
		$.scrollTo($(".About"), 800, {
			offset: -60
		});
    });
    $("#Reviews").click(function() {
		$.scrollTo($(".Reviews"), 800, {
			offset: -100
		});
    });
    $("#Pay").click(function() {
		$.scrollTo($(".Callback"), 800, {
			offset: -100
		});
	});
    var menu = $(".header__top_line");
    
           $(window).scroll(function(){
               if ( $(this).scrollTop() > 140 && menu.hasClass("default") ){
                   menu.removeClass("default").addClass("fixed");
               } else if($(this).scrollTop() <= 140 && menu.hasClass("fixed")) {
                   menu.removeClass("fixed").addClass("default");
               }
           });
    
    /* СЛАЙДЕР'Ы */
    var owl_menu = $(".owl-carousel");
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