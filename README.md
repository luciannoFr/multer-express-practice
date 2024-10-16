
---

# Carga de Productos con imágenes

## Descripción del Proyecto

Este proyecto consiste en un servidor web que permite a los empleados de una tienda cargar productos junto con sus imágenes. Diseñado para ser intuitivo y eficiente, este sistema facilita la gestión de inventarios y la presentación de productos.

## Principales Características

- **Servidor con Express.js**: Estructurado de manera clara, permitiendo una fácil escalabilidad y mantenimiento.
- **Carga de Productos**: Los empleados pueden agregar nuevos artículos con detalles esenciales, como nombre, descripción y precio.
- **Soporte para Imágenes**: Implementa **Multer** para manejar la carga de imágenes, asegurando que solo se acepten formatos `jpg` y `png`.

## Cómo Funciona

1. **Endpoint para Agregar Productos**:
   - **Método:** `POST /products`
   - **Datos a enviar:**
     - `name`: Nombre del producto.
     - `description`: Descripción detallada.
     - `price`: Precio del producto.
     - **Imagen:** Adjunta una imagen del producto.

2. **Almacenamiento de Imágenes**:
   - Las imágenes se guardan en una carpeta `uploads`, generando URLs accesibles para cada carga.

## Estructura de los Productos

Los productos se estructuran de la siguiente manera:

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "imageUrl": "string"
}
```

## Guía de Instalación

### Pasos a seguir:

1. **Clonación del Repositorio**:
   Ejecutá el siguiente comando en tu terminal:
   ```bash
   git clone <URL del repositorio>
   ```

2. **Instalación de Dependencias**:
   - Accedé a la carpeta del **backend** y ejecutá:
     ```bash
     npm install
     ```
   - Luego, accedé a la carpeta del **frontend** y ejecutá:
     ```bash
     npm install
     ```

3. **Ejecución del Servidor**:
   - Iniciá el servidor del **backend** con:
     ```bash
     npm start
     ```
   - Iniciá el servidor del **frontend** con:
     ```bash
     npm run dev
     ```

## Uso de la Aplicación

1. Asegurate de que ambos servidores estén corriendo.
2. Abrí tu navegador y accedé a:
   ```
   http://localhost:5173/
   ```
3. Completa los formularios con la información requerida.
4. Adjuntá la imagen correspondiente en formato `jpg` o `png`.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para construir aplicaciones web.
- **Multer**: Middleware para la carga de archivos.
- **Vite.js**: Herramienta moderna de construcción y desarrollo.
- **TailwindCSS**: Framework CSS para estilos rápidos y personalizados.

---
