'use strict';

(function (window, document, undefined) {

    var gymStatus = document.querySelector('.gym-status'),
        equipment = document.querySelector('.equipment'),
        gymSwitch = document.querySelector('.gym-switch'),
        equipmentSwitch = document.querySelector('.equipment-switch');

    gymSwitch.onclick = function () {
        if (GymManager.opened) {
            GymManager.execute('close', gymStatus);
        } else {
            GymManager.execute('open', gymStatus);
        }
    };

    equipmentSwitch.onclick = function () {
        GymManager.execute('toggleEquipment');
        equipment.classList.toggle('show');
    };


})(window, document, undefined);