function solution(l, r) {
    var answer = [];
    
    
    for(let i=l; i<=r; i++){
        const str = String(i);
        let ok = true
        for(const ch of str){
            if(ch!=="0" && ch!=="5"){
                ok = false
            }
        }
        if(ok){
            answer.push(i);
        }
    }
    if(answer.length === 0){
        return[-1];
    }
    return answer;
}