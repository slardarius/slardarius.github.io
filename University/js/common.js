(function () {

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
        // Go to the previous item
        $('.prev-slide').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            $('.slide-one').trigger('prev.owl.carousel', [300]);
        });

        $('.slide-two').owlCarousel({
            items: 1,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            nav: true,
            loop: true
        });
    });
})();


(function () {
    var acardeon = {
        blocks: document.querySelectorAll('.block-match__item'),
        elements: document.querySelectorAll('.block-match__inform'),
        Echecked: 1,
        closeElement: function (item, index, callback) {
            if (item === undefined) {
                for (var i = 0; i < acardeon.elements.length; i++) {
                    acardeon.elements[i].classList.toggle('acardeon');
                }
            }
            if (item !== undefined) {
                item[index].addEventListener('click', function () {
                    console.log('click');
                    for (var i = 0; i < acardeon.elements.length; i++) {
                        if (!acardeon.elements[i].classList.contains('acardeon')) {
                            acardeon.elements[i].classList.add('acardeon');
                        }
                    }
                    item[index].children[0].classList.remove('acardeon');
                });
            }
        },
        hidden: function (item, index) {
            var actions = setInterval(() => {
                acardeon.Echecked = acardeon.Echecked - 0.1;
                item[index].style.opacity = this.Echecked;
                console.log(this.Echecked);
                if (acardeon.Echecked <= 0) {
                    console.log('Display');
                    item[index].style.display = 'none';
                    clearInterval(actions);
                }
            }, 10);
        }
    };
    acardeon.closeElement();
    for (var i = 0; i < acardeon.blocks.length; i++) {
        acardeon.closeElement(acardeon.blocks, i);
    }

    var options = {
        offset: 158
    }
    var header = new Headhesive('.header', options);
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