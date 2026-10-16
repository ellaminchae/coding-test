function solution(arr, queries) {
    var answer = [];
    
    for(const [i,j,x] of queries){
        let min = Infinity;
        for(let o=i; o<=j; o++){
            if(arr[o] > x && min > arr[o]){
                min = arr[o]
            }
        }
        answer.push(min === Infinity ? -1 : min);
    }
    
    return answer;
}