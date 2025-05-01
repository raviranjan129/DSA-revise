

function countWord(str){

    let count=0;

    let newStr=str.trim().split(/\s+/)

    for(let i=0;i<newStr.length;i++){
        count++
    }
return count;
}

const str="Hello, how are you doing today";

console.log(countWord(str));