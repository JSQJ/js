function Search(v,l,item){
    let n = v.length;
    if (l>n){
        return false;
    }
    else if(v[l]==item){
        return true;
    }
    return Search(v,l+1,item);
}

function linearSearch(v,item){
    return Search(v,1,item);
}

let vector = [70,12,53,5,67,25]
console.log(linearSearch(vector,13));