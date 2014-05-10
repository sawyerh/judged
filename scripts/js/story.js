(function() {
  var initPlayer, playButton, playerWrap, storyBody, storyToggle, toggleStoryBody;

  playerWrap = document.querySelector('.player');

  playButton = document.querySelector('.play-button');

  storyBody = document.querySelector('.story-body');

  storyToggle = document.querySelector('.story-toggle');

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

  toggleStoryBody = function() {
    storyBody.classList.toggle('is-collapsed');
    if (storyBody.classList.contains('is-collapsed')) {
      return storyToggle.innerHTML = '+ more';
    } else {
      return storyToggle.innerHTML = '- less';
    }
  };

  $(function() {
    var player;
    player = new MediaElementPlayer('#audio-player', {
      enableAutosize: true,
      audioWidth: playerWrap.offsetWidth,
      audioHeight: 5,
      features: ['progress'],
      success: function(mediaElement, domObject) {
        return initPlayer(mediaElement);
      }
    });
    $(window).on('load', function() {
      var storyBg, url;
      storyBg = document.querySelector('.story-bg');
      url = storyBg.getAttribute('data-bg');
      return storyBg.style.backgroundImage = "url('" + url + "')";
    });
    return $(storyToggle).on('click', function() {
      return toggleStoryBody();
    });
  });

}).call(this);
