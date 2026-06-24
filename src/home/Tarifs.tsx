import { Zap, Check } from "lucide-react";
import { Nav, Footer, Faq, Cta, Eyebrow, Btn, wrap, wrapStyle, useReveal, asset } from "./Home";
import { navigate } from "../router";
import { useT } from "../i18n";
import "./tokens.css";

const HERO_IMG = asset("/assets/photos/13.jpg");

/* ---------- header tarifs ---------- */
function PricingHeader() {
  const t = useT();
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 132, paddingBottom: 64 }}>
      <div className={wrap} style={wrapStyle}>
        <div className="mx-auto flex max-w-[768px] flex-col items-center text-center">
          <Eyebrow>{t("Tarifs", "Pricing")}</Eyebrow>
          <h1 className="h-display r mt-5" style={{ fontSize: "clamp(2.4rem,4.6vw,3.6rem)", color: "var(--ink)" }}>
            {t("Rejoignez le programme pilote.", "Join the pilot program.")}
          </h1>
          <p className="r mt-5 text-[19px] leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: 640 }}>
            {t(
              "On construit Nata avec nos premiers utilisateurs. On fixe le tarif ensemble, notre équipe vous accompagne directement, et vous gardez un tarif préférentiel à vie au lancement.",
              "We're building Nata together with our first users. We set the price together, our team supports you directly, and you keep a preferential rate for life at launch."
            )}
          </p>
          <div className="r mt-8 flex flex-wrap justify-center gap-3">
            <Btn variant="ghost" onClick={() => navigate("/contact")}>{t("Parler à l'équipe", "Talk to the team")}</Btn>
            <Btn onClick={() => navigate("/contact")}>{t("Rejoindre le pilote", "Join the pilot")}</Btn>
          </div>
        </div>
        {/* grande photo */}
        <div className="r mt-16">
          <figure className="m-0 overflow-hidden" style={{ borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-lg)", height: 440 }}>
            <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------- carte programme pilote ---------- */
function PilotCard() {
  const t = useT();
  const features = [
    t("Accès à toutes les fonctionnalités", "Access to all features"),
    t("Accompagnement direct par notre équipe", "Direct support from our team"),
    t("Tarif fixé ensemble selon votre usage", "Price set together based on your usage"),
    t("Tarif préférentiel à vie au lancement", "Preferential rate for life at launch"),
    t("Zéro engagement : vous partez quand vous voulez", "Zero commitment: leave whenever you want"),
  ];
  return (
    <section className="pb-28 pt-8">
      <div className={wrap} style={wrapStyle}>
        <div className="r mx-auto" style={{ maxWidth: 560 }}>
          <div className="relative flex flex-col items-stretch rounded-[var(--r-2xl)]"
            style={{ background: "var(--accent-soft)", border: "1px solid var(--line)" }}>
            {/* featured icon */}
            <span className="absolute left-1/2 grid -translate-x-1/2 place-items-center rounded-[var(--r-lg)]"
              style={{ top: -24, width: 48, height: 48, background: "var(--paper)", border: "1px solid var(--accent)", boxShadow: "var(--shadow-sm)" }}>
              <Zap size={22} strokeWidth={2} style={{ color: "var(--accent-strong)" }} />
            </span>
            {/* header */}
            <div className="flex flex-col items-center gap-2 px-8 pt-12 text-center">
              <span className="text-[20px] font-semibold" style={{ color: "var(--ink)" }}>{t("Programme Pilote", "Pilot Program")}</span>
              <span className="h-display" style={{ fontSize: "clamp(2.2rem,3.6vw,3rem)", color: "var(--ink)" }}>{t("À définir ensemble", "Set together")}</span>
              <p className="mt-1 text-[16px]" style={{ color: "var(--ink-soft)", maxWidth: 360 }}>
                {t("Accès complet pendant 30 jours. Tarif préférentiel à vie pour les pilotes.", "Full access for 30 days. Preferential rate for life for pilots.")}
              </p>
            </div>
            {/* features */}
            <div className="flex flex-col gap-4 px-8 pb-8 pt-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-[16px]" style={{ color: "var(--ink-soft)" }}>
                  <span className="grid place-items-center rounded-full" style={{ width: 24, height: 24, background: "var(--paper)", flex: "0 0 auto", marginTop: 1 }}>
                    <Check size={15} strokeWidth={3} style={{ color: "var(--accent-strong)" }} />
                  </span>{f}
                </div>
              ))}
            </div>
            {/* cta */}
            <div className="px-8 pb-10">
              <a onClick={() => navigate("/contact")}
                className="flex w-full items-center justify-center gap-2 rounded-[var(--r-md)] py-3.5 text-[16px] font-semibold transition-all duration-200 hover:brightness-105"
                style={{ background: "var(--accent)", color: "white", cursor: "pointer" }}>
                {t("Rejoindre le pilote", "Join the pilot")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Tarifs() {
  useReveal();
  return (
    <div>
      <Nav />
      <main>
        <PricingHeader />
        <PilotCard />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
