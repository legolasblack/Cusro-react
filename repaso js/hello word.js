/*var nombre="diego iran";
var altura=170;

var concatenacion = nombre + " " + altura;

//document.write(concatenacion);

var datos=document.getElementById("datos");

var stringhtmldatos=`
<h1>hola soy la caja de datos</h1>
<h2>mi nombre es : ${nombre}</h2>
<h3>mido: ${altura}</h3>
`;

if(altura <= 190){
    datos.innerHTML=stringhtmldatos+`<h1>Estas bien tapon</h1>`;
}
else{
    datos.innerHTML=stringhtmldatos+`<h1>Estas muy alto</h1>`;

}

for(var i=0; i<=2020;i++){
    // bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año:  "+i;

} */

//primera definicion de JSON

var coche = {
    modelo:'fiesta',
    marca: 'ford',
    maxima: 500,
    antiguaeda: 2021,

    mostrarDatos(){
        console.log(this.modelo,this.maxima, this.marca);
    }
}
//con esta funcion accedemos a los atributos del json 
//Document.write("<h1>"+coche.modelo+"</h1>");

//invocamos la funcion que imprime el json

coche.mostrarDatos();
console.log(coche);

//practica doble de json

var automovil={
    version: 2021,
    nombre: 'ford ka',

    printdata(){
        console.log(this.version,this.nombre);
    }
}

automovil.printdata();
//formas de escribir funciones dentro de javascript
/*
// Función tradicional
function (a){
    return a + 100;
  }
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los argumentos
  a => a + 100;
//*/
//definicion de promesas
//comenzamos declarando la promesa

var primerpromesa= new Promise(function(resolve,reject){
    setTimeout(() => {
       // let saludo="hola mundo";
       let saludo =null;
       if(saludo){
            resolve(saludo);
        }
        else{
            reject('no hay saludo disponible');
        }
        
    }, 3000);
});

primerpromesa.then(resultado=>{
    alert(resultado);
})
.catch(err=>{
    alert(err);
});


//difinicion de clases 

class Coche{

    constructor(modelo, antiguedad){
        this.modelo=modelo;
        this.antiguaeda=antiguedad;
        this.velocidad=0;
    }
    acelerar(){
        //this.velocidad +=1;
        this.velocidad ++;
    }
}

var coche1 = new Coche('bmw',10);
//Despues de tener inicializado la variable abstracta de Coche como coche 1
//procederemos utilizar el aumento de velocidad e imprimirlo por consola 
console.log(coche1);
console.log(coche1.velocidad);
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
console.log(coche1.velocidad);


//herencia
//a partir de aqui heredaremos e imprimiremos un objeto hija a base de la clase anterior coche 

class Autobus extends Coche{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,antiguedad,velocidad);
        this.altura=5;
    }

    mostrarAltura(){
        return "la altura del bus es: "+ this.altura;
    }

}

var Autobus1 =new Autobus('pegasus', 500, '5 años');

console.log(Autobus1.mostrarAltura());

//hasta aqui el repaso 