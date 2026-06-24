import { useEffect, useRef, useState } from "react";
import {
  Play, ArrowRight, CalendarClock, Send, ShieldCheck, ChevronDown,
  Send as SendIcon, KeyRound, ListChecks, Camera, UserRound, Bell,
  Check, Plus, Minus, Zap, Layers, Layers3, Menu, X,
} from "lucide-react";
import DotGrid from "../DotGrid";
import { navigate } from "../router";
import { useT, useLang } from "../i18n";
import "./tokens.css";

export const DEMO_URL = "https://calendar.notion.so/meet/damiendouat/nata";
// chemins d'assets relatifs à la base Vite (marche en sous-chemin /nata-site/ ET à la racine d'un domaine custom)
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, "");
const LOGO = asset("/assets/brand/nata-logo.svg");
const HERO_IMG = asset("/assets/photos/12.jpg");
const PHOTO_TESTI = asset("/assets/photos/testi.jpg");
const PHOTO_JUNGLE = asset("/assets/photos/15.jpg");
const PHOTO_SKI = asset("/assets/photos/14.jpg");
// visuels composés EXACTS exportés du Figma (téléphone + fond + effets) — posés tels quels
const STEP_VISUALS = ["/assets/mockups/chat-anticipation.png", "/assets/mockups/chat-coordination.png", "/assets/mockups/chat-controle.png"].map(asset);
const PROB_VISUAL = asset("/assets/mockups/visual-prob.png");
const LOGOS = [
  ["imgTypeBooking", "Booking.com"], ["imgTypeAirbnb", "Airbnb"], ["imgTypeVrbo", "Vrbo"],
  ["imgTypeAbritel", "Abritel"], ["imgTypeWhatsapp", "WhatsApp"], ["imgTypeTelegram", "Telegram"],
  ["imgTypeInstagram", "Instagram"], ["imgTypeWechat", "WeChat"],
].map(([f, l]) => [asset(`/assets/figma/${f}.png`), l]);

/* ---------- primitives ---------- */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".r"));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

export const wrap = "mx-auto w-full px-6 sm:px-8" ;
export const wrapStyle = { maxWidth: "var(--maxw)" } as const;

export function Btn({ children, variant = "solid", icon: Icon, onClick, href }: any) {
  const base = "group inline-flex items-center gap-2 rounded-[var(--r-md)] px-[18px] py-[11px] text-[15px] font-semibold transition-all duration-200 cursor-pointer";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };
  if (variant === "solid")
    return (
      <a {...linkProps} className={base} style={{ background: "var(--accent)", color: "white", boxShadow: "var(--shadow-sm)" }}>
        {Icon && <Icon size={17} strokeWidth={2.2} />}{children}
        <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    );
  return (
    <a {...linkProps} className={base} style={{ background: "var(--paper)", color: "var(--ink)", boxShadow: "inset 0 0 0 1px var(--line-strong)" }}>
      {Icon && <Icon size={17} strokeWidth={2.2} style={{ color: "var(--accent-strong)" }} />}{children}
    </a>
  );
}

export function Eyebrow({ children }: any) {
  return (
    <div className="inline-flex items-center gap-2 r">
      <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--accent)" }} />
      <span className="eyebrow uppercase">{children}</span>
    </div>
  );
}

/* ---------- sélecteur de langue ---------- */
export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center gap-0.5 rounded-[var(--r-sm)] p-0.5 ${className}`}
      style={{ boxShadow: "inset 0 0 0 1px var(--line-strong)" }}>
      {(["fr", "en"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)}
          className="rounded-[6px] px-2 py-1 text-[12px] font-semibold uppercase transition-colors"
          style={{ background: lang === l ? "var(--accent)" : "transparent", color: lang === l ? "white" : "var(--ink-soft)", cursor: "pointer" }}>
          {l}
        </button>
      ))}
    </div>
  );
}

/* ---------- nav ---------- */
export function Nav() {
  const t = useT();
  // pill flottant (aligné sur le Figma : carte blanche arrondie + ombre)
  const [open, setOpen] = useState(false);
  const go = (path: string) => { setOpen(false); navigate(path); };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3">
      <div className={wrap} style={wrapStyle}>
        <div className="flex items-center gap-4 rounded-[var(--r-lg)] py-1 pl-4 pr-2.5"
          style={{ background: "color-mix(in oklch, var(--paper) 88%, transparent)", backdropFilter: "saturate(1.1) blur(12px)",
            border: "1px solid var(--line)", boxShadow: "var(--shadow-sm)" }}>
          <a onClick={() => go("/")} className="flex items-center shrink-0" style={{ cursor: "pointer" }}>
            <img src={LOGO} alt="Nata" className="h-[48px] sm:h-[60px] w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-1 text-[14px] font-semibold" style={{ color: "var(--ink-soft)" }}>
            <a onClick={() => go("/")} className="flex items-center gap-1 rounded-[var(--r-sm)] px-2.5 py-1.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer" }}>
              {t("Produit", "Product")} <ChevronDown size={15} strokeWidth={2.2} />
            </a>
            <a onClick={() => go("/tarifs")} className="rounded-[var(--r-sm)] px-2.5 py-1.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer" }}>{t("Tarifs", "Pricing")}</a>
            <a onClick={() => go("/contact")} className="rounded-[var(--r-sm)] px-2.5 py-1.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer" }}>{t("Contact", "Contact")}</a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <LangSwitch className="hidden sm:inline-flex" />
            <a className="hidden sm:inline text-[14px] font-semibold px-3.5 py-2 rounded-[var(--r-sm)] transition-colors hover:bg-[color:var(--paper-3)]"
              style={{ color: "var(--ink-soft)", boxShadow: "inset 0 0 0 1px var(--line-strong)", cursor: "pointer" }}>{t("Se connecter", "Log in")}</a>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 rounded-[var(--r-sm)] px-3.5 py-2 text-[14px] font-semibold transition-all duration-200 hover:brightness-105"
              style={{ background: "var(--accent)", color: "white", cursor: "pointer" }}>{t("Réserver une démo", "Book a demo")}</a>
            {/* bouton menu mobile */}
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden grid place-items-center rounded-[var(--r-sm)]"
              style={{ width: 40, height: 40, color: "var(--ink)", boxShadow: "inset 0 0 0 1px var(--line-strong)" }}>
              {open ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
        {/* panneau mobile */}
        {open && (
          <div className="md:hidden mt-2 flex flex-col gap-1 rounded-[var(--r-lg)] p-3 text-[15px] font-semibold"
            style={{ background: "var(--paper)", border: "1px solid var(--line)", boxShadow: "var(--shadow-md)", color: "var(--ink)" }}>
            <a onClick={() => go("/")} className="rounded-[var(--r-sm)] px-3 py-2.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer" }}>{t("Produit", "Product")}</a>
            <a onClick={() => go("/tarifs")} className="rounded-[var(--r-sm)] px-3 py-2.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer" }}>{t("Tarifs", "Pricing")}</a>
            <a onClick={() => go("/contact")} className="rounded-[var(--r-sm)] px-3 py-2.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer" }}>{t("Contact", "Contact")}</a>
            <a className="rounded-[var(--r-sm)] px-3 py-2.5 transition-colors hover:bg-[color:var(--paper-3)]" style={{ cursor: "pointer", color: "var(--ink-soft)" }}>{t("Se connecter", "Log in")}</a>
            <div className="px-3 py-2"><LangSwitch /></div>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-[var(--r-sm)] px-3.5 py-3 transition-all duration-200 hover:brightness-105"
              style={{ background: "var(--accent)", color: "white", cursor: "pointer" }}>{t("Réserver une démo", "Book a demo")}</a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 132, paddingBottom: 96 }}>
      {/* grille de points : coin haut-droit uniquement */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: 0, right: 0, width: "46%", height: 420,
        WebkitMaskImage: "radial-gradient(120% 120% at 100% 0%, #000 30%, transparent 70%)",
        maskImage: "radial-gradient(120% 120% at 100% 0%, #000 30%, transparent 70%)" }}>
        <DotGrid gap={28} radius={1.5} />
      </div>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]`} style={wrapStyle}>
        <div>
          <Eyebrow>{t("Agent IA · Location courte durée", "AI agent · Short-term rentals")}</Eyebrow>
          <h1 className="h-display r mt-5" style={{ fontSize: "clamp(2.6rem, 5.2vw, 4.1rem)", color: "var(--ink)" }}>
            {t("L'agent IA qui orchestre la courte durée", "The AI agent that runs your short-term rentals")}
          </h1>
          <p className="r mt-6 text-[19px] leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: 520 }}>
            {t(
              "Nata orchestre vos prestataires entre chaque locataire, du check-out au check-in suivant. Sans appels, sans relances, sans oublis.",
              "Nata coordinates your service providers between every guest, from check-out to the next check-in. No calls, no chasing, nothing forgotten."
            )}
          </p>
          <div className="r mt-8 flex flex-wrap gap-3">
            <Btn icon={Play} href={DEMO_URL}>{t("Réserver une démo", "Book a demo")}</Btn>
            <Btn variant="ghost" onClick={() => navigate("/contact")}>{t("Rejoindre le pilote", "Join the pilot")}</Btn>
          </div>
          <p className="r mt-6 text-[14px] flex items-center gap-2" style={{ color: "var(--ink-muted)" }}>
            <ShieldCheck size={16} style={{ color: "var(--accent-strong)" }} /> {t("Sans installer d'app pour vos prestataires.", "No app to install for your providers.")}
          </p>
        </div>
        {/* visuel : photo lifestyle + 2 cartes notif (aligné Figma — pas d'iPhone ici) */}
        <div className="relative r">
          <figure className="relative m-0 overflow-hidden" style={{ borderRadius: "var(--r-2xl)", boxShadow: "var(--shadow-lg)", aspectRatio: "4/3.6" }}>
            <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
          </figure>
          <MissionCard className="absolute left-1 top-4 sm:left-[-32px] sm:top-[40px]" title={t("Ménage · T2 Vieux-Port", "Cleaning · 2-bed Old Port")} sub={t("18/18 photos", "18/18 photos")} status={t("Terminé", "Complete")} pct={100} />
          <MissionCard className="absolute right-1 top-32 sm:right-[-28px] sm:top-[150px]" title={t("Check-in · Studio Marx Dormoy", "Check-in · Studio Marx Dormoy")} sub={t("Marie · démarré il y a 60 min", "Marie · started 60 min ago")} pct={80} />
        </div>
      </div>
    </section>
  );
}
function MissionCard({ className, title, sub, status, pct }: any) {
  return (
    <div className={`${className} w-[230px] sm:w-[300px] rounded-[var(--r-lg)] p-4 transition-all duration-300 hover:-translate-y-1`}
      style={{ background: "color-mix(in oklch, white 88%, transparent)", backdropFilter: "blur(8px)",
        boxShadow: "var(--shadow-md)", border: "1px solid var(--line)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold" style={{ color: "var(--ink)" }}>{title}</span>
        {status
          ? <span className="inline-flex items-center gap-1 text-[12px] font-semibold" style={{ color: "var(--accent-strong)" }}><Check size={13} strokeWidth={3} />{status}</span>
          : <CalendarClock size={15} style={{ color: "var(--ink-muted)" }} />}
      </div>
      <div className="text-[13px] mt-0.5" style={{ color: "var(--ink-muted)" }}>{sub}</div>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-[6px] flex-1 rounded-full" style={{ background: "var(--paper-3)" }}>
          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--accent)" }} />
        </div>
        <span className="text-[12px] font-semibold" style={{ color: "var(--ink-soft)" }}>{pct}%</span>
      </div>
    </div>
  );
}

/* ---------- logos ---------- */
function Logos() {
  const t = useT();
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="py-16" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper)" }}>
      <div className="text-center r">
        <span className="eyebrow uppercase">{t("Intégrations", "Integrations")}</span>
        <p className="mt-2 text-[16px] font-medium" style={{ color: "var(--ink-soft)" }}>{t("Nata se connecte à vos plateformes de réservation. Vous ne changez rien à vos outils.", "Nata connects to your booking platforms. You don't change anything in your tools.")}</p>
      </div>
      <div className="mt-9 overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)" }}>
        <div className="flex items-center gap-16 w-max" style={{ animation: "home-marq 40s linear infinite" }}>
          {row.map(([src, l], i) => (
            <img key={i} src={src} alt={l} title={l}
              style={{ height: 32, width: "auto", objectFit: "contain", opacity: 0.85, transition: "opacity .25s, transform .25s var(--ease)" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "none"; }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- problème (tabs + mockup) — section Figma 54:3438 ---------- */
function Problem() {
  const t = useT();
  const pains = [
    [t("Vous relancez sans arrêt", "You're always chasing"), t("Vous passez la journée à demander si le ménage est fait. Par WhatsApp, par téléphone, par SMS.", "You spend the day asking whether the cleaning is done. On WhatsApp, by phone, by text.")],
    [t("Vous l'apprenez trop tard", "You find out too late"), t("Un ménage oublié ou un problème non signalé, vous le découvrez quand le voyageur est déjà devant la porte.", "A missed cleaning or an unreported issue, you discover it when the guest is already at the door.")],
    [t("Chaque logement en plus vous surcharge", "Every extra property weighs on you"), t("Plus vous avez de biens, plus vous devez tout suivre de tête. Jusqu'à devoir recruter.", "The more properties you have, the more you track in your head. Until you have to hire.")],
  ];
  return (
    <section className="py-28" style={{ background: "var(--paper-2)" }}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-2`} style={wrapStyle}>
        <div>
          <Eyebrow>{t("Problème", "Problem")}</Eyebrow>
          <h2 className="h-section r mt-4" style={{ fontSize: "clamp(2rem,3.4vw,2.7rem)", color: "var(--ink)" }}>
            {t("Plus vous avez de logements, plus la coordination devient difficile.", "The more properties you manage, the harder coordination gets.")}
          </h2>
          <p className="r mt-4 text-[18px]" style={{ color: "var(--ink-soft)" }}>
            {t("Vos équipes s'épuisent, les voyageurs le remarquent, et vous passez vos journées à vérifier que tout avance.", "Your teams burn out, guests notice, and you spend your days checking that everything is moving.")}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {pains.map(([title, d], i) => (
              <div key={i} className="r rounded-[var(--r-md)] p-5 text-left transition-all duration-300"
                style={{ background: i === 0 ? "var(--paper)" : "transparent",
                  boxShadow: i === 0 ? "inset 3px 0 0 var(--accent), var(--shadow-sm)" : "inset 3px 0 0 var(--line-strong)",
                  transitionDelay: `${i * 60}ms` }}>
                <div className="text-[16px] font-semibold" style={{ color: "var(--ink)" }}>{title}</div>
                <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div aria-hidden className="absolute inset-0" style={{ WebkitMaskImage: "radial-gradient(75% 75% at 50% 45%, #000 40%, transparent 75%)", maskImage: "radial-gradient(75% 75% at 50% 45%, #000 40%, transparent 75%)" }}>
            <DotGrid gap={26} radius={1.4} />
          </div>
          <img src={PROB_VISUAL} alt="Nata · WhatsApp"
            className="r m-mockup relative block h-auto w-full max-w-[440px] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[1deg]" />
        </div>
      </div>
    </section>
  );
}

/* ---------- solution ---------- */
function Solution() {
  const t = useT();
  return (
    <section className="py-12">
      <div className={wrap} style={wrapStyle}>
        <div className="r relative overflow-hidden rounded-[var(--r-2xl)]" style={{ minHeight: 460 }}>
          <img src={PHOTO_JUNGLE} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(20,35,28,0.28), rgba(20,35,28,0.12))" }} />
          {/* carte verre dépoli avec le texte (comme Figma) */}
          <div className="relative mx-auto flex max-w-[820px] flex-col items-center px-8 py-16 text-center"
            style={{ margin: "48px auto", borderRadius: "var(--r-2xl)", background: "color-mix(in oklch, white 72%, transparent)", backdropFilter: "blur(16px) saturate(1.1)", border: "1px solid rgba(255,255,255,0.5)", maxWidth: 820 }}>
            <span className="eyebrow uppercase">{t("Solution", "Solution")}</span>
            <h2 className="h-section mt-3" style={{ fontSize: "clamp(2rem,3.6vw,2.8rem)", color: "var(--ink)" }}>
              {t("Nata s'occupe de toute la ", "Nata handles all the ")}<span style={{ color: "var(--accent-strong)" }}>{t("coordination", "coordination")}</span>{t(" à votre place.", " for you.")}
            </h2>
            <p className="mt-4 text-[18px]" style={{ color: "var(--ink-soft)", maxWidth: 600 }}>
              {t("Nata planifie chaque rotation, affecte les prestataires, suit l'avancement en temps réel et contrôle la qualité avant l'arrivée. Vous n'intervenez que si c'est nécessaire.", "Nata plans each turnover, assigns providers, tracks progress in real time and checks quality before arrival. You only step in when needed.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- comment ça marche (étapes empilées) ---------- */
function How() {
  const t = useT();
  const steps = [
    { n: "01", icon: CalendarClock, t: t("Planification", "Planning"), d: t("Nata lit votre calendrier et prépare la rotation à venir.", "Nata reads your calendar and prepares the upcoming turnover."),
      items: [t("Nata détecte chaque départ et chaque arrivée", "Nata detects every departure and arrival"), t("Une mission est créée pour chaque logement", "A mission is created for each property"), t("Vous n'avez rien à saisir", "You enter nothing")] },
    { n: "02", icon: Send, t: t("Coordination", "Coordination"), d: t("Le bon prestataire reçoit sa mission au bon moment, sur WhatsApp.", "The right provider gets their mission at the right time, on WhatsApp."),
      items: [t("Nata choisit le prestataire disponible le plus proche", "Nata picks the closest available provider"), t("Il reçoit le brief et la checklist sur WhatsApp", "They get the brief and checklist on WhatsApp"), t("Nata suit la confirmation, sans que vous ayez à relancer", "Nata tracks the confirmation, no chasing needed")] },
    { n: "03", icon: ShieldCheck, t: t("Contrôle qualité", "Quality control"), d: t("Nata vérifie que tout est en ordre avant l'arrivée du voyageur.", "Nata checks everything is in order before the guest arrives."),
      items: [t("Nata contrôle les photos de fin de mission", "Nata reviews the end-of-mission photos"), t("Linge, consommables et équipements sont vérifiés", "Linen, supplies and equipment are checked"), t("Vous êtes prévenu dès que le logement est prêt", "You're notified as soon as the home is ready")] },
  ];
  return (
    <section className="py-28">
      <div className={wrap} style={wrapStyle}>
        <div className="max-w-[680px]">
          <Eyebrow>{t("Produit", "Product")}</Eyebrow>
          <h2 className="h-section r mt-4" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", color: "var(--ink)" }}>
            {t("De la réservation au logement prêt.", "From booking to a ready home.")}
          </h2>
          <p className="r mt-4 text-[18px]" style={{ color: "var(--ink-soft)" }}>
            {t("Nata gère chaque étape de la rotation, dans l'ordre. Vous n'avez rien à coordonner.", "Nata handles every step of the turnover, in order. You coordinate nothing.")}
          </p>
        </div>
        {/* cartes empilées : chaque étape se superpose à la précédente au scroll */}
        <div className="stack-cards mt-16">
          {steps.map((s, i) => (
            <div key={i} className="stack-card" style={{ top: `calc(88px + ${i * 18}px)`, zIndex: i + 1 }}>
              <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
                {/* texte */}
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-semibold tabular-nums" style={{ color: "var(--ink-muted)" }}>{s.n}</span>
                    <span className="grid place-items-center rounded-[var(--r-md)]" style={{ width: 48, height: 48, background: "var(--accent-soft)" }}>
                      <s.icon size={22} strokeWidth={2} style={{ color: "var(--accent-strong)" }} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-[26px] font-semibold" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>{s.t}</h3>
                  <p className="mt-2 text-[18px]" style={{ color: "var(--ink-soft)" }}>{s.d}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {s.items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-[15px]" style={{ color: "var(--ink-soft)" }}>
                        <Check size={18} strokeWidth={2.4} style={{ color: "var(--accent)", flex: "0 0 auto", marginTop: 2 }} />{it}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* mockup */}
                <div className={`flex justify-center ${i % 2 ? "lg:order-1" : ""}`}>
                  <img src={STEP_VISUALS[i]} alt={`Nata · ${s.t}`}
                    className="block h-auto w-full max-w-[400px] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-[-1deg]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- features (bento varié) ---------- */
function Features() {
  const t = useT();
  const items = [
    [SendIcon, t("Reçoit sa mission automatiquement", "Gets their mission automatically"), t("Sur WhatsApp, sans installer d'app.", "On WhatsApp, no app to install.")],
    [KeyRound, t("Adresse, code, parking, équipements", "Address, codes, parking, equipment"), t("Tout dans son téléphone, dès l'affectation.", "All on their phone, as soon as they're assigned.")],
    [ListChecks, t("Checklist personnalisée par logement", "Checklist tailored to each property"), t("Étape par étape, sans rien oublier.", "Step by step, nothing forgotten.")],
    [Camera, t("Photos avant/après enregistrées", "Before/after photos saved"), t("La preuve que la mission est bien faite, gardée automatiquement.", "Proof the job is done right, kept automatically.")],
    [UserRound, t("Infos sur le prochain voyageur", "Info on the next guest"), t("Le prestataire sait quoi préparer avant chaque arrivée.", "The provider knows what to prepare before each arrival.")],
    [Bell, t("Mises à jour en temps réel", "Real-time updates"), t("Annulation, retard ou changement de planning : le prestataire est prévenu tout de suite.", "Cancellation, delay or schedule change: the provider is notified right away.")],
  ];
  return (
    <section className="py-28" style={{ background: "var(--paper-2)" }}>
      <div className={wrap} style={wrapStyle}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="grid place-items-center rounded-[var(--r-md)] r" style={{ width: 48, height: 48, background: "var(--accent-soft)" }}>
              <Send size={22} strokeWidth={2} style={{ color: "var(--accent-strong)" }} />
            </span>
            <h2 className="h-section r mt-6" style={{ fontSize: "clamp(2rem,3.4vw,2.7rem)", color: "var(--ink)" }}>
              {t("Vos agents savent quoi faire en arrivant.", "Your providers know exactly what to do on arrival.")}
            </h2>
            <p className="r mt-4 text-[17px]" style={{ color: "var(--ink-soft)", maxWidth: 360 }}>
              {t("Vos prestataires reçoivent toutes les informations sur WhatsApp, au bon moment. Vous n'avez plus à tout expliquer au téléphone.", "Your providers get everything they need on WhatsApp, at the right time. No more explaining it all over the phone.")}
            </p>
          </div>
          <div className="grid gap-px sm:grid-cols-2 overflow-hidden rounded-[var(--r-xl)]" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
            {items.map(([Icon, title, d]: any, i) => (
              <div key={i} className="r p-6" style={{ background: "var(--paper)", transitionDelay: `${i * 50}ms` }}>
                <Icon size={22} strokeWidth={2} style={{ color: "var(--accent-strong)" }} />
                <div className="mt-4 text-[16px] font-semibold" style={{ color: "var(--ink)" }}>{title}</div>
                <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- metrics ---------- */
function Metrics() {
  const t = useT();
  // ⚠️ chiffres encore placeholders — à remplacer par de vrais chiffres pilote
  const items = [
    ["−80%", t("de temps de coordination", "less coordination time")],
    ["×3", t("logements gérés sans recruter", "more properties managed without hiring")],
    [t("4,8★", "4.8★"), t("note moyenne des voyageurs", "average guest rating")],
  ];
  return (
    <section className="py-28">
      <div className={wrap} style={wrapStyle}>
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="h-section r" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", color: "var(--ink)" }}>{t("Des résultats concrets, dès les premières semaines.", "Real results, within the first weeks.")}</h2>
          <p className="r mt-4 text-[18px]" style={{ color: "var(--ink-soft)" }}>{t("Ce que nos clients pilotes observent après quelques semaines avec Nata.", "What our pilot customers see after a few weeks with Nata.")}</p>
        </div>
        <div className="r mt-12 grid gap-px overflow-hidden rounded-[var(--r-2xl)] sm:grid-cols-3" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
          {items.map(([n, l], i) => (
            <div key={i} className="flex flex-col items-center gap-3 px-6 py-12 text-center" style={{ background: "var(--paper-2)" }}>
              <div className="font-semibold" style={{ fontSize: "clamp(2.6rem,4vw,3.4rem)", letterSpacing: "-0.03em", color: "var(--accent-strong)" }}>{n}</div>
              <div className="text-[16px] font-semibold" style={{ color: "var(--ink)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA tarifs ---------- */
function CtaTarif() {
  const t = useT();
  return (
    <section className="py-24">
      <div className={`${wrap} text-center`} style={{ ...wrapStyle, maxWidth: 760 }}>
        <h2 className="h-section r" style={{ fontSize: "clamp(1.9rem,3.4vw,2.6rem)", color: "var(--ink)" }}>{t("Un tarif simple, fixé avec vous.", "Simple pricing, set with you.")}</h2>
        <p className="r mt-4 text-[18px] mx-auto" style={{ color: "var(--ink-soft)", maxWidth: 560 }}>
          {t("Testez Nata 30 jours, sans engagement. Les premiers utilisateurs gardent un tarif préférentiel à vie.", "Try Nata for 30 days, no commitment. Early users keep a preferential rate for life.")}
        </p>
        <div className="r mt-8 flex justify-center gap-3">
          <Btn variant="ghost" onClick={() => navigate("/tarifs")}>{t("Voir les tarifs", "See pricing")}</Btn>
          <Btn onClick={() => navigate("/contact")}>{t("Rejoindre le pilote", "Join the pilot")}</Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------- pricing (3 profils) ---------- */
function Pricing() {
  const t = useT();
  const tiers = [
    { name: t("Particulier", "Individual"), vol: t("1-10 logements", "1-10 properties"), tag: t("Gérez vos locations sans y penser, même à distance.", "Manage your rentals without thinking about it, even remotely."), icon: Zap,
      feats: [t("Détection automatique des départs et arrivées", "Automatic detection of departures and arrivals"), t("Coordination du ménage et du check-in", "Cleaning and check-in coordination"), t("Contrôle qualité avant chaque arrivée", "Quality control before every arrival"), t("Aucune application à installer pour vos prestataires", "No app to install for your providers"), t("Support par email", "Email support")], cta: t("Rejoindre le pilote", "Join the pilot") },
    { name: t("Multi-bien", "Multi-property"), vol: t("10-100 logements", "10-100 properties"), tag: t("Suivez tous vos biens sans tout porter de tête.", "Keep track of every property without carrying it all in your head."), icon: Layers,
      feats: [t("Une vue d'ensemble sur tous vos biens", "A clear view of all your properties"), t("Affectation automatique des prestataires", "Automatic provider assignment"), t("Vous n'êtes alerté qu'en cas d'imprévu", "You're only alerted when something's off"), t("Vos prestataires travaillent sur WhatsApp", "Your providers work on WhatsApp"), t("Un rapport chaque semaine", "A weekly report")], cta: t("Rejoindre le pilote", "Join the pilot") },
    { name: t("Conciergerie", "Property manager"), vol: t("100+ logements", "100+ properties"), tag: t("Coordonnez plus de logements sans agrandir l'équipe.", "Coordinate more properties without growing the team."), icon: Layers3,
      feats: [t("Gestion de plusieurs équipes et prestataires", "Manage multiple teams and providers"), t("Tableau de bord en temps réel", "Real-time dashboard"), t("Un rapport automatique pour chaque propriétaire", "An automatic report for each owner"), t("Connexion à votre PMS et vos canaux de réservation", "Connects to your PMS and booking channels"), t("Un interlocuteur dédié", "A dedicated contact")], cta: t("Réserver une démo", "Book a demo") },
  ];
  const demoLabel = t("Réserver une démo", "Book a demo");
  return (
    <section className="py-28">
      <div className={wrap} style={wrapStyle}>
        <div className="max-w-[680px] mx-auto text-center">
          <Eyebrow>{t("Pour qui c'est ?", "Who's it for?")}</Eyebrow>
          <h2 className="h-section r mt-4" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", color: "var(--ink)" }}>
            {t("Que vous gériez 1 ou 1000 logements, Nata s'adapte.", "Whether you manage 1 or 1,000 properties, Nata adapts.")}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, i) => (
            <div key={i} className="r flex h-full flex-col rounded-[var(--r-xl)] p-8 transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: "var(--paper-2)", border: "1px solid var(--line)", boxShadow: "var(--shadow-sm)", transitionDelay: `${i * 70}ms` }}>
              <span className="grid place-items-center rounded-[var(--r-md)]" style={{ width: 44, height: 44, background: "var(--paper)", border: "1px solid var(--line)" }}>
                <tier.icon size={20} strokeWidth={2} style={{ color: "var(--ink-soft)" }} />
              </span>
              <div className="mt-5 text-[16px] font-semibold" style={{ color: "var(--ink)" }}>{tier.name}</div>
              <div className="text-[30px] font-semibold mt-1" style={{ letterSpacing: "-0.025em", color: "var(--ink)" }}>{tier.vol}</div>
              <p className="mt-2 text-[15px]" style={{ color: "var(--ink-soft)" }}>{tier.tag}</p>
              <ul className="mt-6 flex flex-col gap-3 flex-1">
                {tier.feats.map((f, j) => (
                  <li key={j} className="flex gap-2.5 text-[15px]" style={{ color: "var(--ink-soft)" }}>
                    <span className="grid place-items-center rounded-full" style={{ width: 20, height: 20, background: "var(--accent-soft)", flex: "0 0 auto", marginTop: 1 }}>
                      <Check size={13} strokeWidth={3} style={{ color: "var(--accent-strong)" }} />
                    </span>{f}
                  </li>
                ))}
              </ul>
              <a {...(tier.cta === demoLabel ? { href: DEMO_URL, target: "_blank", rel: "noopener noreferrer" } : { onClick: () => navigate("/contact") })}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] py-3 text-[15px] font-semibold transition-all duration-200 hover:brightness-105"
                style={{ background: "var(--accent)", color: "white", cursor: "pointer" }}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonial ---------- */
function Testimonial() {
  const t = useT();
  return (
    <section className="py-28" style={{ background: "var(--paper-2)" }}>
      <div className={wrap} style={wrapStyle}>
        <div className="r grid overflow-hidden rounded-[var(--r-2xl)] lg:grid-cols-[1.15fr_0.85fr]"
          style={{ background: "var(--paper)", border: "1px solid var(--line)", boxShadow: "var(--shadow-md)" }}>
          <div className="flex flex-col justify-center p-10 lg:p-14">
            <div className="flex gap-1" style={{ color: "var(--accent)" }}>
              {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <blockquote className="mt-6 font-medium" style={{ fontSize: "clamp(1.4rem,2.3vw,1.95rem)", letterSpacing: "-0.02em", lineHeight: 1.3, color: "var(--ink)" }}>
              {t("« Avant, il fallait constamment vérifier où en étaient les missions. Avec Nata, les informations remontent automatiquement et nous n'intervenons que lorsque c'est nécessaire. »", "“Before, we had to constantly check where each mission stood. With Nata, the information comes back automatically and we only step in when needed.”")}
            </blockquote>
            <div className="mt-7">
              <div className="text-[17px] font-semibold" style={{ color: "var(--ink)" }}>Sarah L.</div>
              <div className="text-[15px]" style={{ color: "var(--ink-muted)" }}>{t("Conciergerie à La Rochelle", "Property manager in La Rochelle")}</div>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <img src={PHOTO_TESTI} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ (accordéon réel) ---------- */
export function Faq() {
  const t = useT();
  const faqs = [
    [t("À partir de combien de logements Nata est utile ?", "From how many properties is Nata useful?"), t("Dès le premier logement. Le gain est le plus net entre 5 et 50 biens : c'est là que la coordination prend le plus de temps.", "From the very first property. The gain is clearest between 5 and 50 properties: that's where coordination takes the most time.")],
    [t("Mes prestataires doivent-ils installer une application ?", "Do my providers need to install an app?"), t("Non. Tout passe par WhatsApp, qu'ils utilisent déjà. Ils reçoivent leur mission et les consignes, et confirment d'un simple message.", "No. Everything goes through WhatsApp, which they already use. They get their mission and instructions, and confirm with a simple message.")],
    [t("Avec quels outils Nata fonctionne ?", "Which tools does Nata work with?"), t("Airbnb, Booking, Abritel, Vrbo et vos autres canaux de réservation. Nata lit votre calendrier sans que vous changiez quoi que ce soit.", "Airbnb, Booking, Abritel, Vrbo and your other booking channels. Nata reads your calendar without you changing anything.")],
    [t("Combien de temps pour démarrer ?", "How long does it take to get started?"), t("Quelques heures. On connecte vos calendriers, on renseigne les consignes de chaque logement, et Nata prend la main sur la rotation suivante.", "A few hours. We connect your calendars, set the instructions for each property, and Nata takes over from the next turnover.")],
    [t("Et si un prestataire ne répond pas ou annule ?", "What if a provider doesn't reply or cancels?"), t("Nata le relance, puis passe à un autre prestataire disponible à proximité. Vous êtes prévenu et vous ne courez après personne.", "Nata follows up, then switches to another available provider nearby. You're notified and you chase no one.")],
    [t("Comment se passe le pilote ?", "How does the pilot work?"), t("On vous accompagne de près les premières semaines : on règle ensemble les consignes et ce qu'il faut faire en cas d'imprévu. Ensuite, Nata tourne seul.", "We support you closely for the first weeks: we set the instructions and what to do when something unexpected happens, together. Then Nata runs on its own.")],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28">
      <div className={`${wrap}`} style={{ maxWidth: 760 }}>
        <div className="text-center max-w-[640px] mx-auto">
          <Eyebrow>{t("FAQ", "FAQ")}</Eyebrow>
          <h2 className="h-section r mt-4" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", color: "var(--ink)" }}>{t("Vos questions, nos réponses.", "Your questions, answered.")}</h2>
        </div>
        <div className="mt-12">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderTop: "1px solid var(--line)" }}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  style={{ cursor: "pointer" }}>
                  <span className="text-[17px] font-semibold" style={{ color: "var(--ink)" }}>{q}</span>
                  <span className="grid place-items-center rounded-full transition-transform duration-300" style={{ width: 28, height: 28, background: "var(--paper-3)", transform: isOpen ? "rotate(45deg)" : "none", flex: "0 0 auto" }}>
                    <Plus size={16} strokeWidth={2.2} style={{ color: "var(--ink-soft)" }} />
                  </span>
                </button>
                <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows .35s var(--ease)" }}>
                  <div style={{ overflow: "hidden" }}>
                    <p className="pb-6 text-[16px] leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: 620 }}>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA finale (split clair + photo) ---------- */
export function Cta() {
  const t = useT();
  const items = [t("30 jours d'essai gratuit", "30-day free trial"), t("Mise en place accompagnée", "Guided setup"), t("Accès à toutes les fonctionnalités", "Access to all features")];
  return (
    <section className="py-16">
      <div className={wrap} style={wrapStyle}>
        <div className="r grid overflow-hidden rounded-[var(--r-2xl)] lg:grid-cols-2"
          style={{ background: "var(--paper-2)", border: "1px solid var(--line)", boxShadow: "var(--shadow-md)" }}>
          <div className="flex flex-col justify-center p-10 lg:p-14">
            <h2 className="h-section" style={{ fontSize: "clamp(1.9rem,3.2vw,2.5rem)", color: "var(--ink)" }}>
              {t("Arrêtez de coordonner vos rotations à la main.", "Stop coordinating your turnovers by hand.")}
            </h2>
            <ul className="mt-7 flex flex-col gap-3">
              {items.map((it, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[16px]" style={{ color: "var(--ink-soft)" }}>
                  <span className="grid place-items-center rounded-full" style={{ width: 22, height: 22, background: "var(--accent-soft)", flex: "0 0 auto" }}>
                    <Check size={14} strokeWidth={3} style={{ color: "var(--accent-strong)" }} />
                  </span>{it}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={DEMO_URL}>{t("Réserver une démo", "Book a demo")}</Btn>
              <Btn variant="ghost" onClick={() => navigate("/contact")}>{t("Rejoindre le pilote", "Join the pilot")}</Btn>
            </div>
          </div>
          <div className="relative min-h-[340px]">
            <img src={PHOTO_SKI} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
export function Footer() {
  const t = useT();
  const cols = [
    { h: t("Produit", "Product"), links: [
      { label: t("Comment ça marche", "How it works"), to: "/" },
      { label: t("Tarifs", "Pricing"), to: "/tarifs" },
      { label: t("Démo", "Demo"), href: DEMO_URL },
    ] },
    { h: t("Société", "Company"), links: [
      { label: t("À propos", "About") },
      { label: t("Contact", "Contact"), to: "/contact" },
      { label: t("Mentions légales", "Legal") },
    ] },
  ];
  return (
    <footer className="py-16" style={{ borderTop: "1px solid var(--line)" }}>
      <div className={`${wrap} flex flex-col md:flex-row md:items-center md:justify-between gap-8`} style={wrapStyle}>
        <div>
          <img src={LOGO} alt="Nata" style={{ height: 69, width: "auto" }} />
          <p className="mt-3 text-[14px]" style={{ color: "var(--ink-muted)", maxWidth: 280 }}>{t("L'agent IA qui coordonne vos locations courte durée.", "The AI agent that coordinates your short-term rentals.")}</p>
        </div>
        <div className="flex gap-10 text-[14px]" style={{ color: "var(--ink-soft)" }}>
          {cols.map((col) => (
            <div key={col.h} className="flex flex-col gap-2">
              <span className="font-semibold" style={{ color: "var(--ink)" }}>{col.h}</span>
              {col.links.map((lk: any) => {
                if (lk.href)
                  return <a key={lk.label} href={lk.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:var(--ink)]" style={{ cursor: "pointer" }}>{lk.label}</a>;
                return <a key={lk.label} onClick={lk.to ? () => navigate(lk.to) : undefined} className="transition-colors hover:text-[color:var(--ink)]" style={{ cursor: "pointer" }}>{lk.label}</a>;
              })}
            </div>
          ))}
        </div>
      </div>
      <div className={`${wrap} mt-12 text-[13px]`} style={{ ...wrapStyle, color: "var(--ink-muted)" }}>{t("© 2026 Nata. Tous droits réservés.", "© 2026 Nata. All rights reserved.")}</div>
    </footer>
  );
}

export default function Home() {
  useReveal();
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Problem />
        <Solution />
        <How />
        <Pricing />
        <Features />
        <Metrics />
        <Testimonial />
        <CtaTarif />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
