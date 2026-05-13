// app.js: Conecta la interfaz de usuario con la lógica de math.js

document.addEventListener('DOMContentLoaded', () => {
    const inputA = document.getElementById('numA');
    const inputB = document.getElementById('numB');
    const btnSumar = document.getElementById('btn-sumar');
    const btnRestar = document.getElementById('btn-restar');
    const resultValue = document.getElementById('result-value');
    const errorMsg = document.getElementById('error-message');

    function showError(show) {
        if (show) {
            errorMsg.classList.remove('error-hidden');
            errorMsg.classList.add('error-visible');
            resultValue.textContent = '\u2014';
            resultValue.setAttribute('data-empty', 'true');
        } else {
            errorMsg.classList.remove('error-visible');
            errorMsg.classList.add('error-hidden');
        }
    }

    function realizarOperacion(operacion) {
        showError(false);
        const a = inputA.value;
        const b = inputB.value;

        // Validamos que haya algún valor
        if (a === '' || b === '') {
            showError(true);
            return;
        }

        try {
            let resultado;
            if (operacion === 'suma') {
                resultado = sumar(a, b);
            } else if (operacion === 'resta') {
                resultado = restar(a, b);
            }
            
            // Animación suave de actualización del resultado
            resultValue.style.opacity = '0';
            setTimeout(() => {
                // Redondear a 3 decimales si es necesario para evitar números excesivamente largos
                if (!Number.isInteger(resultado)) {
                    resultado = parseFloat(resultado.toFixed(3));
                }
                
                resultValue.textContent = resultado;
                resultValue.style.opacity = '1';
                resultValue.style.transition = 'opacity 0.3s ease';
                resultValue.removeAttribute('data-empty');
            }, 150);

        } catch (error) {
            showError(true);
        }
    }

    btnSumar.addEventListener('click', () => realizarOperacion('suma'));
    btnRestar.addEventListener('click', () => realizarOperacion('resta'));
});
