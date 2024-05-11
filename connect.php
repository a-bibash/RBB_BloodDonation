<?php

$conn = mysqli_connect('localhost','root','','newdonate');

if(!$conn)
{
	die('Connection failed!'.mysqli_error($conn));
}

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$dobdate = $_POST['dobdate'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$lobdate = $_POST['lobdate'];
$bgroup = $_POST['bgroup'];
$address = $_POST['address'];
$date_time = date("Y-m-d H:i:s");
$sql = "INSERT INTO donateinfo(fname, lname,dobdate,email,mobile,lobdate,bgroup,address,date_time) VALUES('$fname','$lname','$dobdate','$email','$mobile','$lobdate','$bgroup','$address','$date_time')";

if(mysqli_query($conn,$sql))
{
	echo "Registerd Successfully";
    echo"<h2> We will contract you through email about the time and place for donation.";
    echo"<h4>Till then please enjoy the website by clicking Home button.";
    echo "<div class='form'>
        <h3><a href='blooded.php'>HOME</a></h3>
    </div>";
}
else
{
	echo mysqli_error($conn);
}

?>