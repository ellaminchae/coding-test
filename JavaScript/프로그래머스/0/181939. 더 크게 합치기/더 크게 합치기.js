function solution(a, b) {
    var answer = 0;
    
    let an = String(a)+String(b);
    let na = String(b)+String(a);
    if(an<na){
        answer = na;
    }else{
        answer = an;
    }
    return Number(answer);
}