// Base de datos de materiales
const PRODUCTOS = [
    { id: 1, nombre: "Cemento Gris (50kg)", precio: 190.00, img: "🏗️" },
    { id: 2, nombre: "Varilla de Acero 3/8", precio: 225.50, img: "🦯" },
    { id: 3, nombre: "Bulto Cal Hidratada", precio: 145.00, img: "🌫️" },
    { id: 4, nombre: "Block de Concreto (Pza)", precio: 14.50, img: "🧱" },
    { id: 5, nombre: "Arena de Mina (m3)", precio: 460.00, img: "⏳" },
    { id: 6, nombre: "Grava Triturada (m3)", precio: 510.00, img: "🪨" },
      { id: 7, nombre: "Ladrillo rojo (Pza)", precio: 15.40, img: "🧱" },
    { id: 8, nombre: "Martillo Cabeza Concreto (Pza)", precio: 70.00, img: "🔨" }
];

// Persistencia de datos
let carrito = JSON.parse(localStorage.getItem('cart_data')) || [];

// Navegación principal
function irATienda() {
    window.location.href = "tienda.html";
}

// Lógica de Tienda
function renderizarTienda() {
    const listado = document.getElementById('lista-productos');
    if (!listado) return;

    listado.innerHTML = PRODUCTOS.map(p => `
        <div class="card-producto">
            <div style="font-size: 3.5rem; margin-bottom: 10px;">${p.img}</div>
            <h3>${p.nombre}</h3>
            <p style="color: #64748b; margin: 5px 0;">Código: 00${p.id}</p>
            <h4 style="color: #1e3a8a; font-size: 1.4rem;">$${p.precio.toFixed(2)}</h4>
            <button class="btn-add" onclick="agregar(${p.id})">Añadir al Pedido</button>
        </div>
    `).join('');
    actualizarNotificacion();
}

function agregar(id) {
    const item = PRODUCTOS.find(p => p.id === id);
    carrito.push(item);
    localStorage.setItem('cart_data', JSON.stringify(carrito));
    actualizarNotificacion();
    
    // Feedback visual breve
    const btn = event.target;
    btn.innerText = "¡Añadido!";
    btn.style.background = "#10b981";
    setTimeout(() => {
        btn.innerText = "Añadir al Pedido";
        btn.style.background = "#1e3a8a";
    }, 800);
}

function actualizarNotificacion() {
    const count = document.getElementById('cart-count');
    if (count) count.innerText = carrito.length;
}

// Lógica de Carrito
function renderizarCarrito() {
    const contenedor = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total-precio');
    if (!contenedor) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2>Tu carrito está vacío</h2>
                <p>Explora el catálogo para añadir materiales.</p>
            </div>`;
        totalElement.innerText = "0.00";
        return;
    }

    contenedor.innerHTML = carrito.map((item, index) => `
        <div class="cart-item">
            <div class="item-info">
                <strong>${item.nombre}</strong>
                <p style="font-size: 0.9rem; color: #64748b;">Precio Unitario: $${item.precio.toFixed(2)}</p>
            </div>
            <button class="btn-remove" onclick="quitar(${index})">Quitar</button>
        </div>
    `).join('');

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalElement.innerText = total.toFixed(2);
}

function quitar(index) {
    carrito.splice(index, 1);
    localStorage.setItem('cart_data', JSON.stringify(carrito));
    renderizarCarrito();
    actualizarNotificacion();
}

function confirmarPedido() {
    if (carrito.length === 0) return alert("El carrito está vacío");
    
    alert("¡Pedido enviado! En breve un asesor de ConstruGlobal te contactará para el pago y envío.");
    carrito = [];
    localStorage.removeItem('cart_data');
    window.location.href = "index.html";
}
function buscarProducto() {
    const texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase();

    const filtrados = PRODUCTOS.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(filtrados);
}