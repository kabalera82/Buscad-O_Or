import './style.css';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Main from './components/Main/Main.js';

const buildWebsite = () => { // Function to build the website
    Header(); // Call the Header function
    Main(); // Call the Main function
    Footer(); // Call the Footer function
    getPhotos("Vigo");
}

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

const getPhotos = async (keyword) => {
    try {
        const unsplashPhotos = await fetchPhotosFromUnsplash(keyword);
        const pexelsPhotos = await fetchPhotosFromPexels(keyword);
        const pixabayPhotos = await fetchPhotosFromPixabay(keyword);
        const allPhotos = [...unsplashPhotos, ...pexelsPhotos, ...pixabayPhotos];
        printPhotos(allPhotos);
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
};

const fetchPhotosFromUnsplash = async (keyword) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=30&client_id=${CLIENT_ID}`);
    const data = await response.json();
    return data.results.map(photo => ({
        url: photo.urls.regular,
        alt: photo.alt_description
    }));
};

const fetchPhotosFromPexels = async (keyword) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${keyword}&per_page=80`, {
        headers: {
            Authorization: PEXELS_API_KEY
        }
    });
    const data = await response.json();
    return data.photos.map(photo => ({
        url: photo.src.medium,
        alt: photo.photographer
    }));
};

const fetchPhotosFromPixabay = async (keyword) => {
    const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${keyword}&image_type=photo&per_page=200`);
    const data = await response.json();
    return data.hits.map(photo => ({
        url: photo.webformatURL,
        alt: photo.tags
    }));
};

const printPhotos = (photos) => { 
    const container = document.querySelector("#results");
    const message = document.querySelector("#message");

    if (!container || !message) {
        console.error("Elementos #results o #message no encontrados en el DOM.");
        return;
    }

    if (photos.length === 0) {
        container.innerHTML = "";
        message.textContent = "🎶🎵Sigue Buscando, 🎶🎵Sigue Buscando🎶🎵";
    } else {
        container.innerHTML = "";
        message.textContent = "";
        for (const photo of photos) {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${photo.url}" alt="${photo.alt}"/>`;
            container.appendChild(li);
        }
    }
}; // Aquí cerramos correctamente la función printPhotos

// 1ª hacemos la llamada a pintar toda la web 
buildWebsite(); 

// 2ª hacemos la llamada a la función getPhotos y getCity
document.querySelector("#searchBtn").addEventListener("click", () => {
    const value = document.querySelector("#searchInput").value;
    getPhotos(value);
});