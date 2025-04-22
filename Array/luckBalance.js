/**
 * Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. Each contest is described by two integers,  and :

 is the amount of luck associated with a contest. If Lena wins the contest, her luck balance will decrease by ; if she loses it, her luck balance will increase by .
 denotes the contest's importance rating. It's equal to  if the contest is important, and it's equal to  if it's unimportant.
If Lena loses no more than  important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.
 */

function luckBalance(contest,k){
    let important=[];

    totalLuck=0;

    for(let [luck,importance] of contest){
        if(importance ===1){
            important.push(luck);
        }else{
            totalLuck +=luck;
        }
    }

    important.sort((a,b)=>b-a);

    for(let i=0;i<important.length;i++){
   if(i< k){
    totalLuck += important[i];
   }else{
    totalLuck -=important[i];
   }
    }
    return totalLuck;
}

let contest = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];

let k=3;

console.log(luckBalance(contest,k));