
$.get('audio/musiclist.php', function(data){
	// get all files from /audio/mp3
	data = jQuery.parseJSON(data);
	var n, 
	song = [];
	for (n in data){
		if (data[n][0].length > 5){
			song.push(data[n]);
		}
	}
		
	//keep consistent song loading order
	song.sort();
		
	for( var j=0; j<song.length; j++){
        // for each song, load a div with that song in it
		$("#playlist").append("<div class=song id=" + j + ">Loaded div " + j + "</div>");
		$("#"+j).ready(function(){
			$("#"+j).html('<h3>' + song[j][1] + '</h3><audio controls preload="none"><source src="audio/mp3/' + song[j][0] + '" type="audio/mpeg"><source src="audio/ogg/' + song[j][0] + '" type="audio/ogg"><p>Your browser does not support the audio element.</p></audio><p><strong>Performer:</strong> ' + song[j][2] + '<br /><strong>My Role:</strong> ' + song[j][3] + '</p><br/>');
		});
		
		//once loop is done, remove loading screen
		if ($("#loading") && j+1 === song.length) $("#loading").remove();
	}
});