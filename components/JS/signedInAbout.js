(function () {
    angular.module('myApp')
        .component('homePage', {
            templateUrl: 'components/HTML/signedInAbout.js',
            controller: homeController
        });


    function homeController() {
        console.log('Hi There');
    }
})();
