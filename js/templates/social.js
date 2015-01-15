define(['helper'], function(Handlebars) {

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
    + escapeExpression(((helpers.format_date || (depth0 && depth0.format_date) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), "ddd MMM D HH:mm:ss ZZ YYYY", {"name":"format_date","hash":{},"data":data})))
    + "</a></li>\n    <li>";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.photos : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <li><img src=\""
    + escapeExpression(((helper = (helper = helpers.media_url || (depth0 != null ? depth0.media_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"media_url","hash":{},"data":data}) : helper)))
    + "\" class=\"avatar\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<br/>\n<div style=\"margin:0 auto; text-align:center;\">\n<a href=\"https://www.facebook.com/jdauriemma\"><img src=\"images/facebook.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n<a href=\"https://www.twitter.com/jbones3000\"><img src=\"images/twitter.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n<a href=\"http://www.linkedin.com/in/jeffreyauriemma/\"><img src=\"images/linkedin.png\" style=\"display:inline-block;margin: 0em 1em 1em 1em;\"/></a>\n</div>\n<h2>Recent Tweets</h2>\n<div id = \"feed\">\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true})

});