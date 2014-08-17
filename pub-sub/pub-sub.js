'use strict';

window.pubsub = {};

(function (obj) {

    // Storage for topics that can be broadcast
    // or listened to
    obj.topics = {};

    // A topic identifier
    var subUid = -1;

    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    obj.publish = function (topic, args) {
        
        if ( !this.topics[topic] ) {
            return false;
        }

        var subscribers = this.topics[topic],
            len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func( topic, args);
        }

        return this;
    };

    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    obj.subscribe = function (topic, func) {
        
        if ( !this.topics[topic] ) {
            this.topics[topic] = [];
        }

        var token = ( ++subUid ).toString();
        this.topics[topic].push({
            token: token,
            func: func
        });

        return token;
    };

    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    obj.unsubscribe = function ( token ) {
        for (var m in this.topics) {
            if (this.topics[m]) {
                for (var i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].token == token) {
                        this.topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };


})(pubsub);