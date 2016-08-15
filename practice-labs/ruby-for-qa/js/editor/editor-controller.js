(function(){
  "use strict"
  window.app.controller("editorController", ["$scope", "taskService", "$timeout", "uiService", function($scope, taskService, $timeout, uiService){
    var editor = {
      content: null,
      autoRun: {
        pending: null,
        interval: 500,
        execute: function(){
          editor.run();
        }
      },
      console  : {
        show: false,
        output : {
          scenarios: []
        }
      },
      ace: ace.edit("worksheet"),
      contentChanged: function(e){
        var action = e.action,
            change = e.lines
        console.log(action+ " : " + change)
      },
      run: function(){
        uiService.runningTask = true;
        taskService.evaluateAssignment("exercise-one", editor.ace.getValue()).then(function(result){
          editor.console.output = result;
          editor.console.show = true;
          uiService.runningTask = false;
        });
      }
    };

    taskService.getAssignment("exercise-one").then(function(worksheet){
      editor.ace.setValue(worksheet);
      editor.run();
    });

    editor.ace.getSession().setMode("ace/mode/ruby");
    editor.ace.getSession().on('change', function(e) {
      editor.autoRun.pending ? $timeout.cancel(editor.autoRun.pending) : "";
      editor.autoRun.pending = $timeout(editor.autoRun.execute, editor.autoRun.interval);
    });
    $scope.editor = editor;
  }]);

}).call(this);