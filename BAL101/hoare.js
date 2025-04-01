function printVector(vector) {
    let formattedElements = [];
    // Start at index 1 to skip the element at index 0.
    for (let i = 1; i < vector.length; i++) {
      formattedElements.push(`v[${i}]=${vector[i]}`);
    }
    
    // Join the formatted strings with a comma and a space, then print.
    console.log(formattedElements.join(", "));
}
  
// swap the values of array element at i and j
function swap(array, i, j) {
    let x = array[j];
    array[j] = array[i];
    array[i] = x;
}

// Hoare's partition scheme
function partition(vector, i, j) {
    const m = Math.floor((i + j) / 2);  // Calculate the mid-point of the array
    const pivot = vector[m];            // pivot is the value stored at mid-pint
    let final = m;                      // final holds the index of the pivot

    // console.log(`final=${final}, i=${i}, j=${j}`);
    while (i < j) {
        // starting from the leftmost element, scan left to right
        // until we find an element that is >= pivot or is the pivot itself.
        while (vector[i] < pivot) {
            i = i + 1;
        }

        // starting from the rightmost element, scan right to left
        // until we find an element that is <= pivot or is the pivot itself.
        while (vector[j] > pivot) {
            j = j - 1;
        }
        // console.log(`after seek: i=${i}, j=${j}`);

        if (i < j) {
            // console.log(`swap(vector, ${i}, ${j})`);
            swap(vector, i, j);
            // printVector(vector);
            if (i === final) {
                final = j;      // pivot has moved to vector[j]
                i = i + 1;      // increment i to the next element to scan
            } else if (j === final) {
                final = i;      // pivot has moved to vector[i]
                j = j - 1;
            } else {
                i = i + 1;      // increment i to the next element to scan
                j = j - 1;      // decrement j to the next element to scan
            }
            // console.log(`final=${final}, i=${i}, j=${j}`);
        }

    }
    return final;               // return the location of the pivot
}

function QuickSort(vector,i,j){
    if(i<=j){
        let pivot = partition(vector,i,j);
        QuickSort(vector,i,pivot-1);
        QuickSort(vector,pivot+1,j);
    }
    else{
        return vector;
    }
}
// create an array to simulate vector[1] to vector[6]. vector [0] is unused.
let vector = new Array(null, 9, 5, 4, 1, 1, 5);
console.log('vector before partitioning:');
printVector(vector);

//let final = partition(vector1, 1, 6);
let ans = QuickSort(vector, 1,6)
console.log('vector after partitioning:');
printVector(vector);
//console.log(`index of pivot = ${ans}`);