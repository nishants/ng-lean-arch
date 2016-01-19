(function () {
  "use strict"
  app.directive("editor", function () {

    return {
      restrict: "C",
      scope: false,
      transclude: false,
      link: function(scope, element, attrs){

        var offsets;
        var calculateOffset = function(element){
          var offset = 0,
              sections = element.find(".form-section");
          offsets = {};
          for(var i =0; i < sections.length; i++){
            var section  = $(sections[i]);
            offset = section.offset().top;
            offsets[section.attr("id")] = offset;
          }
          window.offsets = offsets;

        };
        var form = $(element);
        scope.goto = function(targetId){
          form.animate({scrollTop: 0}, 10, function(){
            var target = form.find("#" + targetId);
            var scrollTop = target.offset().top - target.height();
            form.animate({scrollTop: scrollTop}, 500);
          });
        }

      }
    };
  });
}).call(this);