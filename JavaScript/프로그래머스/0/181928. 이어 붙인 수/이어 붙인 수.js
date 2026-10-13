function solution(num_list) {
    var answer = 0;
    
    let h = Number(num_list.filter((cur) => cur%2!=0).join("")); //홀수일때
    let z = Number(num_list.filter((cur) => cur%2==0).join("")); //짝수일때
    answer = h+z;
    
    return answer;
}