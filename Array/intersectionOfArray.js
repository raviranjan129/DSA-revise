
function intersection(nums1,nums2){
    let hasset=new Set();

    let ans=[];

    for(let i=0;i<nums1.length;i++){
        hasset.add(nums1[i]);
    }

    for(let j=0;j<nums2.length;j++){
        if(hasset.has(nums2[j])){
            ans.push(nums2[j]);
            hasset.delete(nums2[j]);
        }
    }
    return ans;
}

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];

console.log(intersection(nums1,nums2));