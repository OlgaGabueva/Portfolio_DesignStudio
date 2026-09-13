$(document).ready(function () {

//подключение WOW библиотеки
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    //пропадание-появление стрелки
    $(window).scroll( function () {
        $(this).scrollTop() > 0 ?
            $('.circle').css('transform', 'translateY(0)').css('opacity', 1) :
            $('.circle').css('transform', 'translateY(200%)').css('opacity', 0) ;


    });




//открытие-скрытие окна меню для адаптива
    $('#triple_line').click( function () {
        $('#popup-background').show();
        $('#menu-opened').addClass('show');
    });
    $('#menu-opened *').click( function () {
        $('#menu-opened').removeClass('show');
        $('#popup-background').hide();
    });

    $('#close').click( function () {
        $('#menu-opened').removeClass('show');
        $('#popup-background').hide();
    });





    // слайдер с преимуществами
    $('.slider-advantages').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        touchThreshold: 100,
        arrows: true,
        nextArrow:
            '<svg fill="#000000" height="30px" width="20px"  id="XMLID_287" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>',
        prevArrow:
            '<svg fill="#000000" height="30px" width="20px"  id="XMLID_288" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>',
        slidesToShow: 3,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            let sliderNumber = i < 10 ? '0'+ ( i + 1 ) : i + 1;
            return '<span>' + sliderNumber + ' / 06</span>';
        },

        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    });


    // слайдер с портфолио
    $('.slider-portfolio').slick({

        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        touchThreshold: 100,
        arrows: true,
        nextArrow:
            '<svg fill="#000000" height="30px" width="20px"  id="XMLID_287" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>',
        prevArrow:
            '<svg fill="#000000" height="30px" width="20px"  id="XMLID_288" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>',
        slidesToShow: 3,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            let sliderNumber = i < 10 ? '0'+ ( i + 1 ) : i + 1;
            return '<span>' + sliderNumber + ' / 06</span>';
        },

        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    });


 // слайдер с отзывами
    $('.slider').slick({
        variableWidth: true,
        dots: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        touchThreshold: 100,
        arrows: true,
        nextArrow:
            '<svg fill="#000000" height="30px" width="20px"  id="XMLID_287" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>',
        prevArrow:
            '<svg fill="#000000" height="30px" width="20px"  id="XMLID_288" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>',
        slidesToShow: 3,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            let sliderNumber = i < 10 ? '0'+ ( i + 1 ) : i + 1;
            return '<span>' + sliderNumber + ' / 06 </span>';
        },

        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]


    });



//лоадер
    let loader = $('.loader');


    // валидация формы Записи на консультацию и отправка запроса на сервер
    $('.order-error').removeClass('order-error');

    $('#submit').click( function (){
            let name = $('#name');
            let phone = $('#phone');
            let checkbox = $('#checkbox');
            let hasError = false;


            $('.order-error').removeClass('order-error');
            $('.error').hide();

            if (!checkbox.is(':checked')){

                checkbox.parent().next().show();
                hasError = true ;
            }


            if (!name.val()) {
                name.addClass('order-error');
                name.next().show();
                hasError = true ;
            }
            if (!phone.val()) {
                phone.addClass('order-error');
                phone.next().show();
                hasError = true ;
            }

            if (!hasError) {

                loader.css('display', 'flex');

                setTimeout(()=> {
                    loader.hide();
                               $('#order-block').hide();
                               $('#order-done').show();
                                 //возврат очищенной формы
                                 $('form')[0].reset();
                                 $('.order-error').removeClass('order-error');
                                 setTimeout(()=> {
                                     $('#order-block').show();
                                     $('#order-done').hide();
                                 },2000);
                },1500);



            }

        }
    )

    // валидация формы POPUP и отправка запроса на сервер

    $('#submit-popup').click( function (){
            let name = $('#name-popup');
            let phone = $('#phone-popup');
            let checkbox = $('#checkbox-popup');
            let hasError = false;


            $('.order-error').removeClass('order-error');
            $('.error').hide();

            if (!checkbox.is(':checked')){

                checkbox.parent().next().show();
                hasError = true ;
            }


            if (!name.val()) {
                name.addClass('order-error');
                name.next().show();
                hasError = true ;
            }
            if (!phone.val()) {
                phone.addClass('order-error');
                phone.next().show();
                hasError = true ;
            }

            if (!hasError) {
                $('#popup').hide();

                loader.css('display', 'flex');



                 setTimeout(()=> {
                     loader.hide();

                     $('#popup').show();
                     $('#order-block-popup').hide();
                     $('#order-done-popup').show();



                     //возврат очищенной формы
                     $('form')[1].reset();
                     $('.order-error').removeClass('order-error');
                     $('.error').hide();

                     setTimeout(()=> {
                                      $('#order-done-popup').hide();
                                      $('#order-block-popup').show();
                                      $('#popup').hide();
                                      $('#popup-background').hide();
                                      },2000);

                 },1500);



            }

    })

//вызов POPUP нажатем на Заказть звонок
    $('#order-phone-top').click( function () {
        $('#popup-background').show();
        $('#popup').show();
    });

    $('#order-phone-bottom').click( function () {
        $('#popup-background').show();
        $('#popup').show();
    });

    $('#call').click( function () {
        $('#popup-background').show();
        $('#popup').show();
    });

    //закрытие POPUP нажатием на крестик
   $('#cancel').click( function () {

       //очищение формы
       $('form')[1].reset();
       $('.order-error').removeClass('order-error');
       $('.error').hide();
        //скрытие окон POPUP

       $('#order-done-error-popup').hide();
       $('#order-done-popup').hide();
       $('#order-block-popup').show();
       $('#popup').hide();
       $('#popup-background').hide();
    });

   // плавный скролл ссылок
   //  $("a").click(function () {
   //      var elementClick = $(this).attr("href");
   //      var destination = $(elementClick).offset().top;
   //
   //       $('html').animate({ scrollTop: destination }, 1100); медленный скролл
   //      return false;
   //  });

    //перебор портфолио по клику

    $('#portfolio1').click( function (){
        $('#text5').addClass('hover-text-click');

        setTimeout(()=> {
            $('#text5').removeClass('hover-text-click');
        },2000);
    });

     $('#portfolio2').click( function (){
            $('#text3').addClass('hover-text-click');
         setTimeout(()=> {
             $('#text3').removeClass('hover-text-click');
         },2000);
        });

     $('#portfolio3').click( function (){
            $('#text6').addClass('hover-text-click');
         setTimeout(()=> {
             $('#text6').removeClass('hover-text-click');
         },2000);
        });

     $('#portfolio4').click( function (){
            $('#text2').addClass('hover-text-click');
         setTimeout(()=> {
             $('#text2').removeClass('hover-text-click');
         },2000);
        });

     $('#portfolio5').click( function (){
            $('#text1').addClass('hover-text-click');
         setTimeout(()=> {
             $('#text1').removeClass('hover-text-click');
         },2000);
        });

     $('#portfolio6').click( function (){
            $('#text4').addClass('hover-text-click');
         setTimeout(()=> {
             $('#text4').removeClass('hover-text-click');
         },2000);
        });


    $('#video').click( function () {
        $('#video').hide();
        $('#video-frame').show();

    });













});

