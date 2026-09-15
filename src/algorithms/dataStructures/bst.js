import { TreeNode } from "./tree.js";



class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const insertNode = (root) => {
            if(root === null) {
                return new TreeNode(value);
            }

            if(value < root.value) {
                root.left = insertNode(root.left);
            }else{
                root.right = insertNode(root.right);
            }
            return root;
            
        }
        this.root = insertNode(this.root);
    }
    search(value) {
    let current = this.root;

    while (current !== null) {
        if (current.value === value) {
            return true;
        }

        if (value < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return false;
}
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);
bst.search(12);

console.log(bst.search(12));

export default BST;