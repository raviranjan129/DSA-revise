
function strToAray(str){

    let result=[];
    let start=0;
    for(let i=0;i<=str.length;i++){
        if(str[i]==" "){
            result.push(str.slice(start,i));
            start=i+1;
        }else if(i==str.length){
            result.push(str.slice(start,i));
        }
    }
    return result;

}

const str="Hello This is Ravi";

console.log(strToAray(str));