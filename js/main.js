let btnObtener = document.getElementById("btnObtener");

btnObtener.addEventListener("click", function (e) {
    e.preventDefault();
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let num3 = document.getElementById("numero3").value;
    let resp = document.getElementById("respuesta");

    if (verificarNaN(num1, num2, num3)) {
        let arreglo = [num1, num2, num3]
        let may = arreglo.map(function(n){
            return n = parseInt(n)
        })
        document.getElementById("numero1").classList.remove("is-invalid")
        document.getElementById("numero1").classList.add("is-valid")
        document.getElementById("numero2").classList.remove("is-invalid")
        document.getElementById("numero2").classList.add("is-valid")
        document.getElementById("numero3").classList.remove("is-invalid")
        document.getElementById("numero3").classList.add("is-valid")
        let ma = mayor(may);
        resp.innerHTML = `El numero mayor es el ${ma}`
    }

})//evento btnObtener

function mayor(arreglo) {
    let mayor = 0;
    let aux =0
    for (let i = 0; i < arreglo.length; i++) {
        aux = arreglo[i];
        for (let a = 0; a < arreglo.length; a++) {
            if(aux < arreglo[a]){
                mayor = arreglo[a];
            }            
        }
    }
    return mayor;
}

function verificarNaN(n1, n2, n3) {
    let flag = true;
    if (isNaN(n1)) {
        document.getElementById("numero1").classList.remove("is-valid")
        document.getElementById("numero1").classList.add("is-invalid")
        flag = false;
    }
    if (isNaN(n2)) {
        document.getElementById("numero2").classList.remove("is-valid")
        document.getElementById("numero2").classList.add("is-invalid")
        flag = false;
    }
    if (isNaN(n3)) {
        document.getElementById("numero3").classList.remove("is-valid")
        document.getElementById("numero3").classList.add("is-invalid")
        flag = false;
    }

    if (flag) {
        flag = verificarNum(n1, n2, n3);
    }
    return flag;
}

function verificarNum(nu1, nu2, nu3) {
    let flag = true;
    nu1 = parseInt(nu1);
    nu2 = parseInt(nu2);
    nu3 = parseInt(nu3);

    if (nu1 < 1 || nu1 > 100) {
        document.getElementById("numero1").classList.remove("is-valid")
        document.getElementById("numero1").classList.add("is-invalid")
        flag = false;
    }
    if (nu2 < 1 || nu2 > 100) {
        document.getElementById("numero2").classList.remove("is-valid")
        document.getElementById("numero2").classList.add("is-invalid")
        flag = false;
    }
    if (nu3 < 1 || nu3 > 100) {
        document.getElementById("numero3").classList.remove("is-valid")
        document.getElementById("numero3").classList.add("is-invalid")
        flag = false;
    }
    return flag;
}