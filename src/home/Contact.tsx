import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Nav, Footer, Eyebrow, wrap, wrapStyle, useReveal } from "./Home";
import { useT } from "../i18n";
import "./tokens.css";

const inputCls =
  "w-full rounded-[var(--r-md)] px-3.5 py-2.5 text-[15px] outline-none transition-shadow duration-200";
const inputStyle = {
  background: "var(--paper)",
  color: "var(--ink)",
  border: "1px solid var(--line-strong)",
} as const;

function Label({ children, required }: { children: any; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-[14px] font-semibold" style={{ color: "var(--ink)" }}>
      {children}
      {required && <span style={{ color: "var(--accent-strong)" }}> *</span>}
    </label>
  );
}

export default function Contact() {
  useReveal();
  const t = useT();
  const [sent, setSent] = useState(false);

  return (
    <div>
      <Nav />
      <main>
        <section style={{ paddingTop: 140, paddingBottom: 96 }}>
          <div className={wrap} style={wrapStyle}>
            {/* header */}
            <div className="mx-auto flex max-w-[768px] flex-col items-center text-center">
              <Eyebrow>{t("Contact", "Contact")}</Eyebrow>
              <h1 className="h-display r mt-5" style={{ fontSize: "clamp(2.4rem,4.6vw,3.6rem)", color: "var(--ink)" }}>
                {t("Parlons de vos rotations.", "Let's talk about your turnovers.")}
              </h1>
              <p className="r mt-5 text-[19px] leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: 560 }}>
                {t("Une question, une démo, rejoindre le pilote ? On vous répond sous 24h.", "A question, a demo, joining the pilot? We reply within 24h.")}
              </p>
            </div>

            {/* formulaire */}
            <form
              className="r mx-auto mt-14 flex flex-col gap-6"
              style={{ maxWidth: 480 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label required>{t("Prénom", "First name")}</Label>
                  <input className={inputCls} style={inputStyle} type="text" placeholder={t("Prénom", "First name")} required />
                </div>
                <div>
                  <Label required>{t("Nom", "Last name")}</Label>
                  <input className={inputCls} style={inputStyle} type="text" placeholder={t("Nom", "Last name")} required />
                </div>
              </div>

              <div>
                <Label required>{t("Email", "Email")}</Label>
                <input className={inputCls} style={inputStyle} type="email" placeholder={t("vous@societe.com", "you@company.com")} required />
              </div>

              <div>
                <Label>{t("Téléphone", "Phone")}</Label>
                <input className={inputCls} style={inputStyle} type="tel" placeholder="+33 6 00 00 00 00" />
              </div>

              <div>
                <Label required>{t("Message", "Message")}</Label>
                <textarea className={`${inputCls} resize-y`} style={inputStyle} rows={5} placeholder={t("Décrivez votre besoin…", "Describe your need…")} required />
              </div>

              <label className="flex items-start gap-3 text-[15px]" style={{ color: "var(--ink-soft)", cursor: "pointer" }}>
                <input type="checkbox" required className="mt-1" style={{ accentColor: "var(--accent)", width: 16, height: 16, flex: "0 0 auto" }} />
                <span>
                  {t("J'accepte la ", "I agree to the ")}
                  <a className="underline" style={{ color: "var(--ink)", cursor: "pointer" }}>{t("politique de confidentialité", "privacy policy")}</a>.
                </span>
              </label>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] py-3.5 text-[16px] font-semibold transition-all duration-200 hover:brightness-105"
                style={{ background: "var(--accent)", color: "white", boxShadow: "var(--shadow-sm)", cursor: "pointer" }}
              >
                {sent ? t("Message envoyé ✓", "Message sent ✓") : t("Envoyer le message", "Send message")}
                {!sent && <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-0.5" />}
              </button>

              {sent && (
                <p className="text-center text-[15px]" style={{ color: "var(--accent-strong)" }}>
                  {t("Merci ! On revient vers vous très vite.", "Thanks! We'll get back to you very soon.")}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
