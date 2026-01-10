export default function createMenu() {
    const content = document.getElementById("content");
    if (!content) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add("tab", "tab-menu");

    const card = document.createElement("section");
    card.classList.add("hero-card", "tab-card");

    const header = document.createElement("header");
    header.classList.add("hero-label");

    const label = document.createElement("span");
    label.classList.add("hero-label");
    label.textContent = "Chef's selection";

    const title = document.createElement("h1");
    title.classList.add("hero-title");
    title.textContent = "Menu";

    const subtitle = document.createElement("p");
    subtitle.classList.add("tab-subtitle");
    subtitle.textContent = "Seasonal plates with a Nordic twist.";

    header.append(label, title, subtitle);

    const list = document.createElement("div");
    list.classList.add("menu-list");

    const items = [
        { name: "Forest mushroom tart", price: "$12", desc: "Brown butter crust, thyme creme, pickled shallot." },
        { name: "Charred salmon bowl", price: "$18", desc: "Smoked yogurt, rye crunch, fennel and citrus salad." },
        { name: "Roasted carrot risotto", price: "$16", desc: "Carrot top pesto, barley crisp, aged goat cheese." },
        { name: "Juniper berry parfait", price: "$9", desc: "Vanilla mousse, roasted pear, caramelized oats." },
    ];

    items.forEach((item) => {
        const entry = document.createElement("article");
        entry.classList.add("menu-item");

        const top = document.createElement("div");
        top.classList.add("menu-item-top");

        const name = document.createElement("div");
        name.classList.add("menu-item-title");
        name.textContent = item.name;

        const price = document.createElement("div");
        price.classList.add("menu-item-price");
        price.textContent = item.price;

        top.append(name, price);

        const desc = document.createElement("p");
        desc.classList.add("menu-item-desc");
        desc.textContent = item.desc;

        entry.append(top, desc);
        list.appendChild(entry);
    });

    card.append(header, list);
    wrapper.appendChild(card);
    content.appendChild(wrapper);
};
