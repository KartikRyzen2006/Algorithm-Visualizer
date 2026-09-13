class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class linkedList {
    constructor(value) {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        //empty list
        if(this.head === null) {
            this.head = newNode;
            return;
        }
        //already a node in list
        let current = this.head;

        while(current.next !== null) {
            current = current.next;
            
        }
        current.next = newNode;

    }
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }
    delete(value) {
    // If the list is empty
    if (this.head === null) {
        return;
    }

    // If the head needs to be deleted
    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }

    // Search for the node
    let current = this.head;

    while (current.next !== null) {
        if (current.next.value === value) {
            current.next = current.next.next;
            return;
        }

        current = current.next;
     }
    }

    search(value) {
    let current = this.head;

    while (current !== null) {
        if (current.value === value) {
            return true;
        }

        current = current.next;
        }

    return false;
    }

    traverse() {
    let current = this.head;

    while (current !== null) {
        console.log(current.value);
        current = current.next;
        }
    }

    print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
        result += current.value + " → ";
        current = current.next;
        }

    result += "null";

    console.log(result);
    }
}

const list = new linkedList();

list.append(20);
list.append(30);
list.prepend(10);

console.log(list.print());


export default linkedList;