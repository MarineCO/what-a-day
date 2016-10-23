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
			var dayInfOne = this.currentDay < 1;
			var daySuppThirtyOne = this.currentDay > 31; 
			var yearInfOne = this.currentYear < 1;

			var daySuppOne = this.currentDay >= 1;
			var dayInfThirtyOne = this.currentDay <= 31;
			var yearSuppZero = this.currentYear > 0;

			if (dayInfOne) {
				$('#day').css('border', '2px solid #ff7473');
				$('#message').html("Le jour doit être supérieur à 1");
				$('#overlay').hide();
			}
			if (daySuppThirtyOne) {
				$('#day').css('border', '2px solid #ff7473');
				$('#message').html("Le jour doit être inférieur à 31");
				$('#overlay').hide();
			}
			if (yearInfOne) { 
				$('#year').css('border', '2px solid #ff7473');
				$('#message2').html("L\'année doit être supérieure à 0");
				$('#overlay').hide();
			}
			if (daySuppOne && dayInfThirtyOne && yearSuppZero) {
				$('#overlay').show();
				$('#message').remove();
				$('#day').css('border', '2px solid #47b8e0');
				$('#message2').remove();
				$('#year').css('border', '2px solid #47b8e0');
			}
		},

		showResult: function() {
			$('#overlay').html('<h1>' + this.moment + '</h1>' + '<button class="restart" id="restart">Recommencez</button>');
			$('#restart').on('click', this.restart);
		},

		restart: function() {
			$('#overlay').hide();
			this.currentDay = $('#day').val('');
			this.currentYear = $('#year').val('');
			location.reload();
		},
	}

	app.init();

});