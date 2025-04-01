class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.head = null;
    }

    push(key){
        let newNode = new Node(key);
        newNode.next = this.head;
        this.head = newNode;
    }

    top(){
        return this.head.key;
    }

    pop(){    
        if (this.head === null) {
            console.log("Cannot delete from empty stack");
            return;
        }

        const deletedKey = this.head.key;
        this.head = this.head.next;
        return deletedKey;
        //console.log("Deleted node with key:", deletedKey);
    }
    isEmpty(){
        return this.head == null;
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
}

function linearSearch(S,x){
    let current = this.head;
    let found = false;
    let temp = new Stack();
    S.printStack();
    while (!S.isEmpty()) {
        if(S.top()==x){
            found = true;
            break;
        }
        else{
            temp.push(S.pop());
        }
    }
    while(!temp.isEmpty()){
        S.push(temp.pop());
    }
    return found;
}

const stack = new Stack();
//console.log(stack.isEmpty());
stack.push(7);
stack.push(5);
stack.push(8);
stack.push(2);
stack.push(4);
stack.push(9);
console.log(stack.top());
console.log(linearSearch(stack,7));
//stack.printStack();
//console.log(stack.isEmpty());
stack.printStack();