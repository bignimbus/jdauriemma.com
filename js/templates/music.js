define(['../../bower_components/handlebars/handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"song\" id=\""
    + escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n    <h3>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n    <audio controls preload=\"none\">\n        <source src=\"audio/mp3/"
    + escapeExpression(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file","hash":{},"data":data}) : helper)))
    + ".mp3\" type=\"audio/mpeg\"></source>\n        <source src=\"audio/ogg/"
    + escapeExpression(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file","hash":{},"data":data}) : helper)))
    + ".ogg\" type=\"audio/ogg\"></source>\n        <p>Your browser does not support the audio element.</p>\n    </audio>\n    <ul>\n        <li>Performer: "
    + escapeExpression(((helper = (helper = helpers.performer || (depth0 != null ? depth0.performer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"performer","hash":{},"data":data}) : helper)))
    + "</li>\n        <li>My Role: "
    + escapeExpression(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"role","hash":{},"data":data}) : helper)))
    + "</li>\n    </ul>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<p>\nI started playing music at age 9 and haven't looked back.  Below are some samples of my creative work.  You will hear original compositions plus live performances and studio recordings of me playing trombone and guitar.  I hope you enjoy them.\n</p>\n<h2>My Jams</h2>\n<div id=\"playlist\">\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true})

});