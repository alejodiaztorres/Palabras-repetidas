const texto = document.querySelector("#texto-entrada").textContent.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
const texto2 = document.querySelector("#texto-entrada").textContent.toLowerCase();
const chars = texto.split('');
const words = texto2.split(' ');

function contarLetras(parrafo) {
    let contador = {};
    for (let i in parrafo) {
        let letra = parrafo[i]
        if (!contador[letra]) {
            contador[letra] = 0;
        }
        contador[letra]++;
    }
    for (let [key, value] in contador) {
        tags('p', `<strong>${key}</strong>: ${contador[key]}`);
    }
    return contador;
}

function tags(tag, text) {
    let current_tag = document.createElement(tag);
    current_tag.innerHTML = text;
    document.body.appendChild(current_tag);
}


contarLetras(chars);


function contadorPalabra(parrafo) {
    let contadorPalabra = [];
    for (let i in parrafo) {

        let palabra = parrafo[i]
        if (!contadorPalabra[palabra]) {
            contadorPalabra[palabra] = 0;
        }
        contadorPalabra[palabra]++;
    }
    console.log(contadorPalabra)
    for (let word in contadorPalabra) {
        tags('p', `<strong>${word}</strong>: ${contadorPalabra[word]}`);
    }
    return contadorPalabra;
}
document.write("========PALABRAS=========")
contadorPalabra(words)