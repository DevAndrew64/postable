Gestión de Publicaciones - postable

Aplicación Angular para la gestión de publicaciones utilizando la API pública JSONPlaceholder.

==========================
Jhon Ponton, DevAndrew64

## 🚀 Características

- ✅ Listado de publicaciones (máximo 10)
- ✅ Ver detalle completo de publicación
- ✅ Crear nueva publicación con validaciones
- ✅ Editar publicación existente
- ✅ Eliminar publicación con confirmación
- ✅ Notificaciones Toast (success/error/warning/info)
- ✅ Loading spinner global
- ✅ HTTP Interceptor para manejo de errores
- ✅ Reactive Forms con validaciones
- ✅ Tipado estricto con TypeScript
- ✅ Diseño responsive y moderno

## 🛠️ Tecnologías

- **Angular 18+** (Standalone Components)
- **TypeScript** (Tipado estricto)
- **RxJS** (Programación reactiva)
- **SCSS** (Estilos con variables CSS)
- **JSONPlaceholder API** (Backend de prueba)

## 📋 Requisitos previos

- Node.js (v18 o superior)
- npm (v9 o superior)
- Angular CLI (v18 o superior)
```bash
npm install -g @angular/cli
```

## 🔧 Instalación

1. Clonar el repositorio
```bash
git clone 
cd post-pal
```

2. Instalar dependencias
```bash
npm install
```

3. Ejecutar en modo desarrollo
```bash
ng serve
```

4. Abrir en el navegador
```
http://localhost:4200
```

## 📁 Estructura del proyecto
```
src/
├── app/
│   ├── core/
│   │   ├── models/          # Interfaces y tipos
│   │   ├── services/        # Servicios de negocio
│   │   └── interceptors/    # HTTP Interceptors
│   ├── features/
│   │   └── posts/           # Módulo de publicaciones
│   │       └── components/  # Componentes del módulo
│   ├── shared/
│   │   └── components/      # Componentes compartidos
│   ├── app.config.ts        # Configuración de la app
│   ├── app.routes.ts        # Rutas de la aplicación
│   └── app.component.ts     # Componente raíz
└── styles.scss              # Estilos globales
```

## 🎨 Convenciones de código

- **Componentes**: PascalCase (ej: `PostsComponent`)
- **Servicios**: PascalCase + Service (ej: `PostService`)
- **Interfaces**: PascalCase (ej: `Post`)
- **Variables**: camelCase (ej: `selectedPost`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `API_URL`)

## 🧪 Testing
```bash
# Ejecutar tests unitarios
ng test

# Ejecutar tests e2e
ng e2e
```

## 📦 Build
```bash
# Build de producción
ng build --configuration production

# Los archivos se generan en dist/
```

## 🌐 API

Este proyecto consume la API pública de JSONPlaceholder:
- Base URL: https://jsonplaceholder.typicode.com
- Endpoints utilizados:
  - GET /posts - Listar publicaciones
  - GET /posts/:id - Obtener publicación
  - POST /posts - Crear publicación
  - PUT /posts/:id - Actualizar publicación
  - DELETE /posts/:id - Eliminar publicación
