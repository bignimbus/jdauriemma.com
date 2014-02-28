	$(document).ready(function(){
		$("article").load("about.html", function(){
			$("article").css("height", "auto");
			$("a#about").css("text-decoration", "underline");
			menuItems(); // load navigation
		});
	});
	
// return an array of all the pages on this website.
// I used this function to make it simpler to expand the website in the future.
	function navElements(){
		var navItem = new Array();
		$("div#navbar").find("a").each(function(){
			navItem.push($(this).prop('id'));
		});
		return navItem;
	}

// loads the click listeners for menu items
	function menuItems(){
		navItem = navElements();
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
				$("article").load(l + ".html");
			});
			$("article").fadeIn(400, function(){
			$("a#" + l).css("text-decoration", "underline");
			});
		});
	}