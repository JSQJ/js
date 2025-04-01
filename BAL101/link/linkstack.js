class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(key) {
        const newNode = new Node(key);
        newNode.next = this.head;
        this.head = newNode;
    }

    printStack() {
        let current = this.head;
        const keys = [];
       
        while (current !== null) {
            keys.push(current.key);
            current = current.next;
        }
       
        if (keys.length === 0) {
            console.log("Stack is empty");
        } else {
            console.log("Stack:", keys.join(" -> "));
        }
    }

    pop() {
        if (this.head === null) {
            console.log("Cannot delete from empty stack");
            return;
        }
       
        const deletedKey = this.head.key;
        this.head = this.head.next;
        //console.log("pop node with key:", deletedKey);
    }
    isEmpty()
    {
        return this.head == null;
    }

    top(){
        return this.head.key;
    }
}

function linearSearch(s,x){
    const tempStack = new Stack();
    let found = false;
    while (!s.isEmpty()) {
        if (s.top() == x) {
            found = true;
            break;
        } else {
            tempStack.push(s.pop());
        }
    }
    while (!tempStack.isEmpty()) {
        s.push(tempStack.pop());
    }
    return found
}
const stack = new Stack();

stack.printStack();
stack.push(5);
stack.push(7);
stack.push(8);
stack.push(3);
stack.push(2);
console.log(stack.top());
stack.printStack();
stack.pop();
stack.printStack();
console.log(stack.top());
console.log(linearSearch(stack,1));
stack.printStack();


