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

	var register_form = document.querySelector('form')
	var submit_button = document.querySelector('form [type="submit"]');

	register_form.addEventListener('submit', submit_register_form)

	function submit_register_form (event) {
		event.preventDefault();
		params.message.text =
			"Имя: " + document.querySelector('[name="name"]').value
			+  "\n  Email: " + document.querySelector('[name="email"]').value
			+ "\n Номер телефона: " + document.querySelector('[name="phone"]').value
			+ "\n Сообщение: "  + document.querySelector('[name="message"]').value
			+ + "\n Сообщение: "  + document.querySelector('[name="message"]').value;
		submit_button.disabled = true;
		sendEmail()
	}

	var m = new mandrill.Mandrill('tnrsgJ1AZB3qg4a1R_vN_Q');

	function sendEmail(){
		m.messages.send(params, function(res) {
			$('form').html("<p>Спасибо," + document.querySelector('[name="name"]').value +  ". Ваша заявка отправлена.</p>")
		}, function(err) {
		});
	}

	var params = {
		"message": {
			"from_email":"education@lumiknows.com",
			"to":[{"email":"rukomoynikov@gmail.com"}],
			"subject": "Заявка с сайта",
		}
	};

	// Выбор события в форму
	var form_section = document.querySelector("#map");
	var joinToEvents = document.querySelectorAll('.jointoevent');
	var theme_input = document.querySelector('[name="theme"]');
	var theme_text = document.querySelector('p.form__theme');

	for (var i = 0; i < joinToEvents.length; i++){
		joinToEvents[i].addEventListener('click', function (event) {
			event.preventDefault();
			$.fancybox.close();
			form_section.style.display = 'block';
			window.scrollTo(0, document.documentElement.scrollHeight)
			theme_text.innerText = this.dataset.eventname;
			theme_input.value = this.dataset.eventname;
		})
	}

});
