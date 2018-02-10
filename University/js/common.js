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
        $(".owl-carousel").owlCarousel({
            items: 1,
            center: true,
            nav: true,
            dots: false,
            loop: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            autoplaySpeed: 2500
        });
    });
})();

(function () {
    $(document).ready(function () {
        $(".owl-carousel-two").owlCarousel({
            items: 1,
            nav: false,
            center: true,
            dots: false,
            autoplaySpeed: 2500
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

})();