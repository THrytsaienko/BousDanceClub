// SLICK MAIN PAGE
$(document).ready(() => {
    $('.sl').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        responsive: [{
                breakpoint: 482,
                settings: 'slick'
            },
            {
                breakpoint: 481,
                settings: 'unslick'
            },

        ]
    });
});


// SLICK CONTACTS
$(document).ready(() => {
    $('.slick_contacts').slick({
        autoplay: true,
        dots: true
    });
});


// NEWS. Slick block for news page
$(document).ready(() => {
    var slickClassName;

    $('.news__hidden').hide();
    $('.more-news-btn').click(function () {
        slickClassName = "." + this.classList[0] + '-slick';
        $(this).prev().slideToggle('slow');
        $(slickClassName).slick({
            autoplay: $(slickClassName).is(':visible'),
            dots: $(slickClassName).is(':visible'),
        });
    });
});


// NEWS. Select by categories, tags
$(document).ready(() => {
    var newsBlock, index, searchClass, trigger;
    $('.hide-event').click(function () {
        newsBlock = $('.news');
        index = this.classList.length - 1;
        trigger = false;
        $(newsBlock).hide();

        for (i = 0; i <= newsBlock.length; i++) {
            searchClass = this.classList[index];
            if ($(newsBlock[i]).hasClass(searchClass)) {
                trigger = true;
                $(newsBlock[i]).show();
            }
        }

        if (trigger === false) {
            $(newsBlock).show();
        }
    });
});


// LAZYLOAD PHOTOS
$(document).ready(() => {
    $('.lazy').Lazy();
});

// MAP
$(() => {
    function initMap() {
        var arr_maps, location, mapObject, mapCanvas, mapOption, map, marker;

        arr_maps = ['map', 'map2'];

        for (i = 0; i <= arr_maps.length; i++) {

            mapObject = getMapProperties(arr_maps[i]);

            location = new google.maps.LatLng(mapObject.cordinates[0], mapObject.cordinates[1]);
            mapCanvas = document.getElementById(arr_maps[i]);
            mapOption = {
                center: location,
                zoom: mapObject.mapZoom[i],
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(mapCanvas, mapOption);


            marker = new google.maps.Marker({
                map: map,
                position: location
            });
        }
    }

    function getMapProperties(mapName) {
        return {
            cordinates: mapName === 'map' ? [50.4133761, 30.6176347] : [50.434663, 30.62238],
            mapZoom: [16, 16]
        };
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});


// ANIMATION ON SCROLL.
// MAIN PAGE
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

// ABOUT US 
$('.photos-Vit_Kat').waypoint(function (direction) {
    $('.photos-Vit_Kat').addClass('animated bounceInRight');
}, {
    offset: '70%'
});