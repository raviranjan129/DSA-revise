
function validAnagram(s,t){
    let mp={};

if(s.length !=t.length){
    return false;
}

    for(let i=0;i<s.length;i++){
        if(mp[s[i]]){
            mp[s[i]] +=1;
        }else{
            mp[s[i]] = 1;
        }
    }

    for(let i=0;i<t.length;i++){
        if(mp[t[i]]==undefined){
            return false;
        }else {
            if(mp[t[i]]){
                mp[t[i]] -=1;

                if(mp[t[i]]==0){
                    delete(mp[t[i]]);
                }
            }
        }
    }

    return true;
}

const s='angram';
const t='nagram';

console.log(validAnagram(s,t));


