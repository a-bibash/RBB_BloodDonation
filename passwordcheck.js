function passwordcheck(){
    var form=document.getElementById('form');
 var passwordcheck=/^[A-Za-z]\w{7,14}$/;
 var password= document.getElementById('password').value;
 var pmessage=document.getElementById('p-message');

  if(password.match(passwordcheck)){
   form.classList.add('Valid');
   form.classList.remove('Invalid');
   pmessage.innerHTML="Password is Good.";
   pmessage.style.color="green";

  }
  else{     
       form.classList.remove('Valid');
     form.classList.add('Invalid');
  pmessage.innerHTML="Password is Invalid.";
  pmessage.style.color="red";

  }
 if(password ==""){
     form.classList.remove('Valid');
     form.classList.remove('Invalid');
     pmessage.innerHTML="";
 }
 
 }

