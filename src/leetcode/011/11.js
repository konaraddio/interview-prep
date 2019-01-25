// two pointer / sliding window approach
function maxArea(height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let maxArea = Math.min(height[p1], height[p2]) * (p2 - p1);

  while (p1 < p2) {
    if (height[p1] < height[p2]) {
      maxArea = Math.max(maxArea, height[p1] * (p2 - p1));
      p1++;
    } else {
      maxArea = Math.max(maxArea, height[p2] * (p2 - p1));
      p2--;
    }
  }

  return maxArea;
}
