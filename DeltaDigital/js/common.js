(function(){

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
    }
})();

$(document).ready(function(){
    $('img').each(function() { $(this).wrap("<a href=" + $(this).attr('src') + "></a>"); });
    $('img').fancybox({
        'overlayShow' : true,
        'autoDimensions': false

    });
})