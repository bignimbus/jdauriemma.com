
	$.get('audio/musiclist.php', function(data){
		// get all files from /audio/mp3
		data = jQuery.parseJSON(data);
		console.log(data);
		var n;
		var j;
		var song = [];
		for (n in data){
			if (data[n][0].length > 5){
				song.push(data[n]);
			}
		}
		console.log(song);
		song.sort();
		
		for(j=0; j<song.length; j++){
			$("#playlist").append("<div class=song id=" + j + ">Loaded div " + j + "</div>");
			$("#"+j).ready(function(){
				console.log("div " + j + "ready.");
				$("#"+j).html('<h3>' + song[j][1] + '</h3><audio controls preload="none"><source src="audio/mp3/' + song[j][0] + '" type="audio/mpeg"><source src="audio/ogg/' + song[j][0] + '" type="audio/ogg"><p>Your browser does not support the audio element.</p></audio><p><strong>Performer:</strong> ' + song[j][2] + '<br /><strong>My Role:</strong> ' + song[j][3] + '</p><br/>');
			});
		}
		
	});