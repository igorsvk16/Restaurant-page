import createHome from "../pages/home";

export default function initialPageLoad() {
    const content = document.getElementById("content");

    content.textContent = "";

    content.appendChild(createHome());
}