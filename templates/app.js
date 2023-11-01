//Alerta de botones//
window.addEventListener("load", function(){
    document.getElementById("btn1").addEventListener("click", function(){
        alert("Esta siendo dirigido a mi chat de Whatsapp");
    }) 
})

window.addEventListener("load", function(){
    document.getElementById("btn3").addEventListener("click", function(){
        alert("Esta siendo dirigido a mi perfil de Github");
    }) 
})

//Boton de ir arriba//
$(document).ready(function(){

	$('.btnUp').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.btnUp').slideDown(300);
		} else {
			$('.btnUp').slideUp(300);
		}
	});

});

