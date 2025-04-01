/*class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class Queue {
    constructor (length) {
        this.length = length;
        this.head = 1;
        this.tail = 1;
        this.Q = new Array(length+1);
    }
    display_queue() {

        console.log('Array Elements');

        for (let i=1; i<=this.length; i++){

            // console.log(`element at index ${i} = ${this.Q[i]}`)

            console.log(`Q[${i}] = ${this.Q[i]}`)

        }

        console.log(`head=${this.head}, tail=${this.tail}`)

        console.log("/n") // Insert new line

    }

    enqueue(){
        
    }
}*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
       
        if (this.rear === null) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
       
        this.size++;
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Cannot dequeue from empty queue");
        }

        const removedData = this.front.data;
        this.front = this.front.next;
        this.size--;

        if (this.front === null) {
            this.rear = null;
        }

        return removedData;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Cannot peek empty queue");
        }
        return this.front.data;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let current = this.front;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log("Queue (front to rear):", elements.join(" -> "));
    }
}

const q = new Queue();
q.enqueue(10);
q.print();
q.enqueue(20);
q.print();
q.enqueue(30);
q.print();
q.enqueue(40);
q.print();
q.dequeue();
q.print();