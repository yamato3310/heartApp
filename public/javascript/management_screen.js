// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$("#add").on('click', () => {
  App.support.add('add');
});

var timer; //var... クラスを使えば解決？
$("#loop").on('click', () => {
  timer =setInterval(() => {
    App.support.add('add');
  }, 100)
});

$("#stop").on('click', () => {
  clearInterval(timer);
});
