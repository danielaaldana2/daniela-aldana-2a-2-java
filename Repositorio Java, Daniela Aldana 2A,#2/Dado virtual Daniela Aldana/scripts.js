function dado(){
    let num = document.getElementById('numUser');
    let display = document.getElementById('salida');

    let resultado = Math.ceil(Math.random() * num.value);
    display.textContent = resultado;
    setTimeout(final, 1000 *5)
}