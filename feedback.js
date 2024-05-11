
function feedbackval(){
    const Fname = document.getElementById('name').value;
     const Email=document.getElementById('email').value;
     const Phone=document.getElementById('mobile').value;
     const Occupation=document.getElementById('Occupation').value;
     const Location=document.getElementById('Location').value;
     const Suggestion=document.getElementById('feedback').value;

     let emailpattn = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     let phonecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     var namecheck = /^[a-zA-Z ]{2,30}$/;

    if(!Fname.match(namecheck)){
        alert("Name is invalid");

        return false;
    }
    if(!Email.match(emailpattn)){
        alert("Email is invalid");
        return false;
    }
    if(!Phone.match(phonecheck)){
        alert("Phone number is invalid");
      return false;

    }
    if(!Occupation.match(namecheck)){
      alert("Occupation is invalid");
        return false;
    }
    if(!Location.match(namecheck)){
       alert("Location error");
        return false;
    }
  
    if(Suggestion.length <= 15){
        alert("Give more Sugestion");
        return false;
    }
    return true;
    }
    
