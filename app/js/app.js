var app = angular.module('app',
    [
        'ngRoute',
        'movieControllers'
    ]);

app.config(['$routeProvider', function($routeProvider)
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
