// The reduce() method in javacript is used to reduce an array to a single value by applying a function on each element in the array;
// it will take two value , current value and accumulator;

// accumulator with default value-> 0;




let arr=[1,2,3,4,5];

const sum=arr.reduce((accumulator,currentVal)=>{
    return accumulator+currentVal;
}, 0);

console.log(sum);
