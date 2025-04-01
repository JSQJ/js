class Stack {
    constructor (length) {
        this.length = length;
        this.top = 0;
        this.S = new Array(length);
    }

    display_array() {
        console.log('Array elements');
        for (let i = 0; i <= this.length; i++) {
            console.log(`S[${i}] = ${this.S[i]}`);
        }  
        console.log(`top=${this.top}`);
        console.log('\n');  // insert new line
    };
}


function push(S, x) {
    S.S[S.top] = x;
    S.top+=1;
}

function pop(S) {
   
    S.top -= 1;
    const x = S.S[S.top];
    S.S[S.top] = undefined;
    return x;
   
}

function linearSearch(S,x){
    const t = new Stack(S.length);
    let found = false;
    while (S.top > 0) {
        if (S.S[S.top - 1] === x) {
            found = true;
            break;
        } else {
            push(t, pop(S));
        }
    }
    while (t.top > 0) {
        push(S, pop(t));
    }
    return found
}


const stack = new Stack(5);
push(stack, 1);
push(stack, 2);
push(stack, 3);
stack.display_array();
pop(stack);
stack.display_array();
let found = linearSearch(stack, 5)
console.log(found)
stack.display_array();