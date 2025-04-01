class Stack {
    constructor()
    {
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    pop(){
        if (this.items.length == 0)
            return 'Underflow'
        return this.items.pop();
    }
    top(){
        return this.items[this.items.length - 1];
    }
    
    isEmpty()
    {
        return this.items.length == 0;
    }
    printStack()
    {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

/*function LinearSearch(s, item){
    let stack2 = new Stack();
    let found = false;
    while (s.isEmpty == false){
        if(s.top == item){
            found = true;
            break;
        }
        else{
            stack2.push(s.top);
            s.pop();
        }
    }

    while (stack2.isEmpty == false){
        s.push(stack2.top());
        stack2.pop();
    }
}*/

function test(s){
    let found = false;

    while(s.isEmpty==false){
        found = true;
        break
    }
    return found;
}

let stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(test(stack1));
console.log(stack1.isEmpty());
console.log(stack1.top()==1);
//console.log(LinearSearch(stack1,0));
