
function search2DMatrix(matrix,target){
 let m=matrix.length;  // no of rows;

 let n=matrix[0].length; // no of col;

 let low=0;
 let high=m*n-1;

 while(low<=high){
    let mid=Math.floor((low+high)/2);

    let row=Math.floor(mid/n);
    let col=mid % n;

    if(matrix[row][col]==target){
        return true;
    }else if(matrix[row][col] < target){
        low =mid+1;
    }else{
      high= mid-1;
    }
 }
 return false;
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];

let target=3;

console.log(search2DMatrix(matrix,target));