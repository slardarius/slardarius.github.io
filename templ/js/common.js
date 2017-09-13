$(document).ready(function() {

	// Акардеон
	//http://jqueryui.com/accordion/ - информация
	$(".accordion").accordion();

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$("#fds").countdown({until: austDay, format: 'yowdHMS'});

	//Документация: http://fancybox.net/howto
	$("#sd").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$("#sdf").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$("#").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 0});

	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".buttons_about_me").click(function() {
		$.scrollTo($("#first_container"), 800, {
			offset: 1
		});
	});
	$(".buttons_works").click(function() {
		$.scrollTo($("#second_container"), 800, {
			offset: 1
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".second__owl-carousel");
	owl.owlCarousel({
		items : 1,
		autoPlay : 2500,
		transitionStyle : "fade",
		responsive : {
			0: {
				items: 1,
				nav: true
			}
		}
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".slide_next").click(function() {
		owl.trigger("owl.next");
	});
	$(".slide_prev").click(function() {
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	/* Удаление фото, на Width 320px */
	var SizeWidth = window.innerWidth;
	if(SizeWidth < 415){
		hideOn('My_img', function(){
			var select = document.querySelector('.My_img');
			select.style.display = 'none';
			select.style.transition = 'all .5s leaner';
		});
		document.getElementById('col-xs-12').classList = 'col-xs-12';
		document.getElementById('col-xs-12').style.textAlign = 'center';
		document.querySelector('.next_slide_buttons_work').style.margin = '10px 50%';
	}
	function hideOn(name,callback){
		var select = document.querySelector('.' + name);
		select.style.opacity = '0';
		select.style.transition = 'all .5s ease';
	 	setInterval(function(){
	 		callback();
	 	},600);
	}

});


/* Папалакс */
$(window).scroll(function(){
	var st = $(this).scrollTop();
	$(".paralax").css({
		"transform" : "translate(0% ," + st / 13  + "px"
	})
});


