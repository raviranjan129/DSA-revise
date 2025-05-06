function sumCombination(arr, sum) {
  let mp={};

let count=0;

let pairs=[];

  for(let i=0;i<arr.length;i++){

let complement=sum-arr[i];

if(mp[complement]){
    count +=mp[complement];

    pairs.push([complement,arr[i]]);
}

    if(mp[arr[i]]){
        mp[arr[i]] +=1;
    }else{
        mp[arr[i]] =1;
    }
  }

return {
    count,
    pairs
};

}

let arr = [1,5,7,-1,5];
let sum = 6;

console.log(sumCombination(arr, sum));
