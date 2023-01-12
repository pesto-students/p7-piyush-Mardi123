//function to find the closest sum of the triplet
function closestTriplet(arr, x) {
  arr.sort();
  let closest_sum = Infinity;
  for (i = 0; i < arr.length - 2; i++) {
    l = i + 1;
    h = arr.length - 1;
    while (l < h) {
      sum = arr[i] + arr[l] + arr[h];
      if (Math.abs(x - closest_sum) > Math.abs(x - sum)) {
        closest_sum = sum;
      } else if (sum > x) {
        h--;
      } else {
        l++;
      }
    }
  }
  return closest_sum;
}
console.log(closestTriplet([-1, 2, 1, -4], 1));
//TC:O(N^2)
//SC:O(1)