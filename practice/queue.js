class Queue{
    constructor(length){
        this.length=length;
        this.head=1;
        this.tail=1;
    }
}

function enqueue(Q,x){
    let queue=Q.Q;
    Q[Q.tail]=x;
    if(Q.tail==Q.length){
        Q.tail=1;
    }
    else{
        Q.tail = Q.tail+1;
    }
}
function dequeue(Q){
    if (Q.head == Q.tail) {
        throw Error('queue underflow');
    }
    let queue=Q.Q;
    let x=Q[Q.head]
    if (Q.head==Q.length) {
        Q[Q.head]=undefined;
        Q.head=1;
    }
    else{
        Q[Q.head]=undefined;
        Q.head = Q.head+1;
    }
    return x;
}

function peek(Q){
    console.log("the head is: " +Q[Q.head])
}

function linearSearch(Q,x){
    if (Q.head == Q.tail){
        return false;
    }

    let found=false;
    enqueue(Q,'end');
    while(found==false){
        if(Q[Q.head]==x){
            found=true;
        }
        else{
            if(Q[Q.head]=='end'){
                break;
            }
            else{
                let y=Q[Q.head];
                dequeue(Q);
                enqueue(Q,y);
            }
        }
    }
    while(Q[Q.head]!='end'){
        let y=Q[Q.head];
        dequeue(Q);
        enqueue(Q,y);
    }
    dequeue(Q);
    return found;
}



let v = 4;
let w = v + 5;
const queue = new Queue(5);
enqueue(queue,w);
enqueue(queue, v);
enqueue(queue, w+v);
console.log(linearSearch(queue,30));
console.log(queue);
console.log(dequeue(queue));
console.log(queue);
/*console.log(queue);
console.log(dequeue(queue));
peek(queue);
console.log(queue);
console.log(dequeue(queue));
console.log(queue);
console.log(dequeue(queue));*/

