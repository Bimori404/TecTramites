# PRODEA - TecTramites

## Inicio rápido

### :nube: Build Setup

### Instalar entorno de desarrollo

`Instalar nodejs - npm:`
```
 => node --version
  => v18.16.0
 => npm --version
  => v9.5.1
```

`instalar react con vite:`
```
 => npm install vite@latest
    =>select framework: react
    =>select variant: javascript
```

### instalar dependencias

`npm install` || `npm i`

### servidor en localhost:8080

`npm run dev`

## Empezando

TecTramites está construido sobre Tailwind 3.4.1, React y React-router. Para empezar haz los siguientes pasos:

1. Descarga el proyecto
2. Asegúrate de que tienes node.js (<https://nodejs.org>) instalado
3. Escribe `npm install` en la carpeta fuente donde se encuentra `package.json`
4. Escribe `npm run dev` para iniciar el servidor de desarrollo

## Estructura

En la siguiente estructura  se muestran solo los archivos importantes

```
├── 📁tectramites
│   ├── README.md
│   ├── tailwind.config.js
│   │
│   └── 📁src
│       ├── App.jsx
│       │
│       ├── 📁assets
│       │   ├── bg.svg
│       │   └── logo.svg
│       │
│       ├── 📁components
│       │   ├── primary_button.jsx
│       │   └── secondary_button.jsx
│       │
│       ├── index.css
│       ├── main.jsx
│       │
│       └── 📁views
│           ├── LoginView.jsx
│           ├── PrincipalView.jsx
│           │
│           └── 📁docsViews
│               ├── BoletaView.jsx
│               ├── ConstanciaView.jsx
│               └── KardexView.jsx
│
------------------- END -------------------
```

## Missing

- Falta la vista donde se veria el documento seleccionado por el alumno
- De logica falta TODO
