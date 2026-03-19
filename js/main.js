/*  ---------------------------------------------------
    Template Name: Manup
    Description: Manup Event HTML Template
    Author: Colorlib
    Author URI: http://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
		Partner Slider
    ----------------------- */
    $(".partner-logo").owlCarousel({
        items: 6,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 116,
        responsive: {
            320: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: false,
        autoplay: false,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2
            }
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
    /*  var timerdate = "2020/01/01"; */

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });

    /*------------------
        Cherry blossom notice (site-wide)
    --------------------*/
    (function() {
        // Avoid duplicates on pages that already contain the banner (e.g., attend.html).
        if (document.querySelector('.cherry-blossom-notice')) return;

        var notice = document.createElement('div');
        notice.className = 'cherry-blossom-notice';
        notice.setAttribute('role', 'note');
        notice.innerHTML =
            '<div class="container d-flex align-items-center justify-content-center flex-wrap">' +
                '<span class="cherry-icon">🌸</span>' +
                '<span>Cherry blossoms will be in bloom just in time for CHIIR! Check ' +
                    '<a href="https://www.washington.edu/cherryblossoms/" target="_blank" rel="noopener">UW Cherry Blossoms website</a>' +
                    ' and <a href="https://udistrictseattle.com/cherryblossomfestival" target="_blank" rel="noopener">Cherry Blossom Festival</a> for details</span>' +
            '</div>';

        // Place it right below the main header/nav (like attend.html).
        var header = document.querySelector('header.header-section');
        if (header && header.parentNode) {
            header.insertAdjacentElement('afterend', notice);
        } else {
            // Fallback: insert near the top.
            var preloader = document.getElementById('preloder');
            if (preloader && preloader.parentNode) {
                preloader.insertAdjacentElement('afterend', notice);
            } else if (document.body && document.body.firstChild) {
                document.body.insertBefore(notice, document.body.firstChild);
            } else if (document.body) {
                document.body.appendChild(notice);
            }
        }
    })();

})(jQuery);