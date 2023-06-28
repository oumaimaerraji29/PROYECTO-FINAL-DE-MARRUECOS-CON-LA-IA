
//////////////////////parrafo button

var i = 0;
var txt = 'Además de su rica historia y su ambiente moderno, Rabat es reconocida como una ciudad de contrastes. A medida que te adentras en sus barrios, descubrirás una mezcla fascinante de tradición y modernidad. Los bazares llenos de vida coexisten con modernos centros comerciales, y los antiguos palacios conviven con elegantes restaurantes y cafeterías, La ciudad también alberga importantes instituciones gubernamentales y diplomáticas, lo que le confiere un aire de importancia política y cultural. Con su arquitectura majestuosa y sus amplias avenidas, Rabat muestra su faceta como capital de Marruecos de manera imponente, Además, Rabat es famosa por su ambiente cosmopolita y acogedor. Sus habitantes, conocidos como "rabatís", son conocidos por su amabilidad y hospitalidad, lo que hace que los visitantes se sientan bienvenidos y cómodos, La escena gastronómica de Rabat también es digna de mención, con una amplia variedad de restaurantes que ofrecen desde platos tradicionales marroquíes hasta gastronomía internacional de alta calidad. No puedes dejar de probar los deliciosos tajines, los sabrosos cuscús y los dulces tradicionales mientras exploras la ciudad, En resumen, Rabat es una ciudad que combina historia, cultura, modernidad y hospitalidad en una experiencia única. Con su rica diversidad y su encanto inigualable, Rabat se ha convertido en un destino imperdible para aquellos que desean sumergirse en la esencia auténtica de Marruecos.'; 
var speed = 50;


console.log(txt.length);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

