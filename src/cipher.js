window.cipher = {
  encode: (texto,offset) => {
  let newMessage="";
//Recorrer todos los caracteres
  for(let i=0; i< texto.length; i++)
  {
    texto=texto.toUpperCase();
// Convertir a codigo ASCII
const ASCIICode = texto.charCodeAt(i);
//obtener la nueva posicion en ASCII
let newPosition = ((ASCIICode - 65 + offset) % 26) +65;
// convertir de ASCII a caracter la nueva posicion
const newLetter = String.fromCharCode(newPosition);
//Agregando el mensaje final
newMessage += newLetter;
}
return newMessage;
  },
  decode: (texto,offset) => {
    let newMessage="";
  //Recorrer todos los caracteres
    for(let i=0; i< texto.length; i++)
    {
          texto=texto.toUpperCase();
  // Convertir a codigo ASCII
  const ASCIICode = texto.charCodeAt(i);
  //obtener la nueva posicion en ASCII
  let newPosition = ((ASCIICode + 65 - offset) % 26) +65;
  // convertir de ASCII a caracter la nueva posicion
  const newLetter = String.fromCharCode(newPosition);
  //Agregando el mensaje final
  newMessage += newLetter;
  }
  return newMessage;
    }
}
