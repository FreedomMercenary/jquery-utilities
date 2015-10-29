jquery-utilities
============
Helper Plugins for jQuery

## jquery.viewport.js
This library provides support for checking if an element has a particular location relative to the viewport.  Combined with jQuery's built in scrolling it can easily be combined to make for a native app style return to location on action.  In Viewport takes into account whether or not the element is visible.  It offers this in jQuery 2.x+

##### jQuery Function Extensions

In Viewport

    if($(".elclass").inviewport()) {
      console.log("in viewport and visible");
    }
    
Above the fold (off screen above screen/viewport)

    if($(".elclass").abovethefold()) {
      console.log("above the fold");
    }
    
Below the fold (off screen below screen/viewport)

    if($(".elclass").belowthefold()) {
      console.log("below the fold");
    }

Left of screen/viewport

    if($(".elclass").leftofscreen()) {
      console.log("left of screen");
    }
    
Right of screen/viewport

    if($(".elclass").rightofscreen()) {
      console.log("right of screen");
    }
    
##### jQuery Selector Extensions

In Viewport

    if($(".elclass:in-viewport")) {
      console.log("in viewport and visible");
    }
    
Above the fold (off screen above screen/viewport)

    if($(".elclass:above-the-fold")) {
      console.log("above the fold");
    }
    
Below the fold (off screen below screen/viewport)

    if($(".elclass:below-the-fold")) {
      console.log("below the fold");
    }

Left of screen/viewport

    if($(".elclass:left-of-screen")) {
      console.log("left of screen");
    }
    
Right of screen/viewport

    if($(".elclass:right-of-screen")) {
      console.log("right of screen");
    }
	
