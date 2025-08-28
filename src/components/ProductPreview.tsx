import { createSignal } from "solid-js";
import { t, type Locale } from "../utils/i18n";
import Box from "../assets/box.webp";
import Controller from "../assets/controller.webp";

const features = [
  { content: "GLI", description: "picto1" },
  { content: "24/7", description: "picto2" },
  { content: "EU", description: "picto3" },
];

const Picto = ({
  content,
  description,
}: {
  content: string;
  description: string;
}) => {
  return (
    <div class="flex flex-col w-[170px] gap-2 items-center">
      <div class="border-2 font-bold rounded-full w-[120px] h-[120px] aspect-square flex items-center justify-center border-secondary text-secondary p-2 text-[40px]">
        {content}
      </div>
      <span class="max-w-[170px] font-semibold leading-tight text-sm text-center">
        {description}
      </span>
    </div>
  );
};

export default function ProductPreview({ locale }: { locale: Locale }) {
  const [selectedProduct, setSelectedProduct] = createSignal<
    "box" | "controller"
  >("box");

  const downloadDatasheet = () => {
    const pdfFile =
      selectedProduct() === "box" ? "/files/box.pdf" : "/files/controller.pdf";
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = pdfFile.split("/").pop() || "datasheet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="product" class="z-20 left-0 w-full">
      <div class="flex justify-center gap-8 my-20">
        {features.map((feature, index) => (
          <Picto
            content={feature.content}
            description={t(feature.description as any, locale)}
          />
        ))}
      </div>
      <div class="flex justify-center gap-4">
        <button
          onClick={() => setSelectedProduct("box")}
          class={`px-6 py-2 w-[170px] rounded-lg text-lg font-semibold cursor-pointer transition-colors ${
            selectedProduct() === "box"
              ? "bg-secondary outline-2 outline-tertiary text-white"
              : "bg-tertiary text-secondary"
          }`}
        >
          PC Box
        </button>
        <button
          onClick={() => setSelectedProduct("controller")}
          class={`px-6 py-2 w-[170px] rounded-lg text-lg font-semibold cursor-pointer transition-colors ${
            selectedProduct() === "controller"
              ? "bg-secondary outline-2 outline-tertiary text-white"
              : "bg-tertiary text-secondary"
          }`}
        >
          I/O Controller
        </button>
      </div>
      <div class="mx-auto w-full relative max-w-[700px]">
        <img
          src={selectedProduct() === "box" ? Box.src : Controller.src}
          alt={
            selectedProduct() === "box"
              ? "Golden Lion Box"
              : "Golden Lion Controller"
          }
          class="w-full z-20"
        />
      </div>
      <button
        onClick={downloadDatasheet}
        class="mt-4 mx-auto bg-tertiary shadow w-[170px] flex items-center gap-2 text-secondary px-6 py-1.5 rounded-lg text-lg font-semibold transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-download-icon lucide-download"
        >
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
        Datasheet
      </button>
    </section>
  );
}
