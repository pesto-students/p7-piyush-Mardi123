//A function to print the order of matrix in a spiral manner
function spiralOrder(arr) {
  //row lenght
  let m = arr.length;
  //columnlenght
  let n = arr[0].length;
  //define pointers to iterate over array
  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = m - 1;
  while (top <= bottom && left <= right) {
    //move left to right
    for (i = left; i <= right; i++) {
      console.log(arr[top][i]);
    }
    //move from top to bottom
    for (j = top + 1; j <= bottom; j++) {
      console.log(arr[j][right]);
    }

    //move  right to left
    for (k = right - 1; k > left; k--) {
      console.log(arr[bottom][k]);
    }
    //move bottom to top
    for (l = bottom; l > top; l--) {
      console.log(arr[l][left]);
    }

    //to move to next iteration
    top++;
    bottom--;
    right--;
    left++;
  }
}

a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
spiralOrder(a);
