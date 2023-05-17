
(function ($) {
    "use strict"; // Start of use strict
    //Tooltips
    $('.list-inline-item').tooltip({ boundary: 'window' })

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    //experience arrows
    $('.subheading a').on('click', function () {
        const dataElement = this.getAttribute('data-target');
        const itemId = dataElement.substring(1, dataElement.length);
        const arrows = $(this).find(`#${itemId}`)[0].classList[1];
        //let title = element.getAttribute('data-original-title');
        if (arrows === 'fa-chevron-down') {
            $(this).find(`#${itemId}`).removeClass('fa-chevron-down');
            $(this).find(`#${itemId}`).addClass('fa-chevron-up');
            this.title = 'Haz click para replegar';
        } else {
            $(this).find(`#${itemId}`).removeClass('fa-chevron-up');
            $(this).find(`#${itemId}`).addClass('fa-chevron-down');
            this.title = 'Haz click para desplegar';
        }

    });

})(jQuery); // End of use strict
