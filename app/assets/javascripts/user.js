// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var count = 0; // var使いたくないけど別の方法がわからない
window.addEventListener('DOMContentLoaded', function() {
  alert( 'onload' );
  // window.DeviceMotionEvent.requestPermission()
  // // feature detect
  if ( typeof window.DeviceMotionEvent.requestPermission === 'function' ) {
    window.DeviceMotionEvent.requestPermission()
      .then( permissionState => {
        if ( permissionState === 'granted' ) {
          window.addEventListener( 'devicemotion', () => {
              if (e.acceleration.x <= 10) return;
              count++;
              if (count !== 10) return;
              count = 0;
              $("#x").text(e.acceleration.x);
              App.support.add("add");
          });
        }
      } )
      .catch( console.error );
  } else {
    // handle regular non iOS 13+ devices
  }
})



// const timer = setInterval(() => App.support.add("add"), 3000)

window.onload = () => {
  window.scrollTo(0, 0);

  $("#event_container").click(function() {
    count++;
    if (count == 5) {
      App.support.add("add");
      count = 0;
    }
    if ($("#container").hasClass("red")) {
      $("#container").removeClass("red");
      $("#container").addClass("yellow");
    } else if ($("#container").hasClass("yellow")) {
      $("#container").removeClass("yellow");
      $("#container").addClass("green");
    } else if ($("#container").hasClass("green")) {
      $("#container").removeClass("green");
      $("#container").addClass("lightblue");
    } else if ($("#container").hasClass("lightblue")) {
      $("#container").removeClass("lightblue");
      $("#container").addClass("blue");
    } else if ($("#container").hasClass("blue")) {
      $("#container").removeClass("blue");
      $("#container").addClass("purple");
    } else if ($("#container").hasClass("purple")) {
      $("#container").removeClass("purple");
      $("#container").addClass("red");
    } else {
    }
  });

  $("#event_container").on("click", function() {
    $(this).css("animation", "pulse 0.2s");
    let copied = $(this).clone(true);
    $(this).before(copied);
    $(this).remove();
    $("#effect_container").css("animation", "effect 1s");
    let copy = $("#effect_container").clone(true);
    $("#effect_container").before(copy);
    $("#effect_container").on("animationend", function() {
      $(this).remove();
    });
  });
};
