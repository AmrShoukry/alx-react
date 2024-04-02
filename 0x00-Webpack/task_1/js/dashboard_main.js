var $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('Copyright - Holberton School');

let count = 0;
let countElement = $('#count');
const button = $('button')[0];
function updateCounter() {
  count += 1;
  countElement.text(`${count} clicks on the button`);
}

_.debounce(updateCounter, 4000);
button.on('click', updateCounter);
updateCounter();
