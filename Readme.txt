✨ Características

Función

Detalle

🔍 Búsqueda unificada

Llama a los tres servicios en paralelo y fusiona los resultados.

⚡ Loaders & mensajes

Indicadores de carga, feedback en caso de errores o sin resultados.

🖼️ Lazy‑loading

Usa loading="lazy" para que las imágenes no bloqueen el First Paint.

♿ Accesibilidad

Salida semántica (<ul role="list">) y textos alternativos correctos.

🛡️ Claves en .env

Las API‑keys se inyectan en tiempo de build con Vite.

📦 100 % Vanilla JS

Sin frameworks, ideal para practicar DOM + Fetch + módulos ES.

🚀 Demo rápida

# 1. Clona el repo
$ git clone https://github.com/tuUsuario/photo-finder.git
$ cd photo-finder

# 2. Instala dependencias
$ npm install

# 3. Arranca modo desarrollo
$ npm run dev

Abre http://localhost:5173 en tu navegador favorito.

🔐 Variables de entorno

Crea un archivo .env (o .env.local) en la raíz con tus credenciales:

VITE_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  # Unsplash Access Key
VITE_PEXELS_API_KEY=563492ad6f91700001000001xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx # Pexels
VITE_PIXABAY_API_KEY=12345678-abcdef1234567890abcdef12                     # Pixabay

⚠️ Nunca subas tu .env a un repositorio público. Incluye un .env.example anónimo para facilitar la instalación a terceros.

🗂️ Estructura de carpetas principal

photo-finder/
├── public/               # Estáticos (favicon, manifest…)
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Main/
│   │   └── Footer/
│   ├── style.css         # Tailwind / CSS tradicional
│   └── main.js           # Punto de entrada
├── index.html
└── vite.config.js

🧩 Scripts de npm

Script

Descripción

dev

Arranca servidor de desarrollo con HMR.

build

Compila para producción en dist/.

preview

Sirve la build para comprobar el resultado.

🤓 Cómo funciona (en 30 s)

const getPhotos = async (keyword) => {
  const [unsplash, pexels, pixabay] = await Promise.all([
    fetchPhotosFromUnsplash(keyword),
    fetchPhotosFromPexels(keyword),
    fetchPhotosFromPixabay(keyword)
  ]);
  printPhotos([...unsplash, ...pexels, ...pixabay]);
};

Módulos ES: los tres helpers fetchPhotosFrom* devuelven arrays normalizados {url, alt}.

Componentes DOM: Header, Main, Footer montan su HTML al ser invocados.

Resultados: printPhotos crea <li><img …></li> dentro de #results.

📝 TODO / Siguientes pasos



🤝 Contribuir

Haz un fork del proyecto.

Crea tu rama: git checkout -b feature/nueva-funcionalidad.

Commit: git commit -m "feat: añade …".

Push: git push origin feature/nueva-funcionalidad.

Abre un Pull Request.