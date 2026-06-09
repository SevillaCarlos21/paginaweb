// BANCO DE DATOS: 35 Materiales de Construcción con URLs de imágenes reales profesionales
const PRODUCTOS = [
    // --- Estructura y Obra Negra (1-10) ---
    { id: 1, nombre: "Cemento Gris (50kg)", precio: 190.00, img: "https://construramamonterrey.com/wp-content/uploads/2024/07/cemex_cemento_gris_monterrey.png" },
    { id: 2, nombre: "Varilla de Acero 3/8", precio: 225.50, img: "https://mca-salamanca.com/cdn/shop/products/f4ed610640f9182af3de25d771258561_225x.jpg?v=1587920941" },
    { id: 3, nombre: "Bulto Cal Hidratada", precio: 145.00, img: "https://plomerama.b-cdn.net/wp-content/uploads/2023/01/568409-z-removebg-preview.png" },
    { id: 4, nombre: "Block de Concreto (Pza)", precio: 14.50, img: "https://www.grupotekax.com/cdn/shop/files/Sintitulo_600x.png?v=1777922216" },
    { id: 5, nombre: "Arena de Mina (m3)", precio: 460.00, img: "https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w1MTIxNHxpbWFnZS93ZWJwfGltYWdlcy9oZTgvaDlhLzk1MDgyMDI1NDUxODIud2VicHxmZTZkNjUwMjdiZWM5NGMxYWM1YTlkZDNhYTk1NjI1YWM3MGQ0MzM4NzcyMzU4NmU5MWU0MzZhNDQwNWM5YWQ2" },
    { id: 6, nombre: "Grava Triturada (m3)", precio: 510.00, img: "https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w1NTYxNHxpbWFnZS93ZWJwfGltYWdlcy9oMTYvaGFhLzk0NjQ1MTYzNDU4ODYud2VicHw1MWNiNTA4ZDQxMjFkZGQzMTY5ZWQ4N2Q4ZTk4YzVmNDlmNmQyNzkxZGI0ZTAyYTAwZDJlZDQ0MjE1ZTI0OWY4" },
    { id: 7, nombre: "Ladrillo Rojo (Pza)", precio: 15.40, img: "https://png.pngtree.com/png-clipart/20250205/original/pngtree-red-brick-on-transparent-background-png-image_19330935.png" },
    { id: 8, nombre: "Alambrón de Acero (kg)", precio: 42.00, img: "https://construactivo.com/9995-large_default/alambron-de-14.jpg" },
    { id: 9, nombre: "Malla Electrosoldada (m2)", precio: 115.00, img: "https://cdnx.jumpseller.com/casa-cortes/image/26537589/MALLA_ELECTROSOLDADA_6_6_10_10.png?1661197621" },
    { id: 10, nombre: "Armex de Acero 15x15x4", precio: 195.00, img: "https://storage.googleapis.com/at_private_storage/medina/documentos/ARMEX-15-X-20-X-4-.jpe" },

    // --- Acabados y Revestimientos (11-18) ---
    { id: 11, nombre: "Yeso Construcción (40kg)", precio: 135.00, img: "https://amasa.mx/pub/media/catalog/product/cache/752c0b8a99fe30f487529d65d3786ee4/Y/E/YESO_MAXIMO_40_KG-1_3.jpg" },
    { id: 12, nombre: "Pegaazulejo Blanco (20kg)", precio: 165.50, img: "https://bricomark.mx/wp-content/uploads/2019/02/CREST-ADHESIVOBLANCO-2.png" },
    { id: 13, nombre: "Pintura Vinílica Blanca (19L)", precio: 1250.00, img: "https://static.wixstatic.com/media/7fa59c_76718c76e49b44baa57d083c7c1ff250~mv2.png/v1/fill/w_480,h_612,al_c,lg_1,q_85,enc_avif,quality_auto/7fa59c_76718c76e49b44baa57d083c7c1ff250~mv2.png" },
    { id: 14, nombre: "Pintura Vinílica Azul (19L)", precio: 1380.00, img: "https://i5.walmartimages.com/asr/7be54723-316a-4915-a9a6-d4ef1943d35c.057e4db3cfe90636fd996838030908af.png" },
    { id: 15, nombre: "Impermeabilizante 5 Años", precio: 1680.00, img: "https://bedon.mx/wp-content/uploads/2022/04/IMPERRAIN-58652.png" },
    { id: 16, nombre: "Porcelanato Brillante (m2)", precio: 285.00, img: "https://home-designmexico.com/cdn/shop/files/Screenshot_2025-10-02_at_10.26.48_a.m..png?v=1759424108&width=800" },
    { id: 17, nombre: "Azulejo Tipo Madera (m2)", precio: 210.00, img: "https://img.magnific.com/vector-gratis/textura-bloques-madera-pequenos_1100-47.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 18, nombre: "Estuco Blanco Exterior", precio: 240.00, img: "https://img.magnific.com/foto-gratis/textura-pared-enlucida-cemento-blanco-aspero_53876-63611.jpg?semt=ais_hybrid&w=740&q=80" },

    // --- Herramientas de Mano (19-26) ---
    { id: 19, nombre: "Martillo Concreto Pro", precio: 70.00, img: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-tool-horn-hammer-hammer-image_1161232.jpg" },
    { id: 20, nombre: "Cuchara para Albañil 8\"", precio: 125.00, img: "https://www.impactoferretero.mx/images/thumbs/0015225_cuchara-8-pulg-albanil-filadelfia-castor-hc-15-118.jpeg" },
    { id: 21, nombre: "Pala Cuadrada Reforzada", precio: 245.00, img: "https://ferreabasto.com/cdn/shop/files/2fadb5ce155ac878dc829018c8ff7ab1.jpg?v=1743272410&width=1200" },
    { id: 22, nombre: "Pico Escarificador 5lb", precio: 320.00, img: "https://www.diprofer.com/catalogo/4325-large_default/pico-pico-5-lbs-mango-madera.jpg" },
    { id: 23, nombre: "Carretilla Alta Capacidad", precio: 980.00, img: "https://cdn.prod.website-files.com/65a2f012d050261dd5fb4e33/667dbaddb98ab701a265a2c2_CARRETILLA%20SEMIHONDA%204.5%20Pies%20_60%20Litros%20-%20Herramientas%20CH.png" },
    { id: 24, nombre: "Flexómetro de Impacto 5m", precio: 110.00, img: "https://ferrecito.com/cdn/shop/files/14578-4.jpg?v=1710433430" },
    { id: 25, nombre: "Nivel de Gota Aluminio", precio: 195.00, img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/91c3daae-92e1-492a-96ef-5ae8f927eec1.__CR0,0,300,300_PT0_SX300_V1___.png" },
    { id: 26, nombre: "Cisterna Industrial 1200L", precio: 3450.00, img: "https://cdn.homedepot.com.mx/productos/124822/124822-a3.jpg" },

    // --- Plomería e Hidráulica (27-31) ---
    { id: 27, nombre: "Tubo PVC Sanitario 4\"", precio: 260.00, img: "https://bedon.mx/wp-content/uploads/2024/01/PVCSANITARIO-1.png" },
    { id: 28, nombre: "Tubo CPVC Hidráulico 1/2\"", precio: 115.00, img: "https://bedon.mx/wp-content/uploads/2024/05/TUBO-CPVC-1-2-600x600.png" },
    { id: 29, nombre: "Llave de Paso Esfera 1/2\"", precio: 145.00, img: "https://diplomex.com.mx/store/media/filter/l/img/54e3525e960f2.jpg" },
    { id: 30, nombre: "Pegamento para PVC Pro", precio: 85.00, img: "https://bedon.mx/wp-content/uploads/2024/01/OATEY-4032344MX-1.png" },
    { id: 31, nombre: "Cinta Teflón Selladora", precio: 15.00, img: "https://static.grainger.com/rp/s/is/image/Grainger/21TF19-A0030-1_v1" },

    // --- Material Eléctrico (32-35) ---
    { id: 32, nombre: "Cable Cobre Calibre 12", precio: 940.00, img: "https://http2.mlstatic.com/D_Q_NP_2X_639366-MLA99370861918_112025-P.webp" },
    { id: 33, nombre: "Tubo Conduit Flexible", precio: 380.00, img: "https://bedon.mx/wp-content/uploads/2024/12/VOLTECK-TF50M.png" },
    { id: 34, nombre: "Centro de Carga 2 Circ.", precio: 290.00, img: "https://static.wixstatic.com/media/e3bef4_c216b77e15c54677a74e220e6a2024ca~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e3bef4_c216b77e15c54677a74e220e6a2024ca~mv2.png" },
    { id: 35, nombre: "Apagador Sencillo Blanco", precio: 35.00, img: "https://nosa.mx/cdn/shop/files/placa-con-apagador-blanco-simon-23-600x600.png?v=1751405161" }
];

let carrito = JSON.parse(localStorage.getItem('cart_data')) || [];

// GESTIÓN DE TIENDA
function renderizarTienda() {
    mostrarProductos(PRODUCTOS);
}

function mostrarProductos(lista) {
    const listado = document.getElementById('lista-productos');
    if (!listado) return;

    if (lista.length === 0) {
        listado.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#94a3b8; padding:20px; font-size:1.2rem;">No se encontraron materiales con ese nombre.</p>`;
        return;
    }

    listado.innerHTML = lista.map(p => {
        let codigoStr = String(p.id).padStart(3, '0');
        return `
            <div class="card-producto">
                <div class="contenedor-img-producto">
                    <img src="${p.img}" alt="${p.nombre}" class="img-material" onerror="this.src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400'">
                </div>
                <h3>${p.nombre}</h3>
                <p style="color: #64748b; margin: 5px 0; font-weight: 500;">Código: ${codigoStr}</p>
                <h4 style="color: #1e3a8a; font-size: 1.4rem; font-weight: bold; margin-top:5px;">$${p.precio.toFixed(2)}</h4>
                <button class="btn-add" onclick="agregar(${p.id})">Añadir al Pedido</button>
            </div>
        `;
    }).join('');
    actualizarNotificacion();
}

function filtrarMateriales() {
    const busqueda = document.getElementById('search-input').value.toLowerCase();
    const filtrados = PRODUCTOS.filter(p => p.nombre.toLowerCase().includes(busqueda));
    mostrarProductos(filtrados);
}

function agregar(id) {
    const producto = PRODUCTOS.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem('cart_data', JSON.stringify(carrito));
    actualizarNotificacion();
    
    // Alerta de confirmación rápida y sutil
    Swal.fire({
        title: '¡Agregado!',
        text: `${producto.nombre} se sumó al carrito.`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#1e293b',
        color: '#ffffff'
    });
}

function actualizarNotificacion() {
    const widget = document.getElementById('contador-cart');
    if (widget) widget.innerText = `Mi Pedido (${carrito.length})`;
}

// GESTIÓN DEL CARRITO
function renderizarCarrito() {
    const contenedor = document.getElementById('lista-carrito');
    const totalSpan = document.getElementById('total-precio');
    if (!contenedor) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; padding: 40px; color:#94a3b8;">
                <h2>Tu carrito está vacío</h2>
                <p style="margin-top:10px;">Regresa al catálogo para añadir materiales de construcción.</p>
            </div>`;
        if(totalSpan) totalSpan.innerText = "0.00";
        return;
    }

    let acumulado = 0;
    contenedor.innerHTML = carrito.map((item, index) => {
        acumulado += item.precio;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${item.img}" class="cart-item-img">
                    <div>
                        <h4 style="color: #0f172a; font-size:1.1rem;">${item.nombre}</h4>
                        <p style="color: #64748b; font-size:0.9rem;">Código asignado: 00${item.id}</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:20px;">
                    <span style="font-weight:bold; color:#1e3a8a; font-size:1.2rem;">$${item.precio.toFixed(2)}</span>
                    <button class="btn-remove" onclick="remover(${index})">Quitar</button>
                </div>
            </div>
        `;
    }).join('');

    if(totalSpan) totalSpan.innerText = acumulado.toFixed(2);
}

function remover(index) {
    carrito.splice(index, 1);
    localStorage.setItem('cart_data', JSON.stringify(carrito));
    renderizarCarrito();
}

// PROCESAMIENTO Y CONFIRMACIÓN CON SWEETALERT
function confirmarPedido() {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito Vacío',
            text: 'Por favor, agregue materiales antes de proceder.',
            icon: 'warning',
            background: '#1e293b',
            color: '#ffffff'
        });
        return;
    }

    // Modal de procesamiento profesional animado (reemplaza alertas nativas del navegador)
    Swal.fire({
        title: 'Procesando Pedido',
        html: 'Validando existencias y generando comprobante...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
        },
        background: '#1e293b',
        color: '#ffffff'
    }).then(() => {
        // Redirección directa al ticket final
        window.location.href = 'ticket.html';
    });
}

// DISPARADOR DEL TICKET FINAL
function generarTicket() {
    const tabla = document.getElementById('tabla-cuerpo-ticket');
    const totalTicket = document.getElementById('total-monto-ticket');
    const folioSpan = document.getElementById('folio-ticket');
    const fechaSpan = document.getElementById('fecha-ticket');

    let productosComprados = JSON.parse(localStorage.getItem('cart_data')) || [];

    if (folioSpan) folioSpan.innerText = "CG-" + Math.floor(100000 + Math.random() * 900000);
    if (fechaSpan) {
        let ahora = new Date();
        fechaSpan.innerText = ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    if (!tabla) return;

    let suma = 0;
    tabla.innerHTML = productosComprados.map(p => {
        suma += p.precio;
        return `
            <tr>
                <td>${p.nombre}</td>
                <td>$${p.precio.toFixed(2)}</td>
            </tr>
        `;
    }).join('');

    if (totalTicket) totalTicket.innerText = "$" + suma.toFixed(2);
}

function vaciarYRegresar() {
    localStorage.removeItem('cart_data');
    window.location.href = 'tienda.html';
}