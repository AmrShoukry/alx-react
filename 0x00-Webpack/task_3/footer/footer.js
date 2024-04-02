import $ from 'jquery';

function appendCopyright() {
  $('body').append('<p>Copyright - Holberton School</p>');
  console.log('Copyright appended');
}

appendCopyright();
