"use strict"

function validarDatos(){

   if (document.getElementById("nombre").value == "Cristhian" && document.getElementById("apellido").value == "Vanegas") { 
    window.location="./biografia.html"
   }else if(document.getElementById("nombre").value == "" || document.getElementById("apellido").value == ""){
    alert("Campos Vacios")
   }else {
    alert("Datos Incorrectos")
   }
}


