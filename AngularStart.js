// Main configuration file. Sets up AngularJS module and routes and any other config objects

var careerRoad = angular.module('CareerRoad', []);     //Define the main module

//Defining the routes
careerRoad
    .config([
        '$routeProvider', function ($routeProvider) {
            //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
            $routeProvider
                .when('/Home', { templateUrl: '/Home/Index', controller: 'HomeCtrl' })
                .when('/Setting', { templateUrl: '/Profile/Setting', controller: 'SettingCtrl' });
            //.otherwise({ redirectTo: '/home' });
        }
    ])
    .controller('LeftMenuCtrl', function ($scope, $route, $routeParams, $location) {
        $scope.options = [{ name: "Home", url: "/Home" }, { name: "Setting", url: "/Setting" }, { name: "About", url: "/About" }];
    });
