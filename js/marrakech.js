//////////////////////parrafo button

let i = 0;
let txt = 'Marrakech también es famosa por sus magníficos monumentos históricos, como la imponente mezquita de Koutoubia, con su característico minarete de casi 70 metros de altura, que se eleva majestuosamente sobre la ciudad El Palacio de Dar el Makhzen, antigua residencia real, es otro tesoro arquitectónico que revela la opulencia y el esplendor de épocas pasadas, La ciudad también es un paraíso para los amantes del arte y la artesanía. Los zocos rebosan de talleres donde los hábiles artesanos crean obras maestras en cuero, cerámica, cobre y madera. Los tejidos y alfombras marroquíes, con sus intrincados diseños y vibrantes colores, son reconocidos en todo el mundo por su belleza y calidad, Marrakech no solo se limita a su núcleo histórico, sino que también cuenta con modernos complejos turísticos y lujosos spas donde los viajeros pueden disfrutar de momentos de relajación y bienestar. Además, sus alrededores ofrecen paisajes deslumbrantes, como el impresionante Atlas, con sus picos nevados, y el exuberante Valle de Ourika, perfecto para explorar la naturaleza y las tradiciones bereberes, La hospitalidad de su gente, su rica cultura y su fusión única de influencias árabes, bereberes y africanas hacen de Marrakech un destino inolvidable. En cada rincón de la ciudad, se respira un aire de misticismo y encanto que invita a los visitantes a sumergirse en su magia y dejarse llevar por la maravillosa experiencia de descubrir la Ciudad Roja de Marruecos.'; 
let speed = 50;


console.log(txt.length);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

