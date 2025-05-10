/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var subarraySum = function(nums, k) {
   let maxlen=0;
let res=[];
   for(let i=0;i<nums.length;i++){
    let sum=0;
    for(let j=i;j<nums.length;j++){
        sum +=nums[j];


    
        if(sum===k){
            let len=j-i+1;

            if(len>maxlen){
                maxlen=len;

                res=nums.slice(i,j+1);
            }
        }
    }
   }
   return res;
  
};


const nums=[15,-2,2,-8,1,7,10,23]
const k=8;

console.log(subarraySum(nums,k))