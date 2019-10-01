// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  // alternatively, we could mutate the grid
  const visited = {};

  const markIsland = (i, j) => {
    if (!grid[i] || !grid[i][j] || grid[i][j] === "0" || visited[[i, j]]) {
      return;
    }

    visited[[i, j]] = true;

    markIsland(i + 1, j);
    markIsland(i, j + 1);
    markIsland(i - 1, j);
    markIsland(i, j - 1);
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !visited[[i, j]]) {
        count++;
        markIsland(i, j);
      }
    }
  }

  return count;
};
