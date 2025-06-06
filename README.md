# Proyecto Web

Este es un proyecto web moderno construido con Laravel y React, utilizando las últimas tecnologías y mejores prácticas de desarrollo.

## 🚀 Tecnologías Principales

- **Backend**: Laravel 12.x
- **Frontend**: React 19.x con TypeScript
- **Estilos**: Tailwind CSS 4.x
- **UI Components**: Radix UI
- **Build Tool**: Vite 6.x

## 📋 Requisitos Previos

- PHP 8.2 o superior
- Node.js (última versión LTS)
- Composer
- npm o yarn

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/SystemsUMG/project-web.git
cd project-web
```

2. Instalar dependencias de PHP:
```bash
composer install
```

3. Instalar dependencias de Node:
```bash
npm install
```

4. Configurar el entorno:
```bash
cp .env.example .env
php artisan key:generate
```

5. Configurar la base de datos:
```bash
php artisan migrate
```

## 🚀 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
composer run dev
```

Este comando iniciará:
- Servidor Laravel
- Cola de trabajos
- Logs en tiempo real
- Servidor de desarrollo Vite

## 🧪 Testing

Para ejecutar las pruebas:

```bash
composer test
```

## 📦 Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

## 🛠️ Herramientas de Desarrollo

- ESLint para linting de JavaScript/TypeScript
- Prettier para formateo de código
- PHPUnit/Pest para testing
- Laravel Pint para formateo de PHP

## 📝 Scripts Disponibles

- `composer dev`: Inicia el entorno de desarrollo completo
- `composer test`: Ejecuta las pruebas
- `npm run build`: Construye la aplicación para producción
- `npm run dev`: Inicia el servidor de desarrollo Vite
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. 