import { CheckCircle2, MessageSquare, TrendingUp, Zap } from "lucide-react";
const imgIcon = "/assets/figma/imgIcon.svg";
const imgBackgroundImage = "/assets/figma/imgBackgroundImage.png";
const imgMissionPrepareeBezel1 = "/assets/figma/imgMissionPrepareeBezel1.png";
const imgBackgroundImage1 = "/assets/figma/imgBackgroundImage1.png";
const imgMissionAssisteeBezel1 = "/assets/figma/imgMissionAssisteeBezel1.png";
const imgMissionValideeBezel1 = "/assets/figma/imgMissionValideeBezel1.png";
const imgIcon1 = "/assets/figma/imgIcon1.svg";
const imgCover = "/assets/figma/imgCover.svg";
const imgCover1 = "/assets/figma/imgCover1.svg";
const imgIcon2 = "/assets/figma/imgIcon2.svg";
const imgIcon3 = "/assets/figma/imgIcon3.svg";

type CheckIconProps = {
  className?: string;
  color?: "Brand";
  size?: "md";
  type?: "Line";
};

function CheckIcon({ className }: { className?: string }) {
  return <span className={className} style={{display:"inline-flex",alignItems:"center",justifyContent:"center"}}><CheckCircle2 size={24} color="#059669" strokeWidth={2} /></span>;
}

export default function Steps() {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col gap-[var(--spacing-9xl,96px)] items-center pb-[var(--spacing-9xl,96px)] relative size-full" data-node-id="36:167957" data-name="Features section">
      <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,0px)] items-start max-w-[1280px] pt-[32px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="36:167958" data-name="Container">
        <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,0px)] items-center relative shrink-0 w-full" data-node-id="36:167959" data-name="Content">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-center max-w-[768px] relative shrink-0 text-center w-full" data-node-id="36:167960" data-name="Heading and supporting text">
            <div className="content-stretch flex flex-col font-semibold gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167961" data-name="Heading and subheading">
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-brand-secondary-\(700\),#047857)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="36:167962">
                Produit
              </p>
              <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] leading-[var(--line-height\/display-md,44px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-md,36px)] tracking-[-0.72px] w-full" data-node-id="36:167963">
                De la réservation au logement prêt.
              </p>
            </div>
            <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-xl,30px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-xl,20px)] w-full" data-node-id="36:167964">{`Nata enchaîne chaque étape de la rotation en trois temps. Vous n'avez rien à coordonner.`}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[var(--spacing-9xl,96px)] items-center max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="36:167965" data-name="Container">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-4xl,32px)] items-start min-w-px relative" data-node-id="36:167966" data-name="Content">
          <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start relative shrink-0 w-full" data-node-id="36:167967" data-name="Icon and text">
            <div className="bg-[var(--colors\/background\/bg-brand-secondary,#d1fae5)] overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[48px]" data-node-id="36:167968" data-name="Featured icon">
              <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px] flex items-center justify-center"><MessageSquare size={24} strokeWidth={2} color="#059669" /></div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start relative shrink-0 w-full" data-node-id="36:167969" data-name="Heading and supporting text">
              <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-sm,38px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-sm,30px)] w-full" data-node-id="36:167970">
                1. Anticipation
              </p>
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="36:167971">
                Nata lit votre calendrier et planifie la rotation
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start pl-[var(--spacing-xl,16px)] relative shrink-0 w-full" data-node-id="36:167972" data-name="Check items">
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167973" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:167973;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:167973;3488:547154">
                  Départ et arrivée détectés en temps réel
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167974" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:167974;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:167974;3488:547154">
                  Missions créées selon les spécificités de chaque logement
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167975" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:167975;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:167975;3488:547154">
                  Aucune action manuelle requise
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[702px] min-w-px overflow-clip relative" data-node-id="36:167976" data-name="Content">
          <div className="absolute h-[701px] left-[-1px] top-0 w-[560px]" data-node-id="36:168197" data-name="Background image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="701" src={imgBackgroundImage} width="560" />
          </div>
          <div className="absolute h-[838.363px] left-[61px] top-[24px] w-[429px]" data-node-id="36:168427" data-name="Mission préparée (Bezel) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMissionPrepareeBezel1} />
          </div>
          <div className="absolute bottom-0 h-[123px] left-0 w-[122px]" data-node-id="36:169003" data-name="Cover">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCover} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[var(--spacing-9xl,96px)] items-center max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="36:167979" data-name="Container">
        <div className="flex-[1_0_0] h-[704px] min-w-px overflow-clip relative" data-node-id="36:167980" data-name="Content">
          <div className="absolute h-[704px] left-[-1px] top-0 w-[560px]" data-node-id="36:169006" data-name="Background image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="704" src={imgBackgroundImage1} width="560" />
          </div>
          <div className="absolute h-[824.683px] left-[79px] top-[37px] w-[422px]" data-node-id="36:169010" data-name="Mission Assistée (Bezel) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMissionAssisteeBezel1} />
          </div>
          <div className="absolute bottom-0 h-[127px] left-px w-[122px]" data-node-id="36:169008" data-name="Cover">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCover1} />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-4xl,32px)] items-start min-w-px relative" data-node-id="36:167984" data-name="Content">
          <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start relative shrink-0 w-full" data-node-id="36:167985" data-name="Icon and text">
            <div className="bg-[var(--colors\/background\/bg-brand-secondary,#d1fae5)] overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[48px]" data-node-id="36:167986" data-name="Featured icon">
              <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px] flex items-center justify-center"><Zap size={24} strokeWidth={2} color="#059669" /></div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start relative shrink-0 w-full" data-node-id="36:167987" data-name="Heading and supporting text">
              <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-sm,38px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-sm,30px)] w-full" data-node-id="36:167988">
                2. Coordination
              </p>
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="36:167989">
                Le bon prestataire reçoit la mission au bon moment, sur WhatsApp.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start pl-[var(--spacing-xl,16px)] relative shrink-0 w-full" data-node-id="36:167990" data-name="Check items">
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167991" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:167991;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:167991;3488:547154">
                  Affectation selon dispo et proximité géographique
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167992" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:167992;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:167992;3488:547154">{`Brief et checklist envoyés directement à l'agent`}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:167993" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:167993;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:167993;3488:547154">
                  Confirmation et suivi en temps réel, sans relance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[var(--spacing-9xl,96px)] items-center max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="36:167994" data-name="Container">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-4xl,32px)] items-start min-w-px relative" data-node-id="36:167995" data-name="Content">
          <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start relative shrink-0 w-full" data-node-id="36:167996" data-name="Icon and text">
            <div className="bg-[var(--colors\/background\/bg-brand-secondary,#d1fae5)] overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[48px]" data-node-id="36:167997" data-name="Featured icon">
              <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px] flex items-center justify-center"><TrendingUp size={24} strokeWidth={2} color="#059669" /></div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-xl,16px)] items-start relative shrink-0 w-full" data-node-id="36:167998" data-name="Heading and supporting text">
              <p className="font-[family-name:var(--font-family\/font-family-display,'Inter')] font-semibold leading-[var(--line-height\/display-sm,38px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-sm,30px)] w-full" data-node-id="36:167999">
                3. Contrôle qualité
              </p>
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="36:168000">{`Nata valide chaque étape avant l'arrivée du voyageur.`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--spacing-2xl,20px)] items-start pl-[var(--spacing-xl,16px)] relative shrink-0 w-full" data-node-id="36:168001" data-name="Check items">
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:168002" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:168002;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:168002;3488:547154">
                  Inspection des photos et de la propreté
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:168003" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:168003;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:168003;3488:547154">
                  Vérification linge, consommables, équipements
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing-lg,12px)] items-start relative shrink-0 w-full" data-node-id="36:168004" data-name="Check item text">
              <CheckIcon className="overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[28px]" />
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I36:168004;3488:547153" data-name="Text wrap">
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I36:168004;3488:547154">
                  Notification au propriétaire dès que le logement est prêt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[704px] min-w-px relative" data-node-id="36:168005" data-name="Content">
          <div className="absolute h-[704px] left-[32px] overflow-clip top-0 w-[560px]" data-node-id="36:169012" data-name="Content">
            <div className="absolute h-[704px] left-[-1px] top-0 w-[560px]" data-node-id="36:169013" data-name="Background image">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="704" src={imgBackgroundImage1} width="560" />
            </div>
            <div className="absolute h-[853.996px] left-[62px] top-[29px] w-[437px]" data-node-id="36:169017" data-name="Mission Validée (Bezel) 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMissionValideeBezel1} />
            </div>
            <div className="absolute bottom-0 h-[127px] left-px w-[122px]" data-node-id="36:169015" data-name="Cover">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCover1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}