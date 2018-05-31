/* Acá va tu código */
obtener = () => {

let texto = document.getElementById("Caja2").value;
let offset = parseInt(document.getElementById("Caja").value);
document.getElementById("Caja3").innerHTML=window.cipher.encode(texto,offset);

}

Transformar =() =>{
  let texto = document.getElementById("Caja2").value;
  let offset = parseInt(document.getElementById("Caja").value);
document.getElementById("Caja3").innerHTML=window.cipher.decode(texto,offset);
}
