<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    
</head>
<body>

<div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>


<div>
<form  
 style="max-width: 700px;" method="post">
 <input  type="text"  name="name" placeholder="Name" required >
 <br>
 <input  type="email" name="email" placeholder="Email" required >
 <br>
 <input  type="text" name="password" placeholder="Password" required >
 <br>
 <button type="submit" name="register" > Register</button>
 <button type="submit"  ><a href="login.php"> go </button>
</form>


</div>

<?php 
$username="root";
$password="";
$database=new PDO("mysql:host=localhost;dbname=mario2;",$username,$password);
if(isset($_POST['register'])){
    $checkemail=$database->prepare("select * from user where email=:email");
    $email=$_POST['email'];
    $checkemail->bindParam("email",$email);
    $checkemail->execute();
    if($checkemail->rowCount()>0){

        echo "<div '>".'Existing ' ."</div>" ;
    }
    else{
        $name=$_POST['name'];
        // $age=$_POST['age'];
        $email=$_POST['email'];
        $password=$_POST['password'];
         $add=$database->prepare("insert into user (username,email,password) values(:username,:email,:password)");
         $add->bindParam("username",$username);
        //  $add->bindParam("age",$age);
         $add->bindParam("email",$email);
         $add->bindParam("password",$password);
        
           if($add->execute()){
               echo" <center> <div '>".' successful  ' ."</div> <center>";
           }
           else{
               echo  "<div '>".'error' ."</div>";
           }
        }



}



?>



</main>







  
</body>
</html>