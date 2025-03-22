var minCost = function(nums) {
     
    let totalsum=0;
    for(let i=0;i<nums.length;i++){
        totalsum +=nums[i];
        
    }
let totalcost=0;
nums.sort((a,b)=>b-a);
    for(let i=0;i<nums.length;i++){
               totalcost +=totalsum;
             totalsum -=nums[i]
    }
return totalcost;

};

let nums=[6,4,1];


console.log(minCost(nums));