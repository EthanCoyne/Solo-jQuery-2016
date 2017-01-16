var boxColor = 0;
var redCounter = 0;
var yellowCounter = 0;
var greenCounter = 0;
var blueCounter = 0;


$(function() {

  $('button').on('click', function() {
    boxColor = $(this).data();
    console.log(boxColor.color);
    $('.container').append('<div class="color-cube ' + boxColor.color + '"' + '</div>');
    colorCounter(boxColor);
    updateCounter();
  });

  function colorCounter() {
    if (boxColor.color == 'red') {
      redCounter++;
    } else if (boxColor.color == 'yellow') {
      yellowCounter++;
    } else if (boxColor.color == 'green') {
      greenCounter++;
    } else if (boxColor.color == 'blue') {
      blueCounter++;
    }
    console.log(redCounter, yellowCounter, greenCounter, blueCounter);
  };

function updateCounter() {
  $('#red').text(redCounter);
  $('#yellow').text(yellowCounter);
  $('#green').text(greenCounter);
  $('#blue').text(blueCounter);
}


});
