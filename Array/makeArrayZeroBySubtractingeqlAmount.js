
function makeElementZero(arr){

    let unique=new Set();  //set method is used to store element with unique value;

    for(let i=0;i<arr.length;i++){
        if(arr[i] !=0){              //we are checking if zero then it should not present in the unique set;
            unique.add(arr[i]);         
        }
    }
    return unique.size;
}

let arr=[1,2,3,4,4,5,0];



console.log(makeElementZero(arr));               