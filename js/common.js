$(document).ready(function () {
    // SLIDERS ALL
    // slider - 1screen
    var swiper = new Swiper(".welcomeslider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        speed: 700,
    });

    // slider - INVEST
    var swiper1 = new Swiper(".investslider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        speed: 700,
    });

    // slider - AKCII
    var swiper2 = new Swiper(".ourakcslider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay: {
        //     delay: 5000,
        // },
        // speed: 700,

        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: "auto",
            },
        }
    });


    var swiper3 = new Swiper(".constructionslider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay: {
        //     delay: 5000,
        // },
        // speed: 700,
        slidesPerView: "auto",
        spaceBetween: 30,
    });

    // SLIDERS END

    // language
    $('.header__lang span').click(function () {
        $(this).next('ul').slideToggle();
    });

    // input type TEL
    if ($(".phoneinp").length) {
        $('.phoneinp').inputmask({
            "mask": "99 /999/ 9999999",
            showMaskOnHover: false,
            showMaskOnFocus: false,
        });
    }

    // padding like a container 
    let windowWidth = $(window).width(),
        containerWidth = $('.container').width(),
        paddingNew = (windowWidth - containerWidth) / 2;

    $('.investition__leftblock').css('padding-left', paddingNew + 'px');
    $('.ourakc__leftbox').css('padding-left', paddingNew + 'px');
    $('.getpresentation .leftsect').css('padding-left', paddingNew + 'px');
    $('.construction__leftsect').css('padding-left', paddingNew + 'px');



    $(window).resize(function () {
        let windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            paddingNew = (windowWidth - containerWidth) / 2;

        $('.investition__leftblock').css('padding-left', paddingNew + 'px');
        $('.ourakc__leftbox').css('padding-left', paddingNew + 'px');
        $('.getpresentation .leftsect').css('padding-left', paddingNew + 'px');
        $('.construction__leftsect').css('padding-left', paddingNew + 'px');
    });

    // tabs - ХІД будівництва
    $('.tab1').click(function (e) {
        e.preventDefault();
        $('.year22').removeClass('hide');
        $('.year21').addClass('hide');
        $('.tabbtn').removeClass('active');
        $(this).addClass('active')
    });
    $('.tab2').click(function (e) {
        e.preventDefault();
        $('.year22').addClass('hide');
        $('.year21').removeClass('hide');
        $('.tabbtn').removeClass('active');
        $(this).addClass('active')
    })

    // місяці
    $('.construction__year.year22 a').click(function (e) {
        e.preventDefault();
        $('.construction__year.year22 a').removeClass('active');
        $(this).addClass('active');
    });
    $('.construction__year.year21 a').click(function (e) {
        e.preventDefault();
        $('.construction__year.year21 a').removeClass('active');
        $(this).addClass('active');
    });

    // хз чи треба, то на кожну кнопку місяця клік

    $('.month1').click(function () {

    });
    $('.month2').click(function () {

    });
    $('.month3').click(function () {

    });
    $('.month4').click(function () {

    });
    $('.month5').click(function () {

    });
    $('.month6').click(function () {

    });
    $('.month7').click(function () {

    });
    $('.month8').click(function () {

    });


    // ACCORDEON

    $('.faqaccordeon__header').click(function () {
        $(this).toggleClass('show');
        $(this).next('.faqaccordeon__body').slideToggle();
    });

    // MOBILE MENU
    $('.burger-btn').click(function () {
        $('.header.header nav').addClass('show');
    })

    $('.closemenu').click(function () {
        $('.header.header nav').removeClass('show');
    });




    document.querySelectorAll('a.scrolltopres[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            // const topOffset = document.querySelector('.header.header nav').offsetHeight;
            const topOffset = 50; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });








});