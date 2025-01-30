$(document).delegate('form', 'submit', function(event) {
	event.preventDefault();
	let data = $(this).serialize();

	$.ajax({
		type: "POST",
		url: '/send.php',
		data: data,
		success: function(result) {
			alert(result);
			window.show_popup('thank-you');
		}
	});
});

