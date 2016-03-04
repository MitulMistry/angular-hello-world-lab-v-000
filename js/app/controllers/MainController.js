function MainController($scope) {
  $scope.name = "bob";
  $scope.email = "bob@bob.com";
  $scope.phone = "123-456-7890";
}

angular
  .module('app')
  .controller('MainController', MainController);