
materialToDo.controller('bottomGridSheetController', function($scope, $mdBottomSheet, $mdDialog,actionService) {

    $scope.listItemClick = function(action) {
        $mdBottomSheet.hide();
        actionService.clickedAction.set(action)
    };


});