# Miembros API

Este proyecto es una API REST para gestionar miembros. Permite realizar operaciones de actualización y eliminación sobre los datos de los miembros.

## Estructura del Proyecto

```
miembros-api
├── src
│   ├── app.js                  # Punto de entrada de la aplicación
│   ├── controllers             # Controladores de la API
│   │   └── miembrosController.js # Controlador para manejar miembros
│   ├── routes                  # Rutas de la API
│   │   └── miembrosRoutes.js    # Rutas para operaciones de miembros
│   └── data                   # Datos de la aplicación
│       └── miembros.json       # Archivo JSON con información de miembros
├── package.json                # Configuración de npm y dependencias
└── README.md                   # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd miembros-api
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para ejecutar la API, utiliza el siguiente comando:

```
node src/app.js
```

La API estará disponible en `http://localhost:3000`.

## Endpoints

### Actualizar Miembro

- **Ruta**: `PUT /miembros/:code`
- **Descripción**: Actualiza la información de un miembro existente.
- **Ejemplo de uso**:
  ```
  PUT /miembros/1
  {
    "name": "Alice Johnson",
    "category": "administrador"
  }
  ```

### Eliminar Miembro

- **Ruta**: `DELETE /miembros/:code`
- **Descripción**: Elimina un miembro existente.
- **Ejemplo de uso**:
  ```
  DELETE /miembros/1
  ```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.