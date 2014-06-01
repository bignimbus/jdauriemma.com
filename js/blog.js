(function blog () {
$.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://jdauriemma.com/blog/?feed=rss2'),
    dataType: 'json',
    success: function(data) {
        var blogData = data.responseData.feed;
        blogData = blogData.entries;
        console.log(blogData);
        for (var x = 0; x < 3; x++) {
            if (blogData[x]) {
                $('#entries').append('<div id="post' + x.toString() + '"><a target="blank" href ="' + blogData[x].link + '"><h3>' + blogData[x].title + '</h3></a><p><em>published: '+ blogData[x].publishedDate.slice(0, 16) + '</em></p>' + blogData[x].content + '</div>');
                if ($("#loading") && x + 1 === blogData.length) $("#loading").remove();
            }
            else break;
        }
    hljs.initHighlightingOnLoad();
    }
});

})();