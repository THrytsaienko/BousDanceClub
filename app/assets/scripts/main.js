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
                position: location,
                map: map,
                icon: mapObject.markerImage
            });
        }
    }

    function getMapProperties(mapName) {
        return {
            cordinates: mapName === 'map' ? [50.4133761, 30.6176347] : [50.434663, 30.62238],
            markerImage: 'marker-32.png',
            mapZoom: [16, 16]
        };
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});


// NEWS
// Slick block for news page.
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


// NEWS. Отборы по категориям, тегам.
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


// RULES
$(document).ready(() => {
    var options = {
        height: "1000px"
    }
    PDFObject.embed("/assets/pdf/rules/school-rules.pdf", "#school-rules", options);
    PDFObject.embed("/assets/pdf/rules/age-category-inf.pdf", "#age-category-inf", options);
    PDFObject.embed("/assets/pdf/rules/dance-inf.pdf", "#dance-inf", options);
    PDFObject.embed("/assets/pdf/rules/clothes-inf.pdf", "#clothes-inf", options);

});
