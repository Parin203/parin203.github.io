var App = angular.module( 'bookApp', [ ] )
App.config(
    function( $routeProvider, $locationProvider ) {
        $routeProvider
            .when( '/Book/:bookId', {

                title: 'book',
                templateUrl: '/Book/book.html',
                controller: BookCntl,
                resolve: {
                    loading: function( $q, $timeout ) {
                        var defer = $q.defer( );
                        $timeout( defer.resolve( ), 3000 );
                        return defer.promise;
                    }
                }
            } )
            .when( '/Book/:bookId/ch/:chapterId', {
                    title: 'chapter',
                    templateUrl: '/Book/chapter.html',
                    controller: ChapterCntl,
                    resolve: {
                        loading: function( $q, $timeout ) {
                            var defer = $q.defer( );
                            $timeout( defer.resolve( ), 3000 );
                            return defer.promise;
                        }
                    }
        } );
});

    function MainCntl( $scope, $route, $rootScope, $routeParams, $location ) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $rootScope.$on( "$routeChangeStart", function( event, next, current ) {
            $scope.msg = "loading....";
        } );
        $rootScope.$on( "$routeChangeSuccess", function( event, current, previous ) {
            $scope.msg = "Success";
        } );

        $rootScope.$on( "$routeChangeError", function( event, current, previous, rejection ) {
            $scope.msg = "Error : " + rejection;
        } );
    }

    function BookCntl( $scope, $routeParams ) {
        $scope.name = "BookCntl";
        $scope.params = $routeParams;
        $scope.init = function( ) {
            console.log( "book called" );
        }
    }

    function ChapterCntl( $scope, $routeParams ) {
        $scope.name = "ChapterCntl";
        $scope.params = $routeParams;
        $scope.init = function( ) {
            console.log( "chapteer called" );
        }

    }
