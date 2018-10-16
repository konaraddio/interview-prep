// uses max heap

function heapSort(arr: number[]): number[] {
  // bottom-up approach & we don't need to start with the leaves (hence the /2)
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    // move root to end, it's in the right place now
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr: number[], sizeOfHeap = arr.length, root = 0) {
  let largest = root;
  let left = 2 * root + 1;
  let right = 2 * root + 2;

  if (left < sizeOfHeap && arr[root] < arr[left]) {
    largest = left;
  }

  if (right < sizeOfHeap && arr[root] < arr[right]) {
    largest = right;
  }

  if (largest != root) {
    [arr[largest], arr[root]] = [arr[root], arr[largest]];
    heapify(arr, sizeOfHeap, largest); //heapify affected subtree
  }
}

export { heapSort };
