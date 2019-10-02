/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals == null || intervals.length < 2) {
    return intervals;
  }

  // sort by start times
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    // if an interval's start comes before
    // the previous interval's end,
    // then we should merge those intervals.
    let lastEnd = mergedIntervals[mergedIntervals.length - 1][1];
    if (intervals[i][0] <= lastEnd) {
      // handles cases like [[1, 4], [2, 3]] and  [[1, 3], [2, 4]]
      // (both of which would become [[1,4]])
      let biggerEnd = Math.max(lastEnd, intervals[i][1]);

      // extend previous interval in our mergedIntervals to the new end
      mergedIntervals[mergedIntervals.length - 1][1] = biggerEnd;
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }

  return mergedIntervals;
};
