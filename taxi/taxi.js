 

 let car = {
    marca : "kia",
    model : "sportage",
    placa : "098jhb",
    color : "blanco",
    anio : "2021",
    cuancaaire : false
 
};
function validar (carro){
    let currentyear = 2023;
    let age = currentyear - anio;

    if (age > 10 ){
        return true
    }else {
        return false;
    }
}
let result = validar(car);
alert("el resultado del examen es $ {result");
