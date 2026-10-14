function solution(num_list) {
    var answer = num_list;
    
    let last = num_list[num_list.length-1]; //마지막 수
    let prev = num_list[num_list.length-2]; //마지막에서 앞 수
    answer.push(last > prev ? last-prev : last*2);
    
    return answer;
}