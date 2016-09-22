(function () {

    angular.module('myApp')
        .service('sockService', sockService);
        // .filter('capitalize', capitalize);

    function sockService($localStorage) {
        var self = this;

        self.items = [
            {
                "title": "Sock 1",
                "photo": "url...",
                "Description": 
            }

        ]
    }

})();
