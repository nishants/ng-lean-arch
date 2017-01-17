app.service("uiService", ["missionsService",function(missionsService){
  var ui = {
    skipIntro: false,
    showMissionsWizard: false,
    createMission: function () {
      ui.showMissionsWizard = true;
    },
    missions: missionsService,
    regiment: []
  };
  return ui;
}]);