	console.log('w');
$(function(){
    'use strict';

    function getImage(){
        if ($('.search__result').find('.img__item')){
            $('.img__item').remove();
        };

        $('.search__result').removeClass('display-none');

        var userQuery = $('#search-input').val();
        var API_KEY = '3225875-78b247f92a47a24f14259a8bd';
        $.ajax({
            type: 'GET',
            url: "https://pixabay.com/api/?key="+API_KEY+"&q=" + userQuery + '&image_type=all',
            success: function(data){
                for (var i = 0; i < data.hits.length; i++){
                    var $queryResult =
                    $('<figure class="img__item"><img class="img__img" src="'+ data.hits[i].previewURL +'" alt="'+ userQuery +'#'+ [i] +'"><figcaption><a href="'+ data.hits[i].pageURL +'" class="img__link">Original image</a><p class="img__autor">Autor: '+ data.hits[i].user +'</p><p class="img__size">'+ data.hits[i].imageWidth +' x '+ data.hits[i].imageHeight +'px</p><p class="img__likes">Downloads: '+ data.hits[i].downloads +'</p></figcaption></figure>');
                    $('.search__img').append($queryResult);
                     if ( i === 11 ) { return false;};
                };
                if (data.hits.length == 0){
                    alert('ничего не найдено, попробуйте еще раз ');
                };

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Ошибка '+errorThrown);
            }
                  });
    };

    function removeDisabled(){
        $('.form__button').removeClass('disabled');
    }

    function disabled(){
        $('.form__button').addClass('disabled');
         $('.form__button').css('backgroundColor', 'rgb(0,141,198)');
        setTimeout(removeDisabled,3000);
    }

    $('.form__button').on('click', getImage);
    $('.form__button').on('click', disabled);
    $('.form__search').keydown(function(eventObject){
        if (eventObject.which === 13){
            getImage();
        };
    });
});





ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [40.69788141, -73.97963250],
                zoom: 7
            });

            myPlacemark = new ymaps.Placemark([40.69788141, -73.97963250], {
                hintContent: 'Город конрастов',
                balloonContent: 'Город конрастов'
            });
            myPlacemark0 = new ymaps.Placemark([40.00198667, -75.11803600], {
                hintContent: 'Филадельфия',
                balloonContent: 'Город конрастов'
            });



            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark0);


        };
