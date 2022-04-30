<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
  


    <style media="screen">
      *,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #fff380;
}
.background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    left: -80px;
    top: -80px;
}
.shape:last-child{
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    right: -30px;
    bottom: -80px;
}
form{
    height: 520px;
    width: 400px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
}
form *{
    font-family: 'Poppins',sans-serif;
    color: #000;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.27);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
::placeholder{
    color: #000;
}
button{
    margin-top: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.27);


    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

    </style>
</head>
<body>

<div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>







    <main>
       <div >
           <form method="post">
           <div > <center ><p >Login</p>  </center>
           <input  type="email" name="email" placeholder="Email" required >
           <br>
           <input  type="text" name="password" placeholder="Password" required >
           <br>
           <button type="submit"  name="login">LoGin</button>
            <a href="register.php "> Register Account</a>
           </div>
<?php


if(isset($_POST['login'])){
       $username="root";
       $password="";
       $database=new PDO("mysql:host=localhost;dbname=mario2;",$username,$password);
        
       $login=$database->prepare("select * from user where email=:email and password=:password");
       $login->bindParam("email",$_POST['email']);
       $login->bindParam("password",$_POST['password']);
       $login->execute();
       if($login->rowCount()===1){
           $user=$login->fetchObject();
                     header("location:http://localhost/game/index.html",true);
                     die();


           }
         
       }
        else{
           echo  "<div '>".'the password or email is wrong'."</div>";
            }


?>
</form>
       </div>
    </main>
</body>
</html>