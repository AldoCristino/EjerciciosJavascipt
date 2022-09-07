let btnObtener = document.getElementById("btnObtener");

btnObtener.addEventListener("click", function (e) {
    e.preventDefault();
    let num1 = document.getElementById("numero1").value;
    let resp = document.getElementById("respuesta");

    if(verificarNaN(num1)){
        document.getElementById("numero1").classList.remove("is-invalid")
        document.getElementById("numero1").classList.add("is-valid")
        num1 = parseInt(num1);
        //console.log(multiplo(num1));
        if (multiplo(num1)) {
            resp.classList.remove("alert-danger");
            resp.classList.add("alert-sucess")
            resp.innerHTML = `El numero ${num1} es par`
        }else{
            resp.classList.remove("alert-succes");
            resp.classList.add("alert-danger")
            resp.innerHTML = `El numero ${num1} es impar`
        }
    }

})//evento btnObtener

function multiplo(num1) {
    let flag;
    //console.log(num1);
    if((num1%2) == 0){
        flag = true;
    }else{
        flag = false;
    }
    //console.log(flag);
    return flag;
}

function verificarNaN(n1) {
    let flag = true;
    if (isNaN(n1)) {
        console.log("Falla aqui");
        document.getElementById("numero1").classList.remove("is-valid")
        document.getElementById("numero1").classList.add("is-invalid")
        flag = false;
    }

    if (flag) {
        flag = verificarNum(n1);
    }
    return flag;
}

function verificarNum(nu1) {
    let flag = true;
    nu1 = parseInt(nu1);
    
    if (nu1 < 1) {
        console.log("falla aqui");
        document.getElementById("numero1").classList.remove("is-valid")
        document.getElementById("numero1").classList.add("is-invalid")
        flag = false;
    }
    return flag;
}