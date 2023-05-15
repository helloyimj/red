$(function () {
	//mainslide
	var slider_main = $('.slider_main').slick({
		arrows:false,
					autoplay: true,
					dots: true,
					infinite: true,
					slidesToShow: 1,
					autoplay: true,
					fade: true,
					autoplaySpeed: 4000 ,
					responsive: [
							{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
								settings: {
									slidesToShow: 1,
									autoplay: false,
									autoplaySpeed: 4000 ,
									infinite: true,
									fade: true,
							}},]
	
					
			});

			var direction = true;
			var slidePrev = $(".main_visual .arrow_left");
			var slideNext = $(".main_visual .arrow_right");
	
			slidePrev.on("click", function () {
				direction = false;
				$('.slider_main').slick("slickPrev");
			});
			slideNext.on("click", function () {
				$('.slider_main').slick("slickNext")
			});
	
	
	
	
			// $(window).on('load resize', function () {
			// 		if ($(window).width() > 768) {
			// 				Rsd.slick('unslick');
			// 		} else {
			// 				Rsd.not('.slick-initialized').slick(slickOptions);
			// 		}
			// });
	
	//donation_slide
	var wrap_donation = $('.slider_donation').slick({
		arrows:false,
					autoplay: false,
					dots: false,
					infinite: true,
					slidesToShow: 1,
					fade: true,
					autoplaySpeed: 4000 ,
					asNavFor: '.donation_txt',
					responsive: [
							{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
								settings: {
									autoplay: false,
									dots: false,
									infinite: true,
									slidesToShow: 1,
									fade: true,
									autoplaySpeed: 4000 ,
									asNavFor: '.donation_txt',
							}},]
	
					
			});
$('.donation_txt').slick({
				arrows:false,
							autoplay: false,
							dots: false,
							infinite: true,
							slidesToShow: 1,
							autoplay: false,
							fade: true,
							autoplaySpeed: 4000 ,
							asNavFor: '.slider_donation',
							responsive: [
									{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
										settings: {
											slidesToShow: 1,
											autoplay: false,
											autoplaySpeed: 4000 ,
											infinite: true,
											fade: true,
											asNavFor: '.slider_donation',
											dots: false,
									}},]
			
							
					});
			var direction = true;
			var slidePrev = $(".wrap_donation .arrow_left");
			var slideNext = $(".wrap_donation .arrow_right");
	
			slidePrev.on("click", function () {
					direction = false;
					$('.slider_donation').slick("slickPrev");
			});
			slideNext.on("click", function () {
				wrap_donation.slick("slickNext")
			});
	
	

			
	//Youtube


// 	$('#bgndVideo').YTPlayer({
// 		videoURL: 'https://youtu.be/wGtUHrqeAM4',
// 		containment: '.movie',
// 		autoPlay: true,
// 		mute: true,
// 		//  startAt: 0,
// 	 opacity: 1,
// 		showControls: false,
// 		playOnlyIfVisible: true,

// });

// $('.movie i:nth-child(1)').on('click', function () {
// 		$('#bgndVideo').YTPPause();
// });
// $('.movie i:nth-child(2)').on('click', function () {
// 		$('#bgndVideo').YTPPlay();
// });


	//slider_story
	var slider_story = $('.slider_story').slick({
		arrows:false,
					autoplay: true,
					dots: true,
					infinite: true,
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 4000 ,
					vertical:true,	
		

					responsive: [
					
							{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
								settings: {
									slidesToShow: 2,
									autoplay: false,
									autoplaySpeed: 4000 ,
									infinite: true,
									fade: false,
									vertical:false,
								
									variableWidth: true
							}},
							
						
						]
	
					
			});


				//slider_news
	var slider_news = $('.slider_news').slick({
		arrows:false,
					autoplay: true,
					dots: false,
					infinite: true,
					slidesToShow: 4,
					autoplay: true,
					autoplaySpeed: 4000 ,
				
					responsive: [
							{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
								settings: {
									slidesToShow: 2,
									autoplay: false,
									autoplaySpeed: 4000 ,
									infinite: true,
									fade: false,
									vertical:false,
									dots: true,
									variableWidth: true
							}},]
	
					
			});	

			var direction = true;
			var slidePrev = $(".wrap_news .arrow_left");
			var slideNext = $(".wrap_news .arrow_right");
	
			slidePrev.on("click", function () {
				direction = false;
				$('.slider_news').slick("slickPrev");
			});
			slideNext.on("click", function () {
				$('.slider_news').slick("slickNext")
			});
	
	//wrap_notice tap
	$(document).on('click', '.wrap_tabs .tab_btn_item', function () {

		$(".wrap_tabs .tab_btn_item").removeClass("on");
		$(this).addClass("on");

		$(".tab_btn_list .tab_btn_anchor").removeClass("on");
		$(this).children(".tab_btn_anchor").addClass("on");

		
		var tabIdx = $(this).index();
		$(".wrap_tabs .tab_contents").removeClass("on");
		$(".wrap_tabs .tab_contents").eq(tabIdx).addClass("on");
		// console.log(tabIdx);
		});

	$(document).on('click', '.wrap_tabs .tab_btn_item', function () {

		$(".wrap_tabs .more_item").removeClass("on");
		$(this).addClass("on");

		$(".more_list .more_anchor").removeClass("on");
		$(this).children(".more_anchor").addClass("on");

		var tabIdx = $(this).index();
		$(".wrap_tabs .more_item").removeClass("on");
		$(".wrap_tabs .more_item").eq(tabIdx).addClass("on");
		});

		
		
			var slider_notice = $('.slider_notice').slick({
				arrows:false,
							autoplay: true,
							dots: false,
							infinite: true,
							slidesToShow: 4,
							autoplay: true,
							autoplaySpeed: 4000 ,
							slidesToScroll:2,
						
							responsive: [
									{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
										settings: {
											slidesToShow: 2,
											autoplay: false,
											autoplaySpeed: 4000 ,
											infinite: true,
											fade: false,
											vertical:false,
											dots: true,
											variableWidth: true
									}},]
			
							
					});	
		
					var direction = true;
					var slidePrev = $(".wrap_notice .arrow_left");
					var slideNext = $(".wrap_notice .arrow_right");
			
					slidePrev.on("click", function () {
						direction = false;
						$('.slider_notice').slick("slickPrev");
					});
					slideNext.on("click", function () {
						$('.slider_notice').slick("slickNext")
					});
			

					// //slider_notice - swiper
					// var noticeswiper = new Swiper(".slider_notice", {
					// 	slidesPerView: 4,
					// 	spaceBetween: 30,
					// 	navigation: {
					// 			nextEl: ".wrap_notice .arrow_right",
					// 			prevEl: ".wrap_notice .arrow_left",
					
					// 	},
					
					
					// });


//slider_promotion
var slider_promotion = $('.slider_promotion').slick({
	arrows:false,
				autoplay: true,
				dots: true,
				infinite: true,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 4000 ,
			
				responsive: [
						{ breakpoint: 768, // 화면의 넓이가 768px 이상일 때
							settings: {
								slidesToShow: 1,
								autoplay: false,
								autoplaySpeed: 4000 ,
								infinite: true,
								fade: false,
								vertical:false,
								dots: true,
								variableWidth: true
						}},]

				
		});	

			
		
  });

  //totop

  $(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scroll_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});

//slider_notice - swiper
