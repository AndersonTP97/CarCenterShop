<?php

    $conexion = mysqli_connect("localhost","root","password","car_center_db");

    if($conexion){
        echo 'conexion exitosa';

    }else{
        echo 'No fue posible la conexion :(';
    }

?>