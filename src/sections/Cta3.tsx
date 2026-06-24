import { CheckCircle2 } from "lucide-react";
const imgIcon = "/assets/figma/imgIcon.svg";
const imgImage = "/assets/figma/imgImage.png";

type CheckIconProps = {
  className?: string;
  color?: "Brand";
  size?: "md";
  type?: "Default";
};

function CheckIcon({ className }: { className?: string }) {
  return <span className={className} style={{display:"inline-flex",alignItems:"center",justifyContent:"center"}}><CheckCircle2 size={24} color="#059669" strokeWidth={2} /></span>;
}

export default function Cta3() {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex items-start relative size-full" data-node-id="27:5326" data-name="CTA section">
      <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing-7xl,0px)] items-center justify-end min-w-px py-[var(--spacing-9xl,96px)] relative self-stretch" data-node-id="I27:5326;1361:8352" data-name="Content">
        <div className="content-stretch flex flex-[1_0_0] items-start max-w-[640px] min-w-px px-[var(--container-padding-desktop,32px)] relative" data-node-id="I27:5326;1361:8353" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-6xl,48px)] items-start min-w-px pr-[var(--spacing-4xl,32px)] relative" data-node-id="I27:5326;1361:8354" data-name="Content">
            <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,32px)] items-start relative shrink-0 w-full" data-node-id="I27:5326;1361:8355" data-name="Heading and check items">
              <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-lg,60px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-lg,48px)] tracking-[-0.96px] w-full" data-node-id="I27:5326;1361:8358">
                Prêt à laisser Nata coordonner ?
              </p>
              <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start pl-[var(--spacing-xl,16px)] relative shrink-0 w-full" data-node-id="I27:5326;1361:8721" data-name="Check items">
                <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I27:5326;1361:8722" data-name="Check item text">
                  <CheckIcon className="bg-[var(--colors\/background\/bg-brand-primary,#ecfdf5)] overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I27:5326;1361:8722;1345:1723" data-name="Text wrap">
                    <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I27:5326;1361:8722;1345:1724">
                      30 jours de démo
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I27:5326;1361:8723" data-name="Check item text">
                  <CheckIcon className="bg-[var(--colors\/background\/bg-brand-primary,#ecfdf5)] overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I27:5326;1361:8723;1345:1723" data-name="Text wrap">
                    <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I27:5326;1361:8723;1345:1724">
                      Onboarding spécifique
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I27:5326;1361:8724" data-name="Check item text">
                  <CheckIcon className="bg-[var(--colors\/background\/bg-brand-primary,#ecfdf5)] overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I27:5326;1361:8724;1345:1723" data-name="Text wrap">
                    <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I27:5326;1361:8724;1345:1724">
                      Accès à tout la plateforme
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0" data-node-id="I27:5326;3288:448927" data-name="Actions">
              <div className="border border-[var(--colors\/border\/border-primary,#d4d4d4)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0" data-node-id="I27:5326;3288:448928" data-name="Buttons/Button">
                <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-primary,white)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I27:5326;3288:448928;6421:284335" data-name="Text padding">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I27:5326;3288:448928;3287:433053">
                    Réserver une démo
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
              </div>
              <div className="border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0" data-node-id="I27:5326;3288:448929" data-name="Buttons/Button">
                <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-brand-solid,#059669)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I27:5326;3288:448929;6421:283565" data-name="Text padding">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-white,white)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I27:5326;3288:448929;3287:432937">
                    Rejoindre le pilote
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative self-stretch" data-node-id="I27:5326;1361:8363" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}