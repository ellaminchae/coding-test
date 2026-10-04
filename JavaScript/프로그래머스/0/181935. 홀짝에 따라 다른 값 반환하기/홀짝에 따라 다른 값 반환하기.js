function solution(n) {
    var answer = 0;
    
    if(n%2==0){
        for(let i=1; i<=n; i++){
            if(i%2==0){
                answer += i*i;
            }
        }
    }else{
        for(let j=1; j<=n; j++){
            if(j%2!==0){
                answer += j
            }
        }
    }
    
    return answer;
}