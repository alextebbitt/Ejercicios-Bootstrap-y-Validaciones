


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






// function onsubmit(e) {
//     e.preventDefault();
//     if(nombre.value=== ""|| email.value==="" || pwd1.value=== ""||
//      pwd2.value==="") {
//        console.log("Porfavor rellenar todo los campos") ;
//     } else {
//         msg.innerHTML="Exito";
//     }
//     setTimeout(function(){
//         msg.innerHTML="";
//     },3000);
// }