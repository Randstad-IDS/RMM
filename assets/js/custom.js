(function($) {
	'use strict';
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Preloader JS
	$(function() {
		$('body').addClass('loaded');
	});

	// Nice Select JS
	$('select').niceSelect();
	
	// Header Sticky JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	//  Hero Slider Wrap JS
	$('.hero-slider-wrap').owlCarousel({
		loop: true,
		margin:0,
		nav: true,
		mouseDrag: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed:800,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevrons-left'></i>",
			"<i class='bx bx-chevrons-right'></i>",
		],
	});

	// Partner Wrap JS
	$('.partner-wrap').owlCarousel({
		loop: true,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		mouseDrag: true,
		margin: 0,
		center: false,
		dots: false,
		smartSpeed:1500,
		responsive:{
			0:{
				items:2
			},
			576:{
				items:3
			},
			768:{
				items:4
			},
			992:{
				items:5
			},
			1200:{
				items:5
			}
		}
	});
	
	// Client Wrap JS
	$('.client-wrap').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed:1500,
		autoplayHoverPause: true,
		center: true,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:3,
			}
		}
	});
	
	// Single Security Wrap JS
	$('.single-security-wrap').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed:1500,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4,
			}
		}
	});

	// Solutions Wrap JS
	$('.solutions-wrap').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		center: true,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:3,
			}
		}
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Go to Top JS
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	// FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Count Time JS
	function makeTimer() {
		var endTime = new Date("november  30, 2022 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

	// Animation JS
	new WOW().init();
		
	// Popup Video JS
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});
	
	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Skill
	jQuery('.skill-bar').each(function() {
		jQuery(this).find('.progress-content').animate({
		width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
		{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});

	// Home Six JS

	// Search Popup JS
	$('.close-btn').on('click', function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click', function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});

	// Sidebar Modal JS
	$(".burger-menu").on('click',  function() {
		$('.sidebar-modal').toggleClass('active');
	});
	$(".sidebar-modal-close-btn").on('click',  function() {
		$('.sidebar-modal').removeClass('active');
	});

	// Partner Wrap JS
	$('.partner-slider-six').owlCarousel({
		loop: true,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		mouseDrag: true,
		margin: 10,
		center: false,
		dots: false,
		smartSpeed:1500,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	// Testimonials Slider JS
	$('.testimonials-slider').owlCarousel({
		items:1,
		loop: true,
		margin: 30,
		nav: true,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed:1500,
		autoplayHoverPause: true,
		center: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
	});

	// Services Slider JS
	$('.services-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
	});


	// New Demo JS

	//  New Main Home Slides JS
	$('.new-main-home-slides').owlCarousel({
		loop: true,
		margin:0,
		nav: true,
		mouseDrag: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		smartSpeed: 500,
		autoplayHoverPause: true,
		
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
	});

	// Complete Website Security JS
	$('.complete-website-security-slides').owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		mouseDrag: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		autoplayHoverPause: true,

		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			992:{
				items: 3,
			},
			1200:{
				items: 4,
			}
		}
	});

	// Success Projects Slides
	$('.success-projects-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,

		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	// Testimonials Wrap JS
	$('.testimonials-wrap-slides').owlCarousel({
		loop: true,
		margin: 25,
		nav: false,
		mouseDrag: true,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 3,
			},
			1200:{
				items: 3,
			}
		}
	});

	// Latest News JS
	$('.latest-news-slides').owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		mouseDrag: true,
		dots: false,
		autoHeight: true,
		autoplay: true,
		autoplayHoverPause: true,

		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			992:{
				items: 3,
			},
			1200:{
				items: 4,
			}
		}
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		nav: false,
		margin: 25,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

})(jQuery);
