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
	// console.log(letter);
	$.ajax({
	  url: '/contacts/sort_letter/' + letter,
	  type: "POST",
	}).done(function( msg ) {
		// console.log(msg[0]);	
		msg.forEach(function(person) {
		    console.log(person.name);
		    var name = person.name;
		    alert(person.name);
		    $('.list-container .list-index').html("<li class='letter_list'>"+name+"</li>");
		});	

		// var names = msg[0].name;
		

		// msg.forEach(function(person) {
		// 	$('.list-container .list-index').html("<li class='" +person.id+ "'>"+person.name+"</li>");
		// });

	});
});









