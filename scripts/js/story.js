(function() {
  var initPlayer, playButton, playerWrap;

  playerWrap = document.querySelector('.player');

  playButton = document.querySelector('.play-button');

  initPlayer = function(mediaElement) {
    playButton.classList.remove('is-loading');
    return $('.play-button').on('click', function() {
      if (mediaElement.paused) {
        mediaElement.play();
        playButton.innerHTML = 'pause';
        return playButton.classList.add('is-playing');
      } else {
        mediaElement.pause();
        playButton.innerHTML = 'play';
        return playButton.classList.remove('is-playing');
      }
    });
  };

  $(function() {
    var player;
    return player = new MediaElementPlayer('#audio-player', {
      enableAutosize: true,
      audioWidth: playerWrap.offsetWidth,
      audioHeight: 3,
      features: ['progress'],
      success: function(mediaElement, domObject) {
        return initPlayer(mediaElement);
      }
    });
  });

}).call(this);
