
<?php
    $connection = mysqli_connect("localhost", "root", "", "nafs");

    if (!$connection) {
        die('Error' . mysqli_connect_error());
    } 
    else {
        echo (' <center> <br> Connection Succeeded <br> <br> <center> ' );
    
        $name = $_GET['searchname'];



        $request = "SELECT * FROM psychiatres WHERE FirstName LIKE '$name' ;";
        $res= mysqli_query($connection,$request);

        if (!$res){
            echo("ERROR");
        }
        else{


            if(mysqli_num_rows($res)!=0){   
                while($rows = mysqli_fetch_array($res, MYSQLI_ASSOC) )
                {echo ($rows["FirstName"].'   |    '.$rows["LastName"]);};}
            else {echo ("None" );}
        }
        
    }

    mysqli_close($connection);
    



?>
