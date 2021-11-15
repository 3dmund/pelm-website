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
