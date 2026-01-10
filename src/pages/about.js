export default function createContact() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("tab", "tab-contact");

  const card = document.createElement("section");
  card.classList.add("hero-card", "tab-card");

  const header = document.createElement("header");
  header.classList.add("tab-header");

  const label = document.createElement("span");
  label.classList.add("hero-label");
  label.textContent = "Weƒ?Td love to see you";

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
    { icon: "ÐY"?", title: "Address", value: "Helsinki, Harbor Street 12" },
    { icon: "ÐY"z", title: "Phone", value: "+358 40 123 45 67" },
    { icon: "ÐY'", title: "Hours", value: "Monƒ?"Sun: 12:00ƒ?"23:00" },
    { icon: "ƒo%‹÷?", title: "Email", value: "hello@pineandember.example" },
  ];

  rows.forEach((r) => {
    const item = document.createElement("div");
    item.classList.add("contact-item");

    const icon = document.createElement("div");
    icon.classList.add("contact-icon");
    icon.textContent = r.icon;

    const text = document.createElement("div");
    text.classList.add("contact-text");

    const t = document.createElement("div");
    t.classList.add("contact-title");
    t.textContent = r.title;

    const v = document.createElement("div");
    v.classList.add("contact-value");
    v.textContent = r.value;

    text.append(t, v);
    item.append(icon, text);
    list.appendChild(item);
  });

  card.append(header, list);
  wrapper.appendChild(card);

  return wrapper;
}
