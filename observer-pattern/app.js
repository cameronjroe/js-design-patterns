'use strict';

function Observer() {
    this.update = function () {};
}


// extend an object with an extension
function extend(obj, ext) {
    for (var key in ext) {
        obj[key] = ext[key];
    }
}

var controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer');

// Concrete Subject

// Extend the controlling checkbox with the Subject class
extend( controlCheckbox, new Subject() );

// clicking the checkbox will trigger notifications to it's observers
controlCheckbox.onclick = function () {
    controlCheckbox.notify( controlCheckbox.checked );
}

addBtn.onclick = addNewObserver;

// Concrete Observer

function addNewObserver() {

    // Create a new checkbox to be added
    var check = document.createElement('input');
    check.type = 'checkbox';

    // extend the checkbox with Observer class
    extend(check, new Observer());

    check.update = function (value) {
        this.checked = value;
    };

    // Add the new observer to our list of observers
    // for our main subject
    controlCheckbox.addObserver(check);

    // Append the item to the container
    container.appendChild(check);

}