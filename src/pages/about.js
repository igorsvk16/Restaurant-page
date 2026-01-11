export default function createContact() {
    const content = document.getElementById("content");
    if (!content) return;

    const wrapper = document.createElement("div");
    wrapper.classList.add("tab", "tab-contact");

    const card = document.createElement("section");
    card.classList.add("hero-card", "tab-card");

    const header = document.createElement("header");
    header.classList.add("tab-header");

    const label = document.createElement("span");
    label.classList.add("hero-label");
    label.textContent = "We'd love to see you";

    const title = document.createElement("h1");
    title.classList.add("hero-title");
    title.textContent = "Contact";

    const subtitle = document.createElement("p");
    subtitle.classList.add("tab-subtitle");
    subtitle.textContent = "Reservations recommended on weekends.";

    header.append(label, title, subtitle);

    const list = document.createElement("div");
    list.classList.add("contact-list");

    const rows = [
        { icon: "MAP", title: "Address", value: "Helsinki, Harbor Street 12" },
        { icon: "TEL", title: "Phone", value: "+358 40 123 45 67" },
        { icon: "HRS", title: "Hours", value: "Mon-Sun: 12:00-23:00" },
        { icon: "MAIL", title: "Email", value: "hello@pineandember.example" },
    ];

    rows.forEach((r) => {
        const item = document.createElement("div");
        item.classList.add("contact-item");

        const icon = document.createElement("div");
        icon.classList.add("contact-icon");
        icon.textContent = r.icon;

        const text = document.createElement("div");
        text.classList.add("contact-text");

        const itemTitle = document.createElement("div");
        itemTitle.classList.add("contact-title");
        itemTitle.textContent = r.title;

        const value = document.createElement("div");
        value.classList.add("contact-value");
        value.textContent = r.value;

        text.append(itemTitle, value);
        item.append(icon, text);
        list.appendChild(item);
    });

    card.append(header, list);
    wrapper.appendChild(card);
    content.appendChild(wrapper);
}
