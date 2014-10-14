(function(){
  'use strict';

  angular.module('rjf-calculator')
  .controller('MainCtrl',['$scope', function($scope){
    $scope.answer = function(){
      switch($scope.operator){
        case '+':
          $scope.display = (parseInt($scope.memory) + parseInt($scope.display));
          break;
        case '-':
          $scope.display = (parseInt($scope.memory) - parseInt($scope.display));
          break;
        case '*':
          $scope.display = (parseInt($scope.memory) * parseInt($scope.display));
          break;
        case '/':
          $scope.display = (parseInt($scope.memory) / parseInt($scope.display));
          break;
      }
    };

    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}
      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.calculate = function(operator){
      $scope.operator = operator;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.clearDisplay = function(){
      $scope.display = '0';
    };

    $scope.display = '0';
  }]);
})();
