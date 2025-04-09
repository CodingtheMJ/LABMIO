
function saludar() {
    var campoNombre = document.getElementById("contacto");
    var nombre = campoNombre.value;
    if (nombre !== "") {
      alert("¡Hola, " + nombre + "! Gracias por estar aquí");
    } 
    
    else {
      alert("Por favor, escribe tu nombre.");
    }
  }
  