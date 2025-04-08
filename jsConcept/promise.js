
const data={name:'hohn',age:40};

function fetchdata(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(data);
        }, 2000);
    })
}

fetchdata().then(
    data=>{
        console.log("data",data);
    }
).catch(error=>{
    console.log(error);
}) 