angular.module('whatsapp')
    .controller('ChatDetailCtrl', function($scope, $stateParams, $timeout, $ionicScrollDelegate, $meteor) {

        $scope.chat = $scope.$meteorObject(Chats, $stateParams.chatId, false);
        console.log($scope.chat);

        $scope.messages = $scope.$meteorCollection(function() {
            return Messages.find({
                chatId: $stateParams.chatId
            });
        }, false);
        console.log($scope.messages);
        $scope.data = {};

        $scope.sendMessage = function() {
            if (_.isEmpty($scope.data.message)) {
                return;
            }

            $meteor.call('newMessage', {
                text: $scope.data.message,
                chatId: $stateParams.chatId
            });

            delete $scope.data.message;
        };

        $scope.inputUp = function() {
            $timeout(function() {
                $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
            }, 300);
        };
        $scope.inputDawn = function() {
            $ionicScrollDelegate.$getByHandle('chatScroll').resize();
        };
    });
