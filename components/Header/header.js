import "./header.css";
import NavBar from "../NavBar/navbar.js";

const template = () => ` 
    <nav></nav>
    <h1>Buscad O_Or</h1>
    <input type="text" id="searchInput" placeholder="Buscar..."/>
    <button id="searchBtn">Buscar</button>
    <nav></nav>
`;

const Header = () => {
    document.querySelector("header").innerHTML = template();
    NavBar(); // Llamar a NavBar para insertar el contenido de la navegación
    
};	

export default Header;


