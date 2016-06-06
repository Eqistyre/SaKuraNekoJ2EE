(function () {
    'use strict';

    angular
        .module('saKuraNekoJ2EeApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
