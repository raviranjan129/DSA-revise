
function squares(a, b) {
    // Write your code here
 let low=Math.ceil(Math.sqrt(a));
 
 let high=Math.floor(Math.sqrt(b));
 
 return high-low+1;

}

console.log(squares(100,1000));


//it will find how many perfect squares are in between the range of two given integer;