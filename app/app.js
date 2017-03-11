// 'use strict';
//
// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);



// Declare app level module which depends on views, and components
var app = angular.module('actiwate',['ui.router']);
app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
    $stateProvider
        .state("index", {
            url: "/",
            templateUrl : "Views/home.html"

        })
        .state("why-choose-us", {
            url: "/whyChooseUs",
            templateUrl : "Views/why_choose_us.html"

        })
        .state("services-offered", {
            url: "/servicesOffered",
            templateUrl : "Views/services_offered.html"

        })
        .state("portfolio", {
            url: "/portfolio",
            templateUrl : "Views/portfolio.html"

        })
        .state("industries", {
            url: "/industries",
            templateUrl : "Views/industries.html"

        })
        .state("team", {
            url: "/team",
            templateUrl : "Views/team.html"

        })
        .state("contact-us", {
            url: "/contactUs",
            templateUrl : "Views/contact_us.html"

        })
        .state("portfolio-partiko", {
            url: "/portfolioPartiko",
            templateUrl : "Views/portfolio_partiko.html"

        })
        .state("portfolio-partiko-merchant", {
            url: "/portfolioPartikoMerchant",
            templateUrl : "Views/portfolio_partiko_merchant.html"

        })
        .state("portfolio-alien-h-casting", {
            url: "/portfolioAlienHCasting",
            templateUrl : "Views/portfolio_alien_h_casting.html"

        })
        .state("portfolio-eventscrunch", {
            url: "/portfolioEventscrunch",
            templateUrl : "Views/portfolio_eventscrunch.html"

        })
        .state("portfolio-mito", {
            url: "/portfolioMito",
            templateUrl : "Views/portfolio_mito.html"

        })
        .state("portfolio-pesofts", {
            url: "/portfolioPesofts",
            templateUrl : "Views/portfolio_pesofts.html"

        })
        .state("portfolio-bedj", {
            url: "/portfolioBedj",
            templateUrl : "Views/portfolio_bedj.html"

        })
        .state("portfolio-examper", {
            url: "/portfolioExamper",
            templateUrl : "Views/portfolio_examper.html"

        })
        .state("portfolio-grandslam-fitness", {
            url: "/portfolioGrandSlamFitness",
            templateUrl : "Views/portfolio_grandslamfitness.html"

        })

        .state("portfolio-swiftintern", {
            url: "/portfolioSwiftIntern",
            templateUrl : "Views/portfolio_swiftintern.html"

        })
        .state("portfolio-letmusicplay", {
            url: "/portfolioLetMusicPlay",
            templateUrl : "Views/portfolio_letmusicplay.html"

        })
        .state("portfolio-trigr", {
            url: "/portfolioTrigr",
            templateUrl : "Views/portfolio_trigr.html"

        })
        .state("join-us", {
            url: "/joinUs",
            templateUrl : "Views/join_us.html"

        })

   ;

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

});
