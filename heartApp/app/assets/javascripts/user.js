// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
window.addEventListener("devicemotion", (e) => {
    $('#x').text(e.acceleration.x);
    if (e.acceleration.x >= 10) App.support.add('add');
})