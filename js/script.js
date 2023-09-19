$(window).on('load',function(){
        $("#preloader").fadeOut();
         AOS.init({
            easing: 'ease-out-back',
            duration: 1000,
            once: true,
        });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    }); 

    $('.scroll_top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    var body = $('body');
	/*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });
    $(".close_menu_side").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

    /*open_menu*/
    // $('body').on('click','.menu-trigger',function(e){
    //     var thisclick = $('.menu-trigger')
    //     if(thisclick.hasClass('active') != true){
    //         thisclick.addClass('active');
    //         body.addClass('nav-active');
            
    //     }
    //     setTimeout(function(){
    //         $('.menu_social_group').fadeIn();
    //     },500);
    //     setTimeout(function(){
    //         $('.menu_social_group').addClass('m_show');
    //         $('.colum_block_info').addClass('m_show');
    //     },550);
    // });

    /*close_menu*/
    // $('body').on('click','.close_menu',function(e){
    //     if(body.hasClass('nav-active') == true){
    //         body.removeClass('nav-active');
    //         $('.menu-trigger').removeClass('active');
            
    //     }
    //     setTimeout(function(){
    //         $('.menu_social_group').fadeOut();
    //         $('.services_menu_box').fadeOut();
    //         $('.mm_contact_box').fadeOut();
    //     },500);
    //     setTimeout(function(){
    //         $('.menu_social_group').removeClass('m_show');
    //         $('.services_menu_box').removeClass('m_show');
    //         $('.mm_contact_box').removeClass('m_show');
    //         $('.colum_block_info').removeClass('m_show');
    //     },550);
    // });

    /*Decrease & Increase*/    
        var minimum_quanitiy=$(".jsQuantityDecrease").attr("minimum"),
        productQuantity=minimum_quanitiy;
        $(document).on("click",".jsQuantityDecrease",function(){
            var quantity = $(this).parent().find('input[name="count-quat1"]').val();
            quantity = quantity * 1;
            var newQuantity = quantity - 1;
            $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
            if (newQuantity <2) {
                $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
                $(this).closest('.product_item').find(".dec").removeClass("disabled").removeClass("jsQuantityDecrease").addClass('removeQuantity');

            } else{
                 $(this).parent().find(".jsQuantityDecrease").removeClass("disabled").removeClass("removeQuantity");
                 $(this).closest('.product_item').find(".dec").removeClass("disabled").addClass("jsQuantityDecrease").removeClass('removeQuantity');

            }
        }),

        $(document).on("click",".jsQuantityIncrease",function(){
            var quantity = $(this).parent().find('input[name="count-quat1"]').val();
            quantity = quantity * 1;
            var newQuantity = quantity + 1;
            $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
            if (newQuantity >=2) {
                $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
                $(this).closest('.product_item').find(".dec").removeClass("disabled").addClass("jsQuantityDecrease").removeClass('removeQuantity');

            } else{
                 $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
                 $(this).closest('.product_item').find(".dec").removeClass("disabled").removeClass("jsQuantityDecrease").addClass('removeQuantity');

            }
            
        })
})