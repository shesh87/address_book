// when a letter on the index pg is selected, a post request goes out
//to the server to retrieve said letter query.


// $('.ltrs').on('click', function() {
// 	var letter = $(this).html();
// 	console.log(letter);
// 	$.post('/contacts/sort_letter/' + letter, function(data) {
// 		console.log(data);
// 		console.log(data[0].name);
// 		var names = data[0].name;
// 		replace(names);
// 	});
// });


// function replace(name) {
// 	// $('.people').text(name);
// 	// document.getElementById('people').innerHTML = "hello";
// 	$('.list-container .list-index').css('display', 'none');
// 	// alert('hi');
// 	$('.list-container').prepend('<div>'+name+'</div>');
// }




$('.ltrs').on('click', function(e) {
	e.preventDefault(); //stops page from reloading
	var letter = $(this).html();
	$.ajax({
	  url: '/contacts/sort_letter/' + letter,
	  type: "POST",
	}).done(function( msg ) {
		$('.list-index').empty();
		$('.list-index').prepend("<ul class='chosen_ltr'></ul>");
		msg.forEach(function(person) {
		    $('.chosen_ltr').append("<li><a href='/contacts/"+person.id+"'>" +person.name+ "</a></li>");
		});

	});
});









