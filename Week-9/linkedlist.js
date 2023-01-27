class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //will add element at the end of Linked list
  add(element) {
    let node = new Node(element); //create a new Node
    if (this.head === null) {
      //check if head is null if null make this new node as head
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next) {
        curr = curr.next; //traverse to last node
      }
      curr.next = node; //link the last node to new node
    }
  }
  //will insert the element at the given index
  insertAt(idx, val) {
    let node = new Node(val);
    if (idx === 0) {
      //check if index is o than add new node as head node
      node.next = this.head;
      this.head = node;
    } else {
      let count = 0;
      let curr = this.head;
      while (count !== idx - 1) {
        //traverse till index node
        curr = curr.next;
        count++;
      }
      node.next = curr.next; // link newnode->next with indexnode->next
      curr.next = node; // link indexnode to new node
    }
  }
  removeElement(val) {
    let curr = this.head;
    let prev = null;
    while (curr.element !== val) {
      //trverse till you find the value
      prev = curr; //make curr to prev
      curr = curr.next;
    }
    if (prev == null) {
      this.head = curr.next; //if prev is null make head ref to next
    } else {
      prev.next = curr.next; //make a link from to curr.nxt node
    }
    curr.next = null; // make curr node next to null
  }
  reverseList() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      //iterate till last node
      let nxt = curr.next; //assign curr.nxt to new nxt(will store the nxt element)
      curr.next = prev; //make the link of curr.nxt to its prev
      prev = curr; //make prev the curr elemenet
      curr = nxt; //than move the curr to nxt elemnt
    }
    this.head = prev; //at lastr prev will be the last element which should be our new head
  }

  rotateList(k) {
    let curr = this.head;
    let c = 1;
    while (c < k && curr != null) {
      //iterste till kth node
      curr = curr.next;
      c++;
    }
    let kth_node = curr; //assign curr as kth node
    if (curr === null) {
      //return if k == no.of nodes
      return;
    }
    while (curr.next) {
      //iterate till end node
      curr = curr.next;
    }
    curr.next = this.head; //link last node with head
    this.head = kth_node.next; //male head the next node of kth node
    kth_node.next = null; // make the link of kth node to null
  }

  isCycle() {
    let set = new Set();
    let curr = this.head;
    while (curr) {
      if (set.has(curr)) {
        return true;
      } else {
        set.add(curr);
      }
      curr = curr.next;
    }
    return false;
  }

  printlist() {
    let curr = this.head;
    let str = " ";
    while (curr) {
      str = str + curr.element + " -->";
      curr = curr.next;
    }
    console.log(str + "null");
  }
}

l1 = new LinkedList();
l1.add(2);
l1.add(3);
l1.printlist();
l1.insertAt(0, 0);
l1.printlist();
l1.insertAt(1, 1);
l1.printlist();
l1.insertAt(4, 4);
l1.printlist();
l1.removeElement(0);
l1.printlist();
l1.reverseList();
l1.printlist();
l1.rotateList(2);
l1.printlist();
console.log(l1.isCycle());
