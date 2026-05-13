/**
 * Suma dos números asegurando que no se concatenen como texto.
 */
function sumar(a, b) {
    // Convertimos a número por si acaso envían cadenas de texto ("5")
    const numA = Number(a);
    const numB = Number(b);
    
    // Validamos si la conversión falló y no es un número válido
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Entrada inválida: deben ser números.");
    }
    
    return numA + numB;
}

/**
 * Resta dos números asegurando el formato numérico.
 */
function restar(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Entrada inválida: deben ser números.");
    }
    
    return numA - numB;
}

// Exportamos las funciones para que Jest y app.js puedan usarlas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar, restar };
}
