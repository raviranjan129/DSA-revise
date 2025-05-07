
function rotatedstring(str1,str2){

    if(str1.length !=str2.length) return false;

    let temp=str1 + str1;

    if(temp.includes(str2)){
        return true;
    }else{
       return false;
    }
}

const str1='abcde';
const str2='deabc';

console.log(rotatedstring(str1,str2));