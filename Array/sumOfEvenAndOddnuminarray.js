
function sumOfevenandOdd(arr){
    let sumodd=0;
    let sumeven=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sumeven +=arr[i];
        }else{
            sumodd +=arr[i];
        }
    }
return {
    evensumOfEvenNumber:sumeven,
    SumOfOddNumbers:sumodd
}


    
}


let arr=[1,2,3,4,5,6];

console.log(sumOfevenandOdd(arr));