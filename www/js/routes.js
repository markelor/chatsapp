angular.module('whatsapp')
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl',
      /*resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        }]
      }*/
     
    })
  .state('confirmation', {
      url: '/confirmation',
      templateUrl: 'templates/confirmation.html',
      controller: 'ConfirmationCtrl'
    })
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        }]
      }
      
    })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    }).state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/chats');

});