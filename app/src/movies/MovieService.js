(function()
{
    'use strict';

    angular
        .module('movies')
        .service('movieService',
        [
            MovieService
        ]);

    function MovieService()
    {
        var baseUrl = 'http://www.omdbapi.com/?plot=short&r=json';

        this.getBaseUrl = function()
        {
            return baseUrl;
        };

        this.addToUrl = function(url, param, value)
        {
            if (value)
            {
                url += param + value;
            }

            return url;
        };
    }

}) ();
