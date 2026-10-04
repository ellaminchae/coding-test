function solution(ineq, eq, n, m) {
    var answer = 0;
    
    let tf = ineq+eq;
    switch(tf){
        case '>=':
            if(n>=m){
                answer= 1;
            }else{
                answer= 0;
            }break;
        case '<=':
            if(n<=m){
                answer=1;
            }else{
                answer=0;
            }break;
        case '>!':
            if(n>m){
                answer = 1;
            }else{
                answer = 0;
            }break;
        case '<!':
            if(n<m){
                answer = 1;
            }else{
                answer = 0;
            }
        
    }
    return answer;
}