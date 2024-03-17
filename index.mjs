import {BinaryTree} from "./binary-tree.mjs";


const binaryTree = new BinaryTree(1)

binaryTree.addChildren(1, 30)


const now = performance.now()

console.log('now', now)

// binaryTree.invertDfs()
binaryTree.invertBfs()

const then = performance.now()

console.log('then', then)
console.log('delay', then - now)