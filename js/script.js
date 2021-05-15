$(document).ready(function(){

	//filter
	$('.top').click((e)=>{
		document.querySelectorAll('.top__item').forEach(function(item){
			$(e.target).addClass("active");
			if(e.target != item){
				$(item).removeClass('active');
			};
		});

		document.querySelectorAll('.dishes__item').forEach(function(item){
			
			if($(e.target).data('filter') != $(item).data('filter-item') && $(e.target).data('filter') != 'all'){
				$(item).fadeOut();
			}else{
				$(item).fadeIn();
			};
		});
	});

	//slider
	$('.slider-container').slick({
		arrows: false,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 2000,
	});

	//revers blocks with images
	$('.descblock-wrap').each((index) => {
		if((+index + 1)%2 == 0) $('.descblock-wrap')[index].style.cssText=`flex-direction: row-reverse;`;
	});

	//underline menu scroll
	$(document).scroll(() => {
		let section = document.querySelectorAll('section');

		for (let i = 0; i < section.length; i++){
			if (Math.floor(section[i].getBoundingClientRect()['top'] + window.pageYOffset) <= window.pageYOffset){
				$('.link-menu').removeClass('active');
				$('.link-menu')[i].classList.add('active');
			} 
		}
	});

	//burger menu
	$('.burger-btn').click((e) => {
		$('.burger-btn').toggleClass('active');
		$('.burger-menu').slideToggle();
		$('.header__close').toggleClass('active');
	});

	$('.header__close').css("min-height", `${$(document).height()}px`);
	$('.header__close').click(e => {
		$('.burger-btn').toggleClass('active');
		$('.burger-menu').slideToggle();
		$('.header__close').toggleClass('active');
	});
});