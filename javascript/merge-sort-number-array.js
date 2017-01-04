/**
 * This is code block for merging and sorting the number array
 * input: [-2, 3, 4, -1, 0, 3, 4, 0, 9, -8]
 * output: [-8, -2, -1, 0, 0, 3, 3, 4, 4, 9]
 */

const solution = (array) => {
  function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
      if (left[0] < right[0])
        sortedArr.push(left.shift())
      else
        sortedArr.push(right.shift())
    }

    return [...sortedArr, ...left, ...right];
  }

  function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);

    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
  }

  return mergeSort(array);
}

const array = [3, 5, 8, 5, 99, 1];
console.log(solution(array));
// output: [1, 3, 5, 5, 8, 99]