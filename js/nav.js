var bgImage = (function () {
    //random background image
    var images = ['sky.png', 'clouds.jpg', 'retro.jpg', 'city.png', 'landscape.jpg'];
    var i = Math.floor(Math.random() * images.length);
    return 'images/' + images[i];
})();
$('body').css('background', '#000 url(' + bgImage + ') no-repeat');
$('body').css('background-attachment', 'fixed');
$('body').css('background-size', 'cover');
$('body').css('background-position', 'center');

$("article").load("blog.html", function(){
	$("article").css("height", "auto");
	$("a#blog").css("text-decoration", "underline");
	menuItems(); // load navigation
});
	
// return an array of all the pages on this website.
// I used this function to make it simpler to expand the website in the future.
	function navElements(){
		var navItem = [];
		$("div#navbar").find("a").each(function(){
			navItem.push($(this).prop('id'));
		});
		return navItem;
	}

// loads the click listeners for menu items
	function menuItems(){
		var navItem = navElements();
		for (i in navItem){
			navLoad(navItem[i]);
		}
	}

//erases duplicate underlines
	function clearUnderline(){
		navItem = navElements();
		for (i in navItem){
			$("a#" + navItem[i]).css("text-decoration", "none");
		}
	}
	
//defines navigation events
	function navLoad(l){
		$("a#" + l).click(function(e){
			e.preventDefault();
			clearUnderline();
            $("article").fadeOut(400, "swing", function(){
                $("article").load(l + ".html", function(){
                    $("article").fadeIn(400, function(){
                        $("a#" + l).css("text-decoration", "underline");
                    });
                });
            });
		});
	}