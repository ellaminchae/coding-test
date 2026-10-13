function solution(num_list) {
    var answer = 0;
    
    let k = num_list.reduce((acc, cur) => acc * cur, 1); //곱
    let sum = num_list.reduce((acc,cur) => acc + cur, 0); //덧셈
    if((sum*sum)<k){
        answer=0;
    }else{
        answer=1;
    }
    
    return answer;
}