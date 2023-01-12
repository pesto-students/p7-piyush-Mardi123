//function to sort array of 012
function sortArrays012(arr) {
  low = 0; //start index
  mid = 0;

  high = arr.length - 1; //end index
  while (mid <= high) {
    if (arr[mid] === 0) {
      temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
      mid++;
    }
  }
  return arr;
}
a1 = [0, 2, 1, 2, 0];
a1 = sortArrays012(a1);
console.log(a1);
a2 = [0, 2, 1, 2, 0, 2, 1];
a2 = sortArrays012(a2);
console.log(a2);
//TC:O(N)
//SC:O(1)
