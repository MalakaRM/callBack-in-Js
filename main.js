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
  const curDate = new Date();
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
    


   