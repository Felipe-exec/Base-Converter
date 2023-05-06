document.addEventListener("DOMContentLoaded", function() {
    decimal()
    binario()
    hexadecimal()
    octal()
});

function decimal() {
    const inputNumberDecimal = document.getElementById("input-number-decimal");
    const btnConfirmarDecimal = document.getElementById("btn-confirmar-decimal");
    const errorMsg = document.getElementById("error-msg-decimal");
    const binarioResultado = document.getElementById("binario-resultado-decimal");
    const hexadecimalResultado = document.getElementById("hexadecimal-resultado-decimal");
    const octalResultado = document.getElementById("octal-resultado-decimal");
    const resultado = document.getElementById("resultado-decimal");

    btnConfirmarDecimal.addEventListener("click", function() {
        let decimal = inputNumberDecimal.value.trim();
        if (decimal.match(/^[-+]?\d*\.?\d+$/) && decimal >= 0) {
            decimal = parseInt(decimal);
        } else {
            decimal = NaN;
        }
        if (isNaN(decimal)) {
            errorMsg.style.display = "block";
            binarioResultado.innerText = "";
            hexadecimalResultado.innerText = "";
            octalResultado.innerText = "";
            resultado.style.display = "none";
        } else {
            errorMsg.style.display = "none";
            resultado.style.display = "block";

            // Conversão para binário
            let binario = "";
            let resto;
            let quociente = decimal;
            while (quociente !== 0) {
                resto = quociente % 2;
                quociente = Math.floor(quociente / 2);
                binario = resto.toString() + binario;
            }
            binarioResultado.innerText = binario;

            // Conversão para hexadecimal
            let hexadecimal = "";
            let restoHex;
            let quocienteHex = decimal;
            while (quocienteHex !== 0) {
                restoHex = quocienteHex % 16;
                quocienteHex = Math.floor(quocienteHex / 16);
                if (restoHex >= 10) {
                    hexadecimal = String.fromCharCode(restoHex + 55) + hexadecimal;
                } else {
                    hexadecimal = restoHex.toString() + hexadecimal;
                }
            }
            hexadecimalResultado.innerText = hexadecimal;

            // Conversão para octal
            let octal = "";
            let restoOct;
            let quocienteOct = decimal;
            while (quocienteOct !== 0) {
                restoOct = quocienteOct % 8;
                quocienteOct = Math.floor(quocienteOct / 8);
                octal = restoOct.toString() + octal;
            }
            octalResultado.innerText = octal;

            if (decimal == 0) {
                binarioResultado.innerText = "0";
                hexadecimalResultado.innerText = "0";
                octalResultado.innerText = "0";
            }
        }
    });
}

function binario() {
    const inputNumberBinario = document.getElementById("input-number-binario");
    const btnConfirmarBinario = document.getElementById("btn-confirmar-binario");
    const errorMsg = document.getElementById("error-msg-binario");
    const decimalResultado = document.getElementById("decimal-resultado-binario");
    const hexadecimalResultado = document.getElementById("hexadecimal-resultado-binario");
    const octalResultado = document.getElementById("octal-resultado-binario");
    const resultado = document.getElementById("resultado-binario");

    btnConfirmarBinario.addEventListener("click", function() {
        let binario = inputNumberBinario.value;
        if (!binario.match(/^[01]+$/)) { // Verifica se o valor não é um número binário
            errorMsg.style.display = "block";
            decimalResultado.innerText = "";
            hexadecimalResultado.innerText = "";
            octalResultado.innerText = "";
            resultado.style.display = "none";
            return;
        }
        let decimal = 0;
        for (let i = 0; i < binario.length; i++) {
            let currentDigit = parseInt(binario.charAt(i));
            decimal += currentDigit * Math.pow(2, binario.length - i - 1);
        }
        if (decimal < 0) {
            decimal = Math.abs(decimal);
        }


        errorMsg.style.display = "none";
        resultado.style.display = "block";

        // Conversão para decimal
        decimalResultado.innerText = decimal;

        // Conversão para hexadecimal
        let hexadecimal = "";
        let restoHex;
        let quocienteHex = decimal;
        while (quocienteHex !== 0) {
            restoHex = quocienteHex % 16;
            quocienteHex = Math.floor(quocienteHex / 16);
            if (restoHex >= 10) {
                hexadecimal = String.fromCharCode(restoHex + 55) + hexadecimal;
            } else {
                hexadecimal = restoHex.toString() + hexadecimal;
            }
        }
        hexadecimalResultado.innerText = hexadecimal;

        // Conversão para octal
        let octal = "";
        let restoOct;
        let quocienteOct = decimal;
        while (quocienteOct !== 0) {
            restoOct = quocienteOct % 8;
            quocienteOct = Math.floor(quocienteOct / 8);
            octal = restoOct.toString() + octal;
        }
        octalResultado.innerText = octal;

        if (binario == 0) {
            decimalResultado.innerText = "0";
            hexadecimalResultado.innerText = "0";
            octalResultado.innerText = "0";
        }
    });
}

function hexadecimal() {
    const inputNumberHexadecimal = document.getElementById("input-number-hexadecimal");
    const btnConfirmarHexadecimal = document.getElementById("btn-confirmar-hexadecimal");
    const errorMsg = document.getElementById("error-msg-hexadecimal");
    const binarioResultado = document.getElementById("binario-resultado-hexadecimal");
    const decimalResultado = document.getElementById("decimal-resultado-hexadecimal");
    const octalResultado = document.getElementById("octal-resultado-hexadecimal");
    const resultado = document.getElementById("resultado-hexadecimal");

    btnConfirmarHexadecimal.addEventListener("click", function() {
        let hex = inputNumberHexadecimal.value.toUpperCase();
        if (!hex.match(/^[0-9A-F]+$/)) { // Verifica se o valor não é um número hexadecimal
            errorMsg.style.display = "block";
            binarioResultado.innerText = "";
            decimalResultado.innerText = "";
            octalResultado.innerText = "";
            resultado.style.display = "none";
            return;
        }
        let decimal = 0;
        for (let i = 0; i < hex.length; i++) {
            let currentDigit = hex.charCodeAt(i) - (hex.charCodeAt(i) < 58 ? 48 : 55); // Converte o caractere para o valor numérico
            decimal += currentDigit * Math.pow(16, hex.length - i - 1);
        }
        errorMsg.style.display = "none";
        resultado.style.display = "block";

        // Conversão para binário
        let binario = "";
        let quocienteBin = decimal;
        while (quocienteBin !== 0) {
            let restoBin = quocienteBin % 2;
            if (restoBin >= 10) {
                restoBin = String.fromCharCode(restoBin + 55);
            }
            binario = restoBin.toString() + binario;
            quocienteBin = Math.floor(quocienteBin / 2);
        }
        binarioResultado.innerText = binario;

        // Conversão para decimal
        decimalResultado.innerText = decimal;

        // Conversão para octal
        let octal = "";
        let restoOct;
        let quocienteOct = decimal;
        while (quocienteOct !== 0) {
            restoOct = quocienteOct % 8;
            quocienteOct = Math.floor(quocienteOct / 8);
            octal = restoOct.toString() + octal;
        }
        octalResultado.innerText = octal;

        if (hex == 0) {
            binarioResultado.innerText = "0";
            decimalResultado.innerText = "0";
            octalResultado.innerText = "0";
        }
    });
}

function octal() {
    const inputNumberOctal = document.getElementById("input-number-octal");
    const btnConfirmarOctal = document.getElementById("btn-confirmar-octal");
    const errorMsg = document.getElementById("error-msg-octal");
    const binarioResultado = document.getElementById("binario-resultado-octal");
    const decimalResultado = document.getElementById("decimal-resultado-octal");
    const hexadecimalResultado = document.getElementById("hexadecimal-resultado-octal");
    const resultado = document.getElementById("resultado-octal");

    btnConfirmarOctal.addEventListener("click", function() {
        let octal = inputNumberOctal.value;
        if (!octal.match(/^[0-7]+$/)) { // Verifica se o valor não é um número octal
            errorMsg.style.display = "block";
            binarioResultado.innerText = "";
            decimalResultado.innerText = "";
            hexadecimalResultado.innerText = "";
            resultado.style.display = "none";
            return;
        }
        let decimal = 0;
        for (let i = 0; i < octal.length; i++) {
            let currentDigit = parseInt(octal.charAt(i));
            decimal += currentDigit * Math.pow(8, octal.length - i - 1);
        }
        if (decimal < 0) {
            decimal = Math.abs(decimal);
        }
        errorMsg.style.display = "none";
        resultado.style.display = "block";

        // Conversão para binário
        let binario = "";
        let resto;
        let quociente = decimal;
        while (quociente !== 0) {
            resto = quociente % 2;
            quociente = Math.floor(quociente / 2);
            binario = resto.toString() + binario;
        }
        binarioResultado.innerText = binario;

        // Conversão para decimal
        decimalResultado.innerText = decimal;

        // Conversão para hexadecimal
        let hexadecimal = "";
        let restoHex;
        let quocienteHex = decimal;
        while (quocienteHex !== 0) {
            restoHex = quocienteHex % 16;
            quocienteHex = Math.floor(quocienteHex / 16);
            if (restoHex >= 10) {
                hexadecimal = String.fromCharCode(restoHex + 55) + hexadecimal;
            } else {
                hexadecimal = restoHex.toString() + hexadecimal;
            }
        }
        hexadecimalResultado.innerText = hexadecimal;

        if (octal == 0) {
            binarioResultado.innerText = "0";
            decimalResultado.innerText = "0";
            hexadecimalResultado.innerText = "0";
        }
    });
}