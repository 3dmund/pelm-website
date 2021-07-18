/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	console.log("poop");

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				console.log("asshole");
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	$("#radio-one").click(function() {
		console.log("one")
		$("#flowchart-with-porter").hide()
		$("#flowchart-without-porter").show()
		$("#with-porter-summary").hide()
		$("#without-porter-summary").show()
	})

	$("#radio-two").click(function() {
		console.log("two")
		$("#flowchart-with-porter").show()
		$("#flowchart-without-porter").hide()
		$("#with-porter-summary").show()
		$("#with-porter-summary").css({display: 'flex'})
		$("#without-porter-summary").hide()
	})

	$('[name=contact-form').submit(function() {
		console.log("ass")
		$('#submit').prop('value', 'Sent');
	});

	$('#submit').on('click', function(e){
		console.log("hole")
		// e.preventDefault() //this prevents the form from submitting normally, but still allows the click to 'bubble up'.

		//lets get our values from the form....
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();

		//now lets make our ajax call
		$.ajax({
			type: "POST",
			url: "form.php",
			data: { name: name, email: email, message: message }
		}).done(function() {

			//replace submit button with some text...
			// $('[name=submit]').val('Sent!');
			// $('.submit').after('<span class="messageSent">Message Sent!</span>');

		});
	});

	// $("#toggleMe").click(function() {
	//   var radio = $(this);
	//   if (radio.data("waschecked") == true) {
	//     radio.prop("checked", false);
	//     radio.data("waschecked", false);
	//     $("#flowchart-without-porter").hide()
	//     console.log("hide")
	//   } else {
	//   	radio.prop("checked", true);
	//     radio.data("waschecked", true);
	    
	    
	//     $("#flowchart-without-porter").show()
	//     console.log("show")
	//   }
	//   radio.next().toggle()
	// }).data("waschecked", $("#toggleMe").prop("checked"))
	//    .next().toggle($("#toggleMe").prop("checked"))

   // $("#hide").click(function() {
   // 		$("#flowchart-without-porter").hide()
	  //   console.log("hide")
   // })

   // $("#show").click(function() {
   // 		$("#flowchart-without-porter").show()
	  //   console.log("show")
   // })

})(jQuery);

$(document).ready(function() {

	console.log("ready");

	// $("#myToggleButton").button()
	
	$('#navi-name').click(scrollToTop);
	$('#about-me-link').click(scrollToAboutMe);
	$('#projects-link').click(scrollToProjects);
	$('#skills-link').click(scrollToSkills);
	$('#experience-link').click(scrollToExperience);
	$('#education-link').click(scrollToEducation);
	$('#extracurriculars-link').click(scrollToExtracurriculars);
	$('#contact-link').click(scrollToContact);

	$('#mobile-navi-name').click(scrollToTop);
	$('#mobile-about-me').click(scrollToAboutMe);
	$('#mobile-skills').click(scrollToSkills);
	$('#mobile-projects').click(scrollToProjects);
	$('#mobile-experience').click(scrollToExperience);
	$('#mobile-education').click(scrollToEducation);
	$('#mobile-extracurriculars').click(scrollToExtracurriculars);
	$('#mobile-contact').click(scrollToContact);

	$('#arrow-up').click(scrollToTop);
	$('#arrow-down').click(scrollToBottom);

	// Mobile
	$('#mobile-menu-open').click(function() {
		$(this).hide();
		$('#mobile-menu-close').show();
		$('#links').show();
	})
	$('#mobile-menu-close').click(function() {
		$(this).hide();
		$('#mobile-menu-open').show();
		$('#links').hide();
	})

	$(document).mouseup(function (e)
	{
	    var container = $('#links');

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.hide();
	        $('#mobile-menu-close').hide();
			$('#mobile-menu-open').show();
	    }
	});

	$("#slideshow > div:gt(0)").hide();
	setInterval(function() { 
		$('#slideshow > div:first')
	    	.fadeOut(1000)
	    	.next()
	    	.fadeIn(1000)
	    	.end()
	    	.appendTo('#slideshow');
	},  3500);

	$('#letter-unopened').hover(function() {
		$(this).hide();
		$('#letter-opened').show();
	});
	$('#letter-opened').mouseleave(function() {
		$(this).hide();
		$('#letter-unopened').show();
	})

	$('.arrow').hover(function() {
		$(this).css('opacity', 1.0);
	}, function() {
		$(this).css('opacity', 0.6);
	});

	$('.icon').hover(function() {
		$('.icon').addClass('icon-not-selected');
		$(this).removeClass('icon-not-selected');
	}, function() {
		$('.icon').removeClass('icon-not-selected');
	});


	$(window).scroll(function() {

	    var top_of_element = $(".progress").offset().top;
	    var bottom_of_element = $(".progress").offset().top + $(".progress").outerHeight;
	    var bottom_of_screen = $(window).scrollTop() + $(window).height();

	    // if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element))
	    if (isElementInViewport($('#java'))) {
	        $('#java').slideOver('95%');
	    }
	    if (isElementInViewport($('#python'))) {
	        $('#python').slideOver('90%');
	    }
	    if (isElementInViewport($('#swift'))) {
	        $('#swift').slideOver('85%');
	    }
	    if (isElementInViewport($('#objective-c'))) {
	        $('#objective-c').slideOver('85%');
	    }
	    if (isElementInViewport($('#html5'))) {
	        $('#html5').slideOver('85%');
	    }
	    if (isElementInViewport($('#css3'))) {
	        $('#css3').slideOver('85%');
	    }
	    if (isElementInViewport($('#jQuery'))) {
	        $('#jQuery').slideOver('77%');
	    }
	    if (isElementInViewport($('#javascript'))) {
	        $('#javascript').slideOver('70%');
	    }
	    if (isElementInViewport($('#cocoa'))) {
	        $('#cocoa').slideOver('70%');
	    }
	    if (isElementInViewport($('#spring'))) {
	        $('#spring').slideOver('70%');
	    }
	    if (isElementInViewport($('#nodejs'))) {
	        $('#nodejs').slideOver('65%');
	    }
	    if (isElementInViewport($('#latex'))) {
	        $('#latex').slideOver('65%');
	    }
	    if (isElementInViewport($('#c-sharp'))) {
	        $('#c-sharp').slideOver('60%');
	    }

	    if (isElementInViewport($('#languages-header'))) {
	        $('#tools-and-other').animate({
				marginRight: '3%'
			}, 500, function() {});
	    }
	});
	
	$('[name=contact-form').submit(function() {
		$('#submit').prop('value', 'SENT!');
	});

	$('.submit button').on('click', function(e){
       // e.preventDefault() //this prevents the form from submitting normally, but still allows the click to 'bubble up'.
       
       //lets get our values from the form....
       var name = $('#name').val();
       var email = $('#email').val();
       var message = $('#message').val();
           
       //now lets make our ajax call
        $.ajax({
        	type: "POST",
         	url: "form.php",
          	data: { name: name, email: email, message: message }
        }).done(function() {
        
           //replace submit button with some text...
           // $('[name=submit]').val('Sent!');
           // $('.submit').after('<span class="messageSent">Message Sent!</span>');
           
        });       
    });

});

$.fn.slideOver = function(amount) {
	$(this).animate({
		width: amount
	}, 1000, function() {});
}

function submitForm() {
	$('.submit').hide();
}

// function animate
function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

var closeMenu = function() {
	$('#mobile-menu-close').hide();
	$('#mobile-menu-open').show();
	$('#links').hide();
}

var scrollToTop = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop:0}, 500);
};
var scrollToAboutMe = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('.canvas').offset().top
    }, 500);
};
var scrollToProjects = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 500);
};
var scrollToSkills = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 500);
};
var scrollToExperience = function() {
	closeMenu();
	$('#links').hide();
    $('html, body').animate({
        scrollTop: $('#experience').offset().top
    }, 500);
};
var scrollToEducation = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#education').offset().top
    }, 500);
};
var scrollToExtracurriculars = function() {
	closeMenu();
    $('html, body').animate({
        scrollTop: $('#extracurriculars').offset().top
    }, 500);
};
var scrollToContact = function() {
	closeMenu();
	$('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 500);
}
var scrollToBottom = function() {
	closeMenu();
	$('html, body').animate({
        scrollTop: $('.footer').offset().top
    }, 500);
}
