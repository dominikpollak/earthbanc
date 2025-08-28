import { t, type Locale } from "../utils/i18n";

export default function ContactUs({ locale }: { locale: Locale }) {
  return (
    <section
      id="contact"
      class="py-10 rounded-xl max-w-[500px] mx-auto mt-10 px-6 text-center"
    >
      <h2 class="text-secondary text-3xl font-bold z-20 mt-10">
        {t("contact", locale)}
      </h2>
      <p class="text-lg text-secondary leading-tight font-semibold mt-2 mb-8">
        {t("contactDescription", locale)}
      </p>
      <a
        href="mailto:info@emkoipc.com"
        class="mt-4 justify-center w-[170px] mx-auto bg-tertiary shadow flex items-center gap-2 text-secondary px-6 py-1.5 rounded-lg text-lg font-semibold transition-colors"
      >
        {t("emailUs", locale)}
      </a>
    </section>
  );
}
