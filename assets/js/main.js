$(document).ready(function(){
	$('.fancybox').fancybox({
		"width" : "750",
		"autoSize" : false,
		 helpers: {
		    overlay: {
		      locked: false
		    }
		  }
	})
// $('.fancybox').click(function(event){
// 	event.preventDefault();
// 	console.log(this);
// 	$.fancybox([$(this)]);
// })

	// Переключение табов для событий
	var event__toggles = document.querySelectorAll('h2 .event__toggle');
	var activeEventsTab = document.querySelector('.events--active');
	var unActiveEventsTab = document.querySelector('.events--unactive');

	for (var i = 0; i < event__toggles.length; i++){
		event__toggles[i].addEventListener('click', toggleEvents)
	}

	function toggleEvents(event){
		if (this.dataset.events == 'unactive'){
			activeEventsTab.style.display = 'none';
			unActiveEventsTab.style.display = 'block';
			// event__toggles[0].style.textDecoration = 'underline';
			// event__toggles[1].style.textDecoration = 'none';
			event__toggles[0].style.color = '#c7c7c7';
			event__toggles[1].style.color = 'black';
		} else {
			unActiveEventsTab.style.display = 'none';
			activeEventsTab.style.display = 'block';
			// event__toggles[1].style.textDecoration = 'underline';
			// event__toggles[0].style.textDecoration = 'none';
			event__toggles[1].style.color = '#c7c7c7';
			event__toggles[0].style.color = 'black';
		}
	}

	// Submit form

	//var register_form = document.querySelector('form')
    //
	//register_form.addEventListener('submit', submit_register_form)
    //
	//function submit_register_form (event){
	//	console.log("Hey")
	//	event.preventDefault();
	//	params.message.text = "Имя: " + document.querySelector('[name="name"]').value + "\n  Email: "
	//		+ document.querySelector('[name="email"]').value + "\n Возраст: " + document.querySelector('[name="age"]').value
	//		+ "\n Уровень: "  + document.querySelector('[name="level"]').value + "\n Дополнительный комментарий: "
	//		+ document.querySelector('[name="comment"]').value;
	//	sendEmail()
	//}
    //
	//var m = new mandrill.Mandrill('tnrsgJ1AZB3qg4a1R_vN_Q');
    //
	//function sendEmail(){
	//	m.messages.send(params, function(res) {
	//		$('form').html("<p>Спасибо," + document.querySelector('[name="name"]').value +  ". Ваша заявка отправлена.</p>")
	//	}, function(err) {
	//	});
	//}
    //
	//var params = {
	//	"message": {
	//		"from_email":"cat@mos-it.com",
	//		"to":[{"email":"rukomoynikov@gmail.com"}],
	//		"subject": "Заявка с английского сайта",
	//	}
	//};

});
