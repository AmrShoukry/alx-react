var $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('Copyright - Holberton School');

function updateCounter() {
  let count = $('#count').html() || 0;
  $('button').on('click', () => {
    count += 1;
    $('#count').html(`${count} clicks on the button`);
  });
}

_.debounce(updateCounter, 4000);
updateCounter();
