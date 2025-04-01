/*class vector {
    constructor (length) {
        this.length = length;
        this.v = new Array(length+1);
    }

    length(v){
        return v.length;
    }

    Select(k){
        return 
    }
}


function swap(v,i,j){
    let x = v[i];
    v[j] = v[i];
    v[i] = x;
    return v;
}

function shift(a,i,j){
    if (i<=j){
        return a;
    }
    let store = a[i];
    for (k = 0; k <= (i-j-1);){
        a[i-k] = a[i-k-1];
    }
    
}*/

function Swap(v,j,i){
    let x=v[j]
     v[j]=v[i]
     v[i]=x
     return v
 }

 function Sort(vector,r){
    if(r <= 1){
        return vector;
    }
    for (let j = 0;j <= r-1; j++){
        if(vector[j+1] < vector[j]){
            Swap(vector,j,j+1);
        }
    }
    Sort(vector,r-1);
    return vector
 }
 
 function Bubblesort(vector){
    let n = vector.length;
    return Sort(vector,n);
 }
 
 /*function Bubblesort(vector) {
     let n = vector.length
     let swaps = 0
     for (let i=0; i < n-1; i++){
         for (let j = 0; j < n-1; j++){
             if(vector[j+1]<vector[j]){
                 Swap(vector,j,j+1);
                 swaps++;
             }
         }
         if (!swaps){
             break
         }
     }
     return console.log("Sorted Array: "+vector+"\nNo. of Swaps: "+swaps)
 }*/
 
 let vector = [70,12,53,5,67,25]
 console.log("Original Array: " + vector)
 console.log(Bubblesort(vector));