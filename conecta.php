<?php
    
    //Connect to the database
    $host = "127.0.0.1";
    $user = "root";                     //Your Cloud 9 username
    $pass = "";                                  //Remember, there is NO password by default!
    $db = "bd_profmauro_v2";                                  //Your database name you want to connect to
                                   //The port #. It is always 3306
    
    $connection = mysqli_connect($host, $user, $pass, $db)or die(mysql_error());



    //And now to perform a simple query to make sure it's working
    $query = "SELECT * FROM post";
    $result = mysqli_query($connection, $query);

    

?>

<!DOCTYPE html>
<html>
    <head>
        <title>teste</title>
    </head>
    <body>
        <?php
        
        $cont = '';
        
        while ($row = mysqli_fetch_assoc($result)) {

        echo "The ID is: " . $row['idpost'] . " and the Username is: " . $row['postdescricao'];
        $cont ++;
        
        }
        
        
        if($cont == 4){
            
            echo "total de maximo";
            
        }
        
        ?>
    </body>
</html>