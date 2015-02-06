(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                            
                                 var fecha = $scope.user.date;
                                 var dd = fecha.getDate();
                                 var mm = fecha.getMonth()+1;
                                 var yyyy = fecha.getFullYear();

                                 var laFecha = dd+'/'+mm+'/'+yyyy;
                                document.getElementById("txt").innerHTML = "El usuario "+ $scope.user.firstName +" "+ $scope.user.lastName+ " " + "nació el "+laFecha;
			};
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();