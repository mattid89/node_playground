const getRandomInt = (number) => Math.floor(Math.random() * number)

export class BinaryTree {
    constructor(value) {
        this.key = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    addLeftChild(value) {
        if (this.leftChild === null) {
            this.leftChild = new BinaryTree(value);
        } else {
            this.leftChild.addLeftChild(value);
        }
    }

    addRightChild(value) {
        if (this.rightChild === null) {
            this.rightChild = new BinaryTree(value);
        } else {
            this.rightChild.addRightChild(value);
        }
    }

    invertDfs() {
        if (this.leftChild) {
            this.leftChild.invertDfs();
        }
        if (this.rightChild) {
            this.rightChild.invertDfs();
        }
        [this.leftChild, this.rightChild] = [this.rightChild, this.leftChild];
    }

    invertBfs() {
        let currentLevel = [this];
        let nextLevel = [];
        while (currentLevel.length) {
            for (const node of currentLevel) {
                if (node.leftChild) {
                    nextLevel.push(node.leftChild);
                }
                if (node.rightChild) {
                    nextLevel.push(node.rightChild);
                }
                [node.leftChild, node.rightChild] = [node.rightChild, node.leftChild];
            }
            currentLevel = nextLevel;
            nextLevel = [];
        }
    }

    addChildren(level, maxLevel) {
        if (level > maxLevel) return;
        this.rightChild = new BinaryTree(getRandomInt(100)).addChildren(level + 1, maxLevel);
        this.leftChild = new BinaryTree(getRandomInt(100)).addChildren(level + 1, maxLevel);
        return this;
    }
}