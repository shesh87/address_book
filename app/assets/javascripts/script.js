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
		// $('ul.contacts').empty(;
		// console.log(msg[0]);	
		// msg.forEach(function(person) {
		//     console.log(person.name);
		//     var name = person.name;
		//     $('.list-container .list-index').html("<li class='letter_list'>"+name+"</li>");
		// });	
		// $('.list-index').css("display", "none");
		msg.forEach(function(person) {
			// $('').before("<ul class='letter_list'></ul>");
		    $('ul.contacts').prepend("<li><a href='/contacts/"+person.id+"'>" +person.name+ "</a></li>");
		});
		// if ('ul.contacts' != nil) {

		// }

		$('.people').css("display", "none");

	});
});









