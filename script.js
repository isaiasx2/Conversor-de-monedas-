(async () => {
    const {value: usuario} = await Swal.fire({
        title: `¿CUANTO VALE MI MONEDA?`,
        text:`Ingresa tu nombre.`,
        imageUrl: `https://img.freepik.com/vector-gratis/linda-chica-rica-ilustracion-icono-vector-dibujos-animados-dinero-concepto-icono-finanzas-personas-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3861.jpg?t=st=1650855367~exp=1650855967~hmac=5b67dec4075af8495890fef088e93fdd216017be9230188cd3a8b02d2e5472ad&w=740`,
        width: `300px`,
        confirmButtonText: `A CAMBIAR!`,
        padding: `2rem`,
        grow: `fullscreen`,
        backdrop:`true`,
        allowOutsideClick: `false`,
        allowEscapeKey:`false`,
        allowEnterKey:`true`,
        input: `text`,
        inputPlaceholder: `Nombre`,
        inputValue: ``,  
    });
    if(usuario){

let user = usuario;
let mititulo = document.getElementById("encabezado");

mititulo.innerHTML=`<h3>bienvenido ${user} </h3>`
    }
})()











const verValores = [
{nombre: "Dolar", valor:201.00},
{nombre: "Euro", valor: 123.33},
{nombre: "Yen", valor:0.90},
{nombre: "Real", valor: 23.85},
]




        
    const monedas = [
    {id: 1,valor: 203.05, nombre: "Dolar",},
    {id: 2, valor: 123.33, nombre: "Euro"},
    {id: 3, valor: 0.91, nombre:"Yen"},
    {id: 4, valor: 23.85, nombre:"Real"}];

    localStorage.setItem("MIS_MONEDAS", JSON.stringify(monedas));
    let mismonedas = JSON.parse(localStorage.getItem("MIS_MONEDAS"));



    


const conver = document.querySelector("#cotizador");

conver.addEventListener("click",()=>convertir());

function convertir() {

    const  valore = parseInt(document.getElementById("valor").value);
   
    
    let dolar = {...mismonedas[0]}?.valor
    let euro = {...mismonedas[1]}?.valor
    let yen = {...mismonedas[2]}?.valor
    let real = {...mismonedas[3]}?.valor

  
    
    if(document.getElementById("dol").checked)
    {
        let resultado = valore / dolar;
        let mValores = document.getElementById("a");
        Swal.fire ({
            text: `El resultado es: ${resultado.toFixed(2)} dolares`,
            imageUrl: `https://cdn-icons-png.flaticon.com/512/1247/1247025.png?w=740&t=st=1650854229~exp=1650854829~hmac=c2f3f8814da2064a39dbd18d9166b5a61ebc12509598021e3ab8fc770823c90e`,
            width: `300px`,
            

        })
    
    }
    else if (document.getElementById("eur").checked)
    {
        let resultado = valore / euro;
        let mValores = document.getElementById("b");
        Swal.fire({
            text: `El resultado es: ${resultado.toFixed(2)} euros`,
            imageUrl: `https://cdn-icons-png.flaticon.com/512/1247/1247025.png?w=740&t=st=1650854229~exp=1650854829~hmac=c2f3f8814da2064a39dbd18d9166b5a61ebc12509598021e3ab8fc770823c90e`,
            width: `300px`,
        })

    }
    else if (document.getElementById("yen").checked)
    {
        let resultado = valore / yen;
        let mValores = document.getElementById("c");
        Swal.fire({
            text:`El resultado es: ${resultado.toFixed(2)} yenes`,
            imageUrl:`https://cdn-icons-png.flaticon.com/512/1247/1247025.png?w=740&t=st=1650854229~exp=1650854829~hmac=c2f3f8814da2064a39dbd18d9166b5a61ebc12509598021e3ab8fc770823c90e`,
            width:`300px`,
        })
    }
    else if (document.getElementById("real").checked)
    {
        let resultado = valore / real;
        let mValores = document.getElementById("d");
        Swal.fire({
            text:`El resultado es: ${resultado.toFixed(2)} reales`,
            imageUrl: `https://cdn-icons-png.flaticon.com/512/1247/1247025.png?w=740&t=st=1650854229~exp=1650854829~hmac=c2f3f8814da2064a39dbd18d9166b5a61ebc12509598021e3ab8fc770823c90e`,
            width: `300px`,

        })
    }
    else
    {
    Swal.fire({
        text: `Te falta ingresar datos`,
        icon: `error`,
        
    });
   
    }
    
    }
    
    
  

const dolardes =  {id: 1,valor: 203.05, nombre: "Dolar"};
const eurodes = {id: 2,valor: 123.33, nombre: "Euro"};
const yendes = {id: 3,valor: 0.91, nombre: "Yen"};
const realdes = {id: 4,valor: 23.85, nombre: "Real"};

const {id, valor, nombre} = dolardes;


const boton1 = document.querySelector("#boton1");
boton1.addEventListener("click", ()=>dolarhoy());

function dolarhoy()
{
const {id, valor, nombre} = dolardes;
Swal.fire({
    title: `DOLAR HOY`,
    html: `<h2>EL VALOR DEL DOLAR HOY ES ${dolardes.valor} PESOS ARGENTINOS</h2>`,
    imageUrl: `https://cdn-icons-png.flaticon.com/512/1245/1245647.png?w=826`,
    width: `300px`,
    allowEnterKey:`true`,
    allowOutsideClick:`false`,

})
}
const boton2 = document.querySelector("#boton2");
boton2.addEventListener("click", ()=>eurohoy());
function eurohoy()
{
const {id, valor, nombre} = eurodes;
Swal.fire({
    title: `EURO HOY`,
    html: `<h2>EL VALOR DEL EURO HOY ES ${eurodes.valor} PESOS ARGENTINOS</h2>`,
    imageUrl: `https://cdn-icons-png.flaticon.com/512/1245/1245647.png?w=826`,
    width: `300px`,
    allowEnterKey:`true`,
    allowOutsideClick:`false`,

})
}
const boton3 = document.querySelector("#boton3");
boton3.addEventListener("click", ()=>yenhoy());
function yenhoy()
{
const {id, valor, nombre} = yendes;
Swal.fire({
    title: `YEN HOY`,
    html: `<h2>EL VALOR DEL YEN HOY ES ${yendes.valor}  PESOS ARGENTINOS</h2>`,
    imageUrl: `https://cdn-icons-png.flaticon.com/512/1245/1245647.png?w=826`,
    width: `300px`,
    allowEnterKey:`true`,
    allowOutsideClick:`false`,

})
}
const boton4 = document.querySelector("#boton4");
boton4.addEventListener("click", ()=>realhoy());
function realhoy()
{
const {id, valor, nombre} = realdes;
Swal.fire({
    title: `REAL HOY`,
    html: `<h2>EL VALOR DEL REAL HOY ES ${realdes.valor} PESOS ARGENTINOS</h2>`,
    imageUrl: `https://cdn-icons-png.flaticon.com/512/1245/1245647.png?w=826`,
    width: `300px`,
    allowEnterKey:`true`,
    allowOutsideClick:`false`,
    

})
}
let url = `https://api.estadisticasbcra.com/usd`
const mostrarDatos = document.querySelector("#data");

fetch(url,{
    headers:{
        Authorization: `BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODMwNjYzNzksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJpc2FpYXMubHVxdWV6QGdtYWlsLmNvbSJ9.20qhR3YfWTn16mzZU6AGND_moNGuP2eWl3rdSMdlYXS7DvK4QC2B8GPvLbgM6S7_pzKSJcUOBYWH97ZyOhOsGg`
    }
}).then(Response=>Response.json())
.then(datos=>mostrarCotizacion(datos))
.catch(error => console.log(error))




const mostrarCotizacion = (datos)=>{
    console.log(datos);
    let body = ``
    for (let i = datos.length-10; i< datos.length; i++) 
    {
        body += `<tr><td>${datos[i].d}</td><td>${datos[i].v}</td></tr>`
    }
   mostrarDatos.innerHTML= body
    

}