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
    var gamburger = document.getElementById('important');
    var span_center = document.getElementsByClassName('span_center');
    var menu = document.getElementsByClassName('wrapper__items');
    var ext = document.getElementsByClassName('ext');
    gamburger.onclick = function(){
    /* TODO: SWOH MENU */
        for(var i = 0; i < menu.length; i++){
        menu[i].classList.toggle('show');
    }
    /*TODO: CHANGE GAMURGER ON EXT */
    span_center[0].classList.toggle('switch');
    gamburger.classList.toggle('switch');
    gamburger.style.transition = 'all .5s ease 0.3s';
    for(var i=0; i < ext.length; i++){
        ext[i].classList.toggle('switch');
    }
}

})();