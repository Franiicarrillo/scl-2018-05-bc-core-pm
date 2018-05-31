/* Acá va tu código */
obtener = () => {

let texto = document.getElementById("Caja").value;
let offset = parseInt(document.getElementById("Caja2").value);
document.getElementById("Caja3").innerHTML=window.cipher.encode(offset,texto);

}

Transformar =() =>{
  let texto = document.getElementById("Caja").value;
  let offset = parseInt(document.getElementById("Caja2").value);
document.getElementById("Caja3").innerHTML=window.cipher.decode(offset,texto);
}
