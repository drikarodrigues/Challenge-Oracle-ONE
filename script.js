var resultado;

function myFunction() {
var x = document.getElementById('boxlupa');
var y = document.getElementById('boxcopy');
if (document.getElementById('texto').value == "") {
x.style.display = 'block';
y.style.display = 'none';
} else {
x.style.display = 'none';
y.style.display = 'block';
}
}

function copiar() {
var copiado = document.getElementById('text-copy').textContent;
navigator.clipboard.writeText(copiado);
alert("Copiado!");
document.getElementById('texto').value = "";

//var campoTexto = document.getElementById('texto').value;
// textoCopiado.setSelectionRange(0, 99999);
//document.execCommand('copy');
}

function criptografa() {
var textoInserido = document.getElementById('texto').value;
resultado = textoInserido.replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat");
document.getElementById('text-copy').innerHTML = resultado;

}

function descriptografar() {
textoInserido = document.getElementById('texto').value;
resultado = textoInserido.replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");
document.getElementById('text-copy').innerHTML = resultado;
}

