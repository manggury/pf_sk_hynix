$(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            $("header").slideUp("");
        } else {
            if (st + $(window).height() < $(document).height()) {
                $("header").slideDown("");
            }
        }

        lastScrollTop = st;
    };

    $('.header_wrap .util ul li .hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active')
        $('.header_wrap .gnb').toggleClass('on');
    });;

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        fill: true,
        data: {
            labels: ['9', '10', '11', '12', '1', '2'],
            datasets: [{
                // label: false,
                data: [14000, 11480, 13000, 15520, 14300, 12840],
                borderWidth: 2,
                borderColor: '#FF6384',
                backgroundColor: '#FFFFFF',
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
    $('.news_slide').slick({
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        // touchMove: false,
        // autoSlide: false,

        responsive: [{
            breakpoint: 1201,
            settings: {
                arrows: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,
                dots: true,
            },
        },
        {
            breakpoint: 376,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                dots: true,

            },
        },
        ]
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });


});