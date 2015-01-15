define(['../../bower_components/handlebars/handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<ul>\n    <li><img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.originalUser : depth0)) != null ? stack1.profile_image_url : stack1), depth0))
    + "\"><a href=\"https://twitter.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.originalUser : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"><span class=\"handle\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.originalUser : depth0)) != null ? stack1.name : stack1), depth0))
    + " @"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.originalUser : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "</span></a></li>\n    <li><a href=\"https://twitter.com/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "/status/"
    + escapeExpression(((helper = (helper = helpers.id_str || (depth0 != null ? depth0.id_str : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id_str","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.formattedDate || (depth0 != null ? depth0.formattedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formattedDate","hash":{},"data":data}) : helper)))
    + "</a></li>\n    <li>";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.photos : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "        <li><img src=\""
    + escapeExpression(((helper = (helper = helpers.media_url || (depth0 != null ? depth0.media_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"media_url","hash":{},"data":data}) : helper)))
    + "\" width=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.sizes : depth0)) != null ? stack1.small : stack1)) != null ? stack1.w : stack1), depth0))
    + "\" height=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.sizes : depth0)) != null ? stack1.small : stack1)) != null ? stack1.h : stack1), depth0))
    + "\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<br/>\n<div style=\"margin:0 auto; text-align:center;\">\n<a href=\"https://www.facebook.com/jdauriemma\"><img src=\"images/facebook.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n<a href=\"https://www.twitter.com/jbones3000\"><img src=\"images/twitter.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n<a href=\"http://www.linkedin.com/in/jeffreyauriemma/\"><img src=\"images/linkedin.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n</div>\n<h2>Recent Tweets</h2>\n<div id = \"feed\">\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true})

});