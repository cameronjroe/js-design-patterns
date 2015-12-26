var Subject = function () {
  var _observers = [];
  return {
    subscribe: function (observer) {
      _observers.push(observer);
    },
    unsubscribe: function (observer) {
      var index = _observers.indexOf(observer);
      if (index > -1) {
        // delete observer
        _observers.splice(index, 1);
      }
    },
    notifyObserver: function (observer) {
      var index = _observers.indexOf(observer);
      if (index > -1) {
        _observers[index].notify(index);
      }
    },
    notifyAllObservers: function () {
      for(var i = 0; i < _observers.length; i++) {
        _observers[i].notify(i);
      }
    }
  }
};

var Observer = function () {
  return {
    notify: function (index) {
      var div = document.createElement('div');
      div.innerHTML = 'Observer ' + index;
      var el = document.querySelector('.observers');
      el.appendChild(div);
      console.log('Observer ' + index + ' is notified!');
    }
  }
}

var subject = new Subject();
var o1 = new Observer();
var o2 = new Observer();
var o3 = new Observer();

subject.subscribe(o1);
subject.subscribe(o2);
subject.subscribe(o3);

subject.notifyAllObservers();



