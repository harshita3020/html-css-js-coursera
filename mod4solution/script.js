(function (window) {
  var names = ["Ayushman", "Anamika", "Jen", "Jason", "Just kidding", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

