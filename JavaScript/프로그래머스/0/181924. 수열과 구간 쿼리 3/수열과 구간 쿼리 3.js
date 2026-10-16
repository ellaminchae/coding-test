function solution(arr, queries) {
    //var answer = [];
    for(const [i,j] of queries) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    return arr;
}