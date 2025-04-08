/**
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

  * the logic is, are you able to build mid number of rows.

 */


function arrangeCoin(n){
    let low=0;
    let high=n;

    let ans=1;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        let result=Math.floor(((mid)*(mid+1))/2);   // it will check if you are able to make mid no of rows; (k(k+1))/2

        if(result<=n){
            ans=mid;

            low=mid+1;
        }else{
            high=mid-1;
            
        }
    }
    return ans;
}

let n=8;


console.log(arrangeCoin(n));

