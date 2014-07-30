$(function() {

	$('#random').on('click', function(e) {

		e.preventDefault();

		$.get('/numbers', function(numbers) {
			$('#numbers').append(numbers.map(function(n) {
				return $('<li>').text(n)
			}))
		})
	})

	$(document).on('submit', '#gettotal', function(e) {
		e.preventDefault();

		var nbr = $('#nbrinput').val();

		$.post('/total', {n: nbr}, function(total) {

			$('#total').text(total.x);

		})
	})

})