(function(){

    var elements = {
        block : document.querySelector('.page-nav__burger'),
        list : document.querySelector('.page-nav__list')
    }    
   var exit = 'fa-times';
   var open = 'fa-align-justify';
    elements.block.addEventListener('click',function (){
        if(elements.block.children[0].classList.contains('' + open)){
            console.log('true');
            elements.block.children[0].classList.remove(''+ open);
            elements.block.children[0].classList.add('' + exit);
            setTimeout(() => {
                elements.list.hidden = false;
            }, 500);
            
            
        }
        else {
            console.log('false');
            elements.block.children[0].classList.remove(''+ exit);
            elements.block.children[0].classList.add('' + open);
            setTimeout(() => {
                elements.list.hidden = true;
            }, 500);
        }
    });

})();

(function () {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            center: true,
            nav: true,
            dots: false,
            loop: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            autoplaySpeed: 2500
        });
      });
})();

(function () {
    $(document).ready(function(){
        $(".owl-carousel-two").owlCarousel({
            items: 1,
            nav : false,
            center : true,
            dots : false,
            autoplaySpeed : 2500
        });
      });
})();
