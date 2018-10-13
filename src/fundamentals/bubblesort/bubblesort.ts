function bubbleSort(arr: number[]) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap with no temp
        arr[i + 1] += arr[i];
        arr[i] = arr[i + 1] - arr[i];
        arr[i + 1] -= arr[i];
        sorted = false;
      }
    }
  }

  return arr;
}

export { bubbleSort };
