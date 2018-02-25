(function () {
    var elem = {
        preloader: document.querySelector('.preloader'),
        start: document.querySelector('.start'),
        displayer: document.querySelector('.preloader__title')
    };
    var
        images = document.images;
    imageCount = images.length;
    imageOnLoaded = 0;
    for (var i = 0; i < imageCount; i++) {
        image_clone = new Image();
        image_clone.onload = image_loaded;
        image_clone.onerror = image_loaded;
        image_clone.src = images[i].src;
    }

    function image_loaded() {
        imageOnLoaded++;
        elem.displayer.innerHTML = (((100 / imageCount) * imageOnLoaded) << 0) + '%';
        if (imageOnLoaded >= imageCount) {
            setTimeout(() => {
                elem.preloader.style.opacity = 0;
                elem.start.style.display = 'block';
                elem.start.style.opacity = 1;
            }, 1500);
        }
    }
})();

(function () {
    // Burger
    var elements = {
        block: document.querySelector('.page-nav__burger'),
        list: document.querySelectorAll('.page-nav__item')
    }
    var exit = 'fa-times';
    var open = 'fa-align-justify';
    elements.block.addEventListener('click', function () {
        if (elements.block.children[0].classList.contains('' + open)) {
            elements.block.children[0].classList.remove('' + open);
            elements.block.children[0].classList.add('' + exit);
            setTimeout(() => {
                for (var i = 0; i < elements.list.length; i++) {
                    elements.list[i].hidden = false;
                }
            }, 500);


        } else {
            elements.block.children[0].classList.remove('' + exit);
            elements.block.children[0].classList.add('' + open);
            setTimeout(() => {
                for (var i = 0; i < elements.list.length; i++) {
                    elements.list[i].hidden = true;
                }
            }, 500);
        }
    });
    var options = {
        offset: 157
      }
      var header = new Headhesive('.header', options);

})();

(function () {
    // Sliders
    $(document).ready(function () {
        $('.slide-one').owlCarousel({
            nav: false,
            dots: false,
            loop: false,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            },

        });
        $('.next-slide').click(function () {
            $('.slide-one').trigger('next.owl.carousel');
        });
        $('.prev-slide').click(function () {
            $('.slide-one').trigger('prev.owl.carousel', [300]);
        });

        $('.slide-two').owlCarousel({
            items: 1,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            nav: true,
            loop: false,
            responsive: {
                1200: {
                    items: 3
                }
            }
        });
    });
})();


(function () {
    var Acardeon = function () {
        var bln = true;
        var template = new Object();
        var object = [];
        var path = {
            Melement : document.querySelectorAll('.block-match__button')
        };
        var options = {
            index : 0,
            next : 0,
            count : 0,
            max : 400
        };
        Array.from(path.Melement).forEach(function (it, index) {
            template = {
                path : it,
                length : (it.parentNode.childNodes.length - 1),
                translater : 0,
                switcher : false
            };
            object.push(template);
        });
        var hide = function(obj){
            obj.translater = 0;
            obj.classList.remove('acardeon');
            var interval = setInterval(function () {
                obj.translater = obj.translater + 200;
                obj.style.transform = 'translateY(-' + obj.translater + '%)';
                if(obj.translater >= options.max){
                    obj.style.display = 'none';
                    options.next++;
                    options.max = options.max + 100;
                    changer(options.index,options.next);
                    if(options.next >= object[options.index].length){
                        options.max = 1200;
                        options.next = 0;
                    }
                    clearInterval(interval);
                }
            },10);
        };
        var show = function(obj){
            obj.translater = 100;
            obj.style.display = 'block';
            obj.classList.add('acardeon');
            var interval = setInterval(function () {
                obj.translater = obj.translater + 100;
                obj.style.transform = 'translateY(' + obj.translater + '%)';
                if(obj.translater >= 0){
                    options.next++;
                    obj.style.transform = 'translateY(' + 0 + '%)';
                    changer(options.index,options.next);
                    if(options.next >= object[options.index].length){
                        options.next = 0;
                    }
                    clearInterval(interval);
                }
            },100);
        };
        var changer = function (index,slc) {
            options.index = index;

            Array.from(object[index].path.parentNode.children[1].children).slice(slc,slc+1).filter(function (it) {
                if(bln) {
                    if(!it.classList.contains('acardeon')){
                        object[index].path.innerHTML = 'Приховати';
                        return show(it);
                    }
                    else {
                        return hide(it);
                        object[index].path.innerHTML = 'Докладніше';
                    }
                }
            if(!bln){
                object[index].path.innerHTML = 'Докладніше';
                return hide(it);

            }
        });
    };
        object.forEach(function(it,index){
            it.path.addEventListener('click', function () {
                bln = true;
                changer(index,options.next);
            });
        });
        var blocMatch = document.querySelectorAll('.block-match');
        blocMatch.forEach(function (it,index) {
            it.addEventListener('mouseleave', function (e) {
                if(screen.width >= 768){
                bln = false;
                changer(index,options.next);
                }
            });
        });
        window.addEventListener('mousemove', (evt) => {
            var acardeon = {
                elements: document.querySelectorAll('.block-match__inform')
            };
            var Bootstrap = {
                MOBMIN: 320,
                MOBMAX: 768,
                TABMIN: 769,
                DESCKTOP_MIN: 1200,
                DESCKTOP_MAX: 1510,
                ClienWidth: screen.width,
                ClienWidthX: screen.width / 2,
                Persent: {
                    MOB: -132,
                    DESK: -90,
                    RETINA: -75,
                    CONST_PERSENT: 100
                }
            };
            var cahngePersent = function (persents, CONST_PERS) {
                if (evt.clientX >= Bootstrap.ClienWidthX) {
                    acardeon.elements.forEach(function (it) {
                        it.style.position = 'absolute';
                        it.style.width = 450 + 'px';
                        it.style.height = 'auto';
                        it.style.left = persents + '%';
                    });
                } else {
                    acardeon.elements.forEach(function (it) {
                        it.style.left = CONST_PERS + '%';
                    });
                }
            };
            var changeMOBilDevice = function () {
                acardeon.element.forEach(function (it) {
                    it.style.position = 'absolute';
                    it.style.width = 450 + 'px';
                    it.style.height = 'auto';
                    it.style.position = 'static';
                    it.style.width = 270 + 'px';
                });
            };
            if (Bootstrap.ClienWidth >= Bootstrap.MOBMIN && Bootstrap.ClienWidth <= Bootstrap.MOBMAX) {
                changeMOBilDevice();
            }
            if (Bootstrap.ClienWidth >= Bootstrap.TABMIN && Bootstrap.ClienWidth <= Bootstrap.DESCKTOP_MIN) {
                cahngePersent(Bootstrap.Persent.MOB, Bootstrap.Persent.CONST_PERSENT);
            }
            if (Bootstrap.ClienWidth >= Bootstrap.DESCKTOP_MIN && Bootstrap.ClienWidth <= Bootstrap.DESCKTOP_MAX) {
                cahngePersent(Bootstrap.Persent.DESK, Bootstrap.Persent.CONST_PERSENT);
            }
            if (Bootstrap.ClienWidth >= Bootstrap.DESCKTOP_MAX) {
                cahngePersent(Bootstrap.Persent.RETINA, Bootstrap.Persent.CONST_PERSENT);
            }
        });
    }();

})();
