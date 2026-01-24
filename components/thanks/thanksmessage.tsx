import {cn} from "@/lib/utils";
import {Fraunces, Give_You_Glory, Inter} from "next/font/google";

const sans = Inter({
  variable: "--font-shadow",
  weight: "400",
  style: "normal",
});

export default function ThanksMessage() {
  return (
    <div
      className={cn(`justify-self-center text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.06)] p-6 rounded-full flex gap-2 my-10 ${sans.className}`)}
    >
      <span className="text-orange-300">˗`ˎ</span>{" "}
      <span className="opacity-60">
        Appreciate you visiting, wishing you a great day ahead.🌻
      </span>
      <span className="text-orange-300">ˎˊ˗</span>
    </div>
  );
}
