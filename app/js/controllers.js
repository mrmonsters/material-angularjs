var movieControllers = angular.module('movieControllers', []);

movieControllers
    .controller('searchCtrl',
    [
        '$scope',
        '$http',
        '$location',
        'movieService',
        SearchController
    ])
    .controller('resultCtrl',
    [
        '$scope',
        '$location',
        'movieService',
        ResultController
    ]);

function SearchController($scope, $http, $location, movieService)
{
    $scope.searchInfo = {};

    $scope.search = function()
    {
        var baseUrl = movieService.getBaseUrl();

        if ($scope.searchInfo.title)
        {
            baseUrl = movieService.addToUrl(baseUrl, '&t=', $scope.searchInfo.title);

            if ($scope.searchInfo.year)
            {
                baseUrl = movieService.addToUrl(baseUrl, '&y=', $scope.searchInfo.year);
            }

            console.log(baseUrl);

            $http.get(baseUrl).success(function(data)
            {
                if (data['Response'] == 'True')
                {
                    movieService.setMovie(data);
                    $location.path('/movies/result');
                }
                else
                {
                    alert(data['Error']);
                }
            });
        }
        else
        {
            alert('Please enter any movie title.');
        }
    }
}

function ResultController($scope, $location, movieService)
{
    if (data = movieService.getMovie())
    {
        $scope.movieInfo = data;
    }

    $scope.goBack = function()
    {
        $location.path('movies/search');
    }
}
