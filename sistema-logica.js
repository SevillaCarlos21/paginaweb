 // =========================================================================
// 1. BASE DE DATOS LOCAL (Tus 35 Materiales Originales e Identificados)
// =========================================================================
// =========================================================================
// 1. BASE DE DATOS (Lista Completa)
// =========================================================================
const listaBaseMateriales = [
    { id: 1, nombre: "Cemento Gris (50kg)", precio: 190.00, img: "https://construramamonterrey.com/wp-content/uploads/2024/07/cemex_cemento_gris_monterrey.png", estado: "Disponible", categoria: "Construcción" },
    { id: 2, nombre: "Varilla de Acero 3/8", precio: 225.50, img: "https://mca-salamanca.com/cdn/shop/products/f4ed610640f9182af3de25d771258561_225x.jpg?v=1587920941", estado: "Disponible", categoria: "Construcción" },
    { id: 3, nombre: "Bulto Cal Hidratada", precio: 145.00, img: "https://plomerama.b-cdn.net/wp-content/uploads/2023/01/568409-z-removebg-preview.png", estado: "Disponible", categoria: "Construcción" },
    { id: 4, nombre: "Block de Concreto (Pza)", precio: 14.50, img: "https://www.grupotekax.com/cdn/shop/files/Sintitulo_600x.png?v=1777922216", estado: "Disponible", categoria: "Construcción" },
    { id: 5, nombre: "Arena de Mina (m3)", precio: 460.00, img: "https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w1MTIxNHxpbWFnZS93ZWJwfGltYWdlcy9oZTgvaDlhLzk1MDgyMDI1NDUxODIud2VicHxmZTZkNjUwMjdiZWM5NGMxYWM1YTlkZDNhYTk1NjI1YWM3MGQ0MzM4NzcyMzU4NmU5MWU0MzZhNDQwNWM5YWQ2", estado: "Disponible", categoria: "Construcción" },
    { id: 6, nombre: "Grava Triturada (m3)", precio: 510.00, img: "https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3w1NTYxNHxpbWFnZS93ZWJwfGltYWdlcy9oMTYvaGFhLzk0NjQ1MTYzNDU4ODYud2VicHw1MWNiNTA4ZDQxMjFkZGQzMTY5ZWQ4N2Q4ZTk4YzVmNDlmNmQyNzkxZGI0ZTAyYTAwZDJlZDQ0MjE1ZTI0OWY4", estado: "Disponible", categoria: "Construcción" },
    { id: 7, nombre: "Ladrillo Rojo (Pza)", precio: 15.40, img: "https://png.pngtree.com/png-clipart/20250205/original/pngtree-red-brick-on-transparent-background-png-image_19330935.png", estado: "Disponible", categoria: "Construcción" },
    { id: 8, nombre: "Alambrón de Acero (kg)", precio: 42.00, img: "https://construactivo.com/9995-large_default/alambron-de-14.jpg", estado: "Disponible", categoria: "Construcción" },
    { id: 9, nombre: "Malla Electrosoldada (m2)", precio: 115.00, img: "https://cdnx.jumpseller.com/casa-cortes/image/26537589/MALLA_ELECTROSOLDADA_6_6_10_10.png?1661197621", estado: "Disponible", categoria: "Construcción" },
    { id: 10, nombre: "Armex de Acero 15x15x4", precio: 195.00, img: "https://storage.googleapis.com/at_private_storage/medina/documentos/ARMEX-15-X-20-X-4-.jpe", estado: "Disponible", categoria: "Construcción" },
    { id: 36, nombre: "Cemento Blanco (50kg)", precio: 210.00, img: "https://cdn.homedepot.com.mx/productos/757300/757300-a1.jpg", estado: "Disponible", categoria: "Construcción" },
    { id: 37, nombre: "Varilla de Acero 1/2", precio: 225.50, img: "https://www.lacasadelhierropitalito.com/wp-content/uploads/2020/06/varilla-media-pulgada_1024x1024.jpg", estado: "Disponible", categoria: "Construcción" },
    { id: 38, nombre: "Bulto Cal Hidratada 25 K", precio: 75.00, img: "https://thfvnext.bing.com/th/id/OIP.KNhVdZHQACweP-kNnIzD4gHaHa?w=198&h=198&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.5&pid=1.7&rm=3", estado: "Disponible", categoria: "Construcción" },
    { id: 39, nombre: "Block de Concreto Economico (Pza)", precio: 9.90, img: "https://thfvnext.bing.com/th/id/OIP.vdpgExN_zAaWEmflqZua6AHaHa?w=179&h=180&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.5&pid=1.7&rm=3", estado: "Disponible", categoria: "Construcción" },
    { id: 40, nombre: "Arena de Mina Gruesa (18K)", precio: 560.00, img: "https://tse3.mm.bing.net/th/id/OIP.H5HqlAjy8_g66Hylq4MX4AHaHa?r=0&cb=thfvnextfalcon2&pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3", estado: "Disponible", categoria: "Construcción" },
    { id: 41, nombre: "Grava Triturada Blanca(m3)", precio: 550.00, img: "https://th.bing.com/th/id/R.706e7a1832fc1dbca542247f0c0490d7", estado: "Disponible", categoria: "Construcción" },
    { id: 42, nombre: "Ladrillo rojo Premium (Pza)", precio: 22.50, img: "https://live.staticflickr.com/2767/4537223164_3dcc4dc14a_b.jpg", estado: "Disponible", categoria: "Construcción" },
    { id: 44, nombre: "Madera de Pino", precio: 350.00, img: "https://tse2.mm.bing.net/th/id/OIP.bdcBG-KqOt4SL_n__HfExwHaEo", estado: "Disponible", categoria: "Construcción" },
    { id: 45, nombre: "Teja", precio: 28.00, img: "https://www.distribuidoramariscal.com.gt/wp-content/uploads/2017/12/capote-veneciana-naranja-angulo-750x750.jpg", estado: "Disponible", categoria: "Construcción" },
    { id: 46, nombre: "Malla Electrosoldada Deportiva", precio: 850.00, img: "https://tse1.mm.bing.net/th/id/OIP.HRVjemaxFcAm4ZC6cbWIGwHaIF", estado: "Disponible", categoria: "Construcción" },
    { id: 47, nombre: "Alambre Recocido N18 (20K)", precio: 148.00, img: "https://thfvnext.bing.com/th/id/OIP.OQLRR2EJlFuJK3Y8g6iEcgHaHa", estado: "Disponible", categoria: "Construcción" },
    // --- ACABADOS (11 productos) ---
    { id: 11, nombre: "Yeso Construcción (40kg)", precio: 135.00, img: "https://amasa.mx/pub/media/catalog/product/cache/752c0b8a99fe30f487529d65d3786ee4/Y/E/YESO_MAXIMO_40_KG-1_3.jpg", estado: "Disponible", categoria: "Acabados" },
    { id: 12, nombre: "Pegaazulejo Blanco (20kg)", precio: 165.50, img: "https://bricomark.mx/wp-content/uploads/2019/02/CREST-ADHESIVOBLANCO-2.png", estado: "Disponible", categoria: "Acabados" },
    { id: 13, nombre: "Pintura Vinílica Blanca (19L)", precio: 1250.00, img: "https://static.wixstatic.com/media/7fa59c_76718c76e49b44baa57d083c7c1ff250~mv2.png/v1/fill/w_480,h_612,al_c,lg_1,q_85,enc_avif,quality_auto/7fa59c_76718c76e49b44baa57d083c7c1ff250~mv2.png", estado: "Disponible", categoria: "Acabados" },
    { id: 14, nombre: "Pintura Vinílica Azul (19L)", precio: 1380.00, img: "https://i5.walmartimages.com/asr/7be54723-316a-4915-a9a6-d4ef1943d35c.057e4db3cfe90636fd996838030908af.png", estado: "Disponible", categoria: "Acabados" },
    { id: 15, nombre: "Impermeabilizante 5 Años", precio: 1680.00, img: "https://bedon.mx/wp-content/uploads/2022/04/IMPERRAIN-58652.png", estado: "Disponible", categoria: "Acabados" },
    { id: 16, nombre: "Porcelanato Brillante (m2)", precio: 285.00, img: "https://home-designmexico.com/cdn/shop/files/Screenshot_2025-10-02_at_10.26.48_a.m..png?v=1759424108&width=800", estado: "Disponible", categoria: "Acabados" },
    { id: 17, nombre: "Azulejo Tipo Madera (m2)", precio: 210.00, img: "https://img.magnific.com/vector-gratis/textura-bloques-madera-pequenos_1100-47.jpg?semt=ais_hybrid&w=740&q=80", estado: "Disponible", categoria: "Acabados" },
    { id: 18, nombre: "Estuco Blanco Exterior", precio: 240.00, img: "https://img.magnific.com/foto-gratis/textura-pared-enlucida-cemento-blanco-aspero_53876-63611.jpg?semt=ais_hybrid&w=740&q=80", estado: "Disponible", categoria: "Acabados" },
    { id: 43, nombre: "Yeso Ceramico", precio: 130.00, img: "https://promart.vteximg.com.br/arquivos/ids/433961-1000-1000/16854.jpg?v=637239087193070000", estado: "Disponible", categoria: "Acabados" },
    { id: 57, nombre: "Pintura Negro Mate", precio: 280.00, img: "https://m.media-amazon.com/images/I/51UNdkprbyL.jpg", estado: "Disponible", categoria: "Acabados" },
    { id: 58, nombre: "Impermeabilizante", precio: 899.00, img: "https://i5.walmartimages.com/asr/750ee4af.png", estado: "Disponible", categoria: "Acabados" },
    // --- HERRAMIENTAS (14 productos) ---
    { id: 19, nombre: "Martillo Concreto Pro", precio: 70.00, img: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-tool-horn-hammer-hammer-image_1161232.jpg", estado: "Disponible", categoria: "Herramientas" },
    { id: 20, nombre: "Cuchara para Albañil 8\"", precio: 125.00, img: "https://www.impactoferretero.mx/images/thumbs/0015225_cuchara-8-pulg-albanil-filadelfia-castor-hc-15-118.jpeg", estado: "Disponible", categoria: "Herramientas" },
    { id: 21, nombre: "Pala Cuadrada Reforzada", precio: 245.00, img: "https://ferreabasto.com/cdn/shop/files/2fadb5ce155ac878dc829018c8ff7ab1.jpg?v=1743272410&width=1200", estado: "Disponible", categoria: "Herramientas" },
    { id: 22, nombre: "Pico Escarificador 5lb", precio: 320.00, img: "https://www.diprofer.com/catalogo/4325-large_default/pico-pico-5-lbs-mango-madera.jpg", estado: "Disponible", categoria: "Herramientas" },
    { id: 23, nombre: "Carretilla Alta Capacidad", precio: 980.00, img: "https://cdn.prod.website-files.com/65a2f012d050261dd5fb4e33/667dbaddb98ab701a265a2c2_CARRETILLA%20SEMIHONDA%204.5%20Pies%20_60%20Litros%20-%20Herramientas%20CH.png", estado: "Disponible", categoria: "Herramientas" },
    { id: 24, nombre: "Flexómetro de Impacto 5m", precio: 110.00, img: "https://ferrecito.com/cdn/shop/files/14578-4.jpg?v=1710433430", estado: "Disponible", categoria: "Herramientas" },
    { id: 25, nombre: "Nivel de Gota Aluminio", precio: 195.00, img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/91c3daae-92e1-492a-96ef-5ae8f927eec1.__CR0,0,300,300_PT0_SX300_V1___.png", estado: "Disponible", categoria: "Herramientas" },
    { id: 48, nombre: "Martillo Cabeza Redonda(Pza)", precio: 227.00, img: "https://i5.walmartimages.com/asr/2a40538f-f191-4064-8feb-8143e21fcc.jpeg", estado: "Disponible", categoria: "Herramientas" },
    { id: 49, nombre: "Martillo manual Mini cabeza redonda Mango de goma", precio: 170.00, img: "https://m.media-amazon.com/images/I/31UJujnXsKL._SL500_.jpg", estado: "Disponible", categoria: "Herramientas" },
    { id: 50, nombre: "Cinta Métrica", precio: 382.80, img: "https://thfvnext.bing.com/th/id/OIP.IagMvmnSrC_wK2WJjaRo3wHaHa", estado: "Disponible", categoria: "Herramientas" },
    { id: 51, nombre: "Nivel con lacer", precio: 420.00, img: "https://thfvnext.bing.com/th/id/OIP.SbGVHLeH3SbZ9KyVCAS0GAHaHg", estado: "Disponible", categoria: "Herramientas" },
    { id: 52, nombre: "Pala Redonda", precio: 180.00, img: "https://cdn.homedepot.com.mx/productos/779295/779295-za1.jpg", estado: "Disponible", categoria: "Herramientas" },
    { id: 53, nombre: "Carretilla", precio: 950.00, img: "https://thfvnext.bing.com/th/id/OIP.alO78jeh2lJu8qU1aKQNqwHaFw", estado: "Disponible", categoria: "Herramientas" },
    { id: 54, nombre: "Cinta Métrica 5m (Pza)", precio: 35.00, img: "https://tse4.mm.bing.net/th/id/OIP.jxT8NSxqFUBKmNVzKUVWywHaFl", estado: "Disponible", categoria: "Herramientas" },
    // --- INSTALACIONES (12 productos) ---
    { id: 26, nombre: "Cisterna Industrial 1200L", precio: 3450.00, img: "https://cdn.homedepot.com.mx/productos/124822/124822-a3.jpg", estado: "Disponible", categoria: "Instalaciones" },
    { id: 27, nombre: "Tubo PVC Sanitario 4\"", precio: 260.00, img: "https://bedon.mx/wp-content/uploads/2024/01/PVCSANITARIO-1.png", estado: "Disponible", categoria: "Instalaciones" },
    { id: 28, nombre: "Tubo CPVC Hidráulico 1/2\"", precio: 115.00, img: "https://bedon.mx/wp-content/uploads/2024/05/TUBO-CPVC-1-2-600x600.png", estado: "Disponible", categoria: "Instalaciones" },
    { id: 29, nombre: "Llave de Paso Esfera 1/2\"", precio: 145.00, img: "https://diplomex.com.mx/store/media/filter/l/img/54e3525e960f2.jpg", estado: "Disponible", categoria: "Instalaciones" },
    { id: 30, nombre: "Pegamento para PVC Pro", precio: 85.00, img: "https://bedon.mx/wp-content/uploads/2024/01/OATEY-4032344MX-1.png", estado: "Disponible", categoria: "Instalaciones" },
    { id: 31, nombre: "Cinta Teflón Selladora", precio: 15.00, img: "https://static.grainger.com/rp/s/is/image/Grainger/21TF19-A0030-1_v1", estado: "Disponible", categoria: "Instalaciones" },
    { id: 32, nombre: "Cable Cobre Calibre 12", precio: 940.00, img: "https://http2.mlstatic.com/D_Q_NP_2X_639366-MLA99370861918_112025-P.webp", estado: "Disponible", categoria: "Instalaciones" },
    { id: 33, nombre: "Tubo Conduit Flexible", precio: 380.00, img: "https://bedon.mx/wp-content/uploads/2024/12/VOLTECK-TF50M.png", estado: "Disponible", categoria: "Instalaciones" },
    { id: 34, nombre: "Centro de Carga 2 Circ.", precio: 290.00, img: "https://static.wixstatic.com/media/e3bef4_c216b77e15c54677a74e220e6a2024ca~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e3bef4_c216b77e15c54677a74e220e6a2024ca~mv2.png", estado: "Disponible", categoria: "Instalaciones" },
    { id: 35, nombre: "Apagador Sencillo Blanco", precio: 35.00, img: "https://nosa.mx/cdn/shop/files/placa-con-apagador-blanco-simon-23-600x600.png?v=1751405161", estado: "Disponible", categoria: "Instalaciones" },
    { id: 55, nombre: "Tubo PVC 6 pulgadas", precio: 95.00, img: "https://m.media-amazon.com/images/I/21IqheYjRNL.jpg", estado: "Disponible", categoria: "Instalaciones" },
    { id: 56, nombre: "Cable Eléctrico calibre 14", precio: 210.00, img: "https://m.media-amazon.com/images/I/61wEjW5FkaL.jpg", estado: "Disponible", categoria: "Instalaciones" },
    // --- FERRETERÍA Y ACCESORIOS (5 productos) ---
    { id: 59, nombre: "Clavos 2 1/2", precio: 45.00, img: "https://tse4.mm.bing.net/th/id/OIP.rxFWQmSq86XgtqQjw8m8NQHaHa", estado: "Disponible", categoria: "Ferretería" },
    { id: 60, nombre: "Tornillos", precio: 55.00, img: "https://thfvnext.bing.com/th/id/OIP.1_el5JHw7vHP4RyjSeDwzwHaE8", estado: "Disponible", categoria: "Ferretería" },
    { id: 61, nombre: "Vidrio", precio: 450.00, img: "https://thfvnext.bing.com/th/id/OIP.Vh1PD-5Qzj2Lm8UF4CvyrwHaE5", estado: "Disponible", categoria: "Accesorios" },
    { id: 62, nombre: "Puerta metálica", precio: 2800.00, img: "https://tse4.mm.bing.net/th/id/OIP.Q1slhezoABA6j9Z18sfhwwHaJ4", estado: "Disponible", categoria: "Accesorios" },
    { id: 63, nombre: "Ventana", precio: 1200.00, img: "https://cdn.homedepot.com.mx/productos/151377/151377-a1.jpg", estado: "Disponible", categoria: "Accesorios" }
];

// Asignamos la lista a la variable global 'materiales'
let materiales = listaBaseMateriales;

// =========================================================================
// 2. FUNCIONES DE RENDERIZADO Y FILTRO
// =========================================================================

function renderizarCatalogo(lista) {
    const grid = document.getElementById("grid-productos");
    if (!grid) return;

    grid.innerHTML = "";
    
    lista.forEach(prod => {
        const card = document.createElement("div");
        card.className = "card-producto";
        card.innerHTML = `
            <div class="contenedor-img-producto">
                <img src="${prod.img}" alt="${prod.nombre}" class="img-material" onerror="this.src='https://placehold.co/150?text=Sin+Imagen'">
            </div>
            <h3>${prod.nombre}</h3>
            <p class="codigo">ID: ${prod.id}</p>
            <p class="precio">$${prod.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${prod.id})" class="btn-add">Añadir al Pedido</button>
        `;
        grid.appendChild(card);
    });
}

function filtrarPorCategoria(categoria) {
    if (categoria === 'Todos') {
        renderizarCatalogo(materiales);
    } else {
        const filtrados = materiales.filter(p => p.categoria === categoria);
        renderizarCatalogo(filtrados);
    }
}

function filtrarMateriales() {
    const busqueda = document.getElementById("input-buscar").value.toLowerCase();
    const filtrados = materiales.filter(p => 
        p.nombre.toLowerCase().includes(busqueda) || 
        p.id.toString().includes(busqueda)
    );
    renderizarCatalogo(filtrados);
}

// Inicializar al cargar
window.onload = () => renderizarCatalogo(materiales);
// =========================================================================
// 2. LÓGICA DE LA TIENDA Y CATÁLOGO (VISTA USUARIO)
// =========================================================================
function inicializarTienda() {
    renderizarCatalogo(materiales);
    actualizarContadorCarritoVisual();
}

function renderizarCatalogo(listaProductos) {
    const grid = document.getElementById("grid-productos");
    if (!grid) return;

    grid.innerHTML = "";
    const disponibles = listaProductos.filter(p => p.estado === "Disponible");

    if (disponibles.length === 0) {
        grid.innerHTML = `<p style="color: #ffffff; grid-column: 1/-1; text-align: center; font-weight: bold;">No hay productos disponibles.</p>`;
        return;
    }

    disponibles.forEach(prod => {
        const card = document.createElement("div");
        card.className = "card-producto";
        card.innerHTML = `
            <div class="contenedor-img-producto">
                <img src="${prod.img}" alt="${prod.nombre}" class="img-material" onerror="this.src='https://placehold.co/150?text=Material'">
            </div>
            <h3>${prod.nombre}</h3>
            <p class="codigo">ID: ${prod.id}</p>
            <p class="precio">$${prod.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${prod.id})" class="btn-add">Añadir al Pedido</button>
        `;
        grid.appendChild(card);
    });
}

// =========================================================================
// 2. LÓGICA DE LA TIENDA Y CATÁLOGO (VISTA USUARIO)
// =========================================================================

function inicializarTienda() {
    renderizarCatalogo(materiales);
    actualizarContadorCarritoVisual();
}

/**
 * Renderiza los productos en el grid.
 * @param {Array} listaProductos - La lista de productos a mostrar.
 */
function renderizarCatalogo(listaProductos) {
    const grid = document.getElementById("grid-productos");
    if (!grid) return;

    grid.innerHTML = "";
    // Filtramos solo los disponibles
    const disponibles = listaProductos.filter(p => p.estado === "Disponible");

    if (disponibles.length === 0) {
        grid.innerHTML = `<p style="color: #ffffff; grid-column: 1/-1; text-align: center; font-weight: bold;">No hay productos disponibles.</p>`;
        return;
    }

    disponibles.forEach(prod => {
        const card = document.createElement("div");
        card.className = "card-producto";
        card.innerHTML = `
            <div class="contenedor-img-producto">
                <img src="${prod.img}" alt="${prod.nombre}" class="img-material" onerror="this.src='https://placehold.co/150?text=Material'">
            </div>
            <h3>${prod.nombre}</h3>
            <p class="codigo">ID: ${prod.id}</p>
            <p class="precio">$${prod.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${prod.id})" class="btn-add">Añadir al Pedido</button>
        `;
        grid.appendChild(card);
    });
}

/**
 * Filtra por texto (Buscador).
 * Nota: Asegúrate de que tu input HTML tenga id="input-buscar"
 */
function filtrarMateriales() {
    const busqueda = document.getElementById("input-buscar").value.toLowerCase();
    const filtrados = materiales.filter(p => 
        p.nombre.toLowerCase().includes(busqueda) || 
        p.id.toString().includes(busqueda)
    );
    renderizarCatalogo(filtrados);
}

/**
 * Filtra por Categoría (Botones).
 * @param {string} categoria - La categoría seleccionada.
 */
function filtrarPorCategoria(categoria) {
    // Si el usuario presiona "Todos", mostramos la lista completa original
    if (categoria === 'Todos') {
        renderizarCatalogo(materiales);
    } else {
        // Filtramos por la propiedad 'categoria' de tus objetos
        const filtrados = materiales.filter(p => p.categoria === categoria);
        renderizarCatalogo(filtrados);
    }
}

// =========================================================================
// 3. GESTIÓN DEL CARRITO DE COMPRAS
// =========================================================================
function agregarAlCarrito(id) {
    const producto = materiales.find(p => p.id === id);
    if (!producto) return;

    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito_constru", JSON.stringify(carrito));
    actualizarContadorCarritoVisual();

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'success',
            title: 'Agregado',
            text: `${producto.nombre} se sumó al pedido.`,
            showConfirmButton: false,
            timer: 1000
        });
    }
}

function actualizarContadorCarritoVisual() {
    const contador = document.getElementById("cart-count");
    if (!contador) return;
    contador.innerText = carrito.reduce((sum, item) => sum + item.cantidad, 0);
}

function inicializarCarrito() {
    renderizarCarrito();
}

function renderizarCarrito() {
    const contenedor = document.getElementById("contenedor-items-carrito");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    let subtotal = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p style='color: #94a3b8;'>El carrito está vacío.</p>";
        if(document.getElementById("resumen-subtotal")) document.getElementById("resumen-subtotal").innerText = "$0.00";
        if(document.getElementById("resumen-total")) document.getElementById("resumen-total").innerText = "$0.00";
        return;
    }

    carrito.forEach((item, index) => {
        const totalPorItem = item.precio * item.cantidad;
        subtotal += totalPorItem;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.style = "background: #1e293b; padding: 15px; border-radius: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;";
        div.innerHTML = `
            <div>
                <h4 style="margin:0; color:#ffffff;">${item.nombre}</h4>
                <p style="margin:5px 0 0 0; color:#94a3b8; font-size:0.85rem;">Precio: $${item.precio.toFixed(2)}</p>
                <p style="margin:2px 0 0 0; color:#ffffff; font-size:0.9rem;">Cantidad: <strong>${item.cantidad}</strong></p>
            </div>
            <div style="text-align: right;">
                <p style="font-weight: bold; color: #d97706; margin:0 0 10px 0;">$${totalPorItem.toFixed(2)}</p>
                <button onclick="eliminarDelCarrito(${index})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-weight:bold;">❌ Quitar</button>
            </div>
        `;
        contenedor.appendChild(div);
    });

    if(document.getElementById("resumen-subtotal")) document.getElementById("resumen-subtotal").innerText = `$${subtotal.toFixed(2)}`;
    if(document.getElementById("resumen-total")) document.getElementById("resumen-total").innerText = `$${subtotal.toFixed(2)}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito_constru", JSON.stringify(carrito));
    renderizarCarrito();
    actualizarContadorCarritoVisual();
}

function procesarCheckOut(event) {
    if (event) event.preventDefault();
    if (carrito.length === 0) return;

    const cliente = document.getElementById("checkout-nombre")?.value || "Cliente General";
    const direccion = document.getElementById("checkout-direccion")?.value || "Entrega Directa";
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const folio = "CG-" + Math.floor(100000 + Math.random() * 900000);
    const fecha = new Date().toLocaleString();

    const nuevaOrden = { folio, fecha, cliente, direccion, items: [...carrito], total };

    historialOrdenes.push(nuevaOrden);
    localStorage.setItem("historial_ordenes", JSON.stringify(historialOrdenes));
    localStorage.setItem("ultima_orden", JSON.stringify(nuevaOrden));

    window.location.href = "ticket.html";
}

// =========================================================================
// 5. GENERACIÓN DEL TICKET DE COMPRA
// =========================================================================
function generarTicket() {
    const orden = JSON.parse(localStorage.getItem("ultima_orden"));
    if (!orden) return;

    if(document.getElementById("folio-ticket")) document.getElementById("folio-ticket").innerText = orden.folio;
    if(document.getElementById("fecha-ticket")) document.getElementById("fecha-ticket").innerText = orden.fecha;
    if(document.getElementById("total-monto-ticket")) document.getElementById("total-monto-ticket").innerText = `$${orden.total.toFixed(2)}`;

    const cuerpoTabla = document.getElementById("tabla-cuerpo-ticket");
    if (!cuerpoTabla) return;
    cuerpoTabla.innerHTML = "";

    orden.items.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.nombre} x${item.cantidad}</td><td style="text-align: right !important;">$${(item.precio * item.cantidad).toFixed(2)}</td>`;
        cuerpoTabla.appendChild(tr);
    });
}

function vaciarYRegresar() {
    localStorage.removeItem("carrito_constru");
    window.location.href = "index.html";
}

// =========================================================================
// 6. PANEL ADMINISTRATIVO (CONTROL DE INVENTARIO)
// =========================================================================
function inicializarPanelAdmin() {
    actualizarTablaAdmin();
    actualizarMétricasAdmin();
    inicializarGraficaVentas();
    renderizarHistorialOrdenesAdmin();
}

function actualizarTablaAdmin() {
    const contenedorTabla = document.getElementById("tabla-inventario-admin");
    if (!contenedorTabla) return;

    contenedorTabla.innerHTML = "";

    materiales.forEach((material, index) => {
        const tr = document.createElement("tr");
        const badgeClass = material.estado === "Disponible" ? "badge-success" : "badge-danger";
        const btnTexto = material.estado === "Disponible" ? "Marcar Agotado" : "Activar";
        const btnColor = material.estado === "Disponible" ? "#ef4444" : "#10b981";

        tr.innerHTML = `
            <td><strong>#${material.id}</strong></td>
            <td>${material.nombre}</td>
            <td>$${material.precio.toFixed(2)}</td>
            <td><span class="badge ${badgeClass}">${material.estado}</span></td>
            <td>
                <button onclick="cambiarEstadoMaterial(${index})" style="background: ${btnColor}; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 0.8rem;">
                    ${btnTexto}
                </button>
            </td>
        `;
        contenedorTabla.appendChild(tr);
    });
}

function cambiarEstadoMaterial(index) {
    materiales[index].estado = materiales[index].estado === "Disponible" ? "Agotado" : "Disponible";
    localStorage.setItem("inventario_materiales", JSON.stringify(materiales));
    actualizarTablaAdmin(); 
}

function modalAgregarMaterial() {
    Swal.fire({
        title: 'Registrar Nuevo Material',
        html: `
            <input id="swal-input-id" type="number" class="swal2-input" placeholder="ID numérico (ej: 36)">
            <input id="swal-input-nombre" class="swal2-input" placeholder="Nombre del Material">
            <input id="swal-input-precio" type="number" class="swal2-input" placeholder="Precio ($)">
        `,
        focusConfirm: false,
        confirmButtonColor: '#d97706',
        preConfirm: () => {
            return {
                id: parseInt(document.getElementById('swal-input-id').value),
                nombre: document.getElementById('swal-input-nombre').value,
                precio: parseFloat(document.getElementById('swal-input-precio').value),
                img: "https://placehold.co/150?text=Material",
                estado: "Disponible"
            }
        }
    }).then((result) => {
        if (result.isConfirmed && result.value.id && result.value.nombre && result.value.precio) {
            materiales.push(result.value);
            localStorage.setItem("inventario_materiales", JSON.stringify(materiales));
            actualizarTablaAdmin();
            actualizarMétricasAdmin();
            Swal.fire('¡Éxito!', 'Material añadido.', 'success');
        }
    });
}

function actualizarMétricasAdmin() {
    const gananciasCard = document.getElementById("adm-ganancias");
    const ventasCard = document.getElementById("adm-ventas-count");
    const itemsCard = document.getElementById("adm-items-count");
    const totalDinero = historialOrdenes.reduce((sum, o) => sum + o.total, 0);

    if (gananciasCard) gananciasCard.innerText = `$${totalDinero.toFixed(2)}`;
    if (ventasCard) ventasCard.innerText = historialOrdenes.length;
    if (itemsCard) itemsCard.innerText = materiales.length;
}

function renderizarHistorialOrdenesAdmin() {
    const tablaHistorial = document.getElementById("tabla-ventas-historial");
    if (!tablaHistorial) return;

    tablaHistorial.innerHTML = "";
    if (historialOrdenes.length === 0) {
        tablaHistorial.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#94a3b8;">No se han procesado pedidos aún.</td></tr>`;
        return;
    }

    historialOrdenes.slice().reverse().forEach(orden => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><span style="color:#38bdf8; font-weight:600;">${orden.folio}</span></td>
            <td>${orden.fecha}</td>
            <td>${orden.cliente}</td>
            <td>${orden.direccion}</td>
            <td style="color:#00e640; font-weight:bold;">$${orden.total.toFixed(2)}</td>
        `;
        tablaHistorial.appendChild(tr);
    });
}

function inicializarGraficaVentas() {
    const ctx = document.getElementById('graficaVentas');
    if (!ctx) return;
    
    Chart.defaults.color = '#94a3b8';
    const ultimosTotales = historialOrdenes.slice(-7).map(o => o.total);
    const ultimosFolios = historialOrdenes.slice(-7).map(o => o.folio);
    const dataGrafica = ultimosTotales.length > 0 ? ultimosTotales : [0, 0, 0, 0, 0, 0, 0];
    const labelsGrafica = ultimosFolios.length > 0 ? ultimosFolios : ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsGrafica,
            datasets: [{
                label: 'Ingresos ($)',
                data: dataGrafica,
                borderColor: '#d97706',
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                borderWidth: 2.5,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { display: false } }
            }
        }
    });
}


function irATienda() { window.location.href = "tienda.html"; }
function cerrarSesion() { window.location.href = "index.html"; }