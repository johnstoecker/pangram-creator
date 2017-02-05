angular.module('panagramCreator', [])
  .controller('PanagramCreatorController', function($scope) {

    $scope.wordBank = [];
    $scope.allLetters = [];
    for(i = 97; i <= 122; i++ ) {
      $scope.allLetters.push(String.fromCharCode(i))
    }
    $scope.wordBank = $scope.allLetters;

    $scope.$watch('panagram', function (newValue, oldValue, scope) {
      if(newValue != undefined) {
        lowerCasePanagram = newValue.toLowerCase();
        tempWordBank = []
        for(i = 97; i <=122; i++ ) {
          if(lowerCasePanagram.indexOf(String.fromCharCode(i)) == -1) {
            tempWordBank.push(String.fromCharCode(i))
          }
        }
        console.log(lowerCasePanagram);
        $scope.wordBank = tempWordBank;
      }
    });
});
