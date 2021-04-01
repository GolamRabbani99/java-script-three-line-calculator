function show(value) {
    document.getElementById("result").value += value;
}

function clearTx() {
    document.getElementById("result").value = '';
}

function calc() {
    let result = document.getElementById("result");
    let value = result.value;
    result.value=eval(value);
}




