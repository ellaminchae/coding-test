function solution(a, d, included) {
    var answer = 0;
    let tf = [a];
    for(let i=0; i<included.length; i++){
        tf[i] = a+d*i;
        if(included[i]){
            answer+=tf[i];
        }
    }
    return answer;
}