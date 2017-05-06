(function($){
    
    $(document).ready( function(){
        
        var html = $('html');
        
        // triggers to open and close menu mobile
        $('.trigger-menu, .menu-mobile-backdrop').click(function(){
           html.addClass('menu-open'); 
        });
        
        $('.menu-mobile-backdrop,.backdrop-icon').click(function(){
           html.removeClass('menu-open'); 
        });
        
        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }
        
        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }
        
        // start slick on banner home
        $('#home-slider').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           fade: true,
           dots: true,
           arrows: false,
           autoplay: true,
           autoplaySpeed: 5000
        });        
    
    });
	
    // 	gifts list fix
    if($(".page-lista, .page-print_lista").length){
        $(".lista-produtos").wrapAll("<div class='wrap-gifts'></div>");
    }
    
    // captcha solution error
    $(".box-captcha").prepend('<img src="/mvc/vendors/Captcha/index.php?t="'+Date.now()+'">');
    
})(jQuery);