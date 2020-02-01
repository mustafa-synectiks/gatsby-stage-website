import React, { useEffect } from 'react';
import Header from './Header';
// import $ from 'jquery';
// import * as jquery from 'jquery';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
	useEffect(() => {
		// typeof window !== 'undefined' && window;
		var $ = window.$;
		// var on = window.on;
		$(function($) {
			let url = window.location.href;
			$('.dropdown-item').each(function() {
				if (this.href === url) {
					$(this).parents('.nav-item').find('.nav-link').addClass('active');
				}
			});
		});

		// Cookie Strip
		$(document).ready(function() {
			$('#hide').click(function() {
				$('.content').hide();
			});
		});

		$(document).ready(function() {
			$('#otherservice').hide();
		});
		// $("#otherservice").style.display = "none";
		$('#service').change(function() {
			var val = $(this).val();
			$('#otherservice').hide();
			if (val == 'Others') {
				$('#otherservice').show();
				// $("#otherservice").style.display = "block";
			} else {
				$('#otherservice').hide();
			}
		});

		$(document).ready(function() {
			$('#othersource').hide();
		});
		$('#source').change(function() {
			var val = $(this).val();
			$('#othersource').hide();
			if (val == 'Othersource') {
				$('#othersource').show();
			} else {
				$('#othersource').hide();
			}
		});
		// /Case Study Starts
		// jQuery(function($) {
		$(document).ready(function() {
			var $slider = $('.slider');
			var $progressBar = $('.progress');
			var $progressBarLabel = $('.slider__label');

			$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var calc = nextSlide / (slick.slideCount - 1) * 100;

				$progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);

				$progressBarLabel.text(calc + '% completed');
			});

			$slider.slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 400,
				nextArrow: $('.prevbtn'),
				prevArrow: $('.nextbtn'),
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							centerMode: true
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							autoplay: true,
							autoplaySpeed: 2000
						}
					}
				]
			});
		});
		// /Case Study Ends
		// OWL V1.3
		$(document).ready(function() {
			var time = 6; // time in seconds

			var $progressBar, $bar, $elem, isPause, tick, percentTime;
			// var $elem = $('#owl-demo');
			//Init the carousel
			$('#owl-demo').owlCarousel({
				// $elem.owlCarousel({
				slideSpeed: 500,
				paginationSpeed: 500,
				singleItem: true,
				afterInit: progressBar,
				afterMove: moved,
				startDragging: pauseOnDragging,
				afterAction: function() {
					if (owl) {
						var item = owl.currentItem;
						$('h3').removeClass('animated fadeInRight');
						$('.owl-item')
							.not('.cloned')
							.eq(item)
							.find('h3')
							.addClass('animated delay-1s slow fadeInRight');
						$('p').removeClass('animated fadeInRight');
						$('.owl-item').not('.cloned').eq(item).find('p').addClass('animated delay-2s slow fadeInRight');
					}
				}
			});
			if (window.innerWidth > 768) {
				$('.owl-carousel').owlCarousel();
			}
			var owl = $('#owl-demo').data('owlCarousel');

			//Init progressBar where elem is $("#owl-demo")
			function progressBar(elem) {
				$elem = elem;
				//build progress bar elements
				buildProgressBar();
				//start counting
				start();
			}

			//create div#progressBar and div#bar then prepend to $("#owl-demo")
			function buildProgressBar() {
				$progressBar = $('<div>', {
					id: 'progressBar'
				});
				$bar = $('<div>', {
					id: 'bar'
				});
				$progressBar.append($bar).appendTo($elem);
			}

			function start() {
				//reset timer
				percentTime = 0;
				isPause = false;
				//run interval every 0.01 second
				tick = setInterval(interval, 10);
			}

			function interval() {
				if (isPause === false) {
					percentTime += 1 / time;
					$bar.css({
						width: percentTime + '%'
					});
					//if percentTime is equal or greater than 100
					if (percentTime >= 100) {
						//slide to next item
						$elem.trigger('owl.next');
					}
				}
			}

			//pause while dragging
			function pauseOnDragging() {
				isPause = true;
			}

			//moved callback
			function moved() {
				//clear interval
				clearTimeout(tick);
				//start again
				start();
			}

			// uncomment this to make pause on mouseover
			// $elem.on('mouseover', function() {
			// 	isPause = true;
			// });
			// $elem.on('mouseout', function() {
			// 	isPause = false;
			// });
		});
		// OWL V1.3
	});
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
