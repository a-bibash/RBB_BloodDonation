<?php
session_start();
$username="";
$email="";


//connect to db
$db =mysqli_connect('localhost','root','','login_register') or die("Could not connect to server");

$username=mysqli_real_escape_string($db,$_POST['username']);
$email=mysqli_real_escape_string($db,$_POST['email']);
$password=mysqli_real_escape_string($db,$_POST['password']);
$cpassword=mysqli_real_escape_string($db,$_POST['cpassword']);

//check for existing username in db
$user_check_query ="SELECT * FROM users WHERE username='$username' or email='$email' LIMIT 1";
$results=mysqli_query($db,$user_check_query);
$user=mysquli_fetch_assoc($results);

if($user){
    if($user['username']=== $username){array_push($errors,"Username already exists");};
    if($user['email']=== $email){array_push($errors,"Email already exists");};

}

//Registor if no errors
if(count($errors)== 0){
    $password=md5($password);//this will encrypt the password
    $query="INSERT INTO users(username,email, password) VALUES('$username','$email','$password')";


    mysqli_query($db,$query);
    $_SESSION['username']=$username;
    $_SESSION['success']="You are Logged in";

    header('location : login.php');
}




















?>