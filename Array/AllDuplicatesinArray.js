function AllDuplicatesInArray(arr){

    let mp={};
    let result=[];

    for(let i=0;i<arr.length;i++){
        if(mp[arr[i]]){
            mp[arr[i]] +=1;
        }else{
            mp[arr[i]] =1;
        }
    }

    for(let key in mp){
        if(mp[key] >=2){
            result.push(parseInt(key));
        }
    }

    return result;
}

let arr=[2,5,4,2,9,6,7,5];

console.log(AllDuplicatesInArray(arr));