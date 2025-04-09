/**
 * Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.
 */


function validPerfectSquare(num){
    let low=0;
    let high=num;

    while(low <=high){
        let mid=Math.floor((low+high)/2);

        let square=mid*mid;

        if(square==num){
            return true;
        }else if(square > num){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }

    return false;
}


let num=15;

let ans=validPerfectSquare(num);

console.log(ans);