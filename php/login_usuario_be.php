<?php

     include 'conexion_be.php';

     $usuario = $_POST['usuario'];
     $contrasena = $_POST['contrasena'];

     $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios where usuario='$usuario'
     and contrasena='$contrasena'");
  

     if(mysqli_num_rows($validar_login) > 0){
          header("location: ../php/bienvenida.html");
          exit;
     }else{
          echo '
          <script>
               alert("usuario no existe");
               window.location = "../index.php";
          </script>
          ';
          exit;
     }
?>