var clickTally = 0;

$(document).ready(function() {
  addEventListeners();
});


function addEventListeners () {
  $('#generate').on('click', generateDiv);
  $('.container').on('click', '.swap', swapBG);
  $('.container').on('click', '.delete', removeDiv);
}

function generateDiv () {
  clickTally++;
  $('.container').append('<div class="red"></div>');
  var $el = $('.container').children().last();
  $el.append('<p>' + clickTally + '</p>');
  $el.append('<button class="swap">Swap</button>');
  $el.append('<button class="delete">Delete</button>');
}

function swapBG () {
  var $el = $(this).parent();
  if ($el.hasClass('red')) {
    $el.addClass('yellow');
    $el.removeClass('red');
  }
  else if ($el.hasClass('yellow')) {
    $el.addClass('red');
    $el.removeClass('yellow');
  }
}

function removeDiv () {
  var $el = $(this).parent();
  $el.remove();
  console.log($(this).parent());
}
