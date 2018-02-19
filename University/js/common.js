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
            console.log('true');
            elements.block.children[0].classList.remove('' + open);
            elements.block.children[0].classList.add('' + exit);
            setTimeout(() => {
                for (var i = 0; i < elements.list.length; i++) {
                    elements.list[i].hidden = false;
                }
            }, 500);


        } else {
            console.log('false');
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
    // Blocks https://jsbin.com/doguvozuxu/edit?html,js,console,output,
    var acardeon = {
        blocks: document.querySelectorAll('.block-match__desc'),
        elements: document.querySelectorAll('.block-match__inform'),
        items: document.querySelectorAll('.block-match__item'),
        showItem: function (element, index) {
            element[index].addEventListener('click', (evnt) => {
                Bblocks.Blength[index] = element[index].children.length - 1;
                recursFunc(element[index].children,params.Istart[index],index);
            });
        }
    };
    var Bblocks = {
        Bheight : [70,70,70,70],
        Bopacity : [1,1,1,1],
        Btarget : [],
        Blength : [],
    }
    var IShow =  function (Ielement,index,current) {
        Bblocks.Bheight[current]  = 0;
        Bblocks.Bopacity[current] = 0;
        Ielement[params.Istart[current]].style.display = 'block';
        Ielement[params.Istart[current]].classList.add('acardeon');
        var Iinterval = setInterval( function () {
            Bblocks.Bheight[current]  = Bblocks.Bheight[current] + 4;
            Bblocks.Bopacity[current] = Bblocks.Bopacity[current] + 0.030;
            Ielement[params.Istart[current]].style.height = Bblocks.Bheight[current] + 'px';
            Ielement[params.Istart[current]].style.opacity = Bblocks.Bopacity[current];
            if(Bblocks.Bheight[current] >= 50){
                Ielement[params.Istart[current]].style.opacity = 1;
                Ielement[params.Istart[current]].style.height = 'auto';
                params.Istart[current]++;
                if(params.Istart[current] <= Bblocks.Blength[current]){
                    recursFunc(Ielement,params.Istart[current],current);
                }
                else {
                    params.Istart[current] = 1;
                }
                clearInterval(Iinterval);
            }
        }, params.fps);
    };
    var Ihidden =  function (Ielement,index,current) {
        Bblocks.Bheight[current]  = 50;
        Bblocks.Bopacity[current] = 1;
        var Iinterval = setInterval( function () {
            Bblocks.Bheight[current]  = Bblocks.Bheight[current] - 3;
            Bblocks.Bopacity[current] = Bblocks.Bopacity[current] - 0.030;
            Ielement[params.Istart[current]].style.height = Bblocks.Bheight[current] + 'px';
            Ielement[params.Istart[current]].style.opacity = Bblocks.Bopacity[current];
            if(Bblocks.Bheight[current] <= 30){
                Ielement[params.Istart[current]].style.opacity = 0;
                Ielement[params.Istart[current]].style.display = 'none';
                Ielement[params.Istart[current]].classList.toggle('acardeon');
                params.Istart[current]++;
                if(params.Istart[current] <= Bblocks.Blength[current]){
                    recursFunc(Ielement,params.Istart[current],current);
                }
                else {
                    params.Istart[current] = 1;
                }
                clearInterval(Iinterval);
            }
        }, params.fps);
    };
    var recursFunc = function (e,t,p){
        if(e[t].classList.contains('acardeon') == false){
            IShow(e,t,p);
        }else{
            Ihidden(e,t,p);
        }


    }
    var params = {
        Istart : [1,1,1,1],
        fps : 15,
    };
     for (var i = 0; i < acardeon.blocks.length; i++) {
         Bblocks.Btarget[i] = acardeon.blocks[i];
         Bblocks.Bheight[i] = 50;
         Bblocks.Bopacity[i] = 1;
         params.Istart[i] = 1;
         acardeon.showItem(Bblocks.Btarget, i);
     }




    window.addEventListener('mousemove', (evt) => {
        var Bootstrap = {
            mobMin: 320,
            mobMax: 768,
            tabMin: 769,
            descTopMin: 1200,
            descTopMax: 1510,
            ClienWidth: screen.width,
            ClienWidthX: screen.width / 2,
            Persent: {
                mob: -132,
                desk: -90,
                retina: -75,
                CONST_PERSENT: 100
            }
        };

        var cahngePersent = function (persents, CONST_PERS) {
            if (evt.clientX >= Bootstrap.ClienWidthX) {
                for (var i = 0; i < acardeon.elements.length; i++) {
                    acardeon.elements[i].style.position = 'absolute';
                    acardeon.elements[i].style.width = 450 + 'px';
                    acardeon.elements[i].style.height = 'auto';
                    acardeon.elements[i].style.left = persents + '%';
                }
            } else {
                for (var i = 0; i < acardeon.elements.length; i++) {
                    acardeon.elements[i].style.left = CONST_PERS + '%';
                }
            }
        };
        var changeMobilDevice = function () {
            for (var i = 0; i < acardeon.elements.length; i++) {
                acardeon.elements[i].style.position = 'absolute';
                acardeon.elements[i].style.width = 450 + 'px';
                acardeon.elements[i].style.height = 'auto';
                acardeon.elements[i].style.position = 'static';
                acardeon.elements[i].style.width = 270 + 'px';
            }
        };
        if (Bootstrap.ClienWidth >= Bootstrap.mobMin && Bootstrap.ClienWidth <= Bootstrap.mobMax) {
            changeMobilDevice();
        }
        if (Bootstrap.ClienWidth >= Bootstrap.tabMin && Bootstrap.ClienWidth <= Bootstrap.descTopMin) {
            cahngePersent(Bootstrap.Persent.mob, Bootstrap.Persent.CONST_PERSENT);
        }
        if (Bootstrap.ClienWidth >= Bootstrap.descTopMin && Bootstrap.ClienWidth <= Bootstrap.descTopMax) {
            cahngePersent(Bootstrap.Persent.desk, Bootstrap.Persent.CONST_PERSENT);
        }
        if (Bootstrap.ClienWidth >= Bootstrap.descTopMax) {
            cahngePersent(Bootstrap.Persent.retina, Bootstrap.Persent.CONST_PERSENT);
        }
    });

})();
