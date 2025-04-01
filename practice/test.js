/*class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
    }
    push(x){
        let newNode = new node(x);
        newNode.next=this.head;
        this.head=newNode;
    }
    pop(){
        if(this.isEmpty()){
            throw Error("underflow");
        }
        let popData = this.head.data;
        this.head=this.head.next;
        return popData;
    }
    top(){
        return this.head.data;
    }
    isEmpty(){
        return this.head==null;
    }
    printStack() {
        let current = this.head;
        const keys = [];
       
        while (current !== null) {
            keys.push(current.data);
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
    const temp = new Stack();
    let found = false;
    while(!S.isEmpty()){
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
//stack.printStack();
//console.log(stack.isEmpty());
stack.push(7);
stack.push(5);
stack.push(8);
stack.push(2);
stack.push(4);
stack.push(9);
//console.log(stack.top());
stack.printStack();
console.log(linearSearch(stack,10));
stack.pop();
stack.printStack();
console.log(stack.top());
console.log(stack.isEmpty());*/