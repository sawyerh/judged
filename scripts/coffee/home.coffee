shuffle = (array) ->
  counter = array.length
  temp = undefined
  index = undefined

  # While there are elements in the array
  while counter > 0

    # Pick a random index
    index = Math.floor(Math.random() * counter)

    # Decrease counter by 1
    counter--

    # And swap the last element with it
    temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  array


$ ->
  storyBg = document.querySelector('.story-bg')
  storyBackgroundsShuffled = shuffle(storyBackgrounds)
  imageUrl = storyBackgroundsShuffled[0]
  storyBg.style.backgroundImage = "url('#{imageUrl}')"