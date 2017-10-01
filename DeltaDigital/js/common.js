(function(){
    /* TODO: WORK WITH BLOCKS */
    var blocks = document.getElementsByClassName('content__items__information');
    var button = document.getElementsByClassName('content__items__button');
    for(var i =0; i < blocks.length; i++){
        blocks[i].id = 'content ' + i;
        blocks[i].classList.add('show');
        button[i].id = i;
    }
    window.onclick = function(e){
        var elem = e.target;
        blocks[elem.id].classList.toggle('show');
        if(!blocks[elem.id].classList.contains('show') && elem.classList.contains('content__items__button')){
            elem.innerHTML = 'скрыть';
        }
        if(blocks[elem.id].classList.contains('show') && elem.classList.contains('content__items__button')){
            elem.innerHTML = 'подробнее';
        }
    }

    /* TOOD: WORK WIDTH BURGER */
    var Click_on_buttom = document.getElementsByClassName('top-menu__menu--burger');
    /* TODO: ELEMENTS INTERFACE */
    var Element_top     = document.getElementsByClassName('burger__item--top');
    var Elemet_center   = document.getElementsByClassName('burger__item--center');
    var Element_bottom  = document.getElementsByClassName('burger__item--bottom');
    /* TODO: ELEMENTS MENU */
    var Element_menu_items = document.getElementsByClassName('wrapper__items');
    /* TODO: ANIMATION VARS */
    var fps = 1;
    var pixels = 1;

    Click_on_buttom[0].onclick = function(){
        
        Click_on_buttom[0].classList.toggle('FadeIn');
        
        if(!Click_on_buttom[0].classList.contains('FadeIn')){
           console.log('Назад');
           for(var i =0; i < 11; i++){
            setTimeout(function(){
                var tempPositionTop = Element_top[0].offsetTop;
                var tempPositionBottom = Element_bottom[0].offsetTop;
                Element_top[0].style.top = tempPositionTop - pixels + 'px';
                Element_bottom[0].style.top = tempPositionBottom + pixels + 'px';
            },(40*i));
            setTimeout(function(){
                Element_top[0].classList.toggle('click_top');
                Element_bottom[0].classList.toggle('click_bottom');
                Elemet_center[0].classList.toggle('show');            
            },1);
            setTimeout(function(){
                for(var i = 0; i < Element_menu_items.length; i++ ){
                    Element_menu_items[i].classList.toggle('show');
                }
            },500);
           
        }
        }
        if(Click_on_buttom[0].classList.contains('FadeIn')){
            console.log('Вперед');
            for(var i =0; i < 11; i++){
                setTimeout(function(){
                    var tempPositionTop = Element_top[0].offsetTop;
                    var tempPositionBottom = Element_bottom[0].offsetTop;
                    Element_top[0].style.top = tempPositionTop + pixels + 'px';
                    Element_bottom[0].style.top = tempPositionBottom - pixels + 'px';
                },(25*i));
                setTimeout(function(){
                    Element_top[0].classList.toggle('click_top');
                    Element_bottom[0].classList.toggle('click_bottom');
                    Elemet_center[0].classList.toggle('show');            
                },450);
            }
            setTimeout(function(){
                for(var i = 0; i < Element_menu_items.length; i++ ){
                    Element_menu_items[i].classList.toggle('show');
                }
            },600);
        }
        

    };

})();
