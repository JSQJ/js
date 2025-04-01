//lec 2
let w = new Array(4);
w[0] = 2;
for(let i = 1; i<= 4;i++){
    w[i]=i*w[i-1];
}
x=w[4];
console.log('x=',x);
