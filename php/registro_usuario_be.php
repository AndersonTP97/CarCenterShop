<?php

    include 'conexion_be.php';

 $nombre_completo = $_POST['nombre_completo'];
 $correo = $_POST['correo'];
 $usuario = $_POST['usuario'];
 $contrasena = $_POST['contrasena'];


 $query = "INSERT INTO usuarios(nombre, correo, usuario, contrasena) 
            VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')";

$ejecutar = mysqli_query($conexion, $query);

if($ejecutar){
    echo '
        <script>
            alert("usuario Registrado con EXITO!!!"); 
            window.location = "../index.php";
            </script>

            ';
}else{
    echo '
        <script>
            alert("usuario no Registrado Intentalo nuevamente"); 
            window.location = "../index.php";
            </script>

            ';
}

    mysqli_close($conexion);
?>