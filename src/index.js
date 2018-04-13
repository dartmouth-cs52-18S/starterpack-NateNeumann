import $ from 'jquery';
import './style.scss';

let num = 1;
setInterval(() => {
  $('#main').html(`You have been on this webpage for ${num} seconds.`);
  num += 1;
}, 1000);
