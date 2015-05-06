var movieControllers = angular.module('movieControllers', ['utils']);

movieControllers
    .controller('searchCtrl',
    [
        '$scope',
        '$http',
        '$location',
        'dialogService',
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

function SearchController($scope, $http, $location, dialogService, movieService)
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
                    dialogService.showAlert(
                        'Error',
                        data['Error'],
                        'Movie not found.',
                        'Got it!'
                    );
                }
            });
        }
        else
        {
            dialogService.showAlert(
                'Oops!',
                'Please enter any movie title to search.',
                'Enter any movie title',
                'Got it!'
            );
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
