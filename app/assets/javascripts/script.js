// when a letter on the index pg is selected, a post request goes out
//to the server to retrieve said letter query.


$('.js-ltrs').on('click', function(e) {
	e.preventDefault(); //stops page from reloading
	var letter = $(this).html();
	$.ajax({
	  url: '/contacts/sort_letter/' + letter,
	  type: "POST",
	}).done(function( msg ) {
		$('.js-contacts').empty();
		// $('.list-index').prepend("<ul class='chosen_ltr'></ul>");
		msg.forEach(function(person) {
		    $('.js-contacts').append("<li><a href='/contacts/"+person.id+"'>" +person.name+ "</a></li>");
		});

	});
});









