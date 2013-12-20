// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// <a data-expand="myRow"></a>
// <div data-expand-for="myRow"></div>

$("[data-expand]").each(function(idx, el) {
	var self = $(el);
	$("[data-expand-for=" + self.data("expand") + "]").hide();
});

$(document).on("click", "[data-expand]", function(event) {
	event.preventDefault();
	event.stopImmediatePropagation();
  var self = $(event.currentTarget),
  		target = $("[data-expand-for=" + $(self).data("expand") + "]");
  
  target.slideToggle(function(){
  	var visible = $(this).is(":visible");
  	self.toggleClass("active", visible);
  });

});


/* Modernizr Test for Variable Height Content */
Modernizr.testStyles('#modernizr { display: table; height: 50px; width: 50px; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; }', function(elem, rule) {
  Modernizr.addTest('absolutecentercontent', Math.round(window.innerHeight / 2 - 25) === elem.offsetTop);
});