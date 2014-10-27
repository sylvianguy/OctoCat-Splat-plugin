(function ($) {
	$.fn.octoSplat = function() {
		
		function catMove(){
	        $('.cat').animate({left: '70%', top: '100%'}, 8000, 'linear');  

		};


		function inkSplat(delay){
			function createXY(){ 
				return {
					position: 'fixed',
					top: Math.random() * 100 +'%', //generate random number from 0 - 100 give back a rando coordinate in %
					left: Math.random() * 100 + '%'
				}
			};

		    var $ink = $('<svg fill="black" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="splat" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M57.98,15.925c-3.154,6.031,1.1,18.239-0.257,22.68c-1.358,4.44-3.824,2.714-3.7,0c0.122-2.714-0.358-8.758-4.558-7.032  c-4.201,1.727-0.13,6.661,0.857,8.512c0.986,1.851-0.879,4.688-2.721,1.726c-1.843-2.959-7.64-10.803-10.23-15.332  c-6.4-11.185-17.375,1.295-6.908,6.328c5.613,2.7,11.118,8.201,11.899,9.826c0.778,1.621-0.304,3.496-1.661,1.892  s-2.503-4.006-5.304-4.688c-3.187-0.774-5.669,4.277-1.727,4.935c1.48,0.247,4.408,0.969,5.427,1.727  c1.103,0.818,0.983,3.261-1.726,2.344c-1.428-0.484-2.38-1.145-3.749-1.234c-2.971-0.194-2.843,2.732-0.943,3.75  c0.687,0.366,2.028,0.395,3.411,0.645c3.009,0.544,2.088,3.777-1.927,3.993c-2.956,0.158-11.102,0.74-19.243-0.739  c-12.041-2.189-9.705,10.624-1.065,9.833c3.896-0.354,8.386-2.778,11.766-3.904c3.33-1.11,8.151-1.303,11.625-1.612  c1.789-0.16,2.79,1.602,1.11,2.713c-1.196,0.793-3.419,0.73-4.951,2.016c-1.517,1.272-1.527,5.889,3.457,5.232  c1.876-0.247,3.763-2.509,5.226-4.016c0.896-0.921,2.625,0.017,2.066,1.332c-0.809,1.903-1.526,3.035-4.823,5.794  c-3.181,2.66-9.453,4.744-6.369,11.405c3.084,6.66,13.412,3.77,13.535-3.014c0.124-6.785,1.034-9.469,2.561-11.65  c1.073-1.535,3.361-0.438,3.114,1.905c-0.237,2.252-0.995,4.777-0.711,6.066c0.695,3.168,5.153,2.239,5.29-0.745  c0.049-1.11-1.04-3.279-1.222-5.154c-0.205-2.103,2.285-3.896,4.204-1.221C62.887,74.63,62.409,83.203,65,85.571  s8.5,1.154,6.436-4.358c-2.604-6.957-5.19-6.159-5.665-10.905c-0.172-1.731,2.288-3.121,4.409-0.882  c2.499,2.639,2.231,5.207,4.882,6.578c3.935,2.034,5.11-3.354,2.15-4.465s-4.193-2.22-5.058-3.823  c-0.862-1.604,0.123-4.317,3.824-3.084c3.699,1.232,11.348,5.057,15.049,4.07c3.7-0.986,2.779-5.325-1.045-6.806  c-3.823-1.479-14.745-1.83-17.828-3.803c-3.084-1.974-2.59-4.811,0.864-4.688c3.453,0.124,7.728-0.888,8.634-2.467  c1.302-2.266-1.016-5.171-3.854-4.301c-2.837,0.871-4.814,2.713-7.323,2.103c-1.696-0.413-2.103-2.035-0.294-3.969  c1.787-1.911,8.807-3.386,10.854-4.935c2.936-2.22,0.33-6.813-3.371-4.593c-3.7,2.22-4.946,4.641-7.664,6.239  c-2.306,1.357-7.713,3.289-7.713-2.632c0-5.921,3.701-13.426,5.265-17.556C69.812,15.328,62.458,7.372,57.98,15.925z"/></svg>');
			
	        var temp = createXY();
			$ink.css(temp); //css is expecting an object to be passed in()
		

			//do something after 1/5 of a second
			setTimeout(function(){
				$('body').append($ink);
			},delay);

		};
	        
		function coverSplat(delay){
			console.log('Coversplat!');
			var $cover = $('<div class="cover"></div>'); 
			$cover.css({'width':'100%','height':'100%','background':'black','position':'fixed','top':'0px','left':'0px'})
	        
	        //settimeout wait 6 seconds then puts cover on the page, THEN reload
	        setTimeout(function(){
				$('body').append($cover);
				setTimeout(function(){
					window.location.reload();
				}, 300);
			},delay);
		};


		
		$(this).on('click', function() {
			console.log('the button was clicked');
		    
		    var url = 'http://3.bp.blogspot.com/-odyZNqTtqEg/UyqXgTyBo2I/AAAAAAAAAUc/MN1wlnvKfxM/s3200/Octocat.png';
		    var $octocat = $('<div>');
		    $octocat.append($('<img>').attr('src', url)).addClass('cat');
		    $('body').append($octocat);

		    catMove();
		    for(i=0; i <300; i++) {
		    	inkSplat(i*20);
		    	//black 
		    };

		    coverSplat(300*20);

		    

		    
		});

		return this; 
	}
		    
}(jQuery)); //http://learn.jquery.com/using-jquery-core/avoid-conflicts-other-libraries/
 //will allow the jquery alias ($) to be used within the jquery plugin with other libraries such as 'prototype'





       





