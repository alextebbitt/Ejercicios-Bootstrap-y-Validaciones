
myform.addEventListener("submit", onsubmit)
const msg = document.getElementById("alert")

function enviarDatos() {     
    let usuarios = JSON.parse(localStorage.getItem("user")) || []; 
    let user = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña1: pwd1.value,
        contraseña2: pwd2.value
    }
    usuarios.push(user);    
    localStorage.setItem("user", JSON.stringify(usuarios));     
}


 function onsubmit(e) {
     e.preventDefault();
     if(nombre.value=== ""|| correo.value==="" || pwd1.value=== ""||
      pwd2.value==="") {
        msg.innerHTML= `<div class="alert alert-warning">
        <strong>Cuidado</strong> Debes rellenar todos los campos.
      </div>`;
     } else if  (pwd1.value !== pwd2.value){
       msg.innerHTML= `<div class="alert alert-danger">
       <strong>Error!</strong> Contrasenas no coinciden.
     </div>`
     } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.correo.value)) {
         msg.innerHTML=  `<div class="alert alert-danger">
         <strong>Error!</strong> Contrasenas no coinciden.
       </div>`;
       
     }
     setTimeout(function(){
         msg.innerHTML="";
     },3000);
     
 }

 function verifyPassword() {
     if (pwd1 != pwd2) {

     }
 }