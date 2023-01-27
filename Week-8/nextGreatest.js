function nextGreatest(arr) {
  stack = [];
  res = [];
  for (i = arr.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) res[i] = -1;
    else res[i] = stack[stack.length - 1];

    stack.push(arr[i]);
  }
  console.log(res);
}

nextGreatest([1, 3, 2, 4]);
