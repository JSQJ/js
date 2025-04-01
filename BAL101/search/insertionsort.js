/*function Shift(array,i,j){
    if (i <= j){
        return array
    }
    let store = array[i]
    for (let k = 0; k <= (i-j-1); k++){
        array[i-k] = array[i-k-1]
        shiftsno++;
    }
    array[j] = store
    return array
}*/
 
/*
function insertionSort(array) {
    let comparisons = 0;
    let shifts = 0;
 

    console.log("Original unsorted list:", array);
 

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;



        while (j >= 0 && array[j] > current) {
            comparisons++;
            array[j + 1] = array[j];
            shifts++;
            j--;
        }



        array[j + 1] = current;
        if (j >= 0) comparisons++;
    }
 

    console.log("Sorted list:", array);
    console.log("Number of comparisons:", comparisons);
    console.log("Number of shifts:", shifts);
 

    return array;
}



const numbers = [8,3,9,2,5];
insertionSort(numbers);*/

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

const vector = [64,90,55,37,23]

console.log("original vector:", vector);
console.log("sorted vector:", InsertionSort(vector));