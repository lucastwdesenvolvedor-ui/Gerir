

function calcular() {
let vTotal; 
let p = parseFloat(document.getElementById('valor').value)
let  i= parseFloat(document.getElementById('taxa').value.replace(',', '.')) / 100;
let n = parseInt(document.getElementById('parcelas').value)
let cima = i * (1+i)**n;
let baixo = (1+i)**n -1;
vTotal = p* (cima/baixo)
let e = vTotal * n
document.getElementById('t').textContent=vTotal.toFixed(2); 
document.getElementById('tt').textContent=e.toFixed(2); 
console.log (p,i,n);
}

function copiarTexto() {
  const copiar = document.getElementById('c');
  navigator.clipboard.writeText(input.value)
    .then(() => alert("Texto copiado com sucesso!"))
    .catch(() => alert("Falha ao copiar o texto."));
}