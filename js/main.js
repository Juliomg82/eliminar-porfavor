jQuery
$(document).ready(function(){

console.log('Cargado main');

//Slider
if(window.location.href.indexOf('index') > -1){

	$('.menu ul li a[href="index.html"]').addClass('active');

	$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: true,
	    swipeThreshold: 50
	});

};//Fin condicion JS slider

//Post from JSON

if(window.location.href.indexOf('index') > -1){

		function PadLeft(value, length) {
		    return (value.toString().length < length) ? PadLeft("0" + value, length) : 
		    value;
		}

			//Formatear fecha y hora

			var fecha = new Date();
			var year = fecha.getYear();
			var fullyear = fecha.getFullYear();
			var mes = fecha.getMonth()+1;
			var dia = fecha.getDate();
			var hora = fecha.getHours();
			var minutossinzero = fecha.getMinutes();
			var minutos = PadLeft(minutossinzero,2);
			var segundossinzero = fecha.getSeconds();
			var segundos = PadLeft(segundossinzero,2);

		console.log(segundos)

		var posts = [
			{	
				title:'Titulo pos numero 1',
				date: 'Publicado el '+dia+' del '+mes+' de '+fullyear+' a las '+hora+':'+minutos,
				url: '/articulo/1.html',
				content:'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu facilisis dolor. Integer nulla elit, faucibus non ligula non, luctus ornare arcu.'
			},
			{	
				title:'Titulo pos numero 2',
				date: 'Publicado el '+dia+' del '+mes+' de '+fullyear+' a las '+hora+':'+minutos,
				url: '/articulo/2.html',
				content:'2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu facilisis dolor. Integer nulla elit, faucibus non ligula non, luctus ornare arcu.'
			},
			{	
				title:'Titulo pos numero 3',
				date: 'Publicado el '+dia+' del '+mes+' de '+fullyear+' a las '+hora+':'+minutos,
				url: '/articulo/3.html',
				content:'3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu facilisis dolor. Integer nulla elit, faucibus non ligula non, luctus ornare arcu.'
			},
			{	
				title:'Titulo pos numero 4',
				date: 'Publicado el '+dia+' del '+mes+' de '+fullyear+' a las '+hora+':'+minutos,
				url: '/articulo/4.html',
				content:'4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu facilisis dolor. Integer nulla elit, faucibus non ligula non, luctus ornare arcu.'
			},
		]
		console.log(posts);

		posts.forEach((item,index)=>{

			var post = `
					<article class="post">
						<h2>${item.title}</h2>
						<p class="fecha">${item.date}</p>
						<p>${item.content}</p>
						<a href="${item.url}">Leer más</a>
					</article>

			`;
			console.log(posts);
			$('.posts').append(post);
		});

		$('.year').append(fullyear);

};//Fin condicion JS post

//Custom CSS

$('.to.green').on('click', function(){
	$('#custom').attr('href','css/green.css');
});

$('.to.red').on('click', function(){
	$('#custom').attr('href','css/red.css');
});

$('.to.blue').on('click', function(){
	$('#custom').attr('href','css/blue.css');
});


//Scroll arriba

$('.subir').on('click', function(){

		$('html, body').animate({

			scrollTop: 0

		}, 500);
});

//Formulario login saludo localStorage

$('#formulario_login').submit(function(){

	var name = $('#formulario_login input[name="name"]').val();
	
	localStorage.setItem('name',name);

});

var name = localStorage.getItem('name');

if(name != null && name != 'undefined'){
$('#sidebar p').after('<h3 class="saludo">Bienvenido de nuevo, '+name+'</h3>');
$('#sidebar h3.saludo').after('<span class="sesion">Cerrar sesión</span>');
$('#formulario_login').hide();
}

$('.sesion').on('click', function(){

	localStorage.clear();
	location. reload();

});


//Acordeon
if(window.location.href.indexOf('about') > -1){

	$('.menu ul li a[href="about.html"]').addClass('active');	
	$('#about').accordion();


};//Fin condicion estar en la página about

//Reloj
if(window.location.href.indexOf('reloj') > -1){

	$('.menu ul li a[href="reloj.html"]').addClass('active');	
	
		setInterval(function(){

		function PadLeft(value, length) {
			return (value.toString().length < length) ? PadLeft("0" + value, length) : value;
		}

		//Formatear fecha y hora

		var fecha = new Date();
		var hora = fecha.getHours();
		var minutossinzero = fecha.getMinutes();
		var minutos = PadLeft(minutossinzero,2);
		var segundossinzero = fecha.getSeconds();
		var segundos = PadLeft(segundossinzero,2);

		$('.reloj').html(hora+':'+minutos+':'+segundos);
		
		}, 1000);

		var fecha = new Date();
		var year = fecha.getFullYear();
		var mes = fecha.getMonth()+1;
		var dia = fecha.getDate();

		$('.calendar').html(dia+' del '+mes+' de '+year);


};//Fin condicion estar en la página reloj


//Reloj
if(window.location.href.indexOf('contacto') > -1){

	$('.menu ul li a[href="contacto.html"]').addClass('active');	
	
	$.validate({

		lang:'es',
		errorMessagePosition:'top',
		scrollToTopOnError:'true'


	});

	$('form input[name="birthdate"]').datepicker({

			dateFormat:'yy-mm-dd'

	});


	

			$('input, select').on('blur', function(){

								
								var mensaje = $('.help-block').html();
								console.log('antes de comprobar '+ mensaje);


								if(mensaje !== undefined){

									console.log('distinto de undefined');

									$('.help-block').css('display','none');
									$(this).after('<span class="help-block form-error" style="display:table">'+mensaje+'</span>');

								}

			});
			


};//Fin condicion estar en la página reloj



});//Fin document ready