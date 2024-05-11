<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Registration</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
<?php
    require('db.php');
    // When form submitted, insert values into the database.
    if (isset($_POST['submit'])) {
        // removes backslashes
        $username = stripslashes($_POST['username']);
        //escapes special characters in a string
        $username = mysqli_real_escape_string($con, $username);
        $email    = stripslashes($_POST['email']);
        $email    = mysqli_real_escape_string($con, $email);
        $password = stripslashes($_POST['password']);
        $password = mysqli_real_escape_string($con, $password);
        $create_datetime = date("Y-m-d H:i:s");

        $sql = "SELECT * FROM users WHERE email='$email' LIMIT 1";
        $results = mysqli_query($con, $sql);

        if (mysqli_num_rows($results) > 0) {
            echo "<p class='link'>Email  Already Exists.<p>
            <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>";
        }
        else{
        $query    = "INSERT into `users` (username,email,password,date_time)
                     VALUES ('$username', '$email','" . md5($password) . "','$create_datetime')";
        $result   = mysqli_query($con, $query);
    
        if ($result) {
            echo "<div class='form'>
                  <h3>You are registered successfully.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                  <h3>Required fields are missing.</h3><br/>
                  <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>
                  </div>";
        }
    }
} 
else {
?>
    <form class="form" action="" method="post">
        <h1 class="login-title">Registration</h1>
        <input type="text" class="login-input" name="username" placeholder="Username" required>
        <input type="text" class="login-input" name="email" placeholder="Email Adress" required>
        <input type="password" class="login-input" name="password" placeholder="Password" required>
        <input type="submit" name="submit" value="Register" class="login-button">
        <p class="link">Already have an account? <a href="login.php">Login here</a></p>
    </form>
    <?php 
    }
    ?>
</body>
</html>
