
function checkingInputs(){
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var regex = /^[a-zA-Z ]{2,30}$/;
    const form=document.getElementById('form').value;
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const repassword=document.getElementById('rePassword').value;
      
    if(!username.match(regex)){
        document.getElementById('message').style.visibility="visible";
        document.getElementById('message').innerHTML="Username desnot match";

        return false;
    }
    if(!email.match(pattern)){
        document.getElementById('e-message').style.visibility="visible";
        return false;

    }
    if( (password ==="") ||(password.length <= 6)){
        document.getElementById('p-message').style.visibility="visible";
    return false;
    }
    if(repassword === ""){
        document.getElementById('re-message').style.visibility="visible";
  return false;
    }
    if(password !== repassword){
        document.getElementById('re-message').style.visibility="visible";
  return false;
    }
    else{
        return true;
    }
}