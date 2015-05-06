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
        var movie = [];

        this.getBaseUrl = function()
        {
            return baseUrl;
        };

        this.getMovie = function()
        {
            if (this.movie)
            {
                return this.movie;
            }
            else
            {
                return 'There is no existing movie.';
            }
        };

        this.addToUrl = function(url, param, value)
        {
            if (value)
            {
                value = value.replace(/ /g, '+');
                url += param + value;
            }

            return url;
        };

        this.setMovie = function(movie)
        {
            this.movie = movie;
        };
    }

}) ();
