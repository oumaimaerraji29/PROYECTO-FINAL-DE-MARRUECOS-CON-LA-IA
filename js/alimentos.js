// Obtener los elementos del DOM
const analyzeButton = document.getElementById('analyzeButton');
const imageInput = document.getElementById('imageInput');


const expectedResponses = [
  { image: 'imagenes/atay.jpg', label: 'té con menta' },
  { image: 'imagenes/couscous.jpg', label: 'Cuscús marroquí' },
  { image: 'imagenes/food1.jpg', label: 'platos marroqui' },
  { image: 'imagenes/harira1.jpg', label: 'harira marroqui' },
  { image: 'imagenes/mezquita.jpg', label: 'mezquita de casablanca' }
];

// Agregar un evento de clic al botón "Analizar"
analyzeButton.addEventListener('click', () => {
  // Obtener el valor del archivo seleccionado
  const selectedFile = imageInput.files[0];

  // Crear una URL para la imagen seleccionada
  const imageURL = URL.createObjectURL(selectedFile);

  
  console.log(imageURL);

  // Buscar el objeto correspondiente en expectedResponses
  const response = expectedResponses.find(obj => obj.image === imageURL);


  // Mostrar el label correspondiente en la página
  if (response) {
    alert(response.label);
  } else {
    alert('es una de las imagenes de la web');
  }
});
