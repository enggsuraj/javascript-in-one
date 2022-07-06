/*

async - doesnot helpful if there are multiple script dependent on each other.
      - script that are modular and independent of each other can use async, eg: google analytics script.

      Async scripts are great when we integrate an independent third-party script into the page: counters, ads and so on, as they don’t depend on our scripts, and our scripts shouldn’t wait for them:

<!-- Google Analytics is usually added like this -->
<script async src="https://google-analytics.com/analytics.js"></script>

defer - 

The defer attribute tells the browser not to wait for the script. 
Instead, the browser will continue to process the HTML, build DOM. 
The script loads “in the background”, and then runs when the DOM is fully built.

In other words:

Scripts with defer never block the page.
Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

*/
