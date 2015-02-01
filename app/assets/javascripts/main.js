$(document).ready(function() {

	var userName = prompt('Please enter your name.');
	// lastID = 0;

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

	}

	// Step 2: Write function to display message from func. getMessages

		var displayMessages = function(messages) {
		var messageRow = _.template('<div class="well well-lg user1"><dl class="dl-horizontal"><dt><%= name %><%= time %></dt><dd><%= message %></dd></dl></div>')
		$('.message-room').html('');
			for( var i = 0; i < messages.length; i++) {
				// if(messages[i].id > lastID) {
					// console.log(messages);
					$('.message-room').append(messageRow(messages[i]));
					// $('.message-room').emoticonize();
					// lastID = messages[i].id;
					// var audio = new Audio('http://myinstants.com/media/sounds/dun_dun_1.mp3');
					// audio.play();
				}
			}
			console.log(userName);

		
	
	// Step 3: Write function (that will later need the click event) to .post (send) message from text input to the server. 

	function postMessages() {
		var now = timeStamp();
		$.post(
			'http://tiny-pizza-server.herokuapp.com/collections/austinfe',
			{
				name: userName,
				message: $('.message-box').val(),
				time: now,
			},
			function(messages) {
				console.log(messages);
			},
			'json'
		);

	}


	// Step 4: Create click function for Send button to take what's inside the 'message-box' to .post to server.

	$('.send-button').click(function() {
		postMessages();
		$('.message-box').val('');
	});

	setInterval(getMessages, 1000);

	function timeStamp() {
	// Create a date object with the current time
	  var now = new Date();

	// Create an array with the current month, day and time
	  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

	// Create an array with the current hour, minute and second
	  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

	// Determine AM or PM suffix based on the hour
	  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

	// Convert hour from military time
	  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

	// If hour is 0, set it to 12
	  time[0] = time[0] || 12;

	// If seconds and minutes are less than 10, add a zero
	  for ( var i = 1; i < 3; i++ ) {
	    if ( time[i] < 10 ) {
	      time[i] = "0" + time[i];
	    }
	  }

	// Return the formatted string
	  return " " + date.join("/") + " " + time.join(":") + " " + suffix + " ";
	}

});