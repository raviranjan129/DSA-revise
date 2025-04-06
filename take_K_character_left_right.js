
function removeK(s,k){
 
    let n=s.length;

    let count_a=0; // delete count
    let count_b=0;
    let count_c=0;


    for(let ch of s ){  //count the num of char;
        if(ch == 'a'){ 
            count_a++;
        }else if(ch=='b'){
            count_b++;
        }else{
            count_c++;
        }
    }


    if(count_a <k || count_b <k || count_c < k){
        return -1; // not possible to delete;
    }

    let i=0;
    let j=0;
 let notDeletedWindowSize=0;

  while(j<n){
    if(s[j]=='a'){
        count_a--;
    }else if(s[j]=='b'){
        count_b--;
    }else{
        count_c--;
    }


    // if deletion count of any char becomes less than k , then shrink the window and bring them back;;
    while(i<=j && (count_a<k || count_b <k || count_c <k)){  


        // ith pointer move ;

        if(s[i]=='a'){
            count_a++;
        }else if(s[i]=='b'){
            count_b++;
        }else {
            count_c++;
        }

        i++;
    }

    notDeletedWindowSize=Math.max(notDeletedWindowSize,j-i+1);

    j++;

  }

  
return n-notDeletedWindowSize;

}

let s='aabaaaacaabc';

let k=2;

console.log(removeK(s,k));