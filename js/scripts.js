/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/


/*
	Preloader
*/

$(window).on("load", function() {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function(){
		preload.fadeOut();
	});
});
function initializeMasonryPopups() {

	$('.filter-button-group').on('change', 'input[type="radio"]', function () {
		if ($(this).is(':checked')) {
			$('.f_btn').removeClass('active');
			$(this).closest('.f_btn').addClass('active');
		}
		/* popup image */
		$('.has-popup-image').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'popup-box',
			image: {
				verticalFit: true
			}
		});

		/* popup video */
		$('.has-popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			mainClass: 'popup-box'
		});

		/* popup music */
		$('.has-popup-music').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			mainClass: 'popup-box'
		});

		/* popup media */
		$('.has-popup-media').magnificPopup({
			type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'popup-box-inline',
			callbacks: {
				open: function () {
					if ($(window).width() >= 1240) {
						$('.popup-box-inline .popup-box').slimScroll({
							height: height + 'px'
						});
					}
				}
			}
		});
	});


	/*
        Popups
    */

	/* popup image */
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'popup-box',
		image: {
			verticalFit: true
		}
	});

	/* popup video */
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'popup-box'
	});

	/* popup music */
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'popup-box'
	});

	/* popup media */
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'popup-box-inline',
		callbacks: {
			open: function () {
				if ($(window).width() >= 1240) {
					$('.popup-box-inline .popup-box').slimScroll({
						height: height + 'px'
					});
				}
			}
		}
	});
}
$(function () {
	'use strict';
	
	
	/*
		Vars
	*/
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	/*
		Header Menu Desktop
	*/
	
	var container = $('.container');
	var card_items = $('.card-inner');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');
	
	$('.top-menu').on('click', 'a', function(){

		/* vars */
		var width = $(window).width();
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.top-menu li');
		var menu_item = $(this).closest('li');
		var d_lnk = $('.lnks .lnk.discover');

		if((width >= 1024)) {
			
			/* if desktop */
			if(!menu_item.hasClass('active') & (width > 1023) & $('#home-card').length) {

				/* close card items */
				menu_items.removeClass('active');
				container.find(card_items).removeClass('animated '+animation_in);

				if($(container).hasClass('opened')) {
					container.find(card_items).addClass('animated '+animation_out);
				}

				/* open card item */
				menu_item.addClass('active');
				container.addClass('opened');
				container.find(card_item).removeClass('animated '+animation_out);
				container.find(card_item).addClass('animated '+animation_in);
				
				$(card_items).addClass('hidden');
				
				$(card_item).removeClass('hidden');
				$(card_item).addClass('active');
			}
		}
		/* if mobile */
		if((width < 1024) & $('#home-card').length) {

			/* scroll to section */
			$('body,html').animate({
				scrollTop: h - 76
			}, 800);
		}
		return false;
	});

	$(window).on('resize', function(){
		var width = $(window).width();
		var height = $(window).height();

		if((width < 1024)) {
			$('.card-inner').removeClass('hidden');
			$('.card-inner').removeClass('fadeOutLeft');
			$('.card-inner').removeClass('rotateOutUpLeft');
			$('.card-inner').removeClass('rollOut');
			$('.card-inner').removeClass('jackOutTheBox');
			$('.card-inner').removeClass('fadeOut');
			$('.card-inner').removeClass('fadeOutUp');
			$('.card-inner').removeClass('animated');

			$(window).on('scroll', function(){
				var scrollPos = $(window).scrollTop();
				$('.top-menu ul li a').each(function () {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.offset().top - 76 <= scrollPos) {
						$('.top-menu ul li').removeClass("active");
						currLink.closest('li').addClass("active");
					}
				});
			});

			$('.card-inner .card-wrap').slimScroll({destroy: true});
			$('.card-inner .card-wrap').attr('style', '');
		}
		else {
			$($('.top-menu li.active a').attr('href')).addClass('active');
			$('.card-inner .card-wrap').slimScroll({
				height: '570px'
			});
		}
	});
	
	
	/*
		Smoothscroll
	*/
	
	if((width < 1024) & $('#home-card').length) { 
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 76 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}
	
	
	/*
		slimScroll
	*/
	
    if(width > 1024) {
        $('.card-inner .card-wrap').slimScroll({
            height: '570px'
        });
    }
	
	
	/*
		Hire Button
	*/
	
	$('.lnks').on('click', '.lnk.discover', function(){
		$('.top-menu a[href="#contacts-card"]').trigger('click');
	});
	
	
	/*
		Initialize masonry items
	*/
	
	var $container = $('.grid-items');
	
	$container.imagesLoaded(function() {
		$container.multipleFilterMasonry({
			itemSelector: '.grid-item',
			filtersGroupSelector: '.filter-button-group',
			percentPosition: true,
			gutter: 0
		});
	});
	

	/*
		12. Initialize masonry filter
	*/

	initializeMasonryPopups();
	
	
	/*
		Validate Contact Form
	*/
	
	$("#cform").validate({
		ignore: ".ignore",
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			grecaptcha.execute('6LeztasUAAAAANPoA_YRj2NR-Q1xa0De45hwanvT', {action: 'contactForm'}).then(function(token) {
				$.ajax({
					url: "https://jbithell.com/contactformajax.php",
					type: 'post',
					dataType: 'json',
					data: 'c_recaptcha_v3='+token+'&c_name='+ $("#cform").find('input[name="name"]').val() + '&c_email='+ $("#cform").find('input[name="email"]').val() + '&c_message=' + $("#cform").find('textarea[name="message"]').val(),
					success: function(data) {
						if (data == "1") {
							$('#cform').fadeOut();
							$('.alert-success').delay(1000).fadeIn();
						} else {
							alert(data);
						}
					},
					error: function(jqXHR, textStatus, errorThrown) {
						alert("Please check your internet connection and reload the page: " + textStatus);
					}
				});
			});

		}
	});
	
	
	/*
		Validate Commect Form
	*/
	
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
	});
	
	
	/*
		Google Maps
	*/
	
	if($('#map').length) {
		initMap();
	}


	/*
		Tesimonials Carousel

	var revs_slider = $(".revs-carousel.default-revs .owl-carousel");

	revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		dots: true
	});

	var rtl_revs_slider = $(".revs-carousel.rtl-revs .owl-carousel");

	rtl_revs_slider.owlCarousel({
		margin: 0,
		items: 1,
		rtl: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		rewind: false,
		nav: false,
		dots: true
	});
*/

	/*
		Credits List
	 */


});

$(document).ready(function () {
	$.ajax({
		url: "https://jbithell.com/projects/cv/?json&type=1&forceImage=1",
		dataType: 'json',
		success: function(data) {
			$(data.CREDITS).each(function (index, project) {
				var roles = '';
				$(project['credits_sub_types_list']).each(function (index, role) {
					roles += '<li>' + role + '</li>';
				});
				$( "#creditsList" ).prepend(
					`<div class="col col-d-6 col-t-6 col-m-12 grid-item ` + project['type_name'] + ` border-line-h">
								<div class="box-item">` + (project['credits_images'].length > 0 ? `
									<div class="image">
										<a href="#popup-` + index + `" class="has-popup-media">
											<img src="https://jbithell.com/projects/cv/images/compressed/` + project['credits_images'][0] + `" alt="` + project['credits_name'] + ` - Image Credit: ` + project['credits_images_imageCredit'] + `" />
											<span class="info">
												<span class="ion ion-images"></span>
											</span>
										</a>
									</div>` : "") + `
									<div class="desc">
										<a href="#popup-` + index + `" class="name has-popup-media">` + project['credits_name'] + `</a>
										<div class="category">` + project['credits_startDate'] + (project['credits_images_imageCredit'] != null ? `<br/>Image: ` + project['credits_images_imageCredit'] : "") + `</div>
									</div>
									<div id="popup-` + index + `" class="popup-box mfp-fade mfp-hide" style="padding-top: 15px;">
										<div class="content">
											<div class="desc">
												<div class="post-box">
													<h1>` + project['credits_name'] + `</h1>						
													<div class="blog-detail">` + project['type_name'] + `</div>
													<div class="blog-content">
														<ul class="list-style">
															` + (project['credits_subTitle_author'] != null ? `<li><b>Author: </b>` + project['credits_subTitle_author'] + `</li>` : "") + `
															` + (project['credits_subTitle_director'] != null ? `<li><b>Director: </b>` + project['credits_subTitle_director'] + `</li>` : "") + `
															` + (project['credits_startDate'] != null ? `<li><b>Date: </b>` + project['credits_startDate'] + `</li>` : "") + `
															` + (project['credits_venue'] != null ? `<li><b>Venue: </b>` + project['credits_venue'] + `</li>` : "") + `
															` + (project['credits_public_notes'] != null ? `<li>` + project['credits_public_notes'] + `</li>` : "") + `
															<br/>` + roles + `
														</ul>														
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>`
				);
			});
			initializeMasonryPopups();
		},
		error: function(jqXHR, textStatus, errorThrown) {

		}
	});
});
