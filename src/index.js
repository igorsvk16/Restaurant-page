import "./styles.css";

import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createContact from "./pages/about";
import { DotenvPlugin } from "webpack";

const tabs = {
    home: createHome,
    menu: createMenu,
    contact: createContact,
};

function clearContent() {
    const content = document.createElement("content");
    if (content) {
        content.textContent = "";
    }
}

function setActiveButton(activeButton) {
    document.querySelectorAll(".nav-btn").forEach((button) => {
        button.classList.toggle("is-active", button === activeButton);
    })
}