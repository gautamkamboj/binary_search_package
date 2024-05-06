const binarySearch =(arr,target)=>{
    let low=0;
    let high = arr.length-1;

    while(low<=high){
        const mid_idx = Math.floor((low+high)/2);
        const mid_val = arr[mid_idx];

        if(mid_val==target)
            return mid_idx;
        else if(mid_val<target)
            low = mid_idx+1
        else 
            high =  mid_idx-1;
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5],3));
export default binarySearch;