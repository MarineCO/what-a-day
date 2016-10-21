$(document).ready(function(){
	"use.strict";

	window.app = {

		day: null,
		now: null,

		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('#button').on('click', this.go.bind(this));
		},

		go: function(){
			this.date();
		},

		date: function(){
			now = moment({year:$('#year').val(), month:$('#months').val(), day:$('#day').val()});
			console.log(now);

			day = now.day();
			console.log(day);
			this.updateView();
		},

		updateView: function() {
			if (day === 0) {
				$('h1').html("Dimanche");
			}
			else if (day === 1) {
				$('h1').html("Lundi");
			}
			else if (day === 2) {
				$('h1').html("Mardi");
			}
			else if (day === 3) {
				$('h1').html("Mercredi");
			}
			else if (day === 4) {
				$('h1').html("Jeudi");
			}
			else if (day === 5) {
				$('h1').html("Vendredi");
			}
			else if (day === 6) {
				$('h1').html("Samedi");
			}

			// var weekday = new Array(7);
			// weekday[0] = "Dimanche";
			// weekday[1] = "Lundi";
			// weekday[2] = "Mardi";
			// weekday[3] = "Mercredi";
			// weekday[4] = "Jeudi";
			// weekday[5] = "Vendredi";
			// weekday[6] = "Samedi";
		},
	}

	app.init();

});