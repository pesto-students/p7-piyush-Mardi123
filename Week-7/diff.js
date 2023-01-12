//function to check the pair of the difference
function pairdiff(arr, diff) {
  map = new Map();
  for (i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }

    if (diff === 0 && map.get(arr[i]) > 1) {
      return 1;
    }
  }
  if (diff === 0) {
    return -1;
  }

  for (j = 0; j < arr.length; j++) {
    if (map.has(arr[j] + diff)) {
      return 1;
    }
  }
  return -1;
}
console.log(pairdiff([5, 10, 3, 2, 50, 80], 78));
console.log(pairdiff([-10, 20], 20));
//TC:O(N)
//SC:O(N)

//function to diff pairs wirh constant space cpmplexity
function pairdiff_1(arr, diff) {
  arr.sort();
  low = 0;
  high = arr.length - 1;
  while (low <= high) {
    if (arr[high] - arr[low] === diff) {
      return 1;
    } else if (arr[high] - arr[low] > diff) {
      high--;
    } else {
      low++;
    }
  }
  return -1;
}
console.log(pairdiff_1([5, 10, 3, 2, 50, 80], 78));
console.log(pairdiff_1([-10, 20], 20));
//TC:O(NlogN)
//SC:O(1)
