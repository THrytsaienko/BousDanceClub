/* Animation on scroll */

$('.container-info').waypoint(function (direction) {
    $('.container-info').addClass('animated zoomIn');
}, {
    offset: '75%'
});

$('.coach-block').waypoint(function (direction) {
    $('.coach-block').addClass('animated fadeIn');
}, {
    offset: '70%'
});

$('.photos-Vit_Kat').waypoint(function (direction) {
    $('.photos-Vit_Kat').addClass('animated bounceInRight');
}, {
    offset: '70%'
});