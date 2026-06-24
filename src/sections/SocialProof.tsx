const imgTypeInstagram = "/assets/figma/imgTypeInstagram.png";
const imgTypeWhatsapp = "/assets/figma/imgTypeWhatsapp.png";
const imgTypeWechat = "/assets/figma/imgTypeWechat.png";
const imgTypeVrbo = "/assets/figma/imgTypeVrbo.png";
const imgTypeAbritel = "/assets/figma/imgTypeAbritel.png";
const imgTypeAirbnb = "/assets/figma/imgTypeAirbnb.png";
const imgTypeTelegram = "/assets/figma/imgTypeTelegram.png";
const imgTypeBooking = "/assets/figma/imgTypeBooking.png";

type CompanyLogo2Props = {
  className?: string;
  type?: "Airbnb" | "Booking" | "Abritel" | "Vrbo" | "Whatsapp" | "Wechat" | "Telegram" | "Instagram";
};

function CompanyLogo2({ className, type = "Airbnb" }: CompanyLogo2Props) {
  const isAbritel = type === "Abritel";
  const isAirbnb = type === "Airbnb";
  const isBooking = type === "Booking";
  const isTelegram = type === "Telegram";
  const isVrbo = type === "Vrbo";
  const isWechat = type === "Wechat";
  const isWhatsapp = type === "Whatsapp";
  return (
    <div className={className || `relative ${isBooking ? "h-[64px] w-[162px]" : isTelegram ? "h-[55px] w-[110px]" : isAirbnb ? "h-[30.912px] w-[99px]" : isAbritel ? "h-[31.9px] w-[110px]" : isVrbo ? "h-[32px] w-[99.984px]" : isWechat ? "h-[32.5px] w-[117.493px]" : isWhatsapp ? "h-[40.065px] w-[128px]" : "h-[39.875px] w-[119.735px]"}`} id={isBooking ? "node-36_167938" : isTelegram ? "node-36_167936" : isAirbnb ? "node-36_167934" : isAbritel ? "node-36_167932" : isVrbo ? "node-36_167930" : isWechat ? "node-36_167928" : isWhatsapp ? "node-36_167926" : "node-36_167924"}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={isBooking ? imgTypeBooking : isTelegram ? imgTypeTelegram : isAirbnb ? imgTypeAirbnb : isAbritel ? imgTypeAbritel : isVrbo ? imgTypeVrbo : isWechat ? imgTypeWechat : isWhatsapp ? imgTypeWhatsapp : imgTypeInstagram} />
    </div>
  );
}

export default function SocialProof() {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col items-center justify-center pb-[var(--spacing-9xl,96px)] relative size-full" data-node-id="34:5643" data-name="Social proof section">
      <div className="content-stretch flex flex-col gap-[var(--spacing-4xl,0px)] items-start max-w-[1280px] px-[var(--container-padding-desktop,32px)] relative shrink-0 w-full" data-node-id="34:5644" data-name="Container">
        <div className="bg-[var(--colors\/background\/bg-secondary,#fafafa)] content-stretch flex flex-col gap-[var(--spacing-4xl,32px)] items-center px-[var(--spacing-4xl,32px)] py-[var(--spacing-7xl,64px)] relative rounded-[var(--radius-2xl,16px)] shrink-0 w-full" data-node-id="34:5645" data-name="Content">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-semibold leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-brand-secondary-\(700\),#047857)] text-[length:var(--font-size\/text-md,16px)] text-center w-full" data-node-id="36:167921">
            Connectivité
          </p>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/font-family-body,'Inter')] font-medium font-medium leading-[var(--line-height\/text-md,24px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#525252)] text-[length:var(--font-size\/text-md,16px)] text-center w-full" data-node-id="34:5646">
            Branché à vos outils, sans rien changer.
          </p>
          <div data-name="Logos" className="m-marquee w-full"><div className="m-marquee-track"><img src={imgTypeBooking} alt="Booking.com" className="m-logo" /><img src={imgTypeVrbo} alt="Vrbo" className="m-logo" /><img src={imgTypeAbritel} alt="Abritel" className="m-logo" /><img src={imgTypeAirbnb} alt="Airbnb" className="m-logo" /><img src={imgTypeTelegram} alt="Telegram" className="m-logo" /><img src={imgTypeWhatsapp} alt="WhatsApp" className="m-logo" /><img src={imgTypeInstagram} alt="Instagram" className="m-logo" /><img src={imgTypeWechat} alt="WeChat" className="m-logo" /><img src={imgTypeBooking} alt="Booking.com" className="m-logo" /><img src={imgTypeVrbo} alt="Vrbo" className="m-logo" /><img src={imgTypeAbritel} alt="Abritel" className="m-logo" /><img src={imgTypeAirbnb} alt="Airbnb" className="m-logo" /><img src={imgTypeTelegram} alt="Telegram" className="m-logo" /><img src={imgTypeWhatsapp} alt="WhatsApp" className="m-logo" /><img src={imgTypeInstagram} alt="Instagram" className="m-logo" /><img src={imgTypeWechat} alt="WeChat" className="m-logo" /></div></div>
        </div>
      </div>
    </div>
  );
}