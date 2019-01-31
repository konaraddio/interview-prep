function quicksort(A: number[], p = 0, r = A.length - 1) {
  if (p < r) {
    const q = partition(A, p, r);
    quicksort(A, p, q - 1);
    quicksort(A, q + 1, r);
  }

  function partition(A: number[], p: number, r: number): number {
    const pivot = A[r];
    let i = p - 1;
    for (let j = p; j < r; j++) {
      if (A[j] < pivot) {
        i++;

        // swap
        let tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
      }
    }
    
    // swap
    let tmp = A[i + 1];
    A[i + 1] = A[r];
    A[r] = tmp;

    return i + 1
  }
}

export default quicksort