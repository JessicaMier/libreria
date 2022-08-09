
class Destino {
    constructor(id, nombre, desde, precio, imagen) {
        this.id = id
        this.nombre = nombre
        this.desde = desde
        this.precio = precio
        this.imagen = imagen

    }
}
const destino1 = new Destino(1, "Bariloche", "Buenos Aires", 35000, "img/bariloche.jpg")
const destino2 = new Destino(2, "Jujuy", "Buenos Aires", 28000, "img/jujuy.jpg")
const destino3 = new Destino(3, "Villa Carlos Paz", "Buenos Aires", 27000, "img/carlosPaz.jpg")
const destino4 = new Destino(4, "Cataratas del Iguazu", "Buenos Aires", 32000, "img/cataratasIguazu.jpg")
const destino5 = new Destino(5, "San Rafael", "Buenos Aires", 28000, "img/mendoza.jpg")
const destino6 = new Destino(6, "Salta", "Mendoza", 25000, "img/salta.jpg")

let productosCarrito= []
localStorage.getItem("carrito") ? carrito = JSON.parse(localStorage.getItem("carrito")): localStorage.setItem("carrito", JSON.stringify(productosCarrito))

const destinos = [destino1, destino2, destino3, destino4, destino5, destino6]
const botonCarrito = document.getElementById("carrito")
const divDestinos = document.getElementById("divDestinos")


destinos.forEach(destino => {
    divDestinos.innerHTML += `
    <div id= "destinos${destino.id}"class="card lugares" style="width: 18rem;">
        <div class="card-body">
            <img src="${destino.imagen}" class="card-img-top foto" style="width: 244px; heigth:162px;" alt="...">
            <h5 class="card-title destinos">${destino.nombre}</h5>
            <p class="card-text destinos">Desde: ${destino.desde}</p>
            <p class="card-text destinos">Precio: $${destino.precio}</p>
            <button class="btn btn-secondary"><i class="fas fa-cart-plus"></i></button>
        </div>
    </div>
        
        `
})


destinos.forEach(destino => {
    document.getElementById(`destinos${destino.id}`).lastElementChild.lastElementChild.addEventListener('click', () => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            //newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to bottom left, #30655A, #0229BA)",
            },
            onClick: function(){
                
            } // Callback after click
          }).showToast();
    })
})


botonCarrito.addEventListener('click', () => {
  
    Swal.fire({
        title: 'Carrito',
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra finalizada', '', 'success')
        } 
      })
})