angular.module('pangramCreator', [])
  .controller('pangramCreatorController', function($scope) {

    $scope.wordBank = [];
    $scope.usedLetterCount = {};
    $scope.allLetters = [];
    for(i = 97; i <= 122; i++ ) {
      $scope.allLetters.push(String.fromCharCode(i))
    }
    $scope.wordBank = $scope.allLetters;

    $scope.$watch('pangram', function (newValue, oldValue, scope) {
      if(newValue != undefined) {
        lowerCasepangram = newValue.toLowerCase();
        tempWordBank = []
        tempUsedLetterCounts = {}
        for(i = 97; i <=122; i++ ) {
          if(lowerCasepangram.indexOf(String.fromCharCode(i)) == -1) {
            tempWordBank.push(String.fromCharCode(i))
          }
        }
        usedLetters = lowerCasepangram.split("").sort();
        for(i=0; i< usedLetters.length; i++) {
          if(scope.allLetters.indexOf(usedLetters[i]) !== -1) {
            currentLetter = usedLetters[i];
            if(tempUsedLetterCounts[currentLetter] == null) {
              tempUsedLetterCounts[currentLetter] = 1;
            } else {
              tempUsedLetterCounts[currentLetter] += 1;
            }
          }
        }
        $scope.wordBank = tempWordBank;
        $scope.usedLetterCount = tempUsedLetterCounts;
      }
    });
    $("#pangrammer")[0].focus()
});
