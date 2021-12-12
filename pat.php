


<?php
$connection = mysqli_connect('localhost', 'root', '', 'nafs');

if (!$connection) {
    die('Error Not Connected');
} else {
    echo ' <center> <br> <br> Connection Succeeded </center> ';

    $Fname = $_GET['FName'];
    $Lname = $_GET['LName'];
    $Age = $_GET['Age'];
    $Job = $_GET['Job'];
    $EmailAdd = $_GET['EmailAdd'];
    $Pass = $_GET['Pass'];

    $req = "INSERT INTO patients (FirstName,LastName,Age,Job,PassCode,EmailAdd) VALUES ('$Fname','$Lname','$Age','$Job','$Pass','$EmailAdd');";

    if (mysqli_query($connection, $req) == true) {
        echo '   <center> Operation Done   </center>';
    } else {
        echo ' <center> Error </center>';
    }

    mysqli_close($connection);
}


?>
