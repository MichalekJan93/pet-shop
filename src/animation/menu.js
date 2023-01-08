$(() => {
    $('.hamburger-menu').on('click', function () {
        $('.menu').css('width', '200px');
    });

    $('.close-menu').on('click', function() {
        $('div.menu').css('width', '0px');
    })

    $(window).on('resize', function(event) {
        if($(this).width() >= 900){
            $('div.menu').css('width', '100%');
        }

        if($(this).width() < 900){
            $('div.menu').css('width', '0px');
        }
    })

})
