# Proyecto de Uso de Módulos en Node.js

Este proyecto utiliza varios módulos nativos de Node.js como `fs`, `os`, `path`, y `pc` para manejar operaciones de archivos, interactuar con el sistema operativo, y realizar otras tareas relacionadas con la administración de archivos y directorios.

## Características

- **fs**: Manejo de archivos, lectura y escritura de datos en archivos.
- **os**: Obtención de información sobre el sistema operativo.
- **path**: Manipulación de rutas de archivos y directorios.
- **pc**: Utilización de un módulo adicional para interactuar con el sistema.

## Archivos del Proyecto

1. **app.js**: Archivo principal del proyecto que hace uso de los módulos mencionados para realizar operaciones.
2. **package.json**: Archivo de configuración de Node.js que contiene las dependencias y configuraciones del proyecto.
3. **package-lock.json**: Archivo de bloqueo que registra la versión exacta de las dependencias instaladas.
4. **.gitignore**: Archivo para ignorar ciertos archivos y directorios durante el seguimiento con Git.
5. **config**: Carpeta de configuración para almacenar archivos de configuración, si es necesario.
6. **txt**: Archivos de texto que pueden ser utilizados para almacenar datos.
7. **fs, os, path, pc**: Ejemplos de código que ilustran cómo usar estos módulos en Node.js.

## Requisitos

Este proyecto requiere tener instalado Node.js. Si no lo tienes, puedes instalarlo desde [aquí](https://nodejs.org/).

## Instrucciones de Uso

1. **Clona el repositorio**:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. **Instala las dependencias**:

    En la raíz del proyecto, ejecuta el siguiente comando:

    ```bash
    npm install
    ```

3. **Ejecuta el proyecto**:

    Para correr el proyecto, utiliza el siguiente comando:

    ```bash
    node app.js
    ```

## Ejemplo de Uso

### Uso del módulo `fs`

El módulo `fs` se utiliza para leer y escribir archivos. A continuación, un ejemplo básico de lectura de un archivo:

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
