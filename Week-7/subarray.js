//function to return maximum sum of contagious elemnets of array
//TC:O(N)
//SC:O(1)
function SumContiguousSubarray(arr) {
  result = [];
  let local_max = Number.MIN_VALUE;
  let global_max = Number.MIN_VALUE;
  for (i = 0; i < arr.length; i++) {
    local_max = Math.max(arr[i], local_max + arr[i]);
    global_max = Math.max(local_max, global_max);
    /*
    this will print result subarray too
    if (arr[i] < local_max + arr[i]) {
      local_max = local_max + arr[i];
    } else {
      local_max = arr[i];
    }
    if (local_max > global_max) {
      result.push(arr[i]);
      global_max = local_max;
    }
  }
  console.log(result);*/
  }
  return global_max;
}
a1 = [1, 2, 3, 4, -10];
console.log(SumContiguousSubarray(a1));
A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(SumContiguousSubarray(A));
