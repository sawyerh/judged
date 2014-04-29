(function() {
  var shuffle;

  shuffle = function(array) {
    var counter, index, temp;
    counter = array.length;
    temp = void 0;
    index = void 0;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  };

  $(function() {
    var imageUrl, storyBackgroundsShuffled, storyBg;
    storyBg = document.querySelector('.story-bg');
    storyBackgroundsShuffled = shuffle(storyBackgrounds);
    imageUrl = storyBackgroundsShuffled[0];
    return storyBg.style.backgroundImage = "url('" + imageUrl + "')";
  });

}).call(this);
