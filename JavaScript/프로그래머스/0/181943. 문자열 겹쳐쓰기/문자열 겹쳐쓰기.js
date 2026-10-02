function solution(my_string, overwrite_string, s) {
    var answer = '';
    var my = my_string.slice(0, s);
    var myB = my_string.slice(s+overwrite_string.length);
    answer = my+overwrite_string+myB;
    return answer;
}