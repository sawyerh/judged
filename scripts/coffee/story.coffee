playerWrap = document.querySelector('.player')
playButton = document.querySelector('.play-button')
storyBody = document.querySelector('.story-body')
storyToggle = document.querySelector('.story-toggle')

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

toggleStoryBody = ->
  storyBody.classList.toggle('is-collapsed')

  if storyBody.classList.contains('is-collapsed')
    storyToggle.innerHTML = '+ more'
  else
    storyToggle.innerHTML = '- less'


$ ->
  player = new MediaElementPlayer('#audio-player', {
    enableAutosize: true
    audioWidth: playerWrap.offsetWidth
    audioHeight: 5
    features: ['progress']
    success: (mediaElement, domObject) ->
      initPlayer(mediaElement)
  })

  $(window).on 'load', ->
    storyBg = document.querySelector('.story-bg')
    url = storyBg.getAttribute('data-bg')
    storyBg.style.backgroundImage = "url('#{url}')"

  $(storyToggle).on 'click', ->
    toggleStoryBody()