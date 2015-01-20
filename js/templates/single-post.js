define(['helper'], function(Handlebars) {

return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<nav class=\"top\">\n    <a href=\"#\">archive</a> <a href=\"#\">previous post</a>\n</nav>\n<div id=\"entries\">\n    <h2><a href=\"#\">"
    + escapeExpression(((helper = (helper = helpers['regular-title'] || (depth0 != null ? depth0['regular-title'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"regular-title","hash":{},"data":data}) : helper)))
    + "</a></h2>\n    ";
  stack1 = ((helper = (helper = helpers['regular-body'] || (depth0 != null ? depth0['regular-body'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"regular-body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n<nav class=\"bottom\">";
},"useData":true})

});