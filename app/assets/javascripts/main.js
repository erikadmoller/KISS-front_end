$(document).ready(function() {

	// User signs into their chat account

	// Create a chat message, submit.

	// This message needs to .post to the server (tiny.pizza)

	// Step 1: Test if you can recieve a message
	// Use .get to retrieve the message from the server (tiny.pizza)

	function getMessages() {
		$.get(
			'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
			function(messages) {
				displayMessages(messages);
				console.log(messages);
			},
			'json'
		);

		var displayMessages = function(messages) {
		var messageRow = _.template('<div class="well well-lg user1"><%= name %><%= time %><%= message %></div>')
		$('.message-room').html('');
		for( var i = 0; i < messages.length; i++) {
			if(messages[i].message && messages[i].name && messages[i].time) {
				console.log(messages);
				$('.message-room').append(messageRow(messages[i]));
			}
		}
	}
	}

	// Step 2: Write function to display message from func. getMessages



	setInterval(getMessages, 1000);

	// Display message from server



});