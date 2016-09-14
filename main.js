var ad = {};

ad.init = function(){
	console.log("works");
	
	var tl1 = new TimelineMax();

	tl1.to('#banner-link', .4, { opacity:1,  ease: Power2.easeOut }, '+=4')
	.to('#banner-txt1', .5, { opacity: 0, ease: Power2.easeNone }, '+=.25')
	.to('#banner-img1', .5, { opacity: 0, ease: Power2.easeNone},'+=.1')
	.to('#banner-img2', .5, { opacity: 1, ease: Power2.easeNone}, '-=.7')
	.to('#banner-txt1', .25, { opacity: 0, ease: Power2.easeNone })
	.to('#banner-txt2', .6, { left: 0, opacity: 1, ease: Power2.easeNone })
	.to('#banner-txt3', .6, {opacity: 1, left: 320, ease: Power2.easeNone }, '+=.25')
	.to('#banner-img2', 2, {backgroundPositionX: 0, ease: Power0.easeNone })

	.to('#banner-img2', 2, {backgroundSize: '-=100%', ease: SlowMo.ease.config(0.3, 0.1, false), y: 0 } )
	
	.to('#banner-txt2', .25, { opacity:0, ease: Power2.easeNone }, '-=1.5')
	.to('#banner-txt3', .25, { opacity: 0, ease: Power2.easeNone }, '-=1.5')
	.to('#banner-txt4', .4, { opacity: 1, ease: Power2.easeNone })

	.to('#banner-cta', 1, { opacity: 1, ease: Power2.easeNone }, '=+1', 'cta')
	.to('#banner-cta h3', .4, { opacity: 1, ease: Power2.easeNone });

	var tm1 =  TweenMax.to("#banner-cta", 1, {backgroundPosition:"300px 0px", paused:true});
	document.getElementById('banner-cta').addEventListener("mouseover",over);
	
	function over() { 
		tm1.restart(); 
	}

};

//DOC READY
$(function(){
    ad.init();

});


