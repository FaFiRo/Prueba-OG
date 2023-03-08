const ocultarTexto_btn = document.getElementById("ocultarTexto_btn");
const textoOculto1 = document.getElementById("textoOculto1");
const textoOculto2 = document.getElementById("textoOculto2");
const textoOculto3 = document.getElementById("textoOculto3");

ocultarTexto_btn.addEventListener("click", toggleTexto);

function toggleTexto(){
  textoOculto1.classList.toggle("mostrar");
  textoOculto2.classList.toggle("mostrar");
  textoOculto3.classList.toggle("mostrar");

  if(textoOculto1, textoOculto2, textoOculto3.classList.contains("mostrar")){
    ocultarTexto_btn.innerHTML = "Ocultar";
  }
  else{
    ocultarTexto_btn.innerHTML = "Leer";
  }
}


const form = document.getElementById("formulario");

const enviarFormulario = function(event){
  event.preventDefault(); 

  console.log(
    event.target.nombre.value, 
    event.target.email.value, 
    event.target.mensaje.value
    );
}

form.addEventListener("submit", enviarFormulario);
