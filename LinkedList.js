class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(value, null);
    }
  }

  prepend(value) {
    this.head = new _Node(value, this.head);
  }

  find(value) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== value) {
      if (currNode.next == null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== value) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Value not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(insertBeforeValue, newValue) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.next.value !== insertBeforeValue) {
      if (currNode.next == null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode.next = newNode;
    return newNode;
  }

  insertAfter(insertAfterValue, newValue) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== insertAfterValue) {
      if (currNode.next == null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode.next = newNode;
    return newNode;
  }

  insertAt(insertAtValue, newValue) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== insertAtValue) {
      if (currNode.next == null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode = newNode;
    return newNode;
  }
}

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

function main() {
  const SLL = new LinkedList();
  SLL.prepend("Apollo");
  SLL.append("Boomer");
  SLL.append("Helo");
  SLL.append("Husker");
  SLL.append("Starbuck");
  SLL.append("Tauhida");
  SLL.delete("Husker");
  SLL.insertBefore("Starbuck", "Test");
  SLL.insertAfter("Apollo", "Mountain Dew"); //this isn't taking Apollo out of the list
  SLL.insertAt("Apollo", "Garfield");
  //reverse(SLL);
  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, "Helo");
  findLast(SLL);
  thirdFromEnd(SLL);
}

function display(ll) {
  let currNode = ll.head;
  if (!ll.head) {
    return null;
  }
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  return;
}

function size(ll) {
  let currNode = ll.head;
  let count = 0;
  if (!ll.head) {
    console.log(`size is ${count}`);
  }
  while (currNode !== null) {
    currNode = currNode.next;
    count++;
  }
  console.log(`size is ${count}`);
  return count;
}

function isEmpty(ll) {
  if (!ll.head) {
    console.log("list is empty");
  }
  console.log("list is not empty");
}

function findPrevious(ll, value) {
  let currNode = ll.head;
  if (!ll.head) {
    return null;
  }
  while (currNode.next.value !== value) {
    currNode = currNode.next;
  }
  console.log(`${currNode.value} is before ${value}`);
}

function findLast(ll) {
  let currNode = ll.head;
  if (!ll.head) {
    return null;
  }
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(`${currNode.value} is the last node`);
}

main();
