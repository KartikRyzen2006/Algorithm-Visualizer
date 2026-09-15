import BST from "./bst.js";

const createTreeOperations = (traversal,treeTarget) => {
    const bst = new BST();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(12);
    bst.insert(20);

    const operations = [];

    
    if(traversal === "levelorder") {
            const queue = [bst.root];

            while(queue.length > 0) {
            const current = queue.shift();

            operations.push({
                type:"visit",
                node: current.value
            });

            if(current.left !== null) {
                queue.push(current.left)
            }
            if(current.right !== null) {
                queue.push(current.right);
            }
        }
    }else if(traversal === "preorder") { 
        const traverse = (node) => {
            if(node === null) {
                return;
            }

            

            operations.push({
                type: "visit",
                node:node.value
            });
            traverse(node.left);
            traverse(node.right);
        }
        traverse(bst.root);
    }else if(traversal === "inorder"){
         const traverse = (node) => {
            if(node === null) {
                return;
            }

            

           
            traverse(node.left);
             operations.push({
                type: "visit",
                node:node.value
            });
            traverse(node.right);
        }
        traverse(bst.root);
    }else if(traversal === "postorder"){
        const traverse = (node) => {
            if(node === null) {
                return;
            }

            

           
            traverse(node.left);
            traverse(node.right);
            operations.push({
                type: "visit",
                node:node.value
            });
        }
        traverse(bst.root);
    }else if(traversal === "search") {
        let current = bst.root;
        

        while (current !== null) {

            operations.push({
                type: "visit",
                node: current.value
            });

            if (current.value === treeTarget) {

                operations.push({
                    type: "found",
                    node: current.value
                });

                break;
            }

            if (treeTarget < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    return operations;
};

console.log(createTreeOperations("inorder"));
console.log(createTreeOperations("postorder"));


export default createTreeOperations;