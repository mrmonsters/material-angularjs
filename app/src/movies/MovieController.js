(function()
{
    angular
        .module('movies')
        .controller('MovieController',
        [
            '$scope',
            '$http',
            'movieService',
            MovieController
        ]);

    function MovieController($scope, $http, movieService)
    {
        $scope.searchInfo = {};
        $scope.movieInfo = {};

        $scope.search = function()
        {
            var baseUrl = movieService.getBaseUrl();

            baseUrl = movieService.addToUrl(baseUrl, '&t=', $scope.searchInfo.title);
            baseUrl = movieService.addToUrl(baseUrl, '&y=', $scope.searchInfo.year);

            if ($scope.searchInfo.title)
            {
                console.log(baseUrl);

                $http.get(baseUrl).success(function(data)
                {
                    if (data['Response'] == 'True')
                    {
                        $scope.movieInfo = data;
                    }
                    else
                    {
                        alert(data['Error']);
                    }

                    console.log(JSON.stringify($scope.movieInfo));
                });
            }
            else
            {
                alert('Please enter any movie title.');
            }
        }
    }

}) ();
