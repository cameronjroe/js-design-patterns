function Artist(name, genre) {
  this.name = name;
  this.genre = genre;
  
  this.toString = function () {
    return this.name + ' plays ' + this.genre + ' music.';
  };
}

var artist = document.getElementById('artist');
var Kanye = new Artist('Kanye West', 'hip hop');

artist.innerHTML = Kanye.toString();
console.log(Kanye.toString());