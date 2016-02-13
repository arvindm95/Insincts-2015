// $(document).ready(function () {
// $.waitForImages.hasImgProperties = ['background','backgroundImage'];
//   $('body').waitForImages(function() {
//       $(".page-mask").delay(1200).fadeOut('slow');
//       $('body').css('overflowY','auto');

//   });
// });

/*-------------------------------------------------*/
/* =  Preloader
/*-------------------------------------------------*/

$(window).load(function() {
    $(".page-mask").delay(1200).fadeOut('slow');
    $(function(){
        $("#typed-text").typed({
            strings: ["<span>SSN</span> Proudly Presents</span>"],
            typeSpeed: 120,
            contentType: 'html',
            showCursor: false,
            callback: function() {

                $('#section .slide-main').removeClass('hidden').addClass('intro-text-h-animation');
                $('#section .welcome').removeClass('hidden').addClass('intro-text-p-animation');
                $('#section .top-logo').removeClass('hidden').addClass('intro-text-top-logo-animation');
            }
        });
    });
    $('body').css('overflowY','auto');
});


/*-------------------------------------------------*/
/* =  Nerve Slider
/*-------------------------------------------------*/

$(document).ready(function(){
    $("#n-slider").nerveSlider({
      sliderWidth: "100%",
      sliderHeight: "100%",
      sliderResizable: true,
      showCpations: false,
      showTimer: false,
      showDots: false,
      showLoadingOverlay: false,
      sliderTheme: 'dark',
      allowKeyboardEvents: true,
      showPause: false,
      showArrows: true,
      slideTransitionSpeed: 1000,
      slideTransitionDelay: 5000
    // More options below
  });
});

/*-------------------------------------------------*/
/* =  Animated content
/*-------------------------------------------------*/
jQuery(document).ready(function () {

    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );

    wow.init();

/*==========================*/
/* Sticky Navigation
/*==========================*/
     
    jQuery("#navigation").sticky({topSpacing:0});


    /**
     * Navbar animation - Arun
     */
    // $('#navigation').on('sticky-start', function() {
    //     console.log("Started");
    //     $logo = $('.navbar .site-logo');
    //     $menu = $('.navbar ul.nav');
    //     $logo.removeClass('hidden');
    //     $logo.addClass('wow bounceInLeft animated');
    //     $menu.removeClass('hidden');
    //     $menu.addClass('wow bounceInRight animated');
    // });



    
/*==========================*/
/* Video Background Overlay
/*==========================*/

    var winheight = jQuery(window).height();

    jQuery(".video-overlay").css( "height", winheight );


/* ==============================================
Drop Down Menu Fade Effect
=============================================== */  

    $('.nav-toggle').hover(function() {
        'use strict';
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
        }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
     });



/*==========================*/
/* Navigation Scrolling
/*==========================*/
    //jQuery('.nav').onePageNav({
    //        filter: ':not(.external)',
    //        begin: function() {
    //        console.log("start")
    //        },
    //        end: function() {
    //        console.log("stop")
    //        }
    //    });


    //var navigationHeight = jQuery("#navigation").outerHeight();
    //
    //
    //jQuery('.align-center a, .caption-inside a, .top-logo a, .video-section a').click(function(){
    //    jQuery('html, body').animate({
    //        scrollTop: jQuery( $.attr(this, 'href') ).offset().top - navigationHeight + 44
    //    }, 800, 'easeInQuad');
    //
    //    /* Fix jumping of navigation. */
    //    setTimeout(function() {
    //        jQuery(window).trigger('scroll');
    //    }, 900);
    //
    //    return false;
    //});

    /******* Custom Function - Arun *********/

    $(".top-logo a, nav a, .slide a.img-btn, #guests-goto, .site-logo a").click(function() {
        var ScrollOffset = 0;
        //alert(ScrollOffset);
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 1500,
            easing: "easeOutQuad"
        });
        return false;
    });


/*******************************************/

    

/*==========================*/
/* FullScreen Slider
/*==========================*/

    jQuery(function (){
        jQuery('#fullscreen-slider').maximage({
            cycleOptions: {
                fx: 'fade',
                speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
                timeout: 0,
                prev: '#slider_left',
                next: '#slider_right',
                pause: 0,
                before: function(last,current){
                    jQuery('.slide-content').fadeOut().animate({top:'500px'},{queue:false, easing: 'easeOutQuad', duration: 750});
                    jQuery('.slide-content').fadeOut().animate({top:'-500px'});
                },
                after: function(last,current){
                    jQuery('.slide-content').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 650});
                }
                
                
                        
            },
            
            
            
            onFirstImageLoaded: function(){
                //jQuery('#cycle-loader').delay(1000).hide();
                jQuery('#fullscreen-slider').delay(1000).fadeIn('slow');
                jQuery('.slide-content').fadeIn().animate({top:'0'});
                jQuery('.slide-content a').bind('click',function(event){
                    var $anchor = jQuery(this);              
                    jQuery('html, body').stop().animate({
                    scrollTop: jQuery($anchor.attr('href')).offset().top -44
                    }, 1500,'easeInOutExpo');               
                    event.preventDefault();
                    });         
            }
        });

        // Helper function to Fill and Center the HTML5 Video
        jQuery('video,object').maximage('maxcover');
        
        
        
        

        // To show it is dynamic html text
        
    });


    

/*----------------------------------------------------*/
/*  Parallax section
/*----------------------------------------------------*/
    //Calculating page width
    pageWidth = jQuery(window).width();

    //Parallax  
    jQuery(window).bind('load', function () {
        if(pageWidth > 980) {
            parallaxInit();
        }                       
    });

    function parallaxInit() {
        jQuery('.landing-left').parallax("30%", 0.1);
        jQuery('.testimonial-wrap').parallax("30%", 0.1);
        jQuery('.quote-wrap').parallax("30%", 0.1);
        jQuery('.subscription-wrap').parallax("30%", 0.1);
        jQuery('.image-parallax').parallax("50%", 0.1);
        
    }


    //Horizontal parallax
    jQuery('.about-wrap .parallax-layer')
        .hparallax({
          mouseport: jQuery('.about-wrap')
    }); 


/*----------------------------------------------------*/
/*  Animated Progress Bars
/*----------------------------------------------------*/

    jQuery('.skills li').each(function () {
        jQuery(this).fappear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 1300, "easeOutCirc");
        }); 
    });   


/*----------------------------------------------------*/
/*  Animated Count To
/*----------------------------------------------------*/

    jQuery('#sec2-subsec4 .fun-box').each(function () {
        jQuery(this).fappear(function() {
            jQuery('.fun').countTo();
        }); 
    });


 
/*----------------------------------------------------*/
/*  Scroll To Top Section
/*----------------------------------------------------*/
    jQuery(document).ready(function () {
    
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 300) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        });
    
        jQuery('.scrollup').click(function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    
    });





/*----------------------------------------------------*/
/*  Accordion Section
/*----------------------------------------------------*/

    jQuery('.accordionMod').each(function (index) {
        var thisBox = jQuery(this).children(),
            thisMainIndex = index + 1;
        jQuery(this).attr('id', 'accordion' + thisMainIndex);
        thisBox.each(function (i) {
            var thisIndex = i + 1,
                thisParentIndex = thisMainIndex,
                thisMain = jQuery(this).parent().attr('id'),
                thisTriggers = jQuery(this).find('.accordion-toggle'),
                thisBoxes = jQuery(this).find('.accordion-inner');
            jQuery(this).addClass('panel');
            thisBoxes.wrap('<div id=\"collapseBox' + thisParentIndex + '_' + thisIndex + '\" class=\"panel-collapse collapse\" />');
            thisTriggers.wrap('<div class=\"panel-heading\" />');
            thisTriggers.attr('data-toggle', 'collapse').attr('data-parent', '#' + thisMain).attr('data-target', '#collapseBox' + thisParentIndex + '_' + thisIndex);
        });
        jQuery('.accordion-toggle').prepend('<span class=\"icon\" />');
        jQuery("div.accordion-item:first-child .accordion-toggle").addClass("current");
        jQuery("div.accordion-item:first-child .icon").addClass("iconActive");
        jQuery("div.accordion-item:first-child .panel-collapse").addClass("in");
        jQuery('.accordionMod .accordion-toggle').click(function () {
            if (jQuery(this).parent().parent().find('.panel-collapse').is('.in')) {
                jQuery(this).removeClass('current');
                jQuery(this).find('.icon').removeClass('iconActive');
            } else {
                jQuery(this).addClass('current');
                jQuery(this).find('.icon').addClass('iconActive');
            }
            jQuery(this).parent().parent().siblings().find('.accordion-toggle').removeClass('current');
            jQuery(this).parent().parent().siblings().find('.accordion-toggle > .icon').removeClass('iconActive');
        });
    });


/*----------------------------------------------------*/
/*  PrettyPhoto
/*----------------------------------------------------*/

    // jQuery(function(){
    //     jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
    //           opacity: 0.5,
    //           social_tools: "",
    //           deeplinking: false
    //     });

    //     jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
    // });     



    // jQuery("#horizontal-tabs").tytabs({
    //     tabinit: "1",
    //     fadespeed: "fast"
    // });




/*===============================================*/
/*  Video Script
/*===============================================*/

    // jQuery(function(){
    //     jQuery(".player").mb_YTPlayer();
    // }); 


/*----------------------------------------------------*/
/*  Carousel Section
/*----------------------------------------------------*/

    
    jQuery('.testimonials-carousel').carousel({interval: 5000, wrap: true});   
    
    jQuery('.testimonials-carousel-widget').carousel({interval: 5000, pause: "hover"});

});




/*----------------------------------------------------*/
/*  Portfolio Isotope
/*----------------------------------------------------*/

  jQuery(document).ready(function(){     

    var container = jQuery('#portfolio-wrap'); 
    var winWidth = jQuery(window).width();  
    
    container.isotope({
        animationEngine : 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows',
        filter: '.chumma'
    });

    //Initialize the column
    setProjects(); 


    jQuery('#filters a').click(function(){
        jQuery('#filters a').removeClass('active');
        jQuery(this).addClass('active');
        var selector = jQuery(this).attr('data-filter');
        container.isotope({ filter: selector });
        setProjects();      
        return false;
    });
        
        
        function splitColumns() { 
            var winWidth = jQuery(window).width(), 
                columnNumb = 1;
            
            
            if (winWidth > 1024) {
                columnNumb = 4;
            } else if (winWidth > 900) {
                columnNumb = 2;
            } else if (winWidth > 479) {
                columnNumb = 2;
            } else if (winWidth < 479) {
                columnNumb = 1;
            }
            
            return columnNumb;
        }       
        
        function setColumns() { 
            var winWidth = jQuery(window).width(), 
                columnNumb = splitColumns(), 
                postWidth = Math.floor(winWidth / columnNumb);
            
            container.find('.portfolio-item').each(function () { 
                jQuery(this).css( { 
                    width : postWidth + 'px' 
                });
            });
        }       
        
        function setProjects() { 
            setColumns();
            container.isotope('reLayout');
        }       
        
        container.imagesLoaded(function () { 
            setColumns();
        });
        
    
        jQuery(window).bind('resize', function () { 
            setProjects();          
        });

});



/*----------------------------------------------------*/
/*  BxSlider
/*----------------------------------------------------*/


jQuery(document).ready(function(){
    
    var onMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
    
    var bxSlider = jQuery('.fullwidth-slider').bxSlider({
        mode: "fade",
        speed: 2000,
        pager: false,
        auto: true,
        pause: 6000,
        controls: false
    });
    
    jQuery('.bx-wrapper .bx-controls-direction a').attr('data-500','top:83%; opacity: 0;').attr('data-start','top:50%; opacity: 1;');
    
    
    if( ( onMobile === false ) && ( jQuery('.parallax-slider').length ) ) {
    
        skrollr.init({
            edgeStrategy: 'set',
            smoothScrolling: false,
            forceHeight: false
        });
        
    }

    jQuery('.text-slide').bxSlider({
        controls: false,
        adaptiveHeight: true, 
        pager: false,       
        auto:true,
        mode:'fade',
        pause: 3000
    });
});  


 /* ==============================================
Firefox anchor fix
=============================================== */
    $(document).ready(function(){
        if ( $.browser.mozilla ) {
        var h = window.location.hash;
        if (h) {
            var headerH = $('#navigation').outerHeight();
            $('html, body').stop().animate({
                scrollTop : $(h).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

                event.preventDefault();
        }

    }
    });


/* ==============================================
 Supersized
 =============================================== */
// jQuery(function ($) {
//     $.supersized({
//         slideshow: 1,
//         autoplay: 1,
//         start_slide: 1,
//         stop_loop: 0,
//         random: 0,
//         slide_interval: 5000,
//         transition: 6,       // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
//         transition_speed: 1500,
//         new_window: 1,
//         pause_hover: 0,
//         keyboard_nav: 1,
//         performance: 1,      // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
//         image_protect: 1,

//         min_width: 0,      // Min width allowed (in pixels)
//         min_height: 0,      // Min height allowed (in pixels)
//         vertical_center: 1,      // Vertically center background
//         horizontal_center: 1,      // Horizontally center background
//         fit_always: 0,      // Image will never exceed browser width or height (Ignores min. dimensions)
//         fit_portrait: 1,      // Portrait images will not exceed browser height
//         fit_landscape: 0,      // Landscape images will not exceed browser width

//         slide_links: 'blank',  // Individual links for each slide (Options: false, 'num', 'name', 'blank')
//         thumb_links: 0,      // Individual thumb links for each slide
//         thumbnail_navigation: 0,      // Thumbnail navigation
//         slides: [      // Slideshow Images
//             {image: 'img/slider/front/1.jpg'},
//             {image: 'img/slider/front/2.jpg'},
//             {image: 'img/slider/front/3.jpg'}
//         ],
//         progress_bar: 1,      // Timer for each slide
//         mouse_scrub: 0
//     });
// });


/* ==============================================
 Intro Text Animation Sync
 =============================================== */
// $(document).ready(function() {
//     var i = 1;
//     $('.sp-container h2').each(function () {
//         console.log(i)
//         $(this).addClass('frame-content')
//         $(this).addClass('frame-' + i++)
//     });
//     $('.top-logo').addClass('top-logo-animate');
// });


/* ==============================================
 Events overlay animation
 =============================================== */
$('.img-holder').hover(
    function() {
        $element = $(this).find('.portfolio-overlay-content');
        $element.removeClass('fadeInUp fadeOutDown animated').addClass('fadeInUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('fadeInUp animated')
        });
    },
    function() {
        $element = $(this).find('.portfolio-overlay-content');
        $element.removeClass('fadeInUp fadeOutDown animated').addClass('fadeOutDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('fadeOutDown animated')
        });
    }
);


/* ==============================================
 Team overlay animation
 =============================================== */

$('.team-member').hover(
    function() {
        $element = $(this).find('.team-member-links-list');
        $element.removeClass('fadeInUp fadeOutDown animated').addClass('fadeInUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('fadeInUp animated')
        });
    },
    function() {
        $element = $(this).find('.team-member-links-list');
        $element.removeClass('fadeInUp fadeOutDown animated').addClass('fadeOutDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('fadeOutDown animated')
        });
    }
);

/* ===================================================
ScrollSpy event handling to fix nav item hover effect
 ===================================================== */

// $('#navigation').on('activate.bs.scrollspy', function (e) {
//     console.log(this);
// });

/* ==============================================
 Open Modals on clicking an Event item
 =============================================== */


$(document).ready(function() {

    var portfolioModal = $('.portfolio-modal');

    portfolioModal.on('show.bs.modal', function(event) {
        $('#navigation').addClass('hidden');
        $('.scrollup').addClass('hidden');
        $('body').css('overflow-y', 'hidden');
    });

    


    portfolioModal.on('hide.bs.modal', function(event) {
        $('#navigation').removeClass('hidden');
        $('.scrollup').removeClass('hidden');
        $('body').css('overflow-y', 'auto');

        $('#generic-modal').removeData('bs.modal');
        $('#generic-modal .modal-content').html('');
    });

    $('.portfolio-item').on('click', function(event) {
        var eventName = $(this).attr('data-custom-event-name');
        console.log(eventName);

        var genericModal = $('#generic-modal');
        //genericModal.removeData('bs.modal');
        genericModal.modal({remote: 'ajax/events/' + eventName + '.html' });
        genericModal.modal('show');
    });
});


/* ==============================================
Gallery
 =============================================== */
$(document).ready(function() {
    $(function(){
        $( "#gallery" ).jGallery( {
            transition:"random",
            transitionBackward:"random",
            transitionCols:"3",
            transitionRows:"3",
            thumbnailsPosition:"bottom",
            thumbType:"image",
            backgroundColor:"#000",
            mode:"standard",
            browserHistory: false,
            autostart: true,
            slideshow: true,
            slideshowAutostart: false,
            slideshowInterval: '8s',
            zoomSize: 'fill',
            thumbnails: true
        });
        $('#section5 .nav-bottom').remove();
        $('#section5 .nav').remove();
    });
});

/* ==============================================
Slick for sponsors
 =============================================== */

 $(document).ready(function() {
    $('.sponsors-slider').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 500,
      arrows: false,
      dots: false,
      swipeEvents: false,
      draggableZoomHideNavigationOnMobile: false,
      draggableZoom: true
    });
 });



 /*----------------------------------------------------*/
/*  Jquery Google map Section
/*----------------------------------------------------*/
        
$(document).ready(function() {
  //Google map
    jQuery('#maps').gMap({
        address: "SSN College of Engineering, Rajiv Gandhi Salai(OMR), Kalavakkam - 603110, Tamil Nadu, India",
        zoom: 16,
        controls: {
         panControl: true,
         zoomControl: true,
         mapTypeControl: true,
         scaleControl: true,
         streetViewControl: true,
         overviewMapControl: true
     },
        markers: [{
            latitude: 12.750901,
            longitude: 80.197249,
            html: "<h4>SSN College of Engineering</h4><p>Rajiv Gandhi Salai(OMR),<br/>Kalavakkam - 603110,<br/>Tamil Nadu, India.",
            popup: true
        }]
    });
});