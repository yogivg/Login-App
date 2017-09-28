app.controller('contentController', function($scope,empService){
   /* $scope.doSearch = function(){
        empService.findEmployeeById($scope,searchEmpno, function(r){
            $scope.empno = r.empno;
            $scope.ename = r.ename;
            $scope.sal = r.sal;
            $scope.deptno = r.deptno;
            $scope.hiredate = r.hiredate;
            $scope.dob = r.dob;
            $scope.salAbove7k = parseInt(r.sal) > 7000;
        });
    };*/
    empService.getEmployees(function(r){
        $scope.getEmployees = r;
    })
});

app.service('empService', function($http,$log){
    this.getEmployees = function(cb){
        $http({
            url:'http://localhost:8000/api/employees/',
            method:'GET'
        }).then(function(resp){
            cb(resp.data);
        }, function(resp){
            $log.error("Error Occured");
        });
    };
});

app.directive('empDetails', function(){
    return{
        templateUrl: 'emp-details.htm'
    }
});