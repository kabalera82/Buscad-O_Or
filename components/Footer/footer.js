import "./footer.css";

const template = () => `
<p>© 2024 Buscad O_Or</p>
`;

const Footer = () => {
    document.querySelector("footer").innerHTML = template();
};

export default Footer;
