$(document).ready(function() {

	// User signs into their chat account

	// Create a chat message, submit.

	// This message needs to .post to the server (tiny.pizza)

	// Step 1: Test if you can recieve a message
	// Use .get to rectrieve the message from the server (tiny.pizza)

	function getMessages() {
		$.get(
			'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
			function(messages) {
				displayMessages(message);
				console.log(messages);
			},
			'json'
		);
	}

	getMessages();

	var displayMessages = function(messages) {
		
	}

	// Display message from server

});