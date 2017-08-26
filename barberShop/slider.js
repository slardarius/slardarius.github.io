$(document).ready(function(){

		$(".Menu dd").hide().prev().click(function(){
		$(".Menu dd").not(this).slideUp();
		$(this).next().not(":visible").slideDown();
		
	});
});