(function jbones () {
    $.get('./php/twitter.php', function(data) {
	// get recent tweets
	var d = $.parseJSON(data);
	var tweets = [];
	
	for (var n in d) {
	    tweets[n] = {};
		tweets[n].link = 'https://twitter.com/' + d[n].user.screen_name + '/status/' + d[n].id_str;
		if (d[n].retweeted_status) {
		    tweets[n].name = d[n].retweeted_status.user.name;
		    tweets[n].avatar = d[n].retweeted_status.user.profile_image_url_https;
		    tweets[n].handle = d[n].retweeted_status.user.screen_name;
		    tweets[n].timestamp = d[n].retweeted_status.created_at;
		    tweets[n].text = d[n].retweeted_status.text.autoLink({target: "_blank"});
		}
		else {
		    tweets[n].name = d[n].user.name;
		    tweets[n].avatar = d[n].user.profile_image_url_https;
		    tweets[n].handle = d[n].user.screen_name;
		    tweets[n].timestamp = d[n].created_at;
		    tweets[n].text = d[n].text.autoLink({target: "_blank"});
		}
		for (var stuff in d[n].entities.media) {
		    if (d[n].entities.media[stuff].type === 'photo'){
		    tweets[n].pic = {
		        url: d[n].entities.media[stuff].media_url_https,
		        width: d[n].entities.media[stuff].sizes.small.w / 16,
		        height: d[n].entities.media[stuff].sizes.small.h / 16,
		        };
		    }    
		}
	}
	
	for (var i in tweets) {
	    $('#feed').append('<div id = "tweet' + i + '">');
	    $('#tweet' + i).html('<img src="' + tweets[i].avatar + '" style="height: 3em; width: 3em; border:1px solid black; clear:none; display:inline-block;"><span style="display:inline-block;"><h3>' + tweets[i].name + '</h3></span><p><a href="' + tweets[i].link + '" target = "blank"><em>@' + tweets[i].handle + ' on '+ tweets[i].timestamp +' </em></a><br />' + tweets[i].text + '<br /></p>');
	    if (tweets[i].pic) $('#tweet' + i).append('<a href="'+ tweets[i].link +'" target="blank"><img src="' + tweets[i].pic.url + '" style="height: ' + tweets[i].pic.height + 'em; width: ' + tweets[i].pic.width + 'em"></a>');
		$('#tweet' + i).append('</div><br /><br />');
		if ($("#loading") && i == tweets.length - 1) $("#loading").remove();
	}
	
});
//	song.sort();

})();