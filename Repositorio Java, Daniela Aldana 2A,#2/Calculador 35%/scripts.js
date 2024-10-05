function promediar(){
    let nota1 = +document.getElementById('nota1').value;
    let nota2 = +document.getElementById('nota2').value;
    let nota3 = +document.getElementById('nota3').value;
    let promedio = (nota1 * 0.15) + (nota2 * 0.10) + (nota3 * 0.10)

    salida.textContent = promedio.toFixed(2);

}