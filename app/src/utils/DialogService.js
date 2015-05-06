(function()
{
    'use strict';

    angular
        .module('utils', ['ngMaterial'])
        .service('dialogService',
        [
            '$mdDialog',
            DialogService
        ]);

    function DialogService($mdDialog)
    {
        this.showAlert = function(title, content, aria, ok)
        {
            $mdDialog.show(
                $mdDialog.alert()
                    .title(title)
                    .content(content)
                    .ariaLabel(aria)
                    .ok(ok)
            );
        };
    }
}) ();
