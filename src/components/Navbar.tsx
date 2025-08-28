import type { Locale } from "../utils/i18n";
import { t } from "../utils/i18n";
import Logo from "../assets/logotype.svg";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar(props: NavbarProps) {
  const { locale } = props;

  const getLocalizedUrl = (targetLocale: Locale) => {
    // This will run in the browser
    if (typeof window !== "undefined") {
      // Check if we are in the browser
      const currentPath = window.location.pathname;
      // Replace the current language segment with the target language segment
      // This assumes the language segment is the first part of the path after the base URL
      return currentPath.replace(`/${locale}/`, `/${targetLocale}/`);
    }
    // Fallback for SSR if somehow this code runs there (though client:load prevents it usually)
    return `/${targetLocale}/`;
  };

  return (
    <nav class="bg-transparent text-white p-4 flex justify-between h-[60px] items-center">
      <div class="absolute left-1/2 transform -translate-x-1/2 h-[60px] top-0 items-center z-30 w-full flex justify-between max-w-[1000px]">
        <img src={Logo.src} alt="Golden Lion Logo" class="h-10" />
        <a href="#product">{t("product", locale)}</a>
        <a href="#about">{t("about", locale)}</a>
        <a href="#contact">{t("contact", locale)}</a>
        <div>
          <a
            href={getLocalizedUrl("en")}
            class={`px-2 ${locale === "en" ? "font-bold" : ""}`}
          >
            EN
          </a>
          <a
            class={`px-2 ${locale === "cs" ? "font-bold" : ""}`}
            href={getLocalizedUrl("cs")}
          >
            CS
          </a>
        </div>
      </div>
    </nav>
  );
}
