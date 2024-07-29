let arr = [3,4,1,5,10,8];

arr.sort((x,y)=> x-y);  // increasing

console.log(arr);

arr.sort((x,y)=>y-x); //decreasing;
console.log(arr);


/**
 * if the callback of sort function returns a negative value 
 * - the first argument is put first and then the second argument
 * 
 * else if the callback of the sort function returns a positive value
 *  -the second argument is put first and then the first argument
 */


/**
 * x=4
 * y=5
 * 
 * sort((x,y)=>x-y);
 * 4-5 -> -ve
 * 
 * [4,5];
 * 
 * 
 * x=7
 * y=5;
 * 
 * sort((x,y)=>x-y);
 * 7-5 -> +ve;
 * 
 * [5,7]
 */