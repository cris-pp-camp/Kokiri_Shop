let producto1 = new Producto("Recovery Heart",10);
let producto2 = new Producto("Arrows",15);
let producto3 = new Producto("Bombs",20);
let producto4 = new Producto("Deku Shield",30);
let producto5 = new Producto("Hylian Shield",50);


let carrito = new Carrito();
let total = 0;
const productos = [producto1,producto2,producto3,producto4,producto5];


const startButton = document.getElementById('btn_start');
startButton.addEventListener('click', inicio);



function inicio(){

    let continuar = true;

    while(continuar){

        let idItem = prompt(`Ingresa el # numero del producto que deseas agregar a su carrito: `);

        if (5 < idItem || idItem < 0 || idItem == null){
            alert(`Ingresar un producto valido.`)
            return
        }

        let cantidad = parseInt(prompt(`Ingresa la cantidad de unidades: `),10);

        if ( cantidad < 0){
            alert(`Ingresar una cantidad valida.`)
            return
        }
        
        let add_Producto = productos[idItem-1];
        add_Producto.cantidad = cantidad;

        carrito.addProducto(add_Producto);

        alert(`${add_Producto.cantidad} ${add_Producto.id} se ha agregado al carrito.`)

        let seguir = prompt(`¿Deseas seguir agregando productos? (s/n)`);
        
        if (seguir != 's' && seguir != 'n'){

            alert(`Ingresar una respuesta valida.`)
        }

        if (seguir == 'n'){
            continuar = false;
            alert(`Su compra ha sido agregada al carrito.`)
            total = carrito.total();
            alert(`El total de su compra es: $${total}. Gracias por su compra.  `)
        }
    }
    


}

function Producto(id, precio){
    let _id = id;
    let _precio = precio;
    Object.defineProperties(this,{
        id:{
            get: function(){
                return _id;
            },
        },
        precio:{
            get: function(){
                return _precio;
            }
        }
    })
}

function Carrito(){

    let _productos = [];
    Object.defineProperties(this,{
        productos:{
            get: function(){
                return _productos;
            },
            set: function(new_productos){
                _productos = new_productos;
            }
        }
    })


    this.total = function(){
        return this.productos.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        },0)
    }

    this.addProducto = function(producto){
        this.productos.push(producto)
    }
}
