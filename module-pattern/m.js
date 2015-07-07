(function () {
  var location = (function () {
    var geo = function (success, err, opts) {
      return navigator.geolocation.getCurrentPosition(success, err, opts);
    };
    
    var opts = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    return {
      getGeo: function () {
        geo(function (pos) {
          pos = pos.coords;
          console.log('Your current position:\n');
          console.log(pos.latitude, pos.longitude);
        }, function (err) {
          console.error(err);
        }, opts);
      }
    }

  })();

  var el = document.getElementById('pos');
  el.addEventListener('click', location.getGeo);
})();