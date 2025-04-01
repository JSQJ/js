class Queue {
    constructor (length) {
        this.length = length;
        this.head = 1;
        this.tail = 1;
        this.Q = new Array(length+1);
    }
    isEmpty(){
        return this.items.length == 0;
     }
}


function enqueue(Q, x) {
    Q[Q.tail] = x;
    if (Q.tail == Q.length){
        Q.tail = 1;
    }
    else{
        Q.tail = Q.tail + 1;
    } 
}

function dequeue(Q) {
    let x = Q[Q.head];
    if (Q.head == Q.length){
        Q.head = 1;
    }
    else{
        Q.head = Q.head + 1;     
    }
    return x;
}

const q = new Queue(4);

enqueue(q,1);
enqueue(q,50);
enqueue(q,12);
enqueue(q,31);
console.log(q);

dequeue(q);
console.log(q);

