
function mergeInterval(arr){

    let result=[];

    arr.sort((a,b)=>a[0]-b[0]);

   
   

    for(let i=0;i<arr.length;i++){

        if(result.length==0 || result[result.length-1][1] < arr[i][0]){
            result.push(arr[i]);
        }else if(result[result.length-1][1]>=arr[i][0]){
            result[result.length-1][1]=Math.max(result[result.length-1][1],arr[i][1]);
        }
    }

    return result;
    
}

const arr=[[1,3],[8,10],[2,6],[15,18]];

console.log(mergeInterval(arr));

