define(['helper'], function(Handlebars) {

return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"entries\">\n    <h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1['regular-title'] : stack1), depth0))
    + "</h2>\n    ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1['regular-body'] : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>";
},"useData":true})

});