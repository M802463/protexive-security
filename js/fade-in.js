// Flag to check if it's the first time the animation runs
var firstLoad = true;

// Function to handle automatic animations on page load
function runFirstLoadAnimation() {
  $(
    ".fadein, .fadeinLeft, .fadeinRight, .fadeinTop, .zoomin, .zoomin1,.zoomin2, .zoomin3,.zoomin4,.zoomout"
  ).addClass("visible");
  firstLoad = false; // Set the flag to false after running the first animation
}

// Generic function to handle the visibility and animations on scroll
function handleFadeInEffect(selector) {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(selector);

  tags.each(function () {
    var tag = $(this);

    // Check if the tag is in the viewport
    if (
      tag.offset().top < pageBottom &&
      tag.offset().top + tag.outerHeight() > pageTop
    ) {
      tag.addClass("visible");
    } else {
      tag.removeClass("visible");
    }
  });
}

// Run the animation on the first load
$(document).ready(function () {
  if (firstLoad) {
    runFirstLoadAnimation(); // Automatically trigger animations on page load
  }

  // Delay scroll event listening until after the first load animation
  setTimeout(function () {
    // Listen for scroll and resize events for subsequent animations
    $(document).on("scroll resize", function () {
      if (!firstLoad) {
        handleFadeInEffect(".fadein"); // Fade in from bottom
        handleFadeInEffect(".fadeinLeft"); // Fade in from left
        handleFadeInEffect(".fadeinRight"); // Fade in from right
        handleFadeInEffect(".fadeinTop"); // Fade in from top
        handleFadeInEffect(".zoomin"); // Zoom in effect
        handleFadeInEffect(".zoomin1"); // Zoom in effect
        handleFadeInEffect(".zoomin2"); // Zoom in effect
        handleFadeInEffect(".zoomin3"); // Zoom in effect
        handleFadeInEffect(".zoomin4"); // Zoom in effect
        handleFadeInEffect(".zoomout"); // Zoom out effect
      }
    });
  }, 1500); // Adjust timeout if needed to ensure smooth animations on page load
});

$(document).ready(function () {
  // Trigger the first zoom-in effect immediately
  $(".zoomin").addClass("visible");

  // Trigger the second zoom-in effect after the first one (delay of 0.5 seconds)
  setTimeout(function () {
    $(".zoomin1").addClass("visible");
  }, 500); // Delay before triggering zoomin1 (500ms matches zoomin's duration)
});
