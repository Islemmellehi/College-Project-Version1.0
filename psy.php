

<?php

$connection= mysqli_connect("localhost","root","","nafs");

if (!$connection){die("Error Not Connected");}
else{
    echo "Connection Succeeded";

    $Fname=$_GET['FName'];
    $Lname=$_GET['LName'];
    $Uni=$_GET['Uni'];
    $Deg=$_GET['Deg'];
    $Spec=$_GET['Spec'];
    $Grad=$_GET['Grad'];
    $EmailAdd=$_GET['EmailAdd'];
    $Pass=$_GET['Pass'];

    $request= "INSERT INTO psychiatres (FirstName,LastName,University,Degree,Speciality,YrOfGraduation,PassCode,EmailAdd) VALUES ('$Fname','$Lname','$Uni','$Deg','$Spec','$Grad','$Pass','$EmailAdd');";

    if (mysqli_query($connection,$request)==true){ echo "    <center> <br> <br> Operation Done </center>" ;}
    else{echo "         Error";};


    mysqli_close($connection);

}

?>