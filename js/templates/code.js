define(['helper'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "    <div id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"repo code\">\n        <ul>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.fork : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <li class=\"owner-info\"><a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></li>\n            <li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.description : stack1), depth0))
    + "</li>\n            <li class=\"updated\">Updated "
    + escapeExpression(((helpers.format_date || (depth0 && depth0.format_date) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.updated_at : stack1), "YYYY-MM-DD[T]HH:mm:ss[Z]", {"name":"format_date","hash":{},"data":data})))
    + "</li>\n        </ul>\n    </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.parent : depth0)) != null ? stack1.parent : stack1)) != null ? stack1.owner : stack1), {"name":"with","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <li class=\"owner-info\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</a></li>\n            <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\"><img class=\"avatar\" src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\"></a></li>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <li class=\"owner-info\"><a href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.owner : stack1)) != null ? stack1.html_url : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.owner : stack1)) != null ? stack1.login : stack1), depth0))
    + "</a></li>\n            <li><a href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.owner : stack1)) != null ? stack1.html_url : stack1), depth0))
    + "\"><img class=\"avatar\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.repo : depth0)) != null ? stack1.owner : stack1)) != null ? stack1.avatar_url : stack1), depth0))
    + "\"></a></li>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['public'] : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "    <div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"gist code\">\n        <ul>\n            <li class=\"owner-info\"><a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.login : stack1), depth0))
    + "</a></li>\n            <li><a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.html_url : stack1), depth0))
    + "\"><img class=\"avatar\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.owner : depth0)) != null ? stack1.avatar_url : stack1), depth0))
    + "\"></a></li>\n            <li class=\"owner-info\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.files : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a></li>\n            <li>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</li>\n            <li class=\"updated\">Updated "
    + escapeExpression(((helpers.format_date || (depth0 && depth0.format_date) || helperMissing).call(depth0, (depth0 != null ? depth0.updated_at : depth0), "YYYY-MM-DD[T]HH:mm:ss[Z]", {"name":"format_date","hash":{},"data":data})))
    + "</li>\n        </ul>\n    </div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"filename","hash":{},"data":data}) : helper)))
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<p>\nI enjoy working with: JavaScript, jQuery, underscore, Backbone, handlebars, jasmine, node/npm, grunt, git, html5, less, and css.  See below for my code and my contributions to others' projects.\n</p>\n<div id=\"repos\">\n<h2>Repos</h2>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.repos : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n<div id=\"gists\">\n<h2>Gists</h2>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.gists : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true})

});