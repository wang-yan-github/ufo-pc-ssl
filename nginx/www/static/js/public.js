/********************************************************************public**********************************************************/
/*pc上导航*/
//jQuery(".menu").slide({ type: "menu", titCell: ".nli", targetCell: ".sub", effect: "slideDown", delayTime:300, triggerTime: 0,returnDefault: true });
if ($(window).width() >= 768) {  
$(document).ready(function(){
	var ss = $(document).scrollTop();
	$(window).scroll(function(){
		var s = $(document).scrollTop();
		if(s > 0){
			
			if(s > ss){
				$('.topnav').addClass('on_2');
				$('.topnav').removeClass('on_1');
			}else{
				$('.topnav').removeClass('on_2');
				$('.topnav').addClass('on_1');
			}
			ss = s;
		}else{
			$('.topnav').removeClass('on_1');
		}
	});
});
}
/*pc上导航end*/

<!--手机导航js-->
	/*手机导航js*/
	$(".pf_menu_btn").click(function(){
		$(".pf_menu").removeClass('on');
		$(".pf_menu_bg").removeClass("on");
	})
	if ($(window).width() >= 1024) {
	$("#menu").hover(function(){
		"use strict";/*进入严格模式标语*/
		$(".pf_menu_bg").addClass('on');
		$(".pf_menu").addClass('on');
	});
	
	}
	if ($(window).width() < 1024) {
	$("#menu").click(function(){
		"use strict";/*进入严格模式标语*/
		$(".pf_menu_bg").addClass('on');
		$(".pf_menu").addClass('on');
	});
		
	}
	$('#navSlide .nli p').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).next().stop().slideUp();
		}else{
			$(this).parent().addClass('on');
			$(this).next().stop().slideDown();
			$(this).parent().siblings().removeClass('on');
			$(this).parent().siblings().find('.l2_ul').stop().slideUp()
		}
	})
	$('#navSlide .nli .l2').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(this).find('.l3_ul').stop().slideUp();
		}
	else{
		$(this).addClass('on');
		$(this).find('.l3_ul').stop().slideDown();
		$(this).siblings().removeClass('on');
		$(this).siblings().find('.l3_ul').stop().slideUp()
		}
	})
if ($(window).width() < 768) {  
	$('.menulist .l1.first .l1_a').click(function(){
		$(this).next().toggleClass('on');
		$(this).parent().toggleClass('active')
	})
}
<!--手机导航jsend-->

/*内页导航*/ 
if ($(window).width() >= 768) {    
$(window).scroll(function(){
	if($(window).scrollTop()>=$('.topnav').height()+67){
		$('.pz_SideLayer_1').addClass('on')
		$('.zbg3').show()
	}else{
		$('.pz_SideLayer_1').removeClass('on')
		$('.zbg3').hide()
	}
})
}

//动画效果
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();