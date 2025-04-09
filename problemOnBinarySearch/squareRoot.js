

function sqrt(x){
    let low=0;
    let high=x;

    let ans=1;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        let value=mid*mid;

        if(value == x){
            return mid;
        }else if(value>x){
            high=mid-1;
        }else{
            ans=mid;

            low=mid+1;
        }
    }

    return ans;
}

let x=16;

console.log(sqrt(x));