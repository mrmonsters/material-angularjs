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
            .when('/movies/result',
            {
                templateUrl: 'src/movies/partials/movie-result.html',
                controller: 'resultCtrl'
            })
            .when('/questions/list',
            {
                templateUrl: 'src/questions/partials/question-list.html',
                controller: 'questionCtrl'
            })
            .otherwise
            ({
                redirectTo: '/movies/search'
            });
    }
]);
