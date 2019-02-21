// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var count = 0; // var使いたくないけど別の方法がわからない
window.addEventListener("devicemotion", (e) => {
    if (e.acceleration.x <= 10) return;
    count++;
    if (count !== 4) return; 
    count = 0;
    $('#x').text(e.acceleration.x);
    App.support.add('add');
})