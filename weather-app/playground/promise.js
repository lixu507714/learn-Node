// var somePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(`Hey, It worked!`);
//         reject('Unable to fulfill promise');
//     },2000)
// });
//
//
// somePromise.then((message)=>{
//     console.log('Success', message);
// },(errorMessage)=>{
//     console.log('Error', errorMessage);
// });

var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve (a+b);
            } else {
                reject('Argument must be numbers');
            }
        },1000);
    })
};

asyncAdd(2,3).then((res)=>{ // res相当于是resolve
    console.log('Result:', res);
    return asyncAdd(res,22);
}).then((res)=>{
    console.log('result:27',res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});