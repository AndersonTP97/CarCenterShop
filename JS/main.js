// PRODUCTOS
const productos = [
    // PALOS
    {
        id: "palos-01",
        titulo: "palos 01",
        imagen: "../images/PALOS/PALO01.jpg",
        categoria: {
            nombre: "palos",
            id: "palos"
        },
        precio: 1000
    },
    {
        id: "palos-02",
        titulo: "palos 02",
        imagen: "../images/PALOS/PALO02.jpg",
        categoria: {
            nombre: "palos",
            id: "palos"
        },
        precio: 1000
    },
    {
        id: "palos-03",
        titulo: "palos 03",
        imagen: "../images/PALOS/PALO03.jpg",
        categoria: {
            nombre: "palos",
            id: "palos"
        },
        precio: 1000
    },
    {
        id: "palos-04",
        titulo: "palos 04",
        imagen: "../images/PALOS/PALO04.jpg",
        categoria: {
            nombre: "palos",
            id: "palos"
        },
        precio: 1000
    },
    {
        id: "palos-05",
        titulo: "palos 05",
        imagen: "../images/palos/PALO05.jpg",
        categoria: {
            nombre: "palos",
            id: "palos"
        },
        precio: 1000
    },
    // ropa
    {
        id: "ropa-01",
        titulo: "ropa 01",
        imagen: "../images/ropa/ropa01.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-02",
        titulo: "ropa 02",
        imagen: "../images/ropa/ropa02.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-03",
        titulo: "ropa 03",
        imagen: "../images/ropa/ropa03.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-04",
        titulo: "ropa 04",
        imagen: "../images/ropa/ropa04.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-05",
        titulo: "ropa 05",
        imagen: "../images/ropa/ropa05.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-06",
        titulo: "ropa 06",
        imagen: "../images/ropa/ropa06.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-07",
        titulo: "ropa 07",
        imagen: "../images/ropa/ropa07.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "ropa-08",
        titulo: "ropa 08",
        imagen: "../images/ropa/ropa08.jpg",
        categoria: {
            nombre: "ropa",
            id: "ropas"
        },
        precio: 1000
    },
    // CARROS
    {
        id: "CARROS-01",
        titulo: "CARROS 01",
        imagen: "../images/carros/carro01.jpg",
        categoria: {
            nombre: "CARROS",
            id: "carros"
        },
        precio: 1000
    },
    {
        id: "CARROS-02",
        titulo: "CARROS 02",
        imagen: "../images/carros/carro02.jpg",
        categoria: {
            nombre: "CARROS",
            id: "carros"
        },
        precio: 1000
    },
    {
        id: "CARROS-03",
        titulo: "CARROS 03",
        imagen: "../images/carros/carro03.jpg",
        categoria: {
            nombre: "CARROS",
            id: "carros"
        },
        precio: 1000
    },
    {
        id: "CARROS-04",
        titulo: "CARROS 04",
        imagen: "../images/carros/carro04.jpg",
        categoria: {
            nombre: "CARROS",
            id: "carros"
        },
        precio: 1000
    },
    {
        id: "CARROS-05",
        titulo: "CARROS 05",
        imagen: "../images/carros/carro05.jpg",
        categoria: {
            nombre: "CARROS",
            id: "carros"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos"); //trae los products que estan arriba//*
const botonesCategorias = document.querySelectorAll(".boton-categoria"); //trae los botones de bienvenida//


function cargarProductos() {
    
    contenedorProductos.innerHTML = "";

   
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
         `;

        contenedorProductos.append(div);

    })

    

}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        cargarProductos(productosBoton);

    })
    
})