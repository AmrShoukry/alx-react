import $ from 'jquery';

function initHeader() {
  $('header').append('<img src="../assets/holberton-logo.jpg" alt="Logo">');
  $('header').append('<h1>Holberton Dashboard</h1>');

  console.log('Init header');
}

initHeader();
