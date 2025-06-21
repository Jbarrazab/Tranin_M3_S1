// llamar a los elementos del dom htmkl
const nameInput = document.getElementById("nombreUsuer");

const ageInput = document.getElementById("edadUser");

const button = document.getElementById("btnCheckAge");
const result = document.getElementById("resultMessage");

// add event listener para escuchar el boton
button.addEventListener("click", function () {
  const nombreUsuer = nameInput.value.trim();
  const edadUser = Number(ageInput.value);

  // para validar y errorres
  if (nombreUsuer === "" || ageInput.value === "") {
    result.textContent = "Por favor completa todos los campos";
    result.style.color = "red";
    return;
  }
   // funciones
  if (isNaN(edadUser)) {
    console.error("Por favor ingresa nuevamente una edad valida en números EJ 28.");
    result.textContent = "dad no valida";
    result.style.color = "red";


  } else if (edadUser < 18) {
    const message = `Hola ${nombreUsuer}, res menor de edad. no se necesita cc para aprender y disfrutar del código`;
    result.textContent = message;
    result.style.color = "#004080";
    console.log(message);
  } 
  
  
  else {
    const message = `Hola ${nombreUsuer}, eres mayor de edad. Ahora es cuando a facturar y buscar grandes oportunidades en el mundo del desarrollo`;
    result.textContent = message;
    result.style.color = "#004080";
    console.log(message);
  }
});