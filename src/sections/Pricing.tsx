import { Building2, CheckCircle2, Home, Zap } from "lucide-react";
const imgIcon = "/assets/figma/imgIcon.svg";
const imgIcon1 = "/assets/figma/imgIcon1.svg";
const imgIcon2 = "/assets/figma/imgIcon2.svg";
const imgIcon3 = "/assets/figma/imgIcon3.svg";

type CheckIconProps = {
  className?: string;
  color?: "Brand";
  size?: "sm";
  type?: "Line";
};

function CheckIcon({ className }: { className?: string }) {
  return <span className={className} style={{display:"inline-flex",alignItems:"center",justifyContent:"center"}}><CheckCircle2 size={24} color="#059669" strokeWidth={2} /></span>;
}

export default function Pricing() {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col items-center relative size-full" data-node-id="24:5761" data-name="Pricing page header">
      <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col gap-[var(--spacing-7xl,0px)] items-center overflow-clip py-[var(--spacing-9xl,96px)] relative shrink-0 w-full" data-node-id="I24:5761;1393:1950" data-name="Header section">
        <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,0px)] items-center max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="I24:5761;1393:1950;1319:6655" data-name="Container">
          <div className="content-stretch flex flex-col gap-[var(--spacing-6xl,48px)] items-center relative shrink-0 w-full" data-node-id="I24:5761;1393:1950;1319:6656" data-name="Content">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-3xl,24px)] items-center max-w-[768px] relative shrink-0 text-center w-full" data-node-id="I24:5761;1393:1950;1319:6657" data-name="Heading and supporting text">
              <div className="content-stretch flex flex-col font-semibold gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:1950;1319:6875" data-name="Heading and subheading">
                <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-brand-secondary-\(700\),#047857)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:1950;1319:6874">{`Pour qui c'est ?`}</p>
                <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] leading-[var(--line-height\/display-lg,60px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-lg,48px)] tracking-[-0.96px] w-full" data-node-id="I24:5761;1393:1950;1319:6658">{`Que vous gériez 1 ou 1000 logements, Nata s'adapte.`}</p>
              </div>
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-xl,30px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-xl,20px)] w-full" data-node-id="I24:5761;1393:1950;1319:6659">{`Que vous gériez 1 ou 1000 logements, Nata s'adapte.`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--spacing-7xl,0px)] items-center pb-[var(--spacing-9xl,96px)] relative shrink-0 w-full" data-node-id="I24:5761;1393:1951" data-name="Section">
        <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,0px)] items-start max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="I24:5761;1393:1952" data-name="Container">
          <div className="content-stretch flex gap-[var(--spacing-4xl,32px)] items-start justify-center relative shrink-0 w-full" data-node-id="I24:5761;1393:1953" data-name="Content">
            <div className="bg-[var(--colors\/background\/bg-secondary,#fafafa)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[var(--radius-2xl,16px)] self-stretch" data-node-id="I24:5761;1393:3634" data-name="_Pricing tier card">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-3xl,24px)] items-start min-h-px pt-[var(--spacing-6xl,48px)] px-[var(--spacing-4xl,32px)] relative w-full" data-node-id="I24:5761;1393:3634;1346:181844" data-name="Header">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-md,8px)] items-center relative shrink-0 text-center w-full" data-node-id="I24:5761;1393:3634;1346:181845" data-name="Heading and price">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-xl,30px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/text-xl,20px)] w-full" data-node-id="I24:5761;1393:3634;1346:181848">
                    Particulier
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-lg,60px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-lg,48px)] tracking-[-0.96px] w-full" data-node-id="I24:5761;1393:3634;1346:181849">
                    1-10
                    <br aria-hidden />
                    logements
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:3634;1346:181850">
                    Louez sereinement, même à distance.
                  </p>
                </div>
                <div className="-translate-x-1/2 absolute border border-[var(--colors\/border\/border-primary,#d4d4d4)] border-solid left-1/2 overflow-clip rounded-[var(--radius-lg,10px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] size-[48px] top-[-24px]" data-node-id="I24:5761;1393:3634;1346:181894" data-name="Featured icon">
                  <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-primary,white)] inset-0 pointer-events-none rounded-[var(--radius-lg,10px)]" />
                  <div className="absolute left-[11px] overflow-clip size-[24px] top-[11px] flex items-center justify-center"><Zap size={24} strokeWidth={2} color="#059669" /></div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,0px)] items-start pb-[var(--spacing-5xl,40px)] pt-[var(--spacing-4xl,32px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181851" data-name="Content">
                <div className="content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181852" data-name="Check items">
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181853" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;1393:3634;1346:181853;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:3634;1346:181853;3488:547158">
                        Détection automatique des rotations
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181854" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;1393:3634;1346:181854;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:3634;1346:181854;3488:547158">
                        Coordination ménage et check-in
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181855" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;1393:3634;1346:181855;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:3634;1346:181855;3488:547158">
                        Validation qualité avant arrivée
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181856" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;1393:3634;1346:181856;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:3634;1346:181856;3488:547158">
                        Aucune app à installer pour vos agents
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181857" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;1393:3634;1346:181857;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;1393:3634;1346:181857;3488:547158">
                        Support email réactif
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,0px)] items-start pb-[var(--spacing-4xl,32px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181863" data-name="Footer">
                <div className="content-stretch flex flex-col gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181864" data-name="Actions">
                  <div className="border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0 w-full" data-node-id="I24:5761;1393:3634;1346:181865" data-name="Buttons/Button">
                    <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-brand-solid,#059669)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                    <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I24:5761;1393:3634;1346:181865;6421:283565" data-name="Text padding">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-white,white)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I24:5761;1393:3634;1346:181865;3287:432937">
                        Rejoindre le pilote
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--colors\/background\/bg-secondary,#fafafa)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[var(--radius-2xl,16px)]" data-node-id="I24:5761;7619:11849" data-name="_Pricing tier card">
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,24px)] items-start pt-[var(--spacing-6xl,48px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181844" data-name="Header">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-md,8px)] items-center relative shrink-0 text-center w-full" data-node-id="I24:5761;7619:11849;1346:181845" data-name="Heading and price">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-xl,30px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/text-xl,20px)] w-full" data-node-id="I24:5761;7619:11849;1346:181848">
                    Multi-bien
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-lg,60px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-lg,48px)] tracking-[-0.96px] w-full" data-node-id="I24:5761;7619:11849;1346:181849">
                    10-100 logements
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11849;1346:181850">
                    Gardez le contrôle, sans la charge mentale.
                  </p>
                </div>
                <div className="-translate-x-1/2 absolute border border-[var(--colors\/border\/border-primary,#d4d4d4)] border-solid left-1/2 overflow-clip rounded-[var(--radius-lg,10px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] size-[48px] top-[-24px]" data-node-id="I24:5761;7619:11849;1346:181894" data-name="Featured icon">
                  <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-primary,white)] inset-0 pointer-events-none rounded-[var(--radius-lg,10px)]" />
                  <div className="absolute left-[11px] overflow-clip size-[24px] top-[11px] flex items-center justify-center"><Home size={24} strokeWidth={2} color="#059669" /></div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,0px)] items-start pb-[var(--spacing-5xl,40px)] pt-[var(--spacing-4xl,32px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181851" data-name="Content">
                <div className="content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181852" data-name="Check items">
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181853" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11849;1346:181853;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11849;1346:181853;3488:547158">{`Vue d'ensemble sur tous vos biens`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181854" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11849;1346:181854;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11849;1346:181854;3488:547158">
                        Coordination automatique des prestataires
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181855" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11849;1346:181855;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11849;1346:181855;3488:547158">
                        Alertes uniquement sur les imprévus
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181856" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11849;1346:181856;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11849;1346:181856;3488:547158">
                        WhatsApp natif pour vos agents
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181857" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11849;1346:181857;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11849;1346:181857;3488:547158">
                        Reporting hebdomadaire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,0px)] items-start pb-[var(--spacing-4xl,32px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181863" data-name="Footer">
                <div className="content-stretch flex flex-col gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181864" data-name="Actions">
                  <div className="border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0 w-full" data-node-id="I24:5761;7619:11849;1346:181865" data-name="Buttons/Button">
                    <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-brand-solid,#059669)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                    <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I24:5761;7619:11849;1346:181865;6421:283565" data-name="Text padding">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-white,white)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I24:5761;7619:11849;1346:181865;3287:432937">
                        Rejoindre le pilote
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[var(--colors\/background\/bg-secondary,#fafafa)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[var(--radius-2xl,16px)]" data-node-id="I24:5761;7619:11850" data-name="_Pricing tier card">
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,24px)] items-start pt-[var(--spacing-6xl,48px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181844" data-name="Header">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-md,8px)] items-center relative shrink-0 text-center w-full" data-node-id="I24:5761;7619:11850;1346:181845" data-name="Heading and price">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-xl,30px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/text-xl,20px)] w-full" data-node-id="I24:5761;7619:11850;1346:181848">
                    Conciergerie
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-lg,60px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-lg,48px)] tracking-[-0.96px] w-full" data-node-id="I24:5761;7619:11850;1346:181849">
                    100+
                    <br aria-hidden />
                    logements
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11850;1346:181850">
                    Industrialisez la coordination, sans recruter.
                  </p>
                </div>
                <div className="-translate-x-1/2 absolute border border-[var(--colors\/border\/border-primary,#d4d4d4)] border-solid left-1/2 overflow-clip rounded-[var(--radius-lg,10px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] size-[48px] top-[-24px]" data-node-id="I24:5761;7619:11850;1346:181894" data-name="Featured icon">
                  <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-primary,white)] inset-0 pointer-events-none rounded-[var(--radius-lg,10px)]" />
                  <div className="absolute left-[11px] overflow-clip size-[24px] top-[11px] flex items-center justify-center"><Building2 size={24} strokeWidth={2} color="#059669" /></div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,0px)] items-start pb-[var(--spacing-5xl,40px)] pt-[var(--spacing-4xl,32px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181851" data-name="Content">
                <div className="content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181852" data-name="Check items">
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181853" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11850;1346:181853;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11850;1346:181853;3488:547158">
                        Multi-équipes et multi-prestataires
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181854" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11850;1346:181854;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11850;1346:181854;3488:547158">
                        Tableau de bord temps réel
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181855" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11850;1346:181855;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11850;1346:181855;3488:547158">
                        Reporting propriétaire automatisé
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181856" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11850;1346:181856;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11850;1346:181856;3488:547158">
                        Intégration tous PMS et channel managers
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181857" data-name="Check item text">
                    <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[24px]" />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I24:5761;7619:11850;1346:181857;3488:547157" data-name="Text wrap">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I24:5761;7619:11850;1346:181857;3488:547158">
                        Account manager dédié
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,0px)] items-start pb-[var(--spacing-4xl,32px)] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181863" data-name="Footer">
                <div className="content-stretch flex flex-col gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181864" data-name="Actions">
                  <div className="border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0 w-full" data-node-id="I24:5761;7619:11850;1346:181865" data-name="Buttons/Button">
                    <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-brand-solid,#059669)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                    <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I24:5761;7619:11850;1346:181865;6421:283565" data-name="Text padding">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-white,white)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I24:5761;7619:11850;1346:181865;3287:432937">
                        Réserver une démo
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}