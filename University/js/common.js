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
    // Blocks

    var acardeon = {
        blocks: document.querySelectorAll('.block-match__desc'),
        elements: document.querySelectorAll('.block-match__inform'),
        showItem: function (element, index) {
            // element[index].addEventListener('mouseleave', (evnt) => {
            //     for (var i = 0; i < element[index].childNodes.length; i++) {
            //         if (!evnt.target.classList.contains('block-match__item')) {
            //             element[index].children[i].classList.toggle('acardeon');
            //         }
            //     }

            // });
            element[index].addEventListener('click', (evnt) => {
                for (var i = 0; i < element[index].childNodes.length; i++) {
                    if (!evnt.target.classList.contains('block-match__item')) {
                        element[index].children[i].classList.toggle('acardeon');
                    }

                }
            });
        }
    };

    for (var i = 0; i < acardeon.blocks.length; i++) {
        acardeon.showItem(acardeon.blocks, i);
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