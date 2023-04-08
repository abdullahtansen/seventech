counter(document.querySelector('#counter'), { start: 0, end: 100, duration: 1234 });

counter(document.querySelector('#counter2'), { start: 100, end: 0, duration: 3210 });

counter(document.querySelector('#counter3'), { start: 0, end: 42, duration: 7654 });


/**
 * Counts up/down a number
 * @elm {DOM node} where we render the number
 * @opts {Object} defaults are start=0, end=0 and duration=1000
 */
function counter(elm, opts) {
  const start = opts.start || 0;
  const end = opts.end || 0;
  const duration = opts.duration || 1000;
  const timeoutDuration = duration / Math.abs(end - start);
  const isIncreasing = end > start;

  count(start);

  function count(num) {
    if ((isIncreasing && num > end) || (!isIncreasing && num < end)) {
      return false;
    }

    elm.innerHTML = num;
    setTimeout(() => isIncreasing ? count(++num) : count(--num), timeoutDuration);
  }
}