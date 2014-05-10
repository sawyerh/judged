changePage = (direction) ->
  if direction == 'prev'
    link = document.querySelector('.nav-prev')
  else
    link = document.querySelector('.nav-next')

  return if !link
  window.location = link.getAttribute('href')

$ ->
  # Keyboard nav
  # --------------------------------------------------
  $(document).on 'keyup', (e) ->
    return if e.metaKey || e.shiftKey
    if e.keyCode == 37
      changePage('prev')
    else if e.keyCode == 39
      changePage('next')