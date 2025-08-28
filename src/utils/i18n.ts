export type Locale = "en" | "cs";

const translations = {
  en: {
    title: "Welcome to Astro",
    description: "This is an example Astro application with i18n.",
    heading: "Industrial Gaming PC Solution",
    subheading: "Infinite possibilities.",
    subheading2: "One platform.",
    product: "Product",
    contact: "Contact",
    contactDescription:
      "Have questions or need more information? Feel free to reach out.",
    about: "About us",
    aboutHeading: "EMKO IPC – A Reliable Partner for the Gaming Industry",
    aboutContent:
      "<p>We develop and supply industrial computers and components with long-term availability (7+ years from market launch). Our specialists have been active in the gaming industry for more than 20 years. Thanks to this expertise, we can offer reliable, tailor-made solutions that ensure smooth operation even under the most demanding conditions.</p><p><br/><strong>Our strengths:</strong></p><ul><li>Stable deliveries and long-term product availability</li><li>Custom modifications and prototyping</li><li>Expert consulting from design and implementation to technical support after delivery</li></ul><p>For many years, we have been working with leading players in the gaming industry to create innovations that inspire. We believe our success is built on quality, trust, and bold ideas.</p><p>Do you have any questions or need advice on integration? We are happy to provide a free consultation.</p>",
    picto1: "GLI certification ready",
    picto2: "Designed for 24/7 operation",
    picto3: "Designed and manufactured in the EU",
    emailUs: "Email Us",
  },
  cs: {
    title: "Vítejte v Astru",
    description: "Toto je příklad Astro aplikace s i18n.",
    heading: "Průmyslové herní PC řešení",
    subheading: "Nekonečné možnosti.",
    subheading2: "Jedna platforma.",
    product: "Produkt",
    contact: "Kontakt",
    contactDescription:
      "Máte otázky nebo potřebujete více informací? Neváhejte nás kontaktovat.",
    about: "O nás",
    aboutHeading: "EMKO IPC – Spolehlivý partner pro herní průmysl",
    aboutContent:
      "<p>We develop and supply industrial computers and components with long-term availability (7+ years from market launch). Our specialists have been active in the gaming industry for more than 20 years. Thanks to this expertise, we can offer reliable, tailor-made solutions that ensure smooth operation even under the most demanding conditions.</p><p><br/><strong>Our strengths:</strong></p><ul><li>Stable deliveries and long-term product availability</li><li>Custom modifications and prototyping</li><li>Expert consulting from design and implementation to technical support after delivery</li></ul><p>For many years, we have been working with leading players in the gaming industry to create innovations that inspire. We believe our success is built on quality, trust, and bold ideas.</p><p>Do you have any questions or need advice on integration? We are happy to provide a free consultation.</p>",
    picto1: "Připraveno pro certifikaci GLI",
    picto2: "Navrženo pro nepřetržitý provoz 24/7",
    picto3: "Navrženo a vyrobeno v EU",
    emailUs: "Napište nám",
  },
};

export function t(
  key: keyof (typeof translations)["en"],
  locale: Locale
): string {
  return translations[locale][key] || key;
}
