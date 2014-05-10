
(function(){var changePage;changePage=function(direction){var link;if(direction==='prev'){link=document.querySelector('.nav-prev');}else{link=document.querySelector('.nav-next');}
if(!link){return;}
return window.location=link.getAttribute('href');};$(function(){return $(document).on('keyup',function(e){if(e.metaKey||e.shiftKey){return;}
if(e.keyCode===37){return changePage('prev');}else if(e.keyCode===39){return changePage('next');}});});}).call(this);