function quickSort(arr: number[], leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex < rightIndex) {
    // in between the partitions (but part of the left partition)
    const pointOfPartition = partition(arr, leftIndex, rightIndex);

    if (leftIndex < pointOfPartition - 1) {
      quickSort(arr, leftIndex, pointOfPartition - 1);
    }
    if (pointOfPartition < rightIndex) {
      quickSort(arr, pointOfPartition, rightIndex);
    }
  }
}

function partition(arr: number[], leftIndex, rightIndex): number {
  const pivotValue = arr[Math.floor((leftIndex + rightIndex) / 2)];

  while (leftIndex < rightIndex) {
    while (arr[leftIndex] < pivotValue) {
      leftIndex++;
    }
    while (arr[rightIndex] > pivotValue) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex) {
      const temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }

  return leftIndex;
}

export default quickSort;
