 if (Meteor.isServer) {
     Meteor.startup(function() {
         if (Chats.find().count() === 0) {
             Messages.remove({});
             var messages = [{
                 text: 'Caminando entre codigos',
                 timestamp: moment().subtract(1, 'hours').toDate()
             }, {
                 text: 'Hola, soy yo',
                 timestamp: moment().subtract(2, 'hours').toDate()
             }, {
                 text: 'Eon ai lo ta jangoek me',
                 timestamp: moment().subtract(1, 'days').toDate()

             }, {
                 text: 'Atxur amutzakin joko haut',
                 timestamp: moment().subtract(4, 'days').toDate()
             }, {
                 text: 'Azkar ta ondo usuak hegan',
                 timestamp: moment().subtract(2, 'weeks').toDate()
             }];

              messages.forEach(function(m) {
                  Messages.insert(m);
              });
  
             //messages.forEach(m => Messages.insert(m));

             var chats = [{
                 name: 'Ben Sparrow',
                 picture: 'img/ben.png',
             }, {
                 name: 'Max Lynx',
                 picture: 'img/max.png',
             }, {
                 name: 'Adam Bradleyson',
                 picture: 'img/adam.jpg',
             }, {
                 name: 'Perry Governor',
                 picture: 'img/perry.png',
             }, {
                 name: 'Mike Harrington',
                 picture: 'img/mike.png',
             }];
             /* chats.forEach(chat=> {
                  message = Messages.findOne({
                     chatId: {
                         $exists: false
                     }
                 });
    */

             chats.forEach(function(chat) {
                 message = Messages.findOne({
                     chatId: {
                         $exists: false
                     }
                 });
                 chat.lastMessage = message;
                 chatId = Chats.insert(chat);
                 Messages.update(message._id, {
                     $set: {
                         chatId: chatId
                     }
                 });
             });
         }
     });
 }
