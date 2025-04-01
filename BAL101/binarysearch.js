/*function binarySearch(vector, x) {
    let n = vector.length;
    let left = 0;
    let right = n;
   
    let comparisons = 0

    while(right >= left) {
        let mid = Math.floor((right+left)/2); // find the mid-point
        comparisons++
        if(vector[mid] == x) {
            return console.log(`value found at index: ${mid}\nnumber of comparisons: ${comparisons}`);
        } else {
            if(vector[mid] > x) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return console.log("not found")
}*/
function search(vector,L,R,x){
    if (R>=L){
        let M = Math.floor((R + L) / 2);
        if(vector[M]==x){
            console.log(`value found at index: ${M}`);
        }
        else if (vector[M]>x){
            return search(vector,L,M-1,x);
        }
        else {
            return search(vector,M+1,R,x);
        }
    }
    else{
        return console.log("not found");
    }
}

function binarySearch(vector,x){
    return search(vector,0,vector.length-1,x);
}


const vector = [];
for(let i = 1; i <= 100; i++) {
    vector.push(i);
}
// console.log(vector)

binarySearch(vector, 50);