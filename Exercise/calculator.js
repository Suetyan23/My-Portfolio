let calculation = localStorage.getItem('calculation') || '';

document.getElementById('calculation-display').textContent = calculation;

document.getElementById('button-1').onclick = function () {
    calculation += '1';
    logCalculation();
};

document.getElementById('button-2').onclick = function () {
    calculation += '2';
    logCalculation();
};

document.getElementById('button-3').onclick = function () {
    calculation += '3';
    logCalculation();
};

document.getElementById('button-+').onclick = function () {
    calculation += ' + ';
    logCalculation();
};

document.getElementById('button-4').onclick = function () {
    calculation += '4';
    logCalculation();
};

document.getElementById('button-5').onclick = function () {
    calculation += '5';
    logCalculation();
};

document.getElementById('button-6').onclick = function () {
    calculation += '6';
    logCalculation();
};

document.getElementById('button--').onclick = function () {
    calculation += '-';
    logCalculation();
};

document.getElementById('button-7').onclick = function () {
    calculation += '7';
    logCalculation();
};

document.getElementById('button-8').onclick = function () {
    calculation += '8';
    logCalculation();
};

document.getElementById('button-9').onclick = function () {
    calculation += '9';
    logCalculation();
};

document.getElementById('button-*').onclick = function () {
    calculation += '*';
    logCalculation();
};

document.getElementById('button-0').onclick = function () {
    calculation += '0';
    logCalculation();
};

document.getElementById('button-.').onclick = function () {
    calculation += '.';
    logCalculation();
};

document.getElementById('button-=').onclick = function () {
    calculation = eval(calculation);  //eval converts string into actual math
    logCalculation();
    localStorage.setItem('calculation', calculation);
};

document.getElementById('button-/').onclick = function () {
    calculation += '/';
    logCalculation();
};

document.getElementById('button-clear').onclick = function () {
    calculation = '';
    logCalculation();
    localStorage.removeItem('calculation');
};

function logCalculation() {
    document.getElementById('calculation-display').textContent = calculation;
};


let button = document.getElementById('mode');
let isBrightMode = false;
button.addEventListener('click', function () {
    if (isBrightMode) {
        document.body.classList.remove('bright-mode');
        document.body.classList.add('night-mode');
        button.classList.add('fa-sun');
        button.classList.remove('fa-moon');
        button.style.color = '#FFD43B';
        isBrightMode = false;
    } else {
        document.body.classList.remove('night-mode');
        document.body.classList.add('bright-mode');
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
        button.style.color = '#FFD43B';
        isBrightMode = true;
    }
});
