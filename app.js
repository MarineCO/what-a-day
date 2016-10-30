$(document).ready(function(){
	"use.strict";

	window.app = {

		currentYear: null,
		currentMonth: null,
		currentDay: null,
		date: {},
		moment: null,

		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('#check').on('click', this.go.bind(this));
		},

		go: function(){
			this.reset();
			this.currentDay = $('#day').val();
			this.currentMonth = $('#month').val();
			this.currentYear = $('#year').val();

			this.date = {day:this.currentDay, month:this.currentMonth, year:this.currentYear}
			this.moment = moment(this.date).format('dddd');

			this.error();
		},

		error: function() {
			if (this.currentDay < 1 || this.currentDay > 31) {
				$('#day').css('border', '2px solid #ff7473');
				$('#message').append('<p>' + "Le jour doit être supérieur ou égal à 1 et inférieur ou égal à 31" + '</p>');
			}
			if (this.currentYear < 1) { 
				$('#year').css('border', '2px solid #ff7473');
				$('#message2').html('<p>' + "L\'année doit être supérieure à 0" + '</p>');
			}
			if (this.currentDay >= 1 && this.currentDay <= 31 && this.currentYear >= 1) {
				this.reset();
				this.showResult();
			}
		},

		showResult: function() {
			$('.essai').hide();
			$('#overlay').show();
			$('#overlay').html('<h2>' + this.moment + '</h2>' +
			 '<button class="restart" id="restart">Recommencez</button>');
			$('#restart').on('click', this.restart);
		},

		reset: function() {
			$('#message').html('');
			$('#day').css('borderColor', '');
			$('#message2').html('');
			$('#year').css('borderColor', '');
		},
		
		restart: function() {
			$('#overlay').hide();
			this.currentDay = $('#day').val();
			this.currentYear = $('#year').val();
			$('.essai').show();
		},
	}

	app.init();

});