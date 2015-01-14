define(['../../bower_components/handlebars/handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<ul>\n    <li>"
    + escapeExpression(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"created_at","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</li>\n    <li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</li>\n    <li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profile_image_url : stack1), depth0))
    + "</li>\n    <li>@"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.screen_name : stack1), depth0))
    + "</li>\n</ul>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<br/>\n<div style=\"margin:0 auto; text-align:center;\">\n<a href=\"https://www.facebook.com/jdauriemma\"><img src=\"images/facebook.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n<a href=\"https://www.twitter.com/jbones3000\"><img src=\"images/twitter.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n<a href=\"http://www.linkedin.com/in/jeffreyauriemma/\"><img src=\"images/linkedin.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n</div>\n<h2>Recent Tweets</h2>\n<div id = \"feed\">\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true})

});