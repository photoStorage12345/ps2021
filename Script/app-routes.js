(function () {

    angular.module("PG", ["ui.router", "ngMessages", "ngFileUpload"])
			.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $qProvider) {
			    $qProvider.errorOnUnhandledRejections(false);
			    $urlRouterProvider.otherwise('/login');

			    $stateProvider

                .state("login", {
                    url: "/login",
                    templateUrl: "../Resources/login/login.html",
                    controller: 'loginController'
                })

                .state("register", {
                    url: "/register",
                    templateUrl: "../Resources/login/Register/register.html",
                    controller: 'registerController'
                })

                .state("main", {
                    url: "/main",
                    templateUrl: "../Resources/images/image.html",
                    controller: 'imageController'
                })

                .state("images", {
                    url: "/captured_images",
                    templateUrl: "../Resources/images/imageList/imageList.html",
                    controller: 'imageListController'
                })

                .state("albumShare", {
                    url: "/shared_album",
                    templateUrl: "../Resources/images/sharedAlbum/sharedAlbum.html",
                    controller: 'sharedAlbumController'
                })

			    //$locationProvider.hashPrefix('');
			    //$locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: true })
			    $locationProvider.hashPrefix('!');
			});
})();

