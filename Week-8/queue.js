class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  push(val) {
    this.s1.push(val);
  }
  pop() {
    if (this.s1.length === 0) {
      return -1;
    }
    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }
    this.s2.pop();
    while (this.s2.length !== 0) {
      this.s1.push(this.s2.pop());
    }
  }
  print() {
    console.log(this.s1);
  }
}

function stackQueue(arr) {
  let Q = new Queue();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      Q.push(arr[i + 1]);
      i++;
    } else {
      Q.pop();
      i++;
    }
  }
  Q.print();
}

stackQueue([1, 2, 2, 2, 1, 4]);
