const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const treeInfo = input.slice(1).map((li) => li.split(' '));
const tree = {};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  setLeft(node) {
    this.left = node;
  }
  setRight(node) {
    this.right = node;
  }
}

const charToNum = (ch) => {
  return ch === '.' ? null : ch.charCodeAt(0) - 65;
};

const numToChar = (num) => {
  return String.fromCharCode(num + 65);
};

const preOrder = (node, res) => {
  if (node === null) return;
  res.push(numToChar(node.val));
  preOrder(node.left, res);
  preOrder(node.right, res);
};

const inOrder = (node, result) => {
  if (node === null) return;
  inOrder(node.left, result);
  result.push(numToChar(node.val));
  inOrder(node.right, result);
};

const postOrder = (node, result) => {
  if (node === null) return;
  postOrder(node.left, result);
  postOrder(node.right, result);
  result.push(numToChar(node.val));
};

// 처음에 루트 노드 생성
const rootVal = charToNum(treeInfo[0][0]);
const root = new Node(rootVal);
tree[treeInfo[0][0]] = root;

for (let i = 0; i < treeInfo.length; i++) {
  const [node, left, right] = treeInfo[i];
  const parent = tree[node];

  // 부모 노드가 없으면 새로운 노드 생성
  if (!parent) {
    const p = charToNum(node);
    tree[node] = new Node(p);
  }

  const up = tree[node];

  // 왼쪽 자식 처리
  if (left !== '.') {
    const leftNode = new Node(charToNum(left));
    up.setLeft(leftNode);
    tree[left] = leftNode;
  }

  // 오른쪽 자식 처리
  if (right !== '.') {
    const rightNode = new Node(charToNum(right));
    up.setRight(rightNode);
    tree[right] = rightNode;
  }
}

const preOrderResult = [];
const inOrderResult = [];
const postOrderResult = [];

preOrder(root, preOrderResult);
inOrder(root, inOrderResult);
postOrder(root, postOrderResult);

console.log(preOrderResult.join(''));
console.log(inOrderResult.join(''));
console.log(postOrderResult.join(''));