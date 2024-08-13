let textoIngresado = document.getElementById('texto_encriptar').value;
let textoEncriptado = document.getElementById('texto_encriptado');
let textoDesencriptado = document.getElementById("texto_encriptado");
let botonCopiar = document.getElementById('boton_copiar');
let listaTexto = [];

document.getElementById('texto_encriptar').addEventListener('input', function() {
    let texto = this.value;
    let advertencia = document.getElementById('advertencia');
    let textoAdvertencia = document.getElementById("texto_advertencia");
    let mayusculasAcentos = /[A-ZÁÉÍÓÚÑáéíóúñ]/;
    if (mayusculasAcentos.test(texto)) {
        advertencia.style.display = 'block';
        textoAdvertencia.style.display="none";
        } else {
            advertencia.style.display = 'none';
            textoAdvertencia.style.display="block";
        }
    });

function ocultarTexto() {
    let img = document.getElementById('miImagen');
    let texto2 = document.getElementById('miTexto');
    let etiqueta = document.getElementById('miEtiqueta');
    let areaTexto = document.getElementById('texto_encriptado');
    let mostrar = document.getElementById("encriptador__mostrar__aviso");

    img.style.display = 'block';
    texto2.style.display = 'block';
    etiqueta.style.display = 'block';
    mostrar.style.display = 'block';
    areaTexto.style.display = 'none';
    botonCopiar.style.display = 'none';
    return;    
}

function mostrarTexto() {
    let img = document.getElementById('miImagen');
    let texto2 = document.getElementById('miTexto');
    let etiqueta = document.getElementById('miEtiqueta');
    let areaTexto = document.getElementById('texto_encriptado');
    let mostrar = document.getElementById("encriptador__mostrar__aviso");

    img.style.display = 'none';
    texto2.style.display = 'none';
    etiqueta.style.display = 'none';
    mostrar.style.display = "block";
    areaTexto.style.display = 'block';
    botonCopiar.style.display = 'block';
    return;    
}

document.getElementById("boton_encriptar").addEventListener('click', mostrarTextoEncriptado);
document.getElementById("boton_desencriptar").addEventListener('click', mostrarTextoDesencriptado);
    
function mostrarTextoEncriptado() {
    textoIngresado = document.getElementById('texto_encriptar').value.trim();
    if (textoIngresado === '') {
        ocultarTexto();
        return;
        }else{
            mostrarTexto();
            encriptarTexto(textoIngresado);
        return;
    }
}

function mostrarTextoDesencriptado() {
    textoIngresado = document.getElementById('texto_encriptar').value.trim();
    if (textoIngresado === '') {
        ocultarTexto();
        return;
        }else{
            mostrarTexto();
            desencriptarTexto(textoIngresado);
        return;
    }        
}

function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    listaTexto.push(textoEncriptado);
    mostrarTextoEncriptadoPantalla();
    listaTexto = [];
    return;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    listaTexto.push(textoDesencriptado);
    mostrarTextoEncriptadoPantalla();
    listaTexto = [];
    return;
}

function mostrarTextoEncriptadoPantalla() {
    limpiarCampo();
    textoEncriptado.value = listaTexto.join();
    return
}

botonCopiar.addEventListener('click', function() {
    let copiar = textoEncriptado.value;
    navigator.clipboard.writeText(copiar)
    return;
});

function limpiarCampo() {
    document.getElementById('texto_encriptado').value = '';
    document.getElementById('texto_encriptar').value = '';
    return;
}

limpiarCampo();

function mostrarImagen() {
    let img = document.getElementById("miImagen");
    console.log(textoIngresado);
    if (window.innerWidth >= 1023) {
        if (textoIngresado === "") {
            img.style.display = "block";
        }else{
            img.style.display = "none";
        }
    }else{
        img.style.display = "none";
    }
    return;
}        

window.addEventListener('resize', mostrarImagen);
document.getElementById("boton_encriptar").addEventListener('click', mostrarImagen);
document.getElementById('boton_desencriptar').addEventListener('click', mostrarImagen);

