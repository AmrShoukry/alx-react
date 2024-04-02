import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let countElement = $('#count');

  let count = parseInt(countElement.text()) || 0;
  count++;

  countElement.text(`${count} clicks on the button`);
}

function initBody() {
  $('body').append(
    '<button id="clickButton">Click here to get started</button>',
  );
  $('body').append('<p id="count"></p>');

  $('#clickButton').click(_.debounce(updateCounter, 300));

  console.log('Init body');
}

initBody();
