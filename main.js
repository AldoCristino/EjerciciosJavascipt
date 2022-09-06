let guardar = document.getElementById("btnGuardar");
let borrar = document.getElementById("btnBorrar");
let btnEjer1 = document.getElementById("btnEjercicio1")
let arreglo = new Array;


guardar.addEventListener("click", function (e) {
    e.preventDefault();
    let numero = document.getElementById("inputNumero").value.toUpperCase();
    let input = document.getElementById("inputNumero")
    console.log(numero);
    if (numero <= 65 && numero >= 90) {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
    } else {
        numero = parseInt(numero);
        arreglo.push(numero);
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        document.getElementById("inputNumero").value = " ";
    }
});//btnGuardar

borrar.addEventListener("click", function (e) {
    e.preventDefault();
    arreglo = new Array;
});

btnEjer1.addEventListener("click", function (e) {
    e.preventDefault();
    let resp = document.getElementById("rspEjer1");
    resp.innerHTML = "el numero mayor del arreglo es:" + mayor();
});


function mayor() {
    let mayor = arreglo[0];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i]
        };
    }
    return mayor;
}