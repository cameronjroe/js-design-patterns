'use strict';


(function (window, document, undefined) {


    window.GymManager = {

        opened: false,
        machines: false,

        open: function (el) {
            this.opened = true;
            el.innerHTML = 'Gym is now opened';
        },

        close: function (el) {
            this.opened = false;
            el.innerHTML = 'Gym is now closed';
        },

        toggleEquipment: function () {
            this.machines = !this.machines;
        },

        execute: function (name) {
            return this[name] && this[name].apply(this, [].slice.call(arguments, 1));
        }

    };

})(window, document, undefined);