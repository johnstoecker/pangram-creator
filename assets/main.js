angular.module('pangramCreator', [])
  .controller('pangramCreatorController', function($scope) {

    $scope.wordBank = [];
    $scope.allLetters = [];
    for(i = 97; i <= 122; i++ ) {
      $scope.allLetters.push(String.fromCharCode(i))
    }
    $scope.wordBank = $scope.allLetters;

    $scope.$watch('pangram', function (newValue, oldValue, scope) {
      if(newValue != undefined) {
        lowerCasepangram = newValue.toLowerCase();
        tempWordBank = []
        for(i = 97; i <=122; i++ ) {
          if(lowerCasepangram.indexOf(String.fromCharCode(i)) == -1) {
            tempWordBank.push(String.fromCharCode(i))
          }
        }
        console.log(lowerCasepangram);
        $scope.wordBank = tempWordBank;
      }
    });
});
