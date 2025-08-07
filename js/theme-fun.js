$(function () {


    // Banner slider
    var swiper = new Swiper(".banner-slider", {
        loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        on: {
            slideChange: function () {
                this.slides.forEach((slide) => {
                    let background = slide.querySelector(".animate");
                    if (background) {
                        background.classList.remove("animated");
                    }
                });
                let activeSlide = this.slides[this.activeIndex];
                let background = activeSlide.querySelector(".animate");
                if (background) {
                    background.classList.add("animated");
                }
            },
        },
    });


    // Leasing Projects slider 
    var swiper = new Swiper(".projectSlider", {
        loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },
        navigation: {
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "progressbar",
        }, 
        mousewheel: false,
        keyboard: true,
        breakpoints: {

            476: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });

    // Leasing Projects slider 
    var swiper = new Swiper(".expertiseslider", {
        loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },
        navigation: {
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "progressbar",
        }, 
        mousewheel: false,
        keyboard: true,
        breakpoints: {

            476: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
    });

    $('.projectslist').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        vertical: false,
        verticalSwiping: false,
        verticalReverse: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    draggable: false,
                    swipe: true,
                    centerMode: false,
                    variableWidth: false,
                }
            }
        ]
    });



    $('.bottombarprojects .slidernavsbtns .larrow').click(function () {
        $('.projectslist .slick-prev').trigger('click');
    });
    $('.bottombarprojects .slidernavsbtns .rarrow').click(function () {
        $('.projectslist .slick-next').trigger('click');
    });

    // Custom dots functionality
    $('.custom-dots .dot').on('click', function () {
        var slideIndex = $(this).data('slide');
        $('.projectslist').slick('slickGoTo', slideIndex);
    });

    // Update custom dots on slide change
    $('.projectslist').on('afterChange', function (event, slick, currentSlide) {
        $('.custom-dots .dot').removeClass('active');
        $('.custom-dots .dot[data-slide="' + currentSlide + '"]').addClass('active');
    });

    // Initially set the first dot as active
    $('.custom-dots .dot[data-slide="0"]').addClass('active');

    // Counter

    let a = 0;
    $(window).scroll(function () {
        let countElements = $('.count');
        if (countElements.length > 0) {
            let oTop = countElements.first().offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                countElements.each(function () {
                    let targetText = $(this).text().replace(/,/g, ''); // Remove commas
                    if (!isNaN(targetText)) {
                        let targetCount = parseFloat(targetText);
                        let startCount = 0;
                        let duration = 2500; // Duration of the animation in milliseconds
                        let step = 50; // Interval between each step in milliseconds
                        let steps = duration / step; // Number of steps in the animation
                        let increment = (targetCount - startCount) / steps; // Increment per step

                        // Perform the animation
                        let currentCount = startCount;
                        let stepCounter = 0;
                        let counterInterval = setInterval(function () {
                            currentCount += increment;
                            if (Number.isInteger(targetCount)) {
                                $(this).text(formatNumber(Math.round(currentCount))); // Show whole number with commas
                            } else {
                                $(this).text(formatNumber(currentCount.toFixed(1))); // Show decimal number with commas
                            }

                            // Check if animation is complete
                            stepCounter++;
                            if (stepCounter >= steps) {
                                clearInterval(counterInterval);
                                if (Number.isInteger(targetCount)) {
                                    $(this).text(formatNumber(Math.round(targetCount))); // Show whole number with commas
                                } else {
                                    $(this).text(formatNumber(targetCount.toFixed(1))); // Show decimal number with commas
                                }
                            }
                        }.bind(this), step);
                    }
                });
                a = 1;
            }
        }
    });

    // Function to format numbers with commas
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // accordion
    accordionBox();

    function accordionBox() {
        $('.acc-head').click(function () {
            let $this = $(this);
            let $accordionRoot = $this.parents('[accordion-root]');

            if ($this.parents('[is-multiple]').attr('is-multiple') == 'true') {
                // In "multiple" mode, toggle the clicked accordion
                $this.toggleClass('active').siblings('.acc-body').slideToggle();
            } else {
                // In "single" mode, deactivate all other accordions
                if (!$this.hasClass('active')) {
                    // Close all other accordions
                    $accordionRoot.find('.accs-item').removeClass('active');
                    $accordionRoot.find('.acc-head').removeClass('active');
                    $accordionRoot.find('.acc-body').slideUp();

                    // Activate the clicked accordion
                    $this.addClass('active').siblings('.acc-body').slideDown();
                    $this.parents('.accs-item').addClass('active');
                } else {
                    // Deactivate the current accordion if it's already active
                    $this.removeClass('active').siblings('.acc-body').slideUp();
                    $this.parents('.accs-item').removeClass('active');
                }
            }
        });
    }

});


 