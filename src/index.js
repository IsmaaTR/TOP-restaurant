import "./styles.css";
import { homeModule } from "./home.js";

const mainModule = (function() {
    const contentDiv = document.querySelector('#content');
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const contactButton = document.querySelector('#contactButton');

    function init() {
        setListeners();
        //homeModule.init();
    }

    function cleanContent() {
        contentDiv.replaceChildren(); 
    }

    function setListeners() {
        homeButton.addEventListener('click', () => {
            cleanContent();
            homeModule.init();
        });

        menuButton.addEventListener('click', () => {
            cleanContent();
        });

        contactButton.addEventListener('click', () => {
            cleanContent();
        });
    }

    return { init };
})();

mainModule.init();