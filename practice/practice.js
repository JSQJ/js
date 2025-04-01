function shift(array,i,j){
    if (i <=j){
        return array
    }
    let store = array[i]
    for (let k = 0; 0 <= k && k <= (i-j-1);k++){
        array[i-k] = array[i-k-1]
    }
    array[j] = store
    return array
}  

function recursionInsertionSort(vector,r){
    if (r<1){
        return vector
    }
    recursionInsertionSort(vector, r-1)
    let j=r;
    let i=r;
    while (vector[i]<vector[j-1] && j>0){
        j--
    }
    shift(vector,i,j)
    return vector
}

function InsertionSort(vector){
    let n = vector.length;
    return recursionInsertionSort(vector,n)
}

const vector = [64,55,37,23,90]

console.log("original vector:", vector);
console.log("sorted vector:", InsertionSort(vector));