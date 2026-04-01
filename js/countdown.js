/*
  Countdown Timer for Rock Dam Days 5K

  How this works:
  1. We define the target date (July 12, 2026 at 8:00 AM Central Time)
  2. Every second, we calculate the difference between now and the target
  3. We convert that difference from milliseconds into days/hours/minutes/seconds
  4. We update the HTML elements with the new numbers

  Key concept: setInterval()
  This is a built-in JavaScript function that runs a piece of code repeatedly
  at a fixed time interval (in milliseconds). 1000ms = 1 second.
*/

(function () {
    // IIFE = Immediately Invoked Function Expression
    // The (function() { ... })() pattern wraps our code in a function that runs
    // immediately. This prevents our variables from polluting the "global scope"
    // (i.e., being accessible by other scripts, which could cause naming conflicts).

    // Target date: July 11, 2026 at 8:00 AM Central Daylight Time (UTC-5)
    // Month is 0-indexed in JavaScript: January=0, July=6
    var TARGET_DATE = new Date("2026-07-11T08:00:00-05:00");

    // Grab references to the HTML elements we'll update.
    // document.getElementById() finds an element by its id="..." attribute.
    var daysEl = document.getElementById("countdown-days");
    var hoursEl = document.getElementById("countdown-hours");
    var minutesEl = document.getElementById("countdown-minutes");
    var secondsEl = document.getElementById("countdown-seconds");

    function updateCountdown() {
        // Date.now() returns the current time in milliseconds since Jan 1, 1970
        // (called a "Unix timestamp" or "epoch time" — a universal way to represent time)
        var now = new Date();
        var diff = TARGET_DATE - now;

        // If the event has passed, show zeros
        if (diff <= 0) {
            daysEl.textContent = "0";
            hoursEl.textContent = "0";
            minutesEl.textContent = "0";
            secondsEl.textContent = "0";
            return;
        }

        // Convert milliseconds to days, hours, minutes, seconds
        // Math.floor() rounds down — we want whole numbers, not decimals
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // The % operator is "modulo" — it gives the remainder after division.
        // Example: 90 minutes % 60 = 30 (90 / 60 = 1 remainder 30)
        // We use it to get "leftover" hours after counting full days, etc.

        // Update the HTML. textContent sets the visible text of an element.
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    }

    // Run once immediately so numbers show up right away (not after 1 second delay)
    updateCountdown();

    // Then run every 1000ms (1 second)
    setInterval(updateCountdown, 1000);
})();
