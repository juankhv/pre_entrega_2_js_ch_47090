const products = [

    { id: 1, nombre: "scooter", precio: 1000 },
    { id: 2, nombre: "bicicleta", precio: 2000 },
    { id: 3, nombre: "patines", precio: 500 },
    { id: 4, nombre: "moto", precio: 4000 },
    { id: 5, nombre: "monorueda", precio: 3000 },
    { id: 6, nombre: "pantineta", precio: 650 },
  
  ];

  let cart = []

  let selection = prompt("Hola quieres comprar algún producto si o no").toLocaleLowerCase()

while(selection != "si" &&  selection != "no"){
    alert ("por favor elige si o no")
    selection = prompt("Hola quieres comprar algún producto si o no")
}
let message = "";
if(selection === "si"){
    alert ("a continuación nuesta lista de productos")
    let allProducts = products.forEach((item) => {
    message += `
        Nombre: ${item.nombre}
        Precio: $${item.precio}
        `;
        
    });
    alert(message);

}else if (selection === "no"){
    alert("Gracias por visitarnos, te esperamos pronto")
}

while(selection != "no"){
    let vmp = prompt("Agrega un producto a tu carrito de compras").toLocaleLowerCase()
    let price = 0

    if(vmp === "scooter" || vmp === "bicicleta" || vmp === "patines" || vmp === "moto" || vmp === "monorueda" || vmp === "patineta"){
        switch (vmp){
            case "scooter":
                price = 1000;
                break;
            case "bicicleta":
                price = 2000;
                break;
            case "patines":
                price = 500;
                break;
            case "moto":
                price = 4000;
                break;
            case "monorueda":
                price = 3000;
                break;
            case "patineta":
                price = 650;
                break;
            default:
                break;
        }
    let units = parseInt(prompt("¿Cuantas unidades quieres llevar?"))
    
    cart.push({vmp, units, price})
    console.log(cart)
    }else {
        alert("No tenemos ese VMP")
    }

    selection = prompt("¿Deseas seguir comprando? si o no").toLocaleLowerCase()

    while(selection === "no"){
        alert("Gracias por tu compra")
        cart.forEach((finalCart) => {
            console.log(`
            Producto: ${finalCart.vmp} 
            Unidades: ${finalCart.units} 
            Total a pagar: $${finalCart.units * finalCart.price}
            `)
        })
    break;

    }
}
const total = cart.reduce((acum, item) => acum + item.price * item.units, 0)
console.log(`El total a pagar por tu compra es: $${total}`)




  