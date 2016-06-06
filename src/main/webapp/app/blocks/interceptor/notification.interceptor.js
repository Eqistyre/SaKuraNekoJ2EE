(function() {
    'use strict';

    angular
        .module('saKuraNekoJ2EeApp')
        .factory('notificationInterceptor', notificationInterceptor);

    notificationInterceptor.$inject = ['$q', 'AlertService'];

    function notificationInterceptor ($q, AlertService) {
        var service = {
            response: response
        };

        return service;

        function response (response) {
            var alertKey = response.headers('X-saKuraNekoJ2EeApp-alert');
            if (angular.isString(alertKey)) {
                AlertService.success(alertKey, { param : response.headers('X-saKuraNekoJ2EeApp-params')});
            }
            return response;
        }
    }
})();
