(function () {
    var elements = {
        block: document.querySelector('.page-header__burger'),
        list: document.querySelectorAll('.page-header__item')
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


        }
        else {
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
    return elements;
})();

(function () {
    $(document).ready(function () {
        $(".page-header__wrapper").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
    });
})();

(function () {
    $(document).ready(function () {
        $(".page-header__animation").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
    });
})();

(function (ev) {
    var elements = {
        line: document.querySelectorAll('.line'),
        iteration: 0,
        fps : 8,
        heigthMin : 1900,
        heigthMax : 1930,
        check : true
    }
    window.addEventListener('scroll',  (evt) => {
        evt.defaultPrevented;
        if(evt.pageY > elements.heigthMin && evt.pageY < elements.heigthMax && 
            elements.check == true){
            elements.check = false;
            var interval = setInterval( () => {
                elements.iteration++;
                if (elements.iteration <= 175) {
                    elements.line[0].style.width = elements.iteration + 'px';
                }
                else {
                    clearInterval(interval);
                    elements.iteration = 0;
                    var intervals = setInterval(() => {
                        elements.iteration++;
                        if (elements.iteration <= 175) {
                            elements.line[1].style.width = elements.iteration + 'px';
                        }
                        else {
                            clearInterval(intervals);
                        }
                    }, elements.fps);
                }
            }, elements.fps);     
        }
    });
})();
