const imgNata12 = "/assets/figma/imgNata12.png";
const imgVector = "/assets/figma/imgVector.svg";
const imgSocialIcon = "/assets/figma/imgSocialIcon.svg";

function FooterLogo({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-start relative w-[122px]"} data-node-id="9:27163" data-name="_Footer logo">
      <div className="content-stretch flex items-start relative shrink-0 w-[121.625px]" data-node-id="9:27164" data-name="Logo">
        <div className="h-[29.809px] relative shrink-0 w-[107.625px]" data-node-id="I9:27164;18044:516158" data-name="Nata (1) 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[249.17%] left-0 max-w-none top-[-73.63%] w-full" src={imgNata12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col items-start relative size-full" data-node-id="49:8945" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[var(--spacing-7xl,64px)] items-center pb-[var(--spacing-6xl,48px)] pt-[var(--spacing-7xl,64px)] relative shrink-0 w-full" data-node-id="I49:8945;1509:257637" data-name="Section">
        <div className="content-stretch flex flex-col gap-[var(--spacing-6xl,0px)] items-start max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="I49:8945;1509:257638" data-name="Container">
          <div className="content-start flex flex-wrap gap-y-[48px] items-start justify-between relative shrink-0 w-full" data-node-id="I49:8945;1509:257639" data-name="Content">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-3xl,24px)] items-start max-w-[320px] min-w-[320px] relative" data-node-id="I49:8945;1509:257640" data-name="Logo and supporting text">
              <FooterLogo className="content-stretch flex items-start relative shrink-0 w-[122px]" />
              <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] min-w-full relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-[min-content]" data-node-id="I49:8945;1509:257642">{`L'agent IA qui coordonne la courte durée.`}</p>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-4xl,32px)] items-start justify-end min-w-[800px] relative shrink-0 w-[832px]" data-node-id="I49:8945;3291:427120" data-name="Links">
              <div className="content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start min-w-[96px] relative shrink-0" data-node-id="I49:8945;3291:427125" data-name="_Footer links column">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#737373)] text-[length:var(--font-size\/text-sm,14px)] w-full" data-node-id="I49:8945;3291:427125;3288:570971">
                  Légal
                </p>
                <div className="content-stretch flex flex-col gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="I49:8945;3291:427125;3288:570972" data-name="Footer links">
                  <div className="content-stretch flex gap-[var(--spacing-sm,0px)] items-center max-h-[20px] relative shrink-0" data-node-id="I49:8945;3291:427125;3288:570973" data-name="_Footer link">
                    <div className="content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip relative shrink-0" data-node-id="I49:8945;3291:427125;3288:570973;3288:570930" data-name="Buttons/Button">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,14px)] whitespace-nowrap" data-node-id="I49:8945;3291:427125;3288:570973;3288:570930;3287:433397">
                        Tarifs
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-sm,0px)] items-center max-h-[20px] relative shrink-0" data-node-id="I49:8945;3291:427125;3288:570974" data-name="_Footer link">
                    <div className="content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip relative shrink-0" data-node-id="I49:8945;3291:427125;3288:570974;3288:570930" data-name="Buttons/Button">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,14px)] whitespace-nowrap" data-node-id="I49:8945;3291:427125;3288:570974;3288:570930;3287:433397">
                        Contact
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-sm,0px)] items-center max-h-[20px] relative shrink-0" data-node-id="I49:8945;3291:427125;3288:570978" data-name="_Footer link">
                    <div className="content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip relative shrink-0" data-node-id="I49:8945;3291:427125;3288:570978;3288:570930" data-name="Buttons/Button">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,14px)] whitespace-nowrap" data-node-id="I49:8945;3291:427125;3288:570978;3288:570930;3287:433397">
                        Légal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,0px)] items-start max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="I49:8945;1509:257659" data-name="Container">
          <div className="border-[var(--colors\/border\/border-secondary,#e5e5e5)] border-solid border-t content-center flex flex-wrap gap-[var(--spacing-4xl,0px)] gap-y-[24px] items-center justify-between pt-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="I49:8945;1509:257661" data-name="Content">
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#737373)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I49:8945;1509:257662">{`L'agent IA qui coordonne la courte durée.`}</p>
            <div className="content-stretch flex gap-[var(--spacing-xl,16px)] items-center relative shrink-0" data-node-id="I49:8945;1509:257663" data-name="Social icons">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I49:8945;1509:257664" data-name="Social icon">
                <div className="-translate-x-1/2 absolute aspect-[22.981643676757812/22] bottom-[6.25%] left-1/2 top-[6.25%]" data-node-id="I49:8945;1509:257664;6163:434073" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]" data-node-id="I49:8945;1509:257665" data-name="Social icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}