
		$("#viewer").load("pages/details.html #live", function(){
			var pageIndex = 0; // integer representing current position in page array
					
			$("#rightnav").click(function(){
				pageIndex = nextPage(pageIndex);
				$("#viewer").load(pages(pageIndex));
				// add jQuery .animate()
			});

			$("#leftnav").click(function(){
				pageIndex = prevPage(pageIndex);
				$("#viewer").load(pages(pageIndex));
				// add jQuery .animate()
			});
		});
	
	function numberOfPages(){ 
// planning ahead, this function sets the number of "about" subsections.
// If the programmer ever expands this section, the code can  
// adjust without having to manually change all functions.
		var pageCount = 4;
		return pageCount - 1;
	}
		
	function pages(i){
		var page = ["live", "teach", "program", "play"]; // specify all subsections of "about" page
		return "pages/details.html #" + page[i];
	}
			
	function nextPage(pageIndex){
		var pageCount = numberOfPages();
			if (pageIndex < pageCount){
				pageIndex += 1;
			}
			
			else{
				pageIndex = 0;
			}
			
			return pageIndex;
	}
		
	function prevPage(pageIndex){
		var pageCount = numberOfPages();
			if (pageIndex > 0){
				pageIndex -= 1;
			}
		
			else{
				pageIndex = pageCount;
			}
		
			return pageIndex;
	}