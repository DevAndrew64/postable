# Convenciones de Git

## Formato de Commits
Esta es la convención de Conventional Commits que se utilizara en adelante:
```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[nota de pie opcional]
```

### Tipos de commits:
- **feat**: Nueva funcionalidad
- **fix**: Corrección de errores
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, comas, etc.)
- **refactor**: Refactorización de código
- **test**: Añadir o modificar tests
- **chore**: Tareas de mantenimiento

### Ejemplos:
```
feat(posts): add post list component
fix(form): validate required fields
docs(readme): update installation steps
style(posts): improve card layout
refactor(service): optimize API calls
```

## Flujo de trabajo con Ramas
- **main**: Rama principal estable
- **Implementaciones**: Rama de desarrollo
- **feature/nombre**: Nuevas características
- **fix/nombre**: Corrección de bugs
