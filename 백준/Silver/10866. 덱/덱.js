const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// Linked List 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_front(x) {
    const newNode = new Node(x);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  push_back(x) {
    const newNode = new Node(x);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  pop_front() {
    if (this.size === 0) {
      return -1;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.size--;
    return value;
  }

  pop_back() {
    if (this.size === 0) {
      return -1;
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.size--;
    return value;
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    return this.size === 0 ? -1 : this.head.value;
  }

  back() {
    return this.size === 0 ? -1 : this.tail.value;
  }
}

// 백준 10866번: 덱
const n = +input[0];
const deque = new Deque();
const results = []; 

for (let i = 1; i <= n; i++) {
  const [cmd, x] = input[i].split(' ');
  switch (cmd) {
    case 'push_front':
      deque.push_front(+x);
      break;
    case 'push_back':
      deque.push_back(+x);
      break;
    case 'pop_front':
      results.push(deque.pop_front());
      break;
    case 'pop_back':
      results.push(deque.pop_back());
      break;
    case 'size':
      results.push(deque.getSize());
      break;
    case 'empty':
      results.push(deque.empty());
      break;
    case 'front':
      results.push(deque.front());
      break;
    case 'back':
      results.push(deque.back());
      break;
  }
}

console.log(results.join('\n'));