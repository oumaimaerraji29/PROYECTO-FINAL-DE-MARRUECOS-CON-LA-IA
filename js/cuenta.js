 ////////////////// FECHA Y HORA /////////////////////

  // Obtener la referencia al elemento
  const fechaHoraElement = document.getElementById('fechaHora');

  // Obtener la fecha y la hora actual
  const fechaActual = new Date();
  document.getElementById("fechaHora").innerHTML = fechaActual;



  ///////////////////VALIDADOR /////////////////////////

  document.getElementById("myForm").addEventListener("submit", function(event) {
   let termsCheckbox = document.getElementById("termsCheckbox");
    
    if (!termsCheckbox.checked) {
      event.preventDefault(); // Detiene el envío del formulario
      
      // Muestra un mensaje de error o realiza cualquier otra acción
      alert("Debes aceptar los términos y condiciones.");
    }
  });
  

