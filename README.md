[English Version](#english)

# 📰 CARAS Landing Page – Suscripción Digital

<div align="center">

  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript" />
  </a>
  <a href="https://styled-components.com/">
    <img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white&style=flat-square" alt="Styled Components" />
  </a>
  <a href="https://testing-library.com/">
    <img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" alt="Jest + RTL" />
  </a>
  <a href="https://alex0-8.github.io/Caras_Landing_Page/">
    <img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" alt="Demo en vivo" />
  </a>

</div>

---

**CARAS Landing Page** es una réplica moderna y responsive de una página de suscripción para la revista **CARAS México**, recreada como ejercicio práctico en EBAC.

El objetivo fue transformar un diseño estático original (HTML + CSS) en una aplicación **React + TypeScript** fiel al estilo editorial de CARAS: elegante, sofisticado, misma tipografía serif, colores, espaciados y jerarquía visual premium.

🔗 **Demo en vivo** → [https://alex0-8.github.io/Caras_Landing_Page/](https://alex0-8.github.io/Caras_Landing_Page/)

<div align="center" >
  <img width="600" height="auto" alt="CARAS_Desktop" src="https://github.com/user-attachments/assets/b9ea9208-aae4-4a4b-b736-3919a09b6f03" />
  <img width="320" height="auto" alt="CARAS_Mobile" src="https://github.com/user-attachments/assets/770c8c5c-d53c-4eeb-8dda-166fa82495ad" />  
</div>

---

## ✨ Características principales

- Diseño **pixel-perfect** inspirado en la identidad visual de CARAS México
- Totalmente **responsive** (mobile-first) – adapta perfectamente a todos los dispositivos
- Sección destacada (hero), beneficios, testimonios y formulario de suscripción simulado
- Validación de formulario en tiempo real (cliente)
- **Accesibilidad** mejorada: navegación completa por teclado, focus visible, aria-labels y mensajes de error anunciados
- Estructura modular con componentes reutilizables
- Estilizado con **styled-components** + tema centralizado
- Pruebas unitarias e integración con **Jest + React Testing Library**

---

## 🛠️ Stack Tecnológico

| Categoría          | Tecnología / Herramienta                          | Notas                                      |
|--------------------|---------------------------------------------------|--------------------------------------------|
| Framework          | React 19+                                         | Hooks + componentes funcionales            |
| Lenguaje           | TypeScript                                        | Tipado fuerte en props y hooks             |
| Estilos            | styled-components + styled-reset                  | Tema consistente + reset CSS               |
| Formularios        | React Hook Form (o custom hook)                   | Validación controlada                      |
| Testing            | Jest + React Testing Library + jest-dom           | Cobertura en formularios y componentes     |
| Build & Deploy     | Create React App + gh-pages                       | Despliegue sencillo en GitHub Pages        |
| Accesibilidad      | ARIA attributes + focus management                | Navegación por teclado sin bucles          |

---

## 🔥 Retos enfrentados y cómo los resolví

| Reto                                          | Solución aplicada                                                                 | Impacto / Aprendizaje                              |
|-----------------------------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------|
| Mantener fidelidad visual al diseño original  | Uso de styled-components con variables de tema + medición precisa de espaciados y tipografías | Alta calidad visual y fácil mantenimiento         |
| Primera vez implementando accesibilidad real  | Agregué `tabIndex`, `aria-label`, `role="alert"` en errores, `aria-live` en mensajes, y manejo manual de focus para evitar bucles en el formulario | Página navegable 100% con teclado – gran mejora en UX inclusiva |
| Evitar bucles de foco en el formulario        | Uso de `useRef` + lógica condicional para mover el foco al siguiente campo válido o al botón | Experiencia fluida sin frustración para usuarios de teclado/screen reader |
| Validación robusta sin librerías pesadas      | Custom hook `useSubscriptionForm` con validación manual + mensajes claros         | Código ligero, predecible y fácil de testear      |
| Tests realistas del flujo de formulario       | Simulación de interacciones completas (change + submit) + mocks y assertions      | Confianza alta en que el formulario funciona       |

---

## 🚀 Cómo empezar (para principiantes)

### 1. ¿Qué necesito tener instalado?

- **Node.js** versión 16 o superior (recomendado 18+)  
  → [Descargar aquí](https://nodejs.org/)

### 2. Pasos para verlo en tu computadora

1. Clona el repositorio  
   ```bash
   git clone https://github.com/Alex0-8/Caras_Landing_Page.git
   cd Caras_Landing_Page
   ```
2. Instala las dependencias
   ```bash
   npm install
   ```
→ Se abrirá automáticamente en http://localhost:3000

## ¡Listo! Ya puedes navegar la landing y probar el formulario.
Comandos más útiles

```bash
  # Iniciar en modo desarrollo
  npm start
  
  # Correr pruebas (modo interactivo)
  npm test
  
  # Ver porcentaje de cobertura de tests
  npm run test:coverage
  
  # Generar versión para producción
  npm run build
  
  # Publicar en GitHub Pages (si tienes configurado gh-pages)
  npm run deploy
```
---

# 📄 Licencia
Siéntete libre de usar, modificar y aprender de este proyecto.
Última actualización importante: 1 de Marzo de 2026
¡Gracias por visitar la landing de CARAS!

---

# English

# 📰 CARAS Landing Page – Digital Subscription

<div align="center">

  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript" />
  </a>
  <a href="https://styled-components.com/">
    <img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white&style=flat-square" alt="Styled Components" />
  </a>
  <a href="https://testing-library.com/">
    <img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" alt="Jest + RTL" />
  </a>
  <a href="https://alex0-8.github.io/Caras_Landing_Page/">
    <img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" alt="Live demo" />
  </a>

</div>

---

**CARAS Landing Page** is a modern, responsive replica of a subscription page for the **CARAS México** magazine, recreated as a practical exercise at EBAC.

The goal was to transform an original static design (HTML + CSS) into a **React + TypeScript** application faithful to CARAS’s editorial style: elegant, sophisticated, same typography, colors, spacing, and a premium visual hierarchy.

🔗 **Live demo** → [https://alex0-8.github.io/Caras_Landing_Page/](https://alex0-8.github.io/Caras_Landing_Page/)

<div align="center" >
  <img width="600" height="auto" alt="CARAS_Desktop" src="https://github.com/user-attachments/assets/b9ea9208-aae4-4a4b-b736-3919a09b6f03" />
  <img width="320" height="auto" alt="CARAS_Mobile" src="https://github.com/user-attachments/assets/770c8c5c-d53c-4eeb-8dda-166fa82495ad" />  
</div>

---

## ✨ Key Features

- **Pixel-perfect** design inspired by CARAS México’s visual identity
- Fully **responsive** (mobile-first) – adapts seamlessly across devices
- Hero section, benefits, testimonials, and a simulated subscription form
- Real-time client-side form validation
- Enhanced **accessibility**: full keyboard navigation, visible focus, aria-labels, and announced error messages
- Modular structure with reusable components
- Styled with **styled-components** + centralized theme
- Unit and integration tests with **Jest + React Testing Library**

---

## 🛠️ Tech Stack

| Category           | Technology / Tool                                 | Notes                                      |
|--------------------|---------------------------------------------------|--------------------------------------------|
| Framework          | React                                         | Hooks + functional components              |
| Language           | TypeScript                                        | Strong typing in props and hooks           |
| Styling            | styled-components                  | Consistent theme               |
| Forms              | React Hook Form (or custom hook)                   | Controlled validation                      |
| Testing            | Jest + React Testing Library + jest-dom           | Coverage on forms and components           |
| Build & Deploy     | Create React App + gh-pages                       | Simple deploy to GitHub Pages              |
| Accessibility      | ARIA attributes + focus management                | Keyboard navigation without loops          |

---

## 🔥 Challenges Faced and Solutions

| Challenge                                       | Applied Solution                                                              | Impact / Learning                                |
|------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------|
| Maintaining visual fidelity to original design | Used styled-components with theme variables + precise measurement of spacing and fonts | High visual quality and easy maintenance         |
| First time implementing real accessibility      | Added `tabIndex`, `aria-label`, `role="alert"` on errors, `aria-live` on messages, and manual focus handling to prevent loops in form | 100% keyboard-navigable page – major UX improvement for inclusivity |
| Avoiding focus loops in the form               | Used `useRef` + conditional logic to move focus to next valid field or button | Smooth experience for keyboard/screen reader users |
| Robust validation without heavy libraries      | Custom hook `useSubscriptionForm` with manual validation + clear messages    | Lightweight, predictable code that’s easy to test  |
| Realistic form flow tests                      | Simulated complete interactions (change + submit) + mocks and assertions      | High confidence that form works correctly         |

---

## 🚀 Getting Started (for beginners)

### 1. What do I need installed?

- **Node.js** version 16 or higher  
  → [Download here](https://nodejs.org/)

### 2. Steps to run it on your machine

1. Clone the repo  
   ```bash
   git clone https://github.com/Alex0-8/Caras_Landing_Page.git
   cd Caras_Landing_Page
   ```
2. Install dependencies
   ```bash
   npm install
   ```
→ It will automatically open at http://localhost:3000

## That’s it! You can now browse the landing page and test the form.
Useful commands

```bash
  # Start in development mode
  npm start
  
  # Run tests (interactive mode)
  npm test
  
  # View test coverage percentage
  npm run test:coverage
  
  # Build production version
  npm run build
```
---

# 📄 License
Feel free to use, modify, and learn from this project.
Last important update: March 1, 2026
Thank you for visiting the CARAS landing page!
