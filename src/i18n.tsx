import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

function detect(): Lang {
  try {
    const saved = localStorage.getItem("nata-lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {}
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "fr",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    try { localStorage.setItem("nata-lang", l); } catch {}
    setLangState(l);
  };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

// helper de traduction : t("texte FR", "texte EN")
export function useT() {
  const { lang } = useContext(Ctx);
  return (fr: string, en: string) => (lang === "fr" ? fr : en);
}
