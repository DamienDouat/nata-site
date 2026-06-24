import { ChevronDown, Network, Play } from "lucide-react";
const imgNata12 = "/assets/figma/imgNata12.png";
const imgImage = "/assets/figma/imgImage.png";
const imgIcon = "/assets/figma/imgIcon.svg";
const imgIcon1 = "/assets/figma/imgIcon1.svg";
const imgPage = "/assets/figma/imgPage.svg";
const imgIconWrap = "/assets/figma/imgIconWrap.svg";
const imgDivider = "/assets/figma/imgDivider.svg";
const imgIcon2 = "/assets/figma/imgIcon2.svg";
const imgIcon3 = "/assets/figma/imgIcon3.svg";
const imgIcon4 = "/assets/figma/imgIcon4.svg";
const imgLine = "/assets/figma/imgLine.svg";
const imgLine1 = "/assets/figma/imgLine1.svg";
const imgLine2 = "/assets/figma/imgLine2.svg";
const imgLine3 = "/assets/figma/imgLine3.svg";
const imgLine4 = "/assets/figma/imgLine4.svg";
const imgLine5 = "/assets/figma/imgLine5.svg";
const imgLine6 = "/assets/figma/imgLine6.svg";
const imgLine7 = "/assets/figma/imgLine7.svg";
const imgLine8 = "/assets/figma/imgLine8.svg";
const imgLine9 = "/assets/figma/imgLine9.svg";
const imgLine10 = "/assets/figma/imgLine10.svg";
const imgLine11 = "/assets/figma/imgLine11.svg";
const imgLine12 = "/assets/figma/imgLine12.svg";
const imgLine13 = "/assets/figma/imgLine13.svg";
const imgLine14 = "/assets/figma/imgLine14.svg";
const imgLine15 = "/assets/figma/imgLine15.svg";
const imgLine16 = "/assets/figma/imgLine16.svg";
const imgLine17 = "/assets/figma/imgLine17.svg";
const imgLine18 = "/assets/figma/imgLine18.svg";

type ProgressBarProps = {
  className?: string;
  label?: "Right";
  progress?: "80%";
};

function ProgressBar({ className, label = "Right", progress = "80%" }: ProgressBarProps) {
  return (
    <div className={className || "content-stretch flex gap-[var(--spacing-lg,12px)] items-center relative w-[320px]"} data-node-id="7:14648">
      <div className="flex-[1_0_0] h-[8px] min-w-px relative rounded-[var(--spacing-md,8px)]" data-node-id="7:14861" data-name="Progress bar">
        <div className="absolute bg-[var(--colors\/background\/bg-quaternary,#e5e5e5)] h-[8px] left-0 right-0 rounded-[var(--radius-full,9999px)] top-0" data-node-id="7:14862" data-name="Background" />
        <div className="absolute bg-[var(--colors\/foreground\/fg-brand-primary-\(600\),#059669)] h-[8px] left-0 right-[19.42%] rounded-[var(--radius-full,9999px)] top-0" data-node-id="7:14863" data-name="Progress" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font-family\/font-family-body,'Inter')] font-medium font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="7:14864">
        <p className="leading-[var(--line-height\/text-sm,20px)]">80%</p>
      </div>
    </div>
  );
}

function NavLogo({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-start relative w-[122px]"} data-node-id="9:3155" data-name="_Nav logo">
      <div className="content-stretch flex items-start relative shrink-0 w-[107.625px]" data-node-id="9:3156" data-name="Logo">
        <div className="h-[29.809px] relative shrink-0 w-[107.625px]" data-node-id="I9:3156;18044:516158" data-name="Nata (1) 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[249.17%] left-0 max-w-none top-[-73.63%] w-full" src={imgNata12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className=" content-stretch flex flex-col isolate items-center relative size-full" data-node-id="36:172701" data-name="Hero header section">
      <button className="block cursor-pointer h-[72px] relative shrink-0 w-full z-[3]" data-node-id="36:172702" data-name="Dropdown header navigation">
        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 pt-[var(--spacing-lg,12px)] right-0 top-0" data-node-id="I36:172702;7865:344399" data-name="Header">
          <div className="content-stretch flex items-center justify-center max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="I36:172702;7865:344400" data-name="Container">
            <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-secondary_alt,rgba(0,0,0,0.1))] border-solid content-stretch drop-shadow-[0px_1px_1px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] flex flex-[1_0_0] gap-[var(--spacing-xl,16px)] items-center min-w-px pl-[var(--spacing-xl,16px)] pr-[var(--spacing-lg,12px)] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-2xl,16px)]" data-node-id="I36:172702;7865:344401" data-name="Nav wrapper">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing-2xl,20px)] items-center min-w-px relative" data-node-id="I36:172702;9175:563572" data-name="Content">
                <NavLogo className="content-stretch flex items-start relative shrink-0 w-[122px]" />
                <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center relative shrink-0" data-node-id="I36:172702;9175:563574" data-name="Navigation">
                  <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="I36:172702;9175:563575" data-name="_Dropdown header navigation button">
                    <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172702;9175:563575;9175:553180" data-name="Text padding">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-sm,14px)] text-left whitespace-nowrap" data-node-id="I36:172702;9175:563575;9175:550125">
                        Produit
                      </p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center"><ChevronDown size={22} strokeWidth={2} color="#737373" /></div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="I36:172702;9175:563577" data-name="_Dropdown header navigation button">
                    <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172702;9175:563577;9175:553180" data-name="Text padding">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-sm,14px)] text-left whitespace-nowrap" data-node-id="I36:172702;9175:563577;9175:550125">
                        Tarifs
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="I36:172702;9175:563579" data-name="_Dropdown header navigation button">
                    <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172702;9175:563579;9175:553180" data-name="Text padding">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-sm,14px)] text-left whitespace-nowrap" data-node-id="I36:172702;9175:563579;9175:550125">
                        Contact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-center relative shrink-0" data-node-id="I36:172702;7865:344410" data-name="_Nav actions">
                <div className="border border-[var(--colors\/border\/border-primary,#d4d4d4)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0" data-node-id="I36:172702;7865:344410;1624:262067" data-name="Buttons/Button">
                  <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-primary,white)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                  <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172702;7865:344410;1624:262067;6421:279423" data-name="Text padding">
                    <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-sm,14px)] text-left whitespace-nowrap" data-node-id="I36:172702;7865:344410;1624:262067;3287:433113">
                      Se connecter
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                </div>
                <div className="border-2 border-[var(--component-colors\/components\/buttons\/primary\/button-primary-border,rgba(255,255,255,0.12))] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0" data-node-id="I36:172702;7865:344410;1624:262069" data-name="Buttons/Button">
                  <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-brand-solid,#059669)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                  <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172702;7865:344410;1624:262069;6421:278974" data-name="Text padding">
                    <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-white,white)] text-[length:var(--font-size\/text-sm,14px)] text-left whitespace-nowrap" data-node-id="I36:172702;7865:344410;1624:262069;3287:432941">
                      Réserver une démo
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div className="content-stretch flex flex-col gap-[var(--spacing-7xl,0px)] items-center justify-center pb-[var(--spacing-9xl,96px)] pt-[var(--spacing-7xl,64px)] relative shrink-0 w-full z-[2]" data-node-id="36:172703" data-name="Section">
        <div className="content-center flex flex-wrap gap-[var(--spacing-4xl,64px_32px)] items-center justify-center max-w-[1280px] px-[var(--spacing-4xl,32px)] relative shrink-0 w-full" data-node-id="36:172704" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-6xl,48px)] items-start min-w-[480px] pr-[var(--spacing-4xl,32px)] relative" data-node-id="36:172705" data-name="Content">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-3xl,24px)] items-start relative shrink-0 w-full" data-node-id="36:172706" data-name="Heading and supporting text">
              <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-xl,72px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-xl,60px)] tracking-[-1.2px] w-full" data-node-id="36:172707">{`L'agent IA qui orchestre la courte durée`}</p>
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-xl,30px)] max-w-[480px] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-xl,20px)] w-full" data-node-id="36:172708">
                Nata orchestre vos prestataires entre chaque locataire — du check-out au check-in suivant. Sans appels, sans relances, sans oublis.
              </p>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0" data-node-id="36:172709" data-name="Actions">
              <div className="border border-[var(--colors\/border\/border-primary,#d4d4d4)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0" data-node-id="36:172710" data-name="Buttons/Button">
                <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-primary,white)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center"><Play size={20} strokeWidth={2} /></div>
                <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172710;6421:284335" data-name="Text padding">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I36:172710;3287:433053">
                    Réserver une démo
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
              </div>
              <div className="border-2 border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[var(--spacing-sm,6px)] items-center justify-center overflow-clip px-[18px] py-[var(--spacing-lg,12px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(0,0,0,0.05))] shrink-0" data-node-id="36:172711" data-name="Buttons/Button">
                <div aria-hidden className="absolute bg-[var(--colors\/background\/bg-brand-solid,#059669)] inset-0 pointer-events-none rounded-[var(--radius-md,8px)]" />
                <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="I36:172711;6421:283565" data-name="Text padding">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-white,white)] text-[length:var(--font-size\/text-md,16px)] whitespace-nowrap" data-node-id="I36:172711;3287:432937">
                    Rejoindre le pilote
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(0,0,0,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(0,0,0,0.05))]" />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[640px] min-w-[480px] relative rounded-tl-[var(--spacing-11xl,160px)]" data-node-id="36:172712" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[var(--spacing-11xl,160px)]">
              <img alt="" className="absolute h-full left-[-68.33%] max-w-none top-[-0.04%] w-[192.09%]" src={imgImage} />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[var(--spacing-lg,12px)] items-start left-[-72px] top-[396px] w-[368px]" data-node-id="36:172713" data-name="File queue">
              <div className="backdrop-blur-[8px] bg-[var(--component-colors\/alpha\/alpha-white-90,rgba(255,255,255,0.9))] border border-[var(--colors\/border\/border-secondary_alt,rgba(0,0,0,0.1))] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-start p-[var(--spacing-xl,16px)] relative rounded-[var(--spacing-lg,12px)] shrink-0 w-[403px]" data-node-id="36:172714" data-name="_File upload item base">
                <div className="content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,12px)] items-start min-w-px relative" data-node-id="I36:172714;1175:100368" data-name="Content">
                  <div className="relative shrink-0 size-[40px]" data-node-id="I36:172714;4922:416240" data-name="File type icon">
                    <div className="absolute inset-[0_10%]" data-node-id="I36:172714;4922:416240;5399:389515" data-name="Page">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPage} />
                    </div>
                    <div className="absolute inset-[40%_30%_20%_30%]" data-node-id="I36:172714;4922:416240;4916:412063" data-name="Icon wrap">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconWrap} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-xs,4px)] items-start min-w-px relative" data-node-id="I36:172714;1175:100370" data-name="Content">
                    <div className="content-stretch flex flex-col gap-[var(--spacing-xxs,2px)] items-start relative shrink-0 w-full" data-node-id="I36:172714;1175:100371" data-name="Text and supporting text">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-medium font-medium leading-[var(--line-height\/text-sm,20px)] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-ellipsis w-full whitespace-nowrap" data-node-id="I36:172714;1175:100372">
                        Ménage - T2 Vieux-Port
                      </p>
                      <div className="content-stretch flex gap-[var(--spacing-md,8px)] items-center relative shrink-0 w-full" data-node-id="I36:172714;9250:559503" data-name="Supporting text and status">
                        <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-sm,20px)] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-ellipsis whitespace-nowrap" data-node-id="I36:172714;9250:559504">
                          18/18 photos
                        </p>
                        <div className="h-[12px] relative shrink-0 w-0" data-node-id="I36:172714;9250:559505" data-name="Divider">
                          <div className="absolute inset-[-4.17%_-0.5px]">
                            <img alt="" className="block max-w-none size-full" src={imgDivider} />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-node-id="I36:172714;9250:559506" data-name="Icon and status">
                          <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I36:172714;9250:559507" data-name="check-circle">
                            <div className="absolute inset-[8.33%]" data-node-id="I36:172714;9250:559507;3463:404968" data-name="Icon">
                              <div className="absolute inset-[-5.63%_-5.62%_-5.62%_-5.63%]">
                                <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                              </div>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-medium font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-success-primary-\(600\),#16a34a)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I36:172714;9250:559508">
                            Complete
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-center relative shrink-0 w-full" data-node-id="I36:172714;1175:100374" data-name="Progress bar">
                      <div className="flex-[1_0_0] h-[8px] min-w-px relative rounded-[var(--spacing-md,8px)]" data-node-id="I36:172714;1175:100374;1085:57434" data-name="Progress bar">
                        <div className="absolute bg-[var(--colors\/background\/bg-quaternary,#e5e5e5)] h-[8px] left-0 right-0 rounded-[var(--radius-full,9999px)] top-0" data-node-id="I36:172714;1175:100374;1085:57435" data-name="Background" />
                        <div className="absolute bg-[var(--colors\/foreground\/fg-brand-primary-\(600\),#059669)] h-[8px] left-0 right-0 rounded-[var(--radius-full,9999px)] top-0" data-node-id="I36:172714;1175:100374;1085:57436" data-name="Progress" />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font-family\/font-family-body,'Inter')] font-medium font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I36:172714;1175:100374;1085:57437">
                        <p className="leading-[var(--line-height\/text-sm,20px)]">100%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[var(--spacing-sm,6px)] right-[8px] rounded-[var(--radius-sm,6px)] top-[8px]" data-node-id="I36:172714;9250:565059" data-name="Buttons/Button utility">
                  <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center"><Network size={24} strokeWidth={2} color="#059669" /></div>
                </div>
              </div>
              <div className="backdrop-blur-[8px] bg-[var(--component-colors\/alpha\/alpha-white-90,rgba(255,255,255,0.9))] border border-[var(--colors\/border\/border-secondary_alt,rgba(0,0,0,0.1))] border-solid content-stretch flex gap-[15px] items-start p-[var(--spacing-xl,16px)] relative rounded-[var(--spacing-lg,12px)] shrink-0 w-[403px]" data-node-id="36:173039" data-name="_File upload item base">
                <div className="relative rounded-[var(--radius-full,9999px)] shrink-0 size-[16px]" data-node-id="36:173065" data-name="Featured icon outline">
                  <div className="absolute border-2 border-[var(--colors\/border\/border-brand,#10b981)] border-solid inset-[-25%] opacity-30 rounded-[24px]" data-node-id="I36:173065;4890:415063" data-name="Outline inner" />
                  <div className="absolute border-2 border-[var(--colors\/border\/border-brand,#10b981)] border-solid inset-[-56.25%] opacity-10 rounded-[24px]" data-node-id="I36:173065;4890:415064" data-name="Outline outer" />
                  <div className="absolute inset-0 overflow-clip" data-node-id="I36:173065;4843:411101" data-name="check-circle">
                    <div className="absolute inset-[8.33%]" data-node-id="I36:173065;4843:411101;3463:404968" data-name="Icon">
                      <div className="absolute inset-[-5%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-[342px]" data-node-id="36:173040" data-name="Content">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-xs,4px)] items-start min-w-px relative" data-node-id="36:173042" data-name="Content">
                    <div className="content-stretch flex flex-col gap-[var(--spacing-xxs,2px)] items-start relative shrink-0 w-full" data-node-id="36:173043" data-name="Text and supporting text">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-medium font-medium leading-[var(--line-height\/text-sm,20px)] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--colors\/text\/text-secondary-\(700\),#404040)] text-ellipsis w-full whitespace-nowrap" data-node-id="36:173044">
                        Check-in – Studio Marx Dormoy
                      </p>
                      <div className="content-stretch flex gap-[var(--spacing-md,8px)] items-center relative shrink-0 w-full" data-node-id="36:173045" data-name="Supporting text and status">
                        <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-sm,20px)] overflow-hidden relative shrink-0 text-[14px] text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-ellipsis whitespace-nowrap" data-node-id="36:173046">
                          Marie a démarré il y a 60 min
                        </p>
                      </div>
                    </div>
                    <ProgressBar className="content-stretch flex gap-[var(--spacing-lg,12px)] items-center relative shrink-0 w-full" />
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[var(--spacing-sm,6px)] right-[8px] rounded-[var(--radius-sm,6px)] top-[8px]" data-node-id="36:173052" data-name="Buttons/Button utility">
                  <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center"><Network size={24} strokeWidth={2} color="#059669" /></div>
                </div>
              </div>
            </div>
            <div className="absolute h-[408px] opacity-30 right-[-128px] top-[-40px] w-[298px]" data-node-id="36:172716" data-name="Line pattern">
              <div className="absolute flex inset-[0.33%_30.05%_96.8%_68.52%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:784" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.46%_20.48%_96.89%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:785" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.67%_10.93%_96.99%_86.38%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:786" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.86%_1.4%_97.18%_95.4%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:787" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.86%_93.84%_97.18%_2.96%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:788" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.67%_84.82%_96.99%_12.49%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:789" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.46%_75.87%_96.89%_22.04%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:790" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.33%_66.96%_96.8%_31.61%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:791" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.29%_58.08%_96.7%_41.19%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:792" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.25%_49.22%_96.7%_50.78%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:793" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0.29%_39.63%_96.7%_59.64%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:794" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.68%_39.46%_91.45%_59.11%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:795" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.81%_29.89%_91.55%_68.02%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:796" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[6.02%_20.34%_91.65%_76.98%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:797" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[6.2%_10.8%_91.84%_86%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:798" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[6.35%_1.29%_92.12%_95.09%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:799" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[6.02%_94.23%_91.65%_3.09%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:800" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.81%_85.27%_91.55%_12.64%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:801" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.68%_76.36%_91.45%_22.21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:802" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.63%_67.49%_91.36%_31.79%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:803" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.59%_58.63%_91.36%_41.37%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:804" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[5.63%_49.04%_91.36%_50.24%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:805" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.02%_48.86%_86.11%_49.71%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:806" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.15%_39.29%_86.21%_58.62%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:807" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.36%_29.74%_86.3%_67.57%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:808" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.54%_20.21%_86.49%_76.59%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:809" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.69%_10.7%_86.78%_85.68%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:810" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.98%_1.22%_86.97%_94.86%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:811" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.15%_94.68%_86.21%_3.23%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:812" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[11.02%_85.77%_86.11%_12.8%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:813" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[10.98%_76.89%_86.02%_22.39%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:814" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[10.93%_68.03%_86.02%_31.97%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:815" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[10.98%_58.44%_86.02%_40.83%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:816" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.36%_58.27%_80.77%_40.3%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:817" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.49%_48.7%_80.87%_49.21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:818" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.7%_39.14%_80.96%_58.17%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:819" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.89%_29.61%_81.15%_67.19%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:820" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[17.04%_20.1%_81.44%_76.28%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:821" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[17.33%_10.62%_81.63%_85.45%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:822" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[17.56%_1.17%_81.91%_94.72%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:823" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.36%_95.17%_80.77%_3.4%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:824" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.32%_86.29%_80.67%_12.98%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:825" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.27%_77.43%_80.67%_22.57%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:826" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[16.32%_67.85%_80.67%_31.43%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:827" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[21.7%_67.67%_75.43%_30.9%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:828" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[21.83%_58.1%_75.52%_39.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:829" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[22.04%_48.55%_75.62%_48.77%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:830" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[22.23%_39.01%_75.81%_57.78%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:831" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[22.38%_29.51%_76.1%_66.87%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:832" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[22.67%_20.02%_76.29%_76.05%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:833" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[22.9%_10.57%_76.57%_85.31%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:834" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[21.66%_95.7%_75.33%_3.58%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:835" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[21.62%_86.84%_75.33%_13.16%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:836" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[21.66%_77.25%_75.33%_22.02%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:837" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[23.14%_0.11%_76.86%_95.71%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:838" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[27.05%_77.08%_70.08%_21.49%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:839" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[27.18%_67.51%_70.18%_30.4%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:840" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[27.39%_57.95%_70.28%_39.36%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:841" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[27.57%_48.42%_70.47%_48.38%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:842" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[27.72%_38.91%_70.75%_57.47%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:843" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[28.01%_29.43%_70.94%_66.64%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:844" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[28.24%_19.98%_71.23%_75.91%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:845" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[26.96%_96.24%_69.99%_3.76%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:846" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[27%_86.66%_69.99%_12.62%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:847" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[28.48%_9.51%_71.52%_86.31%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:848" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[28.24%_0.15%_71.23%_95.73%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:849" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[32.39%_86.48%_64.74%_12.09%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:850" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[32.52%_76.91%_64.84%_21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:851" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[32.73%_67.36%_64.93%_29.96%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:852" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[32.91%_57.82%_65.12%_38.97%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:853" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[33.06%_48.31%_65.41%_48.07%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:854" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[33.36%_38.83%_65.6%_57.24%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:855" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[33.58%_29.38%_65.89%_66.5%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:856" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[32.35%_96.06%_64.65%_3.21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:857" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[33.83%_18.92%_66.17%_76.9%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:858" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[33.58%_9.56%_65.89%_86.32%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:859" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[33.36%_0.3%_65.6%_95.78%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:860" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[37.73%_95.88%_59.4%_2.69%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:861" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[37.86%_86.32%_59.5%_11.59%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:862" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.07%_76.76%_59.59%_20.55%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:863" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.26%_67.23%_59.78%_29.57%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:864" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.41%_57.72%_60.07%_38.66%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:865" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.7%_48.24%_60.26%_47.83%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:866" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.93%_38.79%_60.54%_57.1%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:867" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.41%_0.53%_60.07%_95.85%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:868" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[39.17%_28.32%_60.83%_67.5%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:869" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.93%_18.96%_60.54%_76.92%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:870" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[38.7%_9.7%_60.26%_86.37%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:871" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[43.2%_95.72%_54.15%_2.19%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:872" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[43.41%_86.17%_54.25%_11.15%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:873" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[43.6%_76.63%_54.44%_20.17%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:874" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[43.75%_67.12%_54.73%_29.26%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:875" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[44.04%_57.64%_54.92%_38.43%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:876" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[44.27%_48.19%_55.2%_47.69%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:877" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[43.75%_9.93%_54.73%_86.45%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:878" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[43.6%_0.84%_54.44%_95.96%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:879" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[44.51%_37.73%_55.49%_58.09%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:880" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[44.27%_28.37%_55.2%_67.51%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:881" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[44.04%_19.11%_54.92%_76.97%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:882" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[48.76%_95.57%_48.91%_1.74%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:883" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[48.94%_86.04%_49.1%_10.76%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:884" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.09%_76.53%_49.38%_19.85%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:885" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.38%_67.05%_49.57%_29.03%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:886" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.61%_57.59%_49.86%_38.29%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:887" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.09%_19.34%_49.38%_77.04%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:888" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[48.94%_10.25%_49.1%_86.55%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:889" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[48.76%_1.23%_48.91%_96.09%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:890" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine18} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.85%_47.13%_50.15%_48.69%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:891" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.61%_37.77%_49.86%_58.11%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:892" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[49.38%_28.51%_49.57%_67.56%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:893" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.28%_95.44%_43.75%_1.36%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:894" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.43%_85.93%_44.04%_10.45%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:895" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.72%_76.45%_44.23%_19.62%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:896" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.95%_67%_44.52%_28.88%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:897" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.43%_28.74%_44.04%_67.64%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:898" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.28%_19.65%_43.75%_77.15%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:899" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.1%_10.63%_43.56%_86.68%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:900" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[53.89%_1.67%_43.47%_96.24%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:901" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[55.2%_56.53%_44.8%_39.29%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:902" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.95%_47.18%_44.52%_48.71%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:903" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[54.72%_37.91%_44.23%_58.16%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:904" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[59.78%_95.34%_38.7%_1.04%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-30 flex-none h-[hypot(4.63523cqw,13.9057cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:905" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine11} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[60.07%_85.86%_38.89%_10.22%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:906" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[60.3%_76.4%_39.17%_19.48%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:907" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[59.78%_38.14%_38.7%_58.24%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:908" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[59.63%_29.05%_38.41%_67.74%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:909" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[59.44%_20.04%_38.22%_77.28%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:910" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[59.23%_11.08%_38.13%_86.83%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:911" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[59.1%_2.17%_38.03%_96.4%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:912" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[60.54%_65.94%_39.46%_29.88%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:913" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[60.3%_56.58%_39.17%_39.3%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:914" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[60.07%_47.32%_38.89%_48.75%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:915" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[65.41%_95.26%_33.55%_0.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-20 flex-none h-[hypot(2.92212cqw,22.058cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:916" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[65.64%_85.81%_33.83%_10.07%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:917" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[65.12%_47.55%_33.35%_48.83%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:918" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[64.97%_38.46%_33.07%_58.34%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:919" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[64.78%_29.44%_32.88%_67.87%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:920" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[64.57%_20.48%_32.78%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:921" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[64.44%_11.57%_32.69%_87%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:922" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[64.4%_2.7%_32.59%_96.58%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:923" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[65.88%_75.34%_34.12%_20.48%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:924" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[65.64%_65.99%_33.83%_29.9%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:925" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[65.41%_56.72%_33.55%_39.35%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:926" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[70.98%_95.21%_28.49%_0.67%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-10 flex-none h-[hypot(1.41563cqw,45.5316cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:927" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine13} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[70.46%_56.95%_28.01%_39.43%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:928" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[70.31%_47.86%_27.73%_48.93%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:929" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[70.13%_38.84%_27.54%_58.47%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:930" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[69.92%_29.89%_27.44%_68.02%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:931" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[69.79%_20.98%_27.34%_77.59%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:932" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[69.74%_12.1%_27.25%_87.17%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:933" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[69.7%_3.24%_27.25%_96.76%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:934" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[71.22%_84.75%_28.78%_11.07%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:935" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[70.98%_75.39%_28.49%_20.49%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:936" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[70.75%_66.13%_28.2%_29.95%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:937" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.8%_66.36%_22.67%_30.02%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:938" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.65%_57.27%_22.38%_39.53%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:939" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.47%_48.25%_22.19%_49.06%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:940" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.26%_39.29%_22.1%_58.62%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:941" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.13%_30.38%_22%_68.19%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:942" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.09%_21.51%_21.91%_77.77%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:943" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.04%_12.65%_21.91%_87.35%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:944" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[75.09%_3.06%_21.91%_96.21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:945" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[76.57%_94.15%_23.43%_1.67%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[0px] rotate-180 w-[100cqw]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:946" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine14} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[76.32%_84.8%_23.15%_11.09%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:947" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[76.1%_75.53%_22.86%_20.54%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:948" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.47%_2.88%_16.66%_95.69%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:949" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[81.15%_75.76%_17.33%_20.62%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:950" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[81%_66.67%_17.04%_30.13%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:951" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.81%_57.65%_16.85%_39.66%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:952" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.6%_48.7%_16.75%_49.21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:953" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.47%_39.79%_16.66%_58.78%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:954" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.43%_30.91%_16.56%_68.36%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:955" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.38%_22.05%_16.56%_77.95%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:956" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[80.43%_12.46%_16.56%_86.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:957" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[81.67%_94.2%_17.8%_1.68%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-170 flex-none h-[hypot(1.41563cqw,-45.5316cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:958" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine15} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[81.44%_84.94%_17.52%_11.14%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:959" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.81%_12.29%_11.32%_86.28%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:960" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.94%_2.72%_11.41%_95.19%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:961" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[86.49%_85.17%_11.98%_11.21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:962" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[86.34%_76.08%_11.7%_20.72%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:963" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[86.15%_67.06%_11.51%_30.26%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:964" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.94%_58.1%_11.41%_39.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:965" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.81%_49.19%_11.32%_49.38%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:966" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.77%_40.32%_11.22%_58.96%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:967" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.73%_31.46%_11.22%_68.54%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:968" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[85.77%_21.87%_11.22%_77.41%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:969" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[86.78%_94.34%_12.18%_1.73%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-160 flex-none h-[hypot(2.92212cqw,-22.058cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:970" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.16%_21.69%_5.97%_76.88%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:971" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.29%_12.12%_6.07%_85.79%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:972" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.5%_2.57%_6.17%_94.74%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:973" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.83%_94.57%_6.64%_1.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-150 flex-none h-[hypot(4.63523cqw,-13.9057cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:974" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.68%_85.48%_6.36%_11.32%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:975" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.5%_76.46%_6.17%_20.85%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:976" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.29%_67.51%_6.07%_30.4%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:977" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.16%_58.6%_5.97%_39.97%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:978" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.11%_49.72%_5.88%_49.55%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:979" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.07%_40.86%_5.88%_59.14%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:980" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[91.11%_31.27%_5.88%_68%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:981" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.5%_31.1%_0.63%_67.47%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-70 flex-none h-[hypot(22.058cqw,2.92212cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:982" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.63%_21.53%_0.73%_76.38%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-60 flex-none h-[hypot(13.9057cqw,4.63523cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:983" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.84%_11.97%_0.82%_85.34%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-50 flex-none h-[hypot(9.56794cqw,6.73667cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:984" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[97.02%_2.44%_1.01%_94.36%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-40 flex-none h-[hypot(6.73667cqw,9.56794cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:985" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[97.02%_94.89%_1.01%_1.91%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-140 flex-none h-[hypot(6.73667cqw,-9.56794cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:986" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.84%_85.87%_0.82%_11.45%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-130 flex-none h-[hypot(9.56794cqw,-6.73667cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:987" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.63%_76.91%_0.73%_21%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-120 flex-none h-[hypot(13.9057cqw,-4.63523cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:988" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.5%_68%_0.63%_30.57%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-110 flex-none h-[hypot(22.058cqw,-2.92212cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:989" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine7} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.46%_59.12%_0.54%_40.15%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-100 flex-none h-[hypot(45.5316cqw,-1.41563cqh)] w-[hypot(-100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:990" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.41%_50.26%_0.54%_49.74%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[0px] w-[100cqh]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:991" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine9} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[96.46%_40.68%_0.54%_58.6%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-80 flex-none h-[hypot(45.5316cqw,1.41563cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-node-id="I36:172716;1259:992" data-name="Line">
                    <div className="absolute inset-[-2px_0_0_0]">
                      <img alt="" className="block max-w-none size-full" src={imgLine10} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[1440px] left-1/2 top-0 w-[1920px] z-[1]" data-node-id="36:172717" data-name="Background pattern" />
    </div>
  );
}