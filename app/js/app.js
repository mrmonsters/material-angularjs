var movieApp = angular.module('movieApp',
    [
        'ngRoute',
        'movieControllers'
    ]);

movieApp.config(['$routeProvider', function($routeProvider)
    {
        $routeProvider
            .when('/movies/search',
            {
                templateUrl: '/src/movies/partials/movie-search.html',
                controller: 'searchCtrl'
            })
            .otherwise
            ({
                redirectTo: '/movies/search'
            });
    }
]);
