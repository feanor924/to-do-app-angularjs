var app = angular.module('mainApp', []);

app.controller('app', function($scope){
	$scope.tasks = [];

	var taskData = localStorage['taskList'];

	if ( taskData != undefined){
		$scope.tasks = JSON.parse(taskData);
	}


	$scope.searchEnter = function($event){

		if ( $event.which == 13 ){
			$scope.addTask();
		}
	};

	$scope.addTask = function(){
		$scope.tasks.push( { "taskMessage": $scope.task, "status":"false" } );
		$scope.task = "";
		localStorage['taskList'] = JSON.stringify($scope.tasks);

	};

	$scope.contentEdit = function($event,x){

		for ( i = 0; i < $scope.tasks.length;i++){
			if ( $scope.tasks[i].taskMessage == x){
				$scope.tasks[i].taskMessage = $event.target.innerText;
			}
		}

		localStorage['taskList'] = JSON.stringify($scope.tasks);

		if ( $event.target.contentEditable == "false" ){
			$event.target.contentEditable = "true";
		}
		else if ( $event.target.contentEditable == "true" ) {
			$event.target.contentEditable = "false";
		}

	};

	$scope.enterAgain = function($event){
		if ( $event.which == 13 ){
			$scope.contentEdit($event);
		}

	};

});
