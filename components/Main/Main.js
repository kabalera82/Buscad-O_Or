import "./Main.css";

const template = () => `
<h2 id=message"></h2>
<ul id="results"></ul>
<div id="message"></div>
`;

const listeners = () => {
    console.log(document.querySelector("#message"));
};

const Main = () => {
    document.querySelector("main").innerHTML = template();

};

export default Main;


