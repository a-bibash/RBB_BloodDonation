
function checkingInput(){
    const pname = document.getElementById('name').value;
     const whendou=document.getElementById('whendouneedblood').value;
     const Howmuch=document.getElementById('howmuch').value;
     const Phone=document.getElementById('number').value;
     const email=document.getElementById('Email').value;
     const Hospital=document.getElementById('Hname').value;
     const Location=document.getElementById('location').value;
     const Purpose=document.getElementById('purpose').value;

     let emailpattn = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     let phonecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     var namecheck = /^[a-zA-Z ]{2,30}$/;

    if(!pname.match(namecheck)){
        alert("Name is invalid");

        return false;
    }
    if(Howmuch==""){
        alert("Enter the needed amount")
    }
    if(Howmuch >= 100){
        window.alert("We cannot Provide That much amount")
        return false;
        
    }
    if(!Phone.match(phonecheck)){
        alert("Phone number is invalid");
      return false;

    }
    if(!Hospital.match(namecheck)){
      alert("Hospital name invalid");
        return false;
    }
    if(!Location.match(namecheck)){
       alert("Location error");
        return false;
    }
    if(!email.match(emailpattn)){
        alert("Email is invalid");
        return false;
    }
    if(!Purpose.match(namecheck)){
        alert("Purpose Invalid");
    }
    return true;
    }
    
