    // create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', []);


    scotchApp.config(function($routeProvider) {
    
            // route for the homepage
            .when("/", {
                templateURL : '/pages/home.html'
                controller : 'mainController'
            })

            // route for the about page
            .when("/about", {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when("/contact", {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
        
            .otherwise("/", {
            templateURL : '/pages/home.html'
            controller : 'mainController'
            });
    
    });


    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });