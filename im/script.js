var App = angular.module('bookApp', [])
App.config(
  function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/Book/:bookId', {
  	
    title : 'book',
    templateUrl: 'book.html',
    controller: BookCntl,
    resolve  : {
      loading : function($q,$timeout){
                var defer = $q.defer();
                $timeout(function(){
                  defer.resolve("i am successfully loaded");
                  // defer.reject("i couldn't load your data");
                },3000);
                return defer.promise;
      }
    }
  })
  .when('/Book/:bookId/ch/:chapterId', {
    title : 'chapter',
    templateUrl: 'chapter.html',
    controller: ChapterCntl,
    resolve  : {
      loading : function($q,$timeout){
                var defer = $q.defer();
                $timeout(function(){
                  defer.resolve("i am successfully loaded");
                  // defer.reject("i couldn't load your data");
                },3000);
                return defer.promise;
      }
    }
  })
  .otherwise({redirectTo : '/'});
});

function MainCntl( $scope , $route , $rootScope , $routeParams , $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  $rootScope.$on("$routeChangeStart",function(event,next,current){
    $scope.msg = "loading....";
  });
  $rootScope.$on("$routeChangeSuccess",function(event,current,previous){
    $scope.msg = "Success";
  });
  
  $rootScope.$on("$routeChangeError",function(event,current,previous,rejection){
     $scope.msg = "Error : " + rejection+"HEADS UP : view won't be LOADED";
  });
}
 
function BookCntl($scope, $routeParams,loading) {
  $scope.name = "BookCntl";
  $scope.params = $routeParams;
  $scope.status = loading;
  console.log("book loading function : "+loading);
  $scope.init   = function(){
    console.log("book called");
  }
}
 
function ChapterCntl($scope, $routeParams,loading) {
  $scope.name = "ChapterCntl";
  $scope.params = $routeParams;
  $scope.status = loading;
  console.log("book loading function : "+loading);
  $scope.init   = function(){
    console.log("chapteer called");
  }
  
}