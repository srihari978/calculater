function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ('0123456789/*-+'.includes(key)) {
        appendToResult(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        const resultField = document.getElementById('result');
        resultField.value = resultField.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearResult();
    }
});
