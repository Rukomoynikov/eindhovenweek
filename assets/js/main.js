$(document).ready(function(){
	$('.fancybox').fancybox({
		"width" : "750",
		"autoDimensions" : false
	})

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

});
