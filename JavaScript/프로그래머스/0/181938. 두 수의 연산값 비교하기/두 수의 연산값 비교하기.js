function solution(a, b) {
    var answer = 0;
    
    let an = String(a)+String(b);
    let na = 2*a*b;
    if(an<na){
        answer = na;
    }else{
        answer = Number(an);
    }
    return answer;
}