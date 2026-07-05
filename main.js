/*// 1. සර්වර් එකත් එක්ක ගනුදෙනු කරන්න XMLHttpRequest object එකක් (පණිවිඩකරුවෙක්) හදාගන්නවා
const http = new XMLHttpRequest();

// 2. පණිවිඩකරුගේ තත්ත්වය (State) වෙනස් වෙන හැම වෙලාවකම ක්‍රියාත්මක වෙන ඔත්තුකරුවෙක් (Listener) දානවා
http.addEventListener('readystatechange', () => {
    
    // 3. readyState === 4 කියන්නේ සර්වර් එකෙන් ඩේටා ටික සම්පූර්ණයෙන්ම ලැබිලා ඉවරයි (DONE) කියන එකයි
    // (සටහන: සර්වර් එක OK ද බලන්න http.status === 200 කෑල්ලත් මෙතනටම එකතු කරා නම් වඩාත් නිවැරදියි)
    if (http.readyState === 4) {
        
        // 4. සර්වර් එකෙන් ලැබුණු response (text/json) ඩේටා ටික console එකේ පෙන්වනවා
        console.log(http.responseText);
    }
});

// 5. කරන්න ඕන දේ (GET - ඩේටා ගන්න) සහ ඉල්ලන්න ඕන තැන (URL එක) දාලා ලියුම (Request එක) ලෑස්ති කරනවා
http.open('GET', 'https://jsonplaceholder.typicode.com/comments');

// 6. ලෑස්ති කරපු ලියුම ඇත්තටම සර්වර් එක වෙත පිටත් කරලා හරිනවා (Send කරනවා)
http.send(); */


//==================================================================
/*let data;
const loadData = ()=>{
    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        console.log(http.responseText);
    }else if(http.readyState==4){
        console.log('error occured!');
    }
});
    http.open('GET', 'https://jsonplaceholder.typicode.com/comments');  
    http.send();
}

function checkResponse(){
    console.log(data);
}

loadData();
checkResponse();*/


//---------call back-> ex: 01-------
/*let data;const loadData = (callback)=>{
    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        data  = (http.responseText);
        callback();
    }else if(http.readyState==4){
        console.log('error occured!');
    }
});
    http.open('GET', 'https://jsonplaceholder.typicode.com/comments');  
    
}

function checkResponse(){
    console.log(data);
}

loadData(checkResponse);
console.log('after loadData()');*/

//-------call back-> ex: 02----------
/*let data;
const loadData = (callback)=>{
    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        callback(JSON.parse(http.responseText));
    }else if(http.readyState==4){
        console.log('error occured!');
    }
});
    http.open('GET', 'https://jsonplaceholder.typicode.com/comments');  
    http.send();
    
}

const loadPosts = (callback)=>{
    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        callback(JSON.parse(http.responseText));
    }else if(http.readyState==4){
        console.log('error occured!');
    }
});
    http.open('GET', 'https://jsonplaceholder.typicode.com/posts');  
    http.send();
    
}

loadPosts((error,data)=>{
    if(data){
        console.log(data);
    }else{
        console.log(error);
    }
});

loadData((error,data)=>{
    if(data){
        console.log(data);
    }else{
        console.log(error);
    }
});
*/




//-------call back hell-> ex: 03----------
/*let data;

const loadData = (url,callback)=>{
    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        callback(undefined, JSON.parse(http.responseText)); // undefined = error නෑ, දෙවෙනියට data එක
    }else if(http.readyState==4){
        callback('error occured!', undefined); // error එක pass කරන්න, data නෑ
    }
});
    http.open('GET',url);  
    http.send();
    
}

loadData('https://jsonplaceholder.typicode.com/comments',(error,data)=>{
   console.log(data);

   loadData('https://jsonplaceholder.typicode.com/posts',(error,data)=>{
   console.log(data);
    });
});*/





//-------Promise-> ex: 01----------
/*let data;

const loadData = (url)=>{
    return new Promise((resolve,reject)=>{
        const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        resolve(JSON.parse(http.responseText)); // undefined = error නෑ, දෙවෙනියට data එක
    }else if(http.readyState==4){
        reject('error occured!'); // error එක pass කරන්න, data නෑ
    }
});
    http.open('GET',url);  
    http.send();
});
    
}
loadData('https://jsonplaceholder.typicode.com/comments').then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});*/

//-------Chainning Promise-> ex: 02----------
let data;

const loadData = (url)=>{
    return new Promise((resolve,reject)=>{
        const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
    if (http.readyState==4 && http.status===200) {
        resolve(JSON.parse(http.responseText)); // undefined = error නෑ, දෙවෙනියට data එක
    }else if(http.readyState==4){
        reject('error occured!'); // error එක pass කරන්න, data නෑ
    }
});
    http.open('GET',url);  
    http.send();
});
    
}
loadData('https://jsonplaceholder.typicode.com/comments').then((result)=>{
    console.log(result);
    loadData('https://jsonplaceholder.typicode.com/posts').then((result2)=>{
        console.log(result2);
    }).catch((error)=>{
        console.log(error);
    });
}).catch((error)=>{
    console.log(error);
});
