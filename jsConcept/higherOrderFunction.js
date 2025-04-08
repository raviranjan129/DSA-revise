
// Higher order functions are function that can  either take other functions as arguments or return a function as a result;


function sum(num1,num2){
    
    function mul(a,b){
         return a*b;
    }
return mul(num1,num2)
}

console.log(sum(3,4));