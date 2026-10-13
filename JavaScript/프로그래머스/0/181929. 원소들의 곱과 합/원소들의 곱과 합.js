function solution(num_list) {
    var answer = 0;
    //삼항연산(조건 ? 참일 때 값 : 거짓일 때 값)
    let k =num_list.reduce((acc,cur)=>acc*cur, 1);
    let sum = num_list.reduce((acc,cur)=>acc+cur, 0);
    answer = (sum*sum)>k ? 1 : 0;
    return answer;
}