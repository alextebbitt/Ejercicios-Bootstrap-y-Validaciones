myform.addEventListener("submit", onsubmit);
const msg = document.getElementById("alert");
const card = document.getElementById("card")

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

function mostrarCarta() {
    let data = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < data.length; i++) {
        card.innerHTML += `<div class="card" style="width:400px">
        <img class="card-img-top" src="./assets/hackerman.jpg" alt="Card image" style="width:75 %">
        <div class="card-body">
          <h4 class="card-title">${data[i].nombre}</h4>
          <p class="card-text">${data[i].correo}</p>
          <button onClick="borrarUsuario('${data[i].correo}')" class="btn btn-primary">Borrar usuario</button>
        </div>`
    }
}

function borrarUsuario(x){
    let newArray =[]
    let data = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < data.length; i++) {
        if (x !== data[i].correo ){
            newArray.push(data[i])
        }    
    }   
    console.log(newArray)
    localStorage.setItem("user", JSON.stringify(newArray));
    card.innerHTML = "";
    mostrarCarta();    
}


function onsubmit(e) {
    e.preventDefault();
    if (nombre.value === ""|| correo.value === "" || pwd1.value === ""|| pwd2.value==="") {
    msg.innerHTML= `<div class="alert alert-warning">
    <strong>Cuidado</strong> Debes rellenar todos los campos.
    </div>`;
    } else if (pwd1.value !== pwd2.value){
    msg.innerHTML= `<div class="alert alert-danger">
    <strong>Error!</strong> Contrasenas no coinciden.
    </div>`
    } else if (/(\w+?@\w+?\x2E.+)/.test(correo.value) !== true){
    msg.innerHTML= `<div class="alert alert-danger">
    <strong>Error!</strong> formato incorrecto.
    </div>`
     } else {
    msg.innerHTML= `<div class="alert alert-success">
    <strong>Correcto!</strong> usuario creado.
    </div>`
    enviarDatos();
    card.innerHTML = "";
    mostrarCarta();
    }
    setTimeout(function(){
     msg.innerHTML="";
    },3000);     
}

 
