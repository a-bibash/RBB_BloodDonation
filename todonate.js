
    var name = document.getElementById('name');
//    var lname = document.getElementById('lname');
  //  var fname = document.getElementById('fname');
   // var fname = document.getElementById('fname');
  //  var fname = document.getElementById('fname');

    name.addEventListener('input',()=>{
     const nameBox=document.querySelector('.nameBox');
      const namemsg=document.querySelector('.namemsg');
      var regex = /^[a-zA-Z ]{2,30}$/;
      if(name.value.match(regex)){
          namemsg.innerHTML="Name is invalid";
          namemsg.style.color="red";
             }
             else{
                namemsg.innerHTML="Name is valid";
                namemsg.style.color="green";
             }
    });

     
   //  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     //const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     //var regex = /^[a-zA-Z ]/;
    



