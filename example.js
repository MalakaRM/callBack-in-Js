/*const doYouLikeMe = (salary) => {
    return new Promise((resolve, reject) => {
        if (salary > 100000) {
            resolve('he heeeeee');
        } else {
            reject('salli nathi nisa epa');
        }
    });
}
doYouLikeMe(200000000).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});*/


//--fetch-> ex: 01----------
/*fetch('https://jsonplaceholder.typicode.com/comments')
.then(response=>{
    return response.json();
})
     .then((data) => {
      console.log(data);  
     }).catch(error=>{
        console.log(error);
     })*/




    //--fetch-> ex: 02----------
    /*let data;
const loadData = ()=>{
   fetch('https://jsonplaceholder.typicode.com/comments')
.then(response=>{
    return response.json();
})
     .then((data) => {
      return data;  
     }).catch(error=>{
        console.log(error);
     });

}
loadData();
console.log(data); // undefined, because loadData() is async function, so data is not available yet.

    */




//---------async/await-> ex: 01----------
console.log('1');
console.log('2');

const loadData = async()=>{
    let dataSet = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await dataSet.json();
    return data;
 }

 loadData().then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})
console.log('3');
console.log('4');