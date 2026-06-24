#!/usr/bin/env python3
# Transforme les sections VF brutes (_vf-sections/*.jsx, code get_design_context React)
# en composants .tsx du projet : corrige UNIQUEMENT les polices (variable de famille
# invalide + token de graisse) et pointe les assets en local. Tout le reste = verbatim
# (Tailwind reel rend les classes arbitraires fidelement -> pixel-perfect).
import re, os, glob

SEC_DIR = "/Users/noboadmin/Nata/site-figma/_vf-sections"
OUT_DIR = "/Users/noboadmin/Nata/site-react/src/sections"
ASSET_DIR = "/Users/noboadmin/Nata/site-react/public/assets/figma"
os.makedirs(OUT_DIR, exist_ok=True)

SECTIONS = ["01-hero","02-socialproof","03-featurestabs","04-cta1","05-steps",
            "06-pricing","07-features2","08-metrics","09-testimonial","10-cta2",
            "11-faq","12-cta3","13-footer"]
# nom de composant importable par fichier
COMP = {"01-hero":"Hero","02-socialproof":"SocialProof","03-featurestabs":"FeaturesTabs",
  "04-cta1":"Cta1","05-steps":"Steps","06-pricing":"Pricing","07-features2":"Features2",
  "08-metrics":"Metrics","09-testimonial":"Testimonial","10-cta2":"Cta2","11-faq":"Faq",
  "12-cta3":"Cta3","13-footer":"Footer"}

WEIGHT = {"semibold":"font-semibold","medium":"font-medium","regular":"font-normal",
          "bold":"font-bold","normal":"font-normal","light":"font-light"}

# map nom d'asset -> fichier local
asset_ext = {}
for f in glob.glob(os.path.join(ASSET_DIR, "*.*")):
    name = os.path.splitext(os.path.basename(f))[0]
    asset_ext[name] = os.path.basename(f)

# --- icones Lucide (audit complet) ---
# data-name de l'icone Figma -> (composant Lucide, props). On garde le conteneur
# (sa classe = taille/position) et on centre l'icone Lucide dedans.
ICON_MAP = {
  "message-chat-circle": ("MessageSquare", 'size={24} strokeWidth={2}', "#059669"),
  "zap-fast":            ("Zap",           'size={24} strokeWidth={2}', "#059669"),
  "zap":                 ("Zap",           'size={24} strokeWidth={2}', "#059669"),
  "chart-breakout-square":("TrendingUp",   'size={24} strokeWidth={2}', "#059669"),
  "layers-two-01":       ("Home",          'size={24} strokeWidth={2}', "#059669"),
  "layers-three-01":     ("Building2",     'size={24} strokeWidth={2}', "#059669"),
  "trash-01":            ("Network",       'size={24} strokeWidth={2}', "#059669"),
  "play-circle":         ("Play",          'size={20} strokeWidth={2}', None),
  "plus-circle":         ("ChevronDown",   'size={22} strokeWidth={2}', "#737373"),
  "minus-circle":        ("ChevronUp",     'size={22} strokeWidth={2}', "#737373"),
  "chevron-down":        ("ChevronDown",   'size={22} strokeWidth={2}', "#737373"),
}

def opening_tag_class(tag):
    m = re.search(r'className="([^"]*)"', tag)
    return m.group(1) if m else ""

def replace_icon_containers(code, data_name, lucide, props, color):
    """Garde le <div data-name=X> (sa classe), remplace son contenu par l'icone Lucide centree."""
    out = code
    pos = 0
    while True:
        m = re.search(r'data-name="%s"' % re.escape(data_name), out[pos:])
        if not m:
            break
        anchor = pos + m.start()
        st = out.rfind("<div", 0, anchor)
        if st < 0:
            break
        # fin de la balise ouvrante
        open_end = out.find(">", anchor)
        cls = opening_tag_class(out[st:open_end])
        # close du div (comptage)
        depth = 0; end = None
        for tm in re.finditer(r'<div\b|</div>', out[st:]):
            depth += 1 if tm.group(0) == "<div" else -1
            if depth == 0:
                end = st + tm.end(); break
        if end is None:
            break
        col = (' color="%s"' % color) if color else ""
        rep = ('<div className="%s flex items-center justify-center">'
               '<%s %s%s /></div>' % (cls, lucide, props, col))
        out = out[:st] + rep + out[end:]
        pos = st + len(rep)
    return out

def swap_icons(code, comp):
    used = set()
    for dn, (lucide, props, color) in ICON_MAP.items():
        if 'data-name="%s"' % dn in code:
            code = replace_icon_containers(code, dn, lucide, props, color)
            used.add(lucide)
    # etoiles avis : Star ambre rempli
    if 'data-name="Star icon"' in code:
        code = replace_icon_containers(code, "Star icon", "Star",
                 'size={20} fill="#f59e0b"', "#f59e0b")
        used.add("Star")
    # CheckIcon (coches de liste) -> CheckCircle2 vert
    if "function CheckIcon(" in code:
        code = re.sub(
          r"function CheckIcon\([^)]*\)[^{]*\{.*?\n\}",
          'function CheckIcon({ className }: { className?: string }) {\n'
          '  return <span className={className} style={{display:"inline-flex",alignItems:"center",justifyContent:"center"}}>'
          '<CheckCircle2 size={24} color="#059669" strokeWidth={2} /></span>;\n}',
          code, count=1, flags=re.S)
        used.add("CheckCircle2")
    # features2 : injecte une icone par item (mappée par mot-clé du titre)
    if comp == "Features2":
        KW = [("mission","Send"),("parking","KeyRound"),("Adresse","KeyRound"),
              ("Checklist","ListChecks"),("Photos","Camera"),
              ("Spécificités","UserRound"),("voyageur","UserRound"),
              ("temps réel","Bell"),("annulation","Bell")]
        parts = code.split('data-name="_Feature text">')
        if len(parts) > 1:
            rebuilt = parts[0]
            for seg in parts[1:]:
                window = seg[:900]
                icon = "Sparkles"
                for kw, ic in KW:
                    if kw in window:
                        icon = ic; break
                used.add(icon)
                rebuilt += ('data-name="_Feature text">'
                  '<%s size={24} color="#059669" strokeWidth={2} '
                  'style={{marginBottom:14,display:"block"}} />' % icon) + seg
            code = rebuilt
            used.add("Sparkles")
    if used:
        code = "import { %s } from \"lucide-react\";\n" % ", ".join(sorted(used)) + code
    return code

LOGOS = [("imgTypeBooking","Booking.com"),("imgTypeVrbo","Vrbo"),("imgTypeAbritel","Abritel"),
  ("imgTypeAirbnb","Airbnb"),("imgTypeTelegram","Telegram"),("imgTypeWhatsapp","WhatsApp"),
  ("imgTypeInstagram","Instagram"),("imgTypeWechat","WeChat")]

def rewrite_logos(code):
    """Remplace le bloc Logos par un marquee CSS propre (continu, centré, object-contain)."""
    anchor = code.find('data-name="Logos"')
    if anchor < 0:
        return code
    st = code.rfind("<div", 0, anchor)
    depth = 0; end = None
    for tm in re.finditer(r'<div\b|</div>', code[st:]):
        depth += 1 if tm.group(0) == "<div" else -1
        if depth == 0:
            end = st + tm.end(); break
    if end is None:
        return code
    imgs = "".join('<img src={%s} alt="%s" className="m-logo" />' % (c, l)
                   for c, l in LOGOS)
    rep = ('<div data-name="Logos" className="m-marquee w-full">'
           '<div className="m-marquee-track">%s%s</div></div>' % (imgs, imgs))
    return code[:st] + rep + code[end:]

def fix(code, comp=""):
    # 1. familles : 'Inter:Semibold' -> 'Inter' (le suffixe :poids casse la famille)
    code = re.sub(r"Inter:[A-Za-z][A-Za-z ]*", "Inter", code)
    # 2. graisse : font-[var(--font-weight\/semibold,normal)] -> font-semibold
    code = re.sub(r"font-\[var\(--font-weight\\?/(\w+)[^\]]*\]",
                  lambda m: WEIGHT.get(m.group(1), ""), code)
    # 3. assets : const NAME = "https://..." -> chemin local
    def repl_asset(m):
        name = m.group(1)
        fn = asset_ext.get(name)
        return 'const %s = "/assets/figma/%s";' % (name, fn) if fn else m.group(0)
    code = re.sub(r'const (\w+) = "https://[^"]+";', repl_asset, code)
    # 3b. résidus anglais du Figma -> FR (placeholders à valider par Damien)
    EN_FR = {
      "Get in touch": "Nous contacter",
      "Projects completed": "Temps de coordination en moins",
      "Return on investment": "Plus de logements, sans recruter",
      "Global downloads": "Note moyenne voyageurs",
    }
    for en, fr in EN_FR.items():
        code = code.replace(en, fr)
    # 4. icones -> Lucide
    code = swap_icons(code, comp)
    # 5. logos -> marquee propre
    if comp == "SocialProof":
        code = rewrite_logos(code)
    # 6. Hero : fond du root transparent (sinon il masque la grille de points DotGrid derriere)
    if comp == "Hero":
        code = code.replace(r"bg-[var(--colors\/background\/bg-primary,white)]", "", 1)
    return code

missing_assets = set()
for sec in SECTIONS:
    code = open(os.path.join(SEC_DIR, sec + ".jsx")).read()
    code = fix(code, COMP[sec])
    # detecte assets non resolus
    for nm in re.findall(r'const (\w+) = "https://', code):
        missing_assets.add(nm)
    # renomme l'export default avec un nom unique
    code = re.sub(r"export default function \w+\(", "export default function %s(" % COMP[sec], code)
    open(os.path.join(OUT_DIR, COMP[sec] + ".tsx"), "w").write(code)
    print("ok", sec, "->", COMP[sec] + ".tsx")

if missing_assets:
    print("WARN assets non resolus:", sorted(missing_assets))

# hauteurs exactes des sections dans le frame VF 15:4729 (somme = 11192)
HEIGHT = {"01-hero":872,"02-socialproof":400,"03-featurestabs":930,"04-cta1":614,
  "05-steps":2686,"06-pricing":1120,"07-features2":526,"08-metrics":590,
  "09-testimonial":758,"10-cta2":412,"11-faq":1216,"12-cta3":720,"13-footer":348}

# App.tsx : chaque section enveloppee dans son cadre Figma exact (1440 x H, clippe)
# -> reproduit le frame, les fonds absolus ne debordent plus, size-full se resout.
imports = "\n".join('import %s from "./sections/%s";' % (COMP[s], COMP[s]) for s in SECTIONS)
imports = ('import { useLayoutEffect } from "react";\nimport { initMotion } from "./motion";\n'
           'import DotGrid from "./DotGrid";\n' + imports)
frames = []
for s in SECTIONS:
    if s == "01-hero":
        frames.append(
          '      <div style={{position:"relative",width:1440,height:%d,overflow:"hidden"}}>'
          '<DotGrid />'
          '<div style={{position:"relative",zIndex:1,height:"100%%"}}><%s /></div></div>'
          % (HEIGHT[s], COMP[s]))
        continue
    frames.append(
      '      <div style={{position:"relative",width:1440,height:%d,overflow:"hidden"}}>'
      '<%s /></div>' % (HEIGHT[s], COMP[s]))
body = "\n".join(frames)
app = ('%s\n\nexport default function App() {\n'
       '  useLayoutEffect(() => { initMotion(); }, []);\n'
       '  return (\n    <div style={{width:1440, margin:"0 auto"}}>\n%s\n    </div>\n  );\n}\n'
       % (imports, body))
open("/Users/noboadmin/Nata/site-react/src/App.tsx", "w").write(app)
print("\nApp.tsx ecrit (%d sections, cadres exacts)" % len(SECTIONS))
