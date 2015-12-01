Meteor.methods({
    //check se utiliza para controlar si los parametros son correctos
    newMessage: function(message) {
        check(message, {
            text: String,
            chatId: String
        });

        message.timestamp = new Date();
        message.userId = this.userId;
        var messageId = Messages.insert(message);

        Chats.update(message.chatId, {
            $set: {
                lastMessage: message
            }
        });
        return messageId;
    },
    updateName: function(name) {
        check(name, String);
        if (name.length === 0) {
            throw Meteor.Error('name-required', 'must provide user name');
        }
        return Meteor.users.update(this.userId, {
            $set: {
                'profile.name': name
            }
        });
    }
});
