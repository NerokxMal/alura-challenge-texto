function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function copiarTexto() {
    const resultado = document.querySelector('.right-panel p.message-title').innerText;
    navigator.clipboard.writeText(resultado)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar el texto:', err));
}

document.querySelector('button.encrypt').addEventListener('click', () => {
    const texto = document.querySelector('textarea').value;
    if (validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        mostrarResultado(textoEncriptado);
    } else {
        alert('Por favor, ingresa solo letras minúsculas y sin acentos.');
    }
});

document.querySelector('button.decrypt').addEventListener('click', () => {
    const texto = document.querySelector('textarea').value;
    if (validarTexto(texto)) {
        const textoDesencriptado = desencriptar(texto);
        mostrarResultado(textoDesencriptado);
    } else {
        alert('Por favor, ingresa solo letras minúsculas y sin acentos.');
    }
});

function mostrarResultado(texto) {
    const messageTitle = document.querySelector('.right-panel p.message-title');
    const messageInfo = document.querySelector('.right-panel p.message-info');
    
    messageTitle.innerText = texto;
    messageInfo.innerText = "Texto transformado con éxito.";
    messageTitle.style.color = '#bd92a3';
}

document.querySelector('button.copy').addEventListener('click', copiarTexto);
