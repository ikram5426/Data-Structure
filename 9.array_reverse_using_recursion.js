function reverseArray(arr, start = 0, end = arr.length - 1) {
  // Base case: when the start index is greater than or equal to the end index
  if (start >= end) {
    return arr;
  }

  // Recursive case: swap the elements at the start and end indices, then call reverseArray recursively on the subarray
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  // reverseArray(arr, start + 1, end - 1); or
reverseArray=()=>{
  end--;
  start++
}
  return arr;
}

// Example usage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(arr));

