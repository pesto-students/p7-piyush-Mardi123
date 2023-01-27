function bracketchecker(str) {
  let stack = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
      continue;
    }

    if (stack.length == 0) {
      return false;
    }
    x = str[i];
    let check = stack.pop();
    switch (x) {
      case ")":
        if (check === "{" || check === "[") {
          return false;
        }
        break;
      case "}":
        if (check === "(" || check === "[") {
          return false;
        }
        break;
      case "]":
        if (check === "(" || check === "{") {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
}

console.log(bracketchecker("{([])}"));
console.log(bracketchecker("{[])"));
//TC:O(N)
//SC:O(N)