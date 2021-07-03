class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(number) {
    let newNode = new Node(number);
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next_node = newNode;
      this.tail = newNode
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;

    let counter = 0, current = this.head;

    while (counter !== index) {
      current = current.next_node;
      counter++;
    }
    return current.value;
  }

  //   push(number){
  //     var newNode = new Node(number);
  //     if(!this.head){
  //         this.head = newNode;
  //         this.tail = this.head;
  //     } else {
  //         this.tail.next = newNode;
  //         this.tail = newNode;
  //     }
  //     this.length++;
  //     return this;
  // }
  unshift(number) {
    let newNode = new Node(number);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  addAt(index, number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.add(number);
    if (index === 0) return !!this.unshift(number);

    let newNode = new Node(number);
    let prev = this.get(index - 1);
    let temp = prev.next_node;
    prev.next_node = newNode;
    newNode.next_node = temp;
    this.length++;
    return true;
  }
}

let list = new LinkedList();
list.add(3);
list.add(5);
list.addAt(1, 11);
list.addAt(0, 13);
// list.remove(1);

console.log(list);
console.log(list.get(1) === 5);

console.log(list.get(2))
// => 11
console.log(list.get(1));
// => 5
