playerWrap = document.querySelector('.player')
playButton = document.querySelector('.play-button')

initPlayer = (mediaElement) ->
  playButton.classList.remove('is-loading')

  $('.play-button').on 'click', ->
    if mediaElement.paused
      mediaElement.play()
      playButton.innerHTML = 'pause'
      playButton.classList.add('is-playing')
    else
      mediaElement.pause()
      playButton.innerHTML = 'play'
      playButton.classList.remove('is-playing')

$ ->
  player = new MediaElementPlayer('#audio-player', {
    enableAutosize: true
    audioWidth: playerWrap.offsetWidth
    audioHeight: 3
    features: ['progress']
    success: (mediaElement, domObject) ->
      initPlayer(mediaElement)
  })