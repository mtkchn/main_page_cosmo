$nav = $('.head')
$nav.data('size', 'big')

$(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        if ($nav.data('size') == 'big') {
            $nav.data('size', 'small').stop().animate({
                height: '40px'
            }, 600)
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size', 'big').stop().animate({
                height: '100px'
            }, 600)
        }
    }
});

$("#toogleMenu").click(function () {
    $('#toogleMenu, navbar_head, right_header_links').toggleClass('active');
});


$(function () {
    $('#toogleMenu').click(function () {
        $(this).toggleClass('open');
    });
});