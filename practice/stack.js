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


function push(S,x){
    S.S[S.top]=x;
    S.top+=1;
}

function pop(S){
    S.top-=1;
    let x=S.S[S.top];
    S.S[S.top] = undefined;
    return x;
}

function linearSearch(S,x){
    let T=new Stack(S.length);
    let found = false;
    while(S.top>0){
        if(S.S[S.top-1]==x){
            found = true;
            break;
        }
        else{
            push(T,pop(S));
        }
    }
    while(T.top>0){
        push(S,pop(T));
    }
    return found;
}

const stack = new Stack(5);
push(stack, 50);
push(stack, 20);
push(stack, 30);
stack.display_array();
console.log(linearSearch(stack,50));
//pop(stack);
//stack.display_array();

