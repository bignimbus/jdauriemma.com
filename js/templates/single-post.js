define(['helper'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <a class=\"tag\" href=\"archive_"
    + escapeExpression(lambda(depth0, depth0))
    + "\">#"
    + escapeExpression(lambda(depth0, depth0))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<nav class=\"blog\">\n    <div><a href=\""
    + escapeExpression(((helper = (helper = helpers.prev || (depth0 != null ? depth0.prev : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prev","hash":{},"data":data}) : helper)))
    + "\" class=\"prev\">prev</a></div>\n    <div><a href=\"/archive\">archive</a></div>\n    <div><a href=\""
    + escapeExpression(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"next","hash":{},"data":data}) : helper)))
    + "\" class=\"next\">next</a></div>\n</nav>\n<div id=\"entries\">\n    <h2><a href=\"blog_"
    + escapeExpression(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slug","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers['regular-title'] || (depth0 != null ? depth0['regular-title'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"regular-title","hash":{},"data":data}) : helper)))
    + "</a></h2>\n    <h4>published "
    + escapeExpression(((helpers.format_date || (depth0 && depth0.format_date) || helperMissing).call(depth0, (depth0 != null ? depth0['unix-timestamp'] : depth0), "X", {"name":"format_date","hash":{},"data":data})))
    + "</h4>\n    <div class=\"tags\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n    ";
  stack1 = ((helper = (helper = helpers['regular-body'] || (depth0 != null ? depth0['regular-body'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"regular-body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n<nav class=\"blog\">\n    <div><a href=\""
    + escapeExpression(((helper = (helper = helpers.prev || (depth0 != null ? depth0.prev : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prev","hash":{},"data":data}) : helper)))
    + "\" class=\"prev\">prev</a></div>\n    <div><a href=\"/archive\">archive</a></div>\n    <div><a href=\""
    + escapeExpression(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"next","hash":{},"data":data}) : helper)))
    + "\" class=\"next\">next</a></div>\n</nav>\n<section class=\"social-buttons\">\n    <div class=\"subscribe\"><span class=\"fa fa-rss fa-lg\"></span></div>\n    <div class=\"facebook\"><span class=\"fa fa-facebook fa-lg\"></span></div>\n    <div class=\"twitter\"><span class=\"fa fa-twitter fa-lg\"></span></div>\n    <div class=\"tumblr\"><span class=\"fa fa-tumblr fa-lg\"></span></div>\n    <div class=\"reddit\"><span class=\"fa fa-reddit fa-lg\"></span></div>\n</section>";
},"useData":true})

});