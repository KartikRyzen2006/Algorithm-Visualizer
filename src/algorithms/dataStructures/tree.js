class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);

        if(this.root === null) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];

        while(queue.length > 0) {
            const current = queue.shift();

            if(current.left === null) {
                current.left  = newNode;
                return;
            }else{
                queue.push(current.left);
            }

            if(current.right === null){
                current.right = newNode;
                return;
            }else{
                queue.push(current.right);
            }
        }
    }
    preOrder() {
        const result = [];

        const traverse = (node) => {
            if(node === null) {
                return;
            }
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
        }
        traverse(this.root);

        return result;
       
        
    }
    inOrder() {
        const result = [];

        const traverse = (node) => {
            if(node === null) {
                return;
            }
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        const result = [];

        const traverse = (node) => {
            if(node === null) {
                return;
            }
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
    levelOrder() {
        const result = [];

        if(this.root === null) {
            return;
        }

        const queue = [this.root];

        while(queue.length > 0) {
            const current = queue.shift();
            result.push(current.value);

            if(current.left !== null) {
                queue.push(current.left);
            }

            if(current.right !== null) {
                queue.push(current.right);
            }
        }
        return result;
    }
}
const tree = new BinaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log(tree);
console.log(tree.levelOrder());
export {BinaryTree,TreeNode};