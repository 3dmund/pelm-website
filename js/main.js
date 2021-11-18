(function($) {
	$("#radio-one").click(function() {
		$("#flowchart-with-pelm").hide()
		$("#flowchart-without-pelm").show()
		$("#with-pelm-summary").hide()
		$("#without-pelm-summary").show()
	})

	$("#radio-two").click(function() {
		$("#flowchart-with-pelm").show()
		$("#flowchart-without-pelm").hide()
		$("#with-pelm-summary").show()
		$("#with-pelm-summary").css({display: 'flex'})
		$("#without-pelm-summary").hide()
	})
})(jQuery);

$(function(){
	$("#header1").load("header.html");
});

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}