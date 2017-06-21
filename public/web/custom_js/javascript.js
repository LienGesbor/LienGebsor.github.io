

// Execute when document is ready
$( document ).ready(function() {

	//Cache reference to window and animation items
	var $animation_elements = $('.a-element');
	var $window = $(window);

	$window.on('scroll resize', check_if_in_view);

	$window.trigger('scroll');

	function check_if_in_view() {
	  	var window_height = $window.height();
	 	var window_top_position = $window.scrollTop();
	  	var window_bottom_position = (window_top_position + window_height);

	  	$.each($animation_elements, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)){
		      $element.addClass('in-view');
		    } else {
		      $element.removeClass('in-view');
		    }
	  	});
	}

	// Nav Scrolling
	$('.aboutLink').click(function() {
		$('html, body').animate({
    	scrollTop: ($('.content_wrap_main').offset().top)
		},900);
	});

	$('.workLink').click(function() {
		$('html, body').animate({
    	scrollTop: ($('#myWork').offset().top)
		},900);
	});


	// Banner
	
	//Name

	$('#name').fadeTo(900, 1.0, function(){

		$('#scholar').fadeTo(900, 1.0, function() {

				$('#developer').fadeTo(900, 1.0, function() {

					$('#hardWorker').fadeTo(900, 1.0);
				});
		});
	});


	// SideNav
	$('#sidenav_icon').click(function() {
		$('#sideNav').width(165).height(250);
	});

	$('.closebtn').click(function() {
		$('#sideNav').width(0); 
	})

});
