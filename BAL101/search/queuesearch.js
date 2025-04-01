/*class Queue {
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

function isEmpty(Q) {

    if(Q.head == Q.tail) {

        return true;
    } else {

        return false;
    }
}

function queueLS(q,x){
    if (isEmpty(q) == true){
        return false;
    }
    let found = false;

}

// Question 2s
let v = 4;
let w = v + 5;
const queue = new Queue(5);
enqueue(queue, w);
queue.display_array();
enqueue(queue, v);
queue.display_array();
enqueue(queue, w+v);
console.log(head(queue));
queue.display_array();
dequeue(queue);
console.log(head(queue));
console.log(isEmpty(queue));
*/

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
    queue[Q.head] = undefined;
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

function linearSearch(Q, x){
    if (Q.head == Q.tail){
        return false
    }
    let found = false
    enqueue(Q,'end')
    while(found == false){
        if (head(Q) == x){
            found = true
        }else{
            if(head(Q) == 'end'){
                break;
            }
            else{
                y = head(Q);
                dequeue(Q);
                enqueue(Q,y);
            }
        }
    }
    while(head(Q) != 'end'){
        y = head(Q);
        dequeue(Q);
        enqueue(Q,y);
    }
    dequeue(Q);
    return found;
}

let v = 4;
let w = v + 5;
const queue = new Queue(5);
enqueue(queue, w);
enqueue(queue, v);
enqueue(queue, w);
enqueue(queue, w+v)
queue.display_array();
dequeue(queue);
queue.display_array()
let found = linearSearch(queue, 14)
console.log(found);
