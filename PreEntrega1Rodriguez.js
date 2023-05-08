/*
Armando Rodríguez-Mendoza
PreEntrega1Rodriguez.js

1. Pedir al usuario que seleccione un producto A, B o C
2. Pedir al usuario que ingrese la cantidad de unidades del producto que desea comprar
3. Inicializar una variable del subtotal
4. Inicializar una variable de descuento
5. Si la cantidad de unidades es mayor o igual a 10, entonces:
6.   Dar un 10% de descuento al subtotal
7. Si la cantidad de unidades es mayor o igual a 15, entonces:
8.   Dar un 20% de descuento al subtotal
9. Si la cantidad de unidades es mayor o igual a 20, entonces:
10.  Dar un 30% de descuento al subtotal
11. Si la cantidad de unidades es mayor a 20, entonces:
12.  Dar un 35% de descuento al subtotal
13. Calcular el precio final como el subtotal menos el descuento y además un tax de 16%
14. Imprimir el precio final
*/

//Declaración de charts para opciones, constantes para prevenir sobreescritura 
const opcion_A = "A";
const opcion_B = "B";
const opcion_C = "C";
const opcion_E = "E";

//Declaración de precios de los producots, constantes para prevenir sobreescritura 
const producto_A = 10;
const producto_B = 15;
const producto_C = 20;

//Declaración de tipos de descuento, constantes para prevenir sobreescritura 
const descuento_1 = 0.10;
const descuento_2 = 0.20;
const descuento_3 = 0.30;
const descuento_4 = 0.35;

//Contadores en cero
let descuento = 0;
let total = 0;
let subtotal = 0;
let pagar = 0;

//Función para imprimir dificultades
function errores(){
    console.log("Disculpe estamos teninendo dificultades");
}

//Función para solicitar cantidades
function cantidades(){
    let cantidad = prompt("¿Cantidad de productos que desea comprar?");
    cantidad = parseInt(cantidad);
    console.log("Se selecionaron: ",cantidad," productos");
    return cantidad; //Retornar cantidad de productos
}

//Función para calcular subtotal
function subtotales(cantidad, producto){
    subtotal = cantidad * producto;
    console.log("Subtotal: ",subtotal);
    return subtotal; //Retornar subtotal de productos
}

//Función descuentos y total en mayoreos
function mayoreos(subtotal, p_descuento){
    descuento = subtotal * p_descuento;
    total = subtotal-descuento;
    console.log("Descuento: ",descuento); //Imprimir el descuento de las unidades
    console.log("Monto ANTES de tax: ",total); //Imprimir el total de las unidades
    return total; //Retornar el total
}

//Función condicional de cantidades y descuento a mayoreo
function evaluador(cantidad, subtotal){
    if(10 <= cantidad && cantidad <= 19){ //Declaración de rangos, primer caso de mayoreo
        let mayoreo = mayoreos(subtotal, descuento_1); //Crear una variable con la función mayoreos() exportando subtotal y caso de descuento
        pagar += mayoreo; //Contador incremental de cantidad total
    }else if(20 <= cantidad && cantidad <= 29){ //Declaración de rangos, segundo caso de mayoreo
        let mayoreo = mayoreos(subtotal, descuento_2); //Crear una variable con la función mayoreos() exportando subtotal y caso de descuento
        pagar += mayoreo; //Contador incremental de cantidad total
    }else if(30 <= cantidad && cantidad <= 35){ //Declaración de rangos, tercer caso de mayoreo
        let mayoreo = mayoreos(subtotal, descuento_3); //Crear una variable con la función mayoreos() exportando subtotal y caso de descuento
        pagar += mayoreo; //Contador incremental de cantidad total
    }else if(cantidad > 35){ //Declaración de rangos, cuarto caso de mayoreo
        let mayoreo = mayoreos(subtotal, descuento_4); //Crear una variable con la función mayoreos() exportando subtotal y caso de descuento
        pagar += mayoreo; //Contador incremental de cantidad total
    }else if(cantidad <= 9){ //Declaración de rango de menudeo
        let mayoreo = mayoreos(subtotal, 0); //Crear una variable con la función mayoreos() exportando subtotal y caso de descuento
        pagar += mayoreo; //Contador incremental de cantidad total
    }else{
        errores(); //Función para imprimir mensaje de error
    }
}

//Bucle while para repetir n veces el menú hasta que el usuario proporcione una opción válida
while(true){
    let decision = prompt( //Usar let ya que var compete volatilidad y de momento no hay problema con el alcance del bloque de código
        `¡Un gusto atender con nuestro mayoreo y menudeo! Seleccione una opción: \n  (A) Producto A precio: $${producto_A}\n  (B) Producto B precio: $${producto_B}\n  (C) Producto C precio: $${producto_C}\n  (E) Salir\nDebido al alto volúmen de compra, solo podemos procesar una orden por cliente`
        );
    if (decision === opcion_A || //Si la opción existe en el menú
        decision === opcion_B || 
        decision === opcion_C || 
        decision === opcion_E){
        if(decision === opcion_A){ //Caso de selección de producto A
            console.log("Producto A seleccionado");
            let cantidad = cantidades(); //Crear una variable con la función cantidades()
            let subtotal= subtotales(cantidad, producto_A); //Crear una variable con la función subtotales() exportando cantidad y producto
            evaluador(cantidad, subtotal); //Usar función para evaluar exportando cantidad y subtotal
        }else if(decision === opcion_B){ //Caso de selección de producto B   
            console.log("Producto B seleccionado");
            let cantidad = cantidades(); //Crear una variable con la función cantidades()
            let subtotal= subtotales(cantidad, producto_B); //Crear una variable con la función subtotales() exportando cantidad y producto
            evaluador(cantidad, subtotal); //Usar función para evaluar exportando cantidad y subtotal
        }else if(decision === opcion_C){ //Caso de selección de producto C 
            console.log("Producto C seleccionado");
            let cantidad = cantidades(); //Crear una variable con la función cantidades()
            let subtotal= subtotales(cantidad, producto_C); //Crear una variable con la función subtotales() exportando cantidad y producto
            evaluador(cantidad, subtotal); //Usar función para evaluar exportando cantidad y subtotal
        }else if(decision === opcion_E){ //Caso de selección de producto E 
            console.log("¡Hasta pronto!"); //Imprimir despedida 
        }else{
            errores(); //Función para imprimir mensaje de error
        }
        break; //Salir del bucle
    }else{
    alert("Opción inválida"); //Caso contrario
    }
}

if(pagar !=0){//Condicional, si pagar es distinto a 0, se calcula un tax rate
    console.log("A tax rate de 16% \nFavor de pagar: ",(pagar+(pagar*0.16))); //Calcular e imprimir la cantidad total más su tax del 16%
}
//Fin de código