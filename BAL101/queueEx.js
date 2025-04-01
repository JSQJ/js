class Queue {
    constructor (length) {
        this.length = length;
        this.head = 1;
        this.tail = 1;
        this.Q = new Array(length+1);
    }

    display_array() {
        console.log('Array elements');
        for (let i = 1; i <= this.length; i++) {
            console.log(`Q[${i}] = ${this.Q[i]}`);
        }  
        console.log(`head=${this.head}, tail=${this.tail}`);
        console.log('\n');  // insert new line
    };
}


function enqueue(Q, x) {

    let queue = Q.Q;    // get a reference to the array in the Queue object
    queue[Q.tail] = x;
    if (Q.tail == Q.length) {
        Q.tail = 1;
    } else {
        Q.tail = Q.tail + 1;
    }

}

function dequeue(Q) {

    // check for underflow condition
    if (Q.head == Q.tail) {
        throw Error('queue underflow');
    }

    // remove element from the head and return its value
    let queue = Q.Q;
    let x = queue[Q.head];
    if (Q.head == Q.length) {
        Q.head = 1;
    } else {
        Q.head = Q.head + 1;
    }

    return x;
}

function head(Q) {
    const queue = Q.Q;
    return queue[Q.head];
}

// Question 2s
let v = 4;
let w = v + 5;
const queue = new Queue(5);
enqueue(queue, w);
enqueue(queue, v);
enqueue(queue, w+v)
queue.display_array();
dequeue(queue);
5
console.log(head(queue));