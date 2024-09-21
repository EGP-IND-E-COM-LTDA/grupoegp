function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    if (valor.length > 6) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else if (valor.length > 0) {
        valor = valor.replace(/(\d{0,2})/, '($1');
    }
    input.value = valor;
}
const inputTelefone = document.getElementById('telefone');
inputTelefone.addEventListener('input', () => {
    formatarTelefone(inputTelefone);
});

function formatarCNPJ(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 14) {
        valor = valor.slice(0, 14);
    }
    if (valor.length > 12) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
    } else if (valor.length > 8) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, '$1.$2.$3/$4');
    } else if (valor.length > 5) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d{0,3})/, '$1.$2');
    } else if (valor.length > 0) {
        valor = valor.replace(/(\d{0,2})/, '$1');
    }
    input.value = valor;
}
const inputCNPJ = document.getElementById('cnpj');
inputCNPJ.addEventListener('input', () => {
    formatarCNPJ(inputCNPJ);
});

function formatarCEP(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 8) {
        valor = valor.slice(0, 8);
    }
    if (valor.length > 5) {
        valor = valor.replace(/(\d{5})(\d{0,3})/, '$1-$2');
    }
    input.value = valor;
}
const inputCEP = document.getElementById('cep');
inputCEP.addEventListener('input', () => {
    formatarCEP(inputCEP);
});

function validarEmail(input) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(input.value)) {
        input.classList.remove('erro');
    } else {
        input.classList.add('erro');
    }
}
const inputEmail = document.getElementById('email');
inputEmail.addEventListener('input', () => {
    validarEmail(inputEmail);
});
