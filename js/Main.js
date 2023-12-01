function saludo(){ 
    alert("Bienvenido Usuario!"); 
}

function suma(){
    //declarar variables necesarias

    let A =0;
    let B =0;
    let suma =0;
    //Solicitar Valores
    alert("Este algoritmo realiza la suma de dos valores ingresado por usted");
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar "));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    //REalizar las operaciones
    suma = A+B;
    //Mostramos resultado
    alert("El resultado de la suma es "+ suma);

}

function operacionBasica(){
    let A =0;
    let B =0;
    let resta=0;
    let multi=0;
    let div=0;
    alert("Este algoritmo realiza operaciones como resta multiplicacion y division");
    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"))

    resta = A-B;
    multi = A*B;
    div = A/B;

    alert("El resutado de los valores ingresados es "+" Resta: "+resta+" Multiplicación: "+multi +" Division: " +div);

}

function cuadrado(){
    let A =0;
    let cuadrado= 0;
    alert("Este algoritmo realizara una operacion donde saca el cuadrado de el numero escrito");

    A= parseInt(prompt("Ingrese el numero que quiere sacarle el cuadrado"));

    cuadrado = A**2;

    alert("El cuadrado del numero escrito es: " +cuadrado +"cm²");
}

function areaTriangulo(){
    let Base=0;
    let Altura=0;
    let area=0;
    alert(" Este algoritmo sacará el area de un triangulo segun los datos registrados");

    Base= parseInt(prompt("Cual es la base del triangulo"));
    Altura= parseInt(prompt("Cual es la altura del triangulo"));

    area= Base*Altura/2;

    alert("El area del triangulo es "+ area);
}

function numeroMayor(){
    let A,B = 0;
    // alert("");
    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    if (A==B) {
        alert("Los valores ingresados son iguales");
    }else if(A > B){

        alert(A+ " Es mayor que "+ B);

    }else{
        alert(B+ " Es mayor que "+A);
    }


}
function conversionUnidad(){
    let Metro = 0;
    let pulgada = 0;
    let Pie = 0;
    let Kilometro = 0;

    alert("Este algoritmo convertira el dato registrado en las unidades de medida como pulgada, Pie y kilometro");

    Metro= parseInt(prompt(" Escriba la cantidad de metros a convertir."));
    pulgada= Metro*(39.37/1.0);
    Pie= Metro*(3.28/1.0);
    Kilometro = Metro*(1.0/1000);

    alert("los metros registrado convertidos en pulgadas son: "+ pulgada+"\n"+"los metros registrado convertidos en pie son: "+ Pie +"\n" +"los metros registrado convertidos en kilometros son: "+Kilometro);
}

function conversionTemperatura(){
    let centigrados =0;
    let farenheit =0;
    let celcius =0;

    alert("Este algoritmo convierte los grados a farenheit y celcius");

    centigrados= parseFloat("Ingrese los grados que desea convertir");
    farenheit =(centigrados*1.8)+32;
    celcius =centigrados

    alert("los grados que registro convertidos a farenheit son: "+ farenheit+"\n"+"los grados que registro convertidos a celcius son: "+celcius);
}


function promedioEstudiante(){
    let sumnota=0;
    let nota=0;
    let nombre= "";
    let promedio=0;
    let contador=0;

    alert("En este algoritmo se sacara el promedio de un estudiante con diez notas para saber si paso o roprobo");
    nombre= prompt("Escriba su nombre");
    for (let i= 1; i<=10; i++){
        nota= parseInt(prompt("Escriba sus notas: "));   
        sumnota= sumnota+nota;
        contador++
    }
    promedio= sumnota / contador;
    alert("Estudiante "+ nombre+"\n"+"su nota total es de: "+ promedio);
}



function parimpar(){
    let numero= 0;

    alert("Este algortimo te mostrará si el numero que registro es impar o par");

    numero= parseInt(prompt("Ingrese un numero"));

    if(numero %2===0){
        alert(numero + " El numero registrado es par ");
    }else{
        alert(numero +" El numero registrado es impar");
    }
}

function salario(){
    let horas= 0;
    let salario= 0;
    let extra= 0;
    let basico= 0;

    alert("Este algoritmo calculara las horas del trabajador")
    horas= parseInt(prompt ("Ingrese el numero de horas que trabaja"));

    if (horas <= 40) {
        salario= 10000 * horas;
        alert("usted trabaja " + horas + " horas, su salario semanal es de: " + salario);
    } else {
        basico= 40 * 10000;
        extra= horas - 40;
        salario= extra * 20000;
        total= salario + basico;
        alert("usted trabaja " + horas + " por horas extra recibe un bonus de: " + salario + ", su salario por primeras 40 horas es de: " + basico + " el total de su salario es de: " + total);
    }
}



function menor3(){
    let numero1=0;
    let numero2=0;
    let numero3=0;

    alert("Este algoritmo va a mostrar el numero menor de los 3 que hayas puesto");

    numero1= parseInt(prompt("Escriba el primer numero"));
    numero2= parseInt(prompt("Escriba el segundo numero"));
    numero3= parseInt(prompt("Escriba el tercer numero"));
    if(numero1 < numero2 && numero1<numero3){
        alert(numero1+ " El primer numero es menor que el segundo numero: "+numero2 +" y el tercer numero: "+numero3);
    }else if(numero2 < numero1 && numero2 < numero3){
        alert(numero2+" El segundo numero es  menor que el primer numero: "+numero1+ " y el tercer numero: "+numero3);
    }else{
        alert(numero3+" El tercer numero es menor que el primer numero: "+ numero1+ "y el segundo numero: "+numero3);
    }

}

function descuentoFruteria(){
    let kilos=0;
    let valorCompra=0;
    let promocion=0;
    alert("A continuación segun el peso por kilos se le hara o no un descuento:");
    kilos= parseInt(prompt("Cuanto peso (kilos) pesa su compra?"));
    valorCompra= parseInt(prompt("Cual es el valor de la compra?"));

    if(kilos <=2){
        alert("Su compra no cumple con el peso para el descuento por lo tanto debe pagar: "+valorCompra);
    }else if(kilos >=3 && kilos <=5){
        promocion=valorCompra*0.1
        descuento=valorCompra-promocion
        alert("Su compra pesa igual o mayor a 3 kilos tiene 10% de descuento debe pagar: " +descuento);
    }else if(kilos >=6 && kilos <10){
        promocion=valorCompra*0.15
        descuento=valorCompra-promocion
        alert("Su compra pesa igual o mayor a 6 kilos tiene 15% de descuento debe pagar: " +descuento);
    }else if(kilos >=10){
        promocion=valorCompra*0.2
        descuento=valorCompra-promocion
        alert("Su compra pesa igual o mayor a 10 kilos tiene 20% de descuento debe pagar: " +descuento );
    }
}