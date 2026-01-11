import interierImg from "../assets/restaurant_image.jpeg"

export default function createHome() {
    const content = document.getElementById("content");
    if (!content) return;

    const wrapper = document.createElement("div");
    wrapper.classList.add("tab", "tab-home");

    const heroCard = document.createElement("figure");
    heroCard.classList.add("hero-card");

    const heroMedia = document.createElement("div");
    heroMedia.classList.add("hero-media");
    heroMedia.setAttribute("role", "img");
    heroMedia.setAttribute("aria-label", "Signature dish");

    const img = document.createElement("img");
    img.classList.add("hero-img");
    img.src = interierImg;
    img.alt = "Interier image";

    heroMedia.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.classList.add("hero-caption");

    const label = document.createElement("span");
    label.classList.add("hero-label");
    label.textContent = "Seasonal Kitchen";

    const title = document.createElement("h1");
    title.classList.add("hero-title");
    title.textContent = "Pine & Ember";

    caption.append(label, title);
    heroCard.append(heroMedia, caption);
    wrapper.appendChild(heroCard);
    content.appendChild(wrapper);
}