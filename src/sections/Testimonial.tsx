import { Star } from "lucide-react";
const imgImage = "/assets/figma/imgImage.png";
const imgStarBackground = "/assets/figma/imgStarBackground.svg";
const imgStar = "/assets/figma/imgStar.svg";

type PaginationDotIndicatorProps = {
  className?: string;
  current?: boolean;
  size?: "lg";
  style?: "Dot";
};

function PaginationDotIndicator({ className, current = false, size = "lg", style = "Dot" }: PaginationDotIndicatorProps) {
  const isCurrentAndDotAndLg = current && style === "Dot" && size === "lg";
  return <div className={className || `overflow-clip relative rounded-[var(--radius-full,9999px)] size-[10px] ${isCurrentAndDotAndLg ? String.raw`bg-[var(--colors\/foreground\/fg-brand-primary_alt,#059669)]` : String.raw`bg-[var(--colors\/background\/bg-quaternary,#e5e5e5)]`}`} id={isCurrentAndDotAndLg ? "node-9_30196" : "node-9_30192"} />;
}

export default function Testimonial() {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col gap-[var(--spacing-7xl,0px)] items-center justify-center py-[var(--spacing-9xl,96px)] relative size-full" data-node-id="51:7639" data-name="Testimonial section">
      <div className="content-stretch flex items-center justify-center max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="I51:7639;1659:437524" data-name="Container">
        <div className="bg-[var(--colors\/background\/bg-secondary,#fafafa)] content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative rounded-[var(--radius-4xl,24px)]" data-node-id="I51:7639;1659:437525" data-name="Content">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-5xl,0px)] items-start justify-center min-w-px p-[var(--spacing-7xl,64px)] relative" data-node-id="I51:7639;1659:437526" data-name="Content">
            <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,32px)] items-start relative shrink-0 w-full" data-node-id="I51:7639;1659:437527" data-name="Quote and attribution">
              <div className="content-stretch flex flex-col gap-[var(--spacing-3xl,24px)] items-start relative shrink-0 w-full" data-node-id="I51:7639;1659:437528" data-name="Quote and stars">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-node-id="I51:7639;1659:437529" data-name="Stars">
                  <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div>
                  <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div>
                  <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div>
                  <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div>
                  <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div>
                </div>
                <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-display,'Inter')] font-medium font-medium leading-[var(--line-height\/display-md,44px)] min-w-full relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/display-md,36px)] tracking-[-0.72px] w-[min-content]" data-node-id="I51:7639;1659:437535">{`« Avant, il fallait constamment vérifier où en étaient les missions. Avec Nata, les informations remontent automatiquement et nous n'intervenons que lorsque c'est nécessaire. »`}</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--spacing-xs,4px)] items-start relative shrink-0 w-full" data-node-id="I51:7639;1659:437536" data-name="Text and supporting text">
                <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--colors\/text\/text-primary-\(900\),#171717)] text-[length:var(--font-size\/text-lg,18px)] w-full" data-node-id="I51:7639;1659:437537">
                  Sarah L.
                </p>
                <p className="font-[family-name:var(--font-family\/font-family-body,'Inter')] font-normal font-normal leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] w-full" data-node-id="I51:7639;1659:437538">
                  Conciergerie à La Rochelle
                </p>
              </div>
              <div className="content-stretch flex gap-[var(--spacing-xl,16px)] items-center justify-center relative shrink-0" data-node-id="I51:7639;1659:437539" data-name="Pagination dot group">
                <PaginationDotIndicator className="bg-[var(--colors\/foreground\/fg-brand-primary_alt,#059669)] relative rounded-[var(--radius-full,9999px)] shrink-0 size-[10px]" current />
                <PaginationDotIndicator className="bg-[var(--colors\/background\/bg-quaternary,#e5e5e5)] relative rounded-[var(--radius-full,9999px)] shrink-0 size-[10px]" />
                <PaginationDotIndicator className="bg-[var(--colors\/background\/bg-quaternary,#e5e5e5)] relative rounded-[var(--radius-full,9999px)] shrink-0 size-[10px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full min-h-[448px] relative shrink-0 w-[480px]" data-node-id="I51:7639;1659:437540" data-name="Image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}