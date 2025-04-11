
function intersection(nums1,nums2){
    let mp={};
    let ans=[];

    for(let i=0;i<nums1.length;i++){
        if(mp[nums1[i]]){
            mp[nums1[i]] +=1;
        }else{
            mp[nums1[i]] =1;
        }
    }

    for(let j=0; j<nums2.length;j++){
        if(mp[nums2[j]]){
            ans.push(nums2[j]);
            mp[nums2[j]] -=1;

            

            if(nums2.length == 0){
                delete mp[nums2[j]];
            }
        }
    }
    return ans;
}

let nums1 = [4,9,5,9];

let nums2 = [9,4,9,8,4];

console.log(intersection(nums1,nums2));