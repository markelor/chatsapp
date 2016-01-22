angular.module('whatsapp')
    .controller('ChatsCtrl', function($scope, $ionicModal, $meteor) {
        //todos los clientes sincronizados con el servidoe en tiempo real
        $scope.chats = $scope.$meteorCollection(Chats, false);
        // console.log($scope.chats);
        $ionicModal.fromTemplateUrl('templates/new-chat.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.$on('$destroy', function() {
            $scope.modal.remove();

        });
        $scope.openNewChatModal = function() {
            $scope.modal.show();
        };
        $scope.remove = function(chat) {
            $meteor.call('removeChat', chat._id);
        };

    });
