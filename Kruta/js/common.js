
$(document).ready(function(){

    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
     
    /* HEADER TOP_LINE */
    
    $('.header__top_line__burger').on('click',function(){
    
        $('.fa-bars').toggleClass('HIDE');
        $('.fa-times').toggleClass('HIDE');

       setTimeout(function(){
        $('.header__top_line__burger__items').toggleClass('HIDE');
        $('.fixed').toggleClass('FIXEDED');
       },250);
   
});
   
   
   /* РАБОТА С КАРТОЧКАМИ */
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
    $(".MenuLI").click(function() {
		$.scrollTo($(".Menu"), 800, {
			offset: -100
		});
    });
    $(".AboutUsLI").click(function() {
		$.scrollTo($(".About"), 800, {
			offset: -60
		});
    });
    $(".ReviewsLI").click(function() {
		$.scrollTo($(".Reviews"), 800, {
			offset: -100
		});
    });
    $(".PayLI").click(function() {
		$.scrollTo($(".Callback"), 800, {
			offset: -100
		});
	});
    var menu = $(".header__top_line");
    
           $(window).scroll(function(){

            $('.header__top_line__burger__items').addClass('HIDE');
            $('.fixed').removeClass('FIXEDED');
            $('.fa-times').addClass('HIDE');
            $('.fa-bars').removeClass('HIDE');

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