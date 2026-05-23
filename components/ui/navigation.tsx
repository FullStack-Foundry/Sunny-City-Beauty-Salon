import { useState } from "react";

type Props = {
  langHandler: (arg0: string) => void;
  company: string;
  phone: string;
};

export default function Navigation({ langHandler, company, phone }: Props) {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/60 py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
      <span className="font-serif text-lg sm:text-xl tracking-wide text-foreground">
        {company}
      </span>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        <a
          href="tel:6463868898"
          className="font-sans text-xs sm:text-sm tracking-wide text-primary hover:text-primary/80 transition-colors duration-300 whitespace-nowrap"
        >
          {phone}
        </a>
        <div className="flex flex-row gap-2 sm:gap-4">
          <button
            className={`border border-primary rounded-sm px-2 py-1 text-xs cursor-pointer sm:text-sm ${!isEnglish && "bg-amber-200"}`}
            onClick={() => {
              langHandler("zh-HK");
              setIsEnglish(false);
            }}
          >
            中国人
          </button>
          <button
            className={`border border-primary rounded-sm px-2 py-1 cursor-pointer text-xs sm:text-sm ${isEnglish && "bg-amber-200"}`}
            onClick={() => {
              langHandler("en");
              setIsEnglish(true);
            }}
          >
            English
          </button>
        </div>
      </div>
    </nav>
  );
}
