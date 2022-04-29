function onsubmit(e) {
    e.preventDefault();
    if(nombre.value=== ""|| email.value==="" || exampleInputPassword1.value=== ""||
     exampleInputPassword2.value==="") {
       console.log("Porfavor rellenar todo los campos") ;
    } else {
        msg.innerHTML="Exito";
    }
    setTimeout(function(){
        msg.innerHTML="";
    },3000);
}