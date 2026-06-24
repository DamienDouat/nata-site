import { ChevronLeft, Video, Phone } from "lucide-react";

// Maquette WhatsApp reconstruite en HTML (net, fond gris, vrais emojis) — pas un raster.
const LOGO = "/assets/brand/nata-logo.png";

type Msg = { from: "them" | "me"; text: string; time: string };

function Bubble({ m }: { m: Msg }) {
  const me = m.from === "me";
  return (
    <div style={{ display: "flex", justifyContent: me ? "flex-end" : "flex-start", marginBottom: 6 }}>
      <div style={{
        maxWidth: "82%", background: me ? "#d9fdd3" : "#ffffff", borderRadius: 9,
        padding: "6px 9px 4px", fontSize: 12.5, lineHeight: 1.32, color: "#111b21",
        boxShadow: "0 1px 0.5px rgba(11,20,26,.13)", whiteSpace: "pre-line",
      }}>
        {m.text}
        <span style={{ float: "right", fontSize: 10, color: "#667781", marginLeft: 8, marginTop: 3 }}>
          {m.time}{me ? " ✓✓" : ""}
        </span>
      </div>
    </div>
  );
}

export default function PhoneChat({ msgs }: { msgs: Msg[] }) {
  return (
    <div style={{ width: "100%", maxWidth: 290, margin: "0 auto" }}>
      <div style={{ background: "#0b0b0d", borderRadius: 44, padding: 9, boxShadow: "0 30px 60px -18px rgba(20,40,30,.45), 0 8px 20px -10px rgba(0,0,0,.3)" }}>
        <div style={{ borderRadius: 36, overflow: "hidden", background: "#e9eaec", position: "relative" }}>
          {/* status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 18px 4px", fontSize: 11, fontWeight: 600, color: "#111b21" }}>
            <span>23:59</span>
            <span style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 10 }}>● ▆ ▰</span>
          </div>
          {/* header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "#f5f6f8", borderBottom: "1px solid rgba(0,0,0,.06)" }}>
            <ChevronLeft size={18} color="#111b21" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#111b21" }}>1</span>
            <span style={{ width: 30, height: 30, borderRadius: 99, background: "#fff", display: "grid", placeItems: "center", overflow: "hidden", border: "1px solid rgba(0,0,0,.06)" }}>
              <img src={LOGO} alt="" style={{ width: 26, height: "auto" }} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111b21" }}>Nata IA</div>
              <div style={{ fontSize: 10, color: "#667781" }}>tap here for contact info</div>
            </div>
            <Video size={17} color="#111b21" />
            <Phone size={15} color="#111b21" />
          </div>
          {/* messages */}
          <div style={{ background: "#e9eaec", padding: "12px 10px 16px", minHeight: 360 }}>
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <span style={{ background: "#fff", color: "#54656f", fontSize: 10.5, fontWeight: 600, padding: "3px 9px", borderRadius: 7, boxShadow: "0 1px 0.5px rgba(11,20,26,.13)" }}>Today</span>
            </div>
            {msgs.map((m, i) => <Bubble key={i} m={m} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export const CONV: Msg[][] = [
  // 01 Anticipation
  [
    { from: "them", text: "Bonjour Sophie 👋\nVotre mission de ménage est prévue aujourd'hui à 11h00.\n📍 Villa Azur — 24 Rue des Tilleuls\nLe prochain voyageur arrive à 15h00.", time: "08:21" },
    { from: "them", text: "Consignes particulières :\n• Préparer le lit bébé\n• Vérifier la cafetière de la cuisine\n• Remplacer les serviettes de piscine", time: "08:21" },
    { from: "me", text: "Bien reçu 👍", time: "08:22" },
    { from: "them", text: "Checklist de préparation :\n☐ Cuisine\n☐ Salon\n☐ Chambre 1\n☐ Chambre 2\n☐ Salle de bain\n☐ Lit bébé", time: "08:21" },
    { from: "me", text: "Je commence la mission", time: "08:22" },
  ],
  // 02 Coordination
  [
    { from: "them", text: "Bonjour Sophie 👋\nVotre mission au 12 rue des Tilleuls débute dans 30 minutes.\nPouvez-vous confirmer votre arrivée sur site ?", time: "08:21" },
    { from: "me", text: "Je suis en route.", time: "08:22" },
    { from: "them", text: "Parfait ✅\nLe prochain voyageur arrive à 16h00.\nPensez à signaler tout problème rencontré pendant l'intervention.", time: "08:21" },
    { from: "me", text: "Je ne trouve pas les draps pour le canapé-lit.", time: "08:22" },
    { from: "them", text: "Les draps sont stockés dans le coffre du lit de la chambre 2.\nLe kit comprend :\n• 1 drap-housse\n• 1 housse de couette\n• 2 taies d'oreiller", time: "08:22" },
  ],
  // 03 Contrôle qualité
  [
    { from: "them", text: "La mission est presque terminée.\nMerci de transmettre les éléments de validation.", time: "08:21" },
    { from: "them", text: "Merci de confirmer :\n☑️ Cuisine terminée\n☑️ Salon terminé\n☑️ Chambres terminées\n☑️ Salle de bain terminée", time: "08:21" },
    { from: "me", text: "Tout est terminé.", time: "08:22" },
    { from: "them", text: "Contrôle qualité validé ✅\nLe logement est prêt pour l'arrivée du voyageur.", time: "08:22" },
  ],
];
