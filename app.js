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
			this.currentDay = $('#day').val();
			this.currentMonth = $('#month').val();
			this.currentYear = $('#year').val();

			this.date = {day:this.currentDay, month:this.currentMonth, year:this.currentYear}

			this.moment = moment(this.date).format('dddd');
			console.log(this.moment);
			this.error();
			this.showResult();
		},

		error: function() {
			if (this.currentDay < 1 || this.currentDay > 31) {
				$('#day').css('border', '2px solid #ff7473');
				$('#message').html("Le jour doit être compris entre 1 et 31");
				$('#overlay').hide();
			}
			if (this.currentYear < 1) {
				$('#year').css('border', '2px solid #ff7473');
				$('#message2').html("L\'année doit être supérieure à 0");
				$('#overlay').hide();
			}
			if (this.currentDay >= 1 && this.currentDay < 31) {
				$('#message').remove();
				$('#day').css('border', '2px solid #47b8e0');
			}
			if (this.currentYear > 0) {
				$('#message2').remove();
				$('#year').css('border', '2px solid #47b8e0');
			}
		},

		showResult: function() {
			$('#overlay').html('<h1>' + this.moment + '</h1>' + '<button id="restart">Recommencez</button>');
			$('#restart').on('click', this.restart);
		},

		restart: function() {
			$('#overlay').hide();
			$('body').show()
			this.currentDay = $('#day').val('');
			this.currentMonth = $('#month').val('');
			this.currentYear = $('#year').val('');
		},
	}

	app.init();

});