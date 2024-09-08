import './navbar.css';

const template = () => `
<ul>

</ul>
`;

const NavBar = () => {
    document.querySelector("nav").innerHTML = template();
};

export default NavBar;

