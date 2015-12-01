angular.module('whatsapp')
    .controller('ChatsCtrl', function($scope) {
        //todos los clientes sincronizados con el servidoe en tiempo real
        $scope.chats = $scope.$meteorCollection(Chats, false);
       // console.log($scope.chats);
        $scope.remove = function(chat) {
            $scope.chats.remove(chat);
        };
    });
