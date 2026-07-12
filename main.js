  //---rest-- 
 /* let numbers=[1,2,3,4,5];
  const[first,second,...rest]=numbers;
  console.log(first);
  console.log(second);
  console.log(rest);

  //---spread--
  let ages=[20,30,40];
  let newAges=[...ages,50,60];
  console.log(newAges); 

  //--dates and times--
  let date=new Date();
  console.log(date);

  let date1=new Date("2020-10-20");
  console.log(date1);

  let date2=new Date();
  console.log(date2.toISOString().split("T")[0]);

  const curDate = new Date();
  console.log(curDate.getFullYear());
  console.log(curDate.getMonth()+1);    
  console.log(curDate.getDate());
  console.log(curDate.getDay());
  console.log(curDate.getHours());
  console.log(curDate.getMinutes());
  console.log(curDate.getSeconds());
  */
  //--operators--
 /* const curDate = new Date();
  console.log(curDate.toDateString());
   console.log(curDate.getDate()+7);
   //mils->dif

   //==========================================
   //----Math Object---
   console.log(Math.round(4.6));
   console.log(Math.round(4.2));
console.log('***************');
     console.log(Math.ceil(4.6));
     console.log(Math.ceil(4.2));
     console.log('***************');
        console.log(Math.floor(4.6));
     console.log(Math.floor (4.2));


     //==========================================
     //-----regular expressions---
     let message = 'hello world';
     let pattern = /hello/;
     console.log(pattern.test(message));

     //--local storage & session storage---
     //--expiration date-- 
     let exDate = new Date();
     exDate.setDate(exDate.getDate()+30);
     let obj = {
        val:'aljhdifhfhquofh',
        expires:exDate
     }
   

    //get data from local storage
    localStorage.setItem('myData',JSON.stringify(obj));
     localStorage.setItem('test','hello world');
     let getobj = JSON.parse(localStorage.getItem('myData'));
    console.log(getobj);

    //--delete data from local storage--
    localStorage.removeItem('myData');
    console.log(localStorage.getItem('myData'));

    //--remove all data from local storage--
    localStorage.clear();

    //--session storage--
    //session storage is similar to local storage but it is cleared when the browser is closed
    sessionStorage.setItem('sessionData','hello world');
    //get data from session storage
    let str = sessionStorage.getItem('sessionData');
    let obj1 = JSON.parse(sessionStorage.getItem('sessionData'));
    //--delete data from session storage--
    sessionStorage.removeItem('sessionData');
    //--remove all data from session storage--
    sessionStorage.clear();*/
    

// දින 7කින් expire වන කුකියක් සෑදීම/*
//Cookies.set('username', 'John Doe', { expires: 7, path: '/' }); */

console.log('***********************************')

//--Ajax(Asynchronous JavaScript and XML)--

/*let btn = document.getElementById('btnId');

btn.addEventListener('click', (event) => {
    
    // input field එකෙන් අගය (value) ලබා ගැනීම
    let data = document.getElementById('postId');
    let id = data.value; // මෙතනට input එකේ value එක ගන්න

    //  XMLHttpRequest object එකක් create කරගන්න ඕනේ
    const ajaxReq = new XMLHttpRequest();

    // Request එක open කිරීම (URL එක අගට id එක එකතු කර ඇත)
    ajaxReq.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    
    // Response එක ලැබුණාම ක්‍රියාත්මක වන කොටස (onload lowercase විය යුතුයි)
    ajaxReq.onload = () => {
        // ajaxReq එක කෙලින්ම සසඳන්න බැහැ, ajaxReq.status එකයි 200 ද බලන්න ඕනේ
        if (ajaxReq.status === 200) {
            console.log(ajaxReq.responseText);
        } else {
            console.log("Error: " + ajaxReq.status);
        }
    };
    
    // Request එක send කිරීම
    ajaxReq.send(); 
});*/

/* this */
/*console.log(this); // this refers to the global object (window in browsers) in the global scope 
//===================================
const student={
  name:'John',
  getMarks:function(){
    let sayMarks = () => {
      console.log(`Hello, ${this.name}`); // this refers to the student object
    }
    sayMarks();
  }
}*/
//===================================


/*let state=true;
const showAndHide=()=>{
  if(state){
    document.getElementById('box').style.display='none';
    //state=false;
  }else{
    document.getElementById('box').style.display='block';
     //state=true;
  }
  state=!state;
}*/

/*let state=true;
$('#btn').click(()=>{
  if(state){
    $('#box').hide(2000);
  }else{
     $('#box').show(2000);
  }
  state=!state;
});*/

/*let state=true;
$('#btn').click(()=>{
  if(state){
    $('#box').fadeIn(2000);
  }else{
     $('#box').fadeOut(2000);
  }
  state=!state;
});*/

//--JQUERY 

/*let state=true;

$('#btn').click(()=>{
 $('#box').toggle(2000);
 });

 $('#box').mouseenter(()=>{
  // $('#box').toggle(2000);
  // $('#box').text('dwdwd');
  $(this).text('sdsd');
 })*/

  //css unath hit krnn puluwan jqury use krl