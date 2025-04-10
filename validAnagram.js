
function validAnagram(s,t){
    let mp={};

    for(let i=0;i<s.length;i++){
        if(mp[s[i]]){
            mp[s[i]] +=1;
        }else{
            mp[s[i]] =1;
        }
    }

    for(let j=0;j<t.length;j++){
        if(mp[t[j]] == undefined){
            return false;
        }else{
            mp[t[j]] -=1;

            if(mp[t[j]]==0){
                delete(mp[t[j]]);
            }
        }
    }
    return Object.keys(mp).length==0;    // it will return true if it is empty else it return false;
}


let s = "anagram";
let t = "nagaram"

console.log(validAnagram(s,t))