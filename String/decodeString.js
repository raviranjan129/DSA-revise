/**
 * 3[a]2[bc]=> aaabcbc
 */
class Stack {
  #arr;
  constructor() {
    this.#arr = [];
  }
  push(element) {
    this.#arr.push(element);
  }
  pop() {
    return this.#arr.pop();
  }
  top() {
    return this.#arr[this.#arr.length - 1];
  }
  isEmpty() {
    return this.#arr.length == 0;
  }
}

function decodeString(s) {
  const numStack = new Stack();
  const stringStack = new Stack();

  let currentString = "";
  let num = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else if (char == "[") {
      numStack.push(num);
      stringStack.push(currentString);

      currentString = "";
      num = 0;
    } else if (char == "]") {
      let reapeatTime = numStack.pop();
      let prevString = stringStack.pop();

      currentString = prevString + currentString.repeat(reapeatTime);
    } else {
      currentString += char;
    }
  }
  return currentString;
}

// const s = "3[a]2[bc]";
const s = "3[a2[c]]";

console.log(decodeString(s));
