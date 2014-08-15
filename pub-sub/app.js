'use strict';

(function (window, document, undefined) {

    // A simple message handler
    var messageInput = document.getElementById('message'),
        sendBtn = document.getElementById('send'),
        subscribe = document.getElementById('subscribe'),
        unsubscribe = document.getElementById('unsubscribe'),
        status = document.querySelector('.status'),
        inbox = document.querySelector('.inbox');

    var appendMessage = function (topics, data) {
        var el = document.createElement('p');
        el.innerHTML = 'Logging: ' + topics + ': ' + data;
        inbox.appendChild(el);
    };
    // A simple message logger that logs any topics and
    // received data through our subscriber
    var messageLogger = function (topics, data) {
        appendMessage(topics, data);
        console.log('Logging: ' + topics + ': ' + data);
    };

    var subscriptions = [];

    sendBtn.onclick = function () {
        if (messageInput.value !== '') {
            pubsub.publish('inbox/newMessage', messageInput.value);
            messageInput.value = '';
        }
    };

    // Subscribers listen for topics they have subscribed to
    // and invoke a callback function (e.g messageLogger) once 
    // a new notification is broadcast on that topic
    subscribe.onclick = function () {
        
        if (pubsub.subscribed)
            return;

        subscriptions.push(pubsub.subscribe('inbox/newMessage', messageLogger));

        status.innerHTML = '<span style="color: green;">subscribed</span>';
        pubsub.subscribed = true;

        // Publishers are in charge of publishing topics or notifications of
        // interest to the application
        pubsub.publish('inbox/newMessage', 'new message from cameron');

        pubsub.publish('inbox/newMessage', ['test', 'this', 'and', 'that']);

        pubsub.publish('inbox/newMessage', {
            sender: 'cameronjroe@google.com',
            body: 'Hey there, it\'s Cameron from Google!'
        });

    };

    // We can also unsubscribe if we no longer wish for our subscribers
    // to be notified
    unsubscribe.onclick = function () {

        if (!pubsub.subscribed)
            return;
        
        for(var i = 0; i < subscriptions.length; i++) {
            pubsub.unsubscribe(subscriptions[i]);
        }

        status.innerHTML = '<span style="color: red;">unsubscribed</span>';
        pubsub.subscribed = false;

        // Once unsubscribed, this for example won't result in our
        // messageLogger being executed as the subscriber is 
        // no longer listening
        pubsub.publish('inbox/newMessage', 'Does this thing still work?');

    };


})(window, document, undefined);