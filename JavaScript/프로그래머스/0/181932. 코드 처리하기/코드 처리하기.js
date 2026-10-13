function solution(code) {
    var answer = '';
    
    let mode = 0;
    for(let i=0; i<code.length; i++){
        if(code[i] == 1){ // 1을 만났는가?
            mode = mode == 0 ? 1 : 0; // 스위치
        }else{ // 1을 만나지 않았다
            if(i%2==0&&mode==0){ //index가 짝수인가?
                answer += code[i];  //index값을 answer에 붙인다.
            }else if(i%2!=0&&mode==1){
                answer += code[i];
            }
        }
    }
    
    return answer=='' ? answer='EMPTY' : answer;
}