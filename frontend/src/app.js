import "./Assets/style.css";

// Obtenemos el contenedor principal donde se va a renderizar la app.
const APP_CONTAINER = document.getElementById('app');

const renderApp = () => {
  APP_CONTAINER.innerHTML = `
    <div class="min-h-screen animated-gradient p-8">
      <div class="container mx-auto flex justify-between space-x-8">
        <div class="w-2/5">
          <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div class="bg-blue-600 p-4">
              <h2 class="text-2xl font-bold text-white text-center">Agregar Producto</h2>
            </div>
            <form id="productForm" class="p-6 space-y-4">
              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nombre del Producto</label>
                <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Descripción</label>
                <textarea id="description" name="description" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Precio</label>
                <input type="number" id="price" name="price" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" min="1" required>
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Imagen</label>
                <input type="file" id="image" name="image" accept="image/*" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" required>
              </div>
              <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Agregar Producto
              </button>
            </form>
          </div>
        </div>
        <div class="w-2/5">
          <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div class="bg-blue-600 p-4">
              <h2 class="text-2xl font-bold text-white text-center">Lista de Productos</h2>
            </div>
            <div id="productsList" class="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
// Función para cargar los productos desde la API.
const loadProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const result = await response.json();

    // Verificamos si la respuesta fue exitosa, sino lanzamos un error.
    if (!response.ok) throw new Error(result.message || 'Error al cargar los productos');

    const productsContainer = document.getElementById('productsList');

    // Verificamos si hay productos
    if (result.products.length === 0) {
      // Si no hay productos, mostramos un mensaje
      productsContainer.innerHTML = `<div class="text-center text-gray-500">No hay productos cargados aún.</div>`;
    } else {
      // Si hay productos, los mostramos
      productsContainer.innerHTML = result.products.map(product => `
        <div class="bg-white rounded-lg p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img src="${product.imageURL || 'ruta/default.jpg'}" alt="${product.name || 'Producto sin nombre'}" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-xl font-semibold mb-2 text-blue-600">${product.name || 'Nombre no disponible'}</h3>
          <p class="text-gray-600 mb-2">${product.description || 'Descripción no disponible'}</p>
          <p class="text-lg font-bold text-blue-800">$${isNaN(product.price) ? 'Precio no disponible' : parseFloat(product.price).toFixed(2)}</p>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al cargar los productos: ' + error.message);
  }
};

// Función que maneja el envío del formulario para agregar un producto.
const handleFormSubmit = async (e) => {
  e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario.
  const formData = new FormData(e.target); // Obtenemos los datos del formulario.

  try {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    // Verificamos si la respuesta fue exitosa, sino lanzamos un error.
    if (!response.ok) throw new Error(result.message || 'Error al crear el producto');

    alert(result.message || 'Producto agregado exitosamente');
    e.target.reset(); // Reseteamos el formulario.
    await loadProducts(); // Cargamos nuevamente los productos.
  } catch (error) {
    console.error('Error:', error);
    alert('Error al agregar el producto: ' + error.message);
  }
};

// Inicializamos la aplicación
const getProducts = () => {
  renderApp(); // Renderizamos la interfaz
  loadProducts(); // Cargamos los productos existentes
  document.getElementById('productForm').addEventListener('submit', handleFormSubmit); // Agregamos el evento al formulario
};

// Ejecutamos la función para iniciar la app
getProducts();
