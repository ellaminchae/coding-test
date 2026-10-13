function solution(num_list) {
    var answer = 0;
    
    let h = num_list.filter((cur) => cur%2!=0); //홀수일때
    h = h.join("");
    let z = num_list.filter((cur) => cur%2==0); //짝수일때
    z = z.join("");
    answer = Number(h)+Number(z);
    
    return answer;
}