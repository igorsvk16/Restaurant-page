import "./styles.css";
import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createContact from "./pages/about";

const tabs = {
    home: createHome,
    menu: createMenu,
    contact: createContact,
};

function clearContent() {
    const content = document.getElementById("content");
    if (content) {
        content.textContent = "";
    }
}

function setActiveButton(activeButton) {
    document.querySelectorAll(".nav-btn").forEach((button) => {
        button.classList.toggle("is-active", button === activeButton);
    })
}

function loadTab(tabName, activeButton) {
    const load = tabs[tabName];
    if (!load) return;

    clearContent();
    load();

    if (activeButton) {
        setActiveButton(activeButton);
    }
}

function initTabs() {
    const buttons = Array.from(document.querySelectorAll(".nav-btn"));
    if (buttons.length === 0) return;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            loadTab(button.dataset.tab, button);
        });
    });

    const defaultButton = buttons.find((button) => button.dataset.tab === "home") || buttons[0];
    loadTab(defaultButton.dataset.tab, defaultButton);
}

document.addEventListener("DOMContentLoaded", initTabs);