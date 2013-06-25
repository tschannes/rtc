$(document).ready(function(){

	$(".login").click(function(){
		$(this).toggleClass('logout');
		if (this.text == 'Login'){
			$(this).text('Logout')
		}else{
			$(this).text('Login')
		}
	});
});