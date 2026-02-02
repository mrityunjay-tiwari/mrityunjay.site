"use client";

import {Fraunces, Give_You_Glory, Inter} from "next/font/google";
import {Card} from "../ui/card";
import {RiCupLine} from "react-icons/ri";
import {CoffeeIcon} from "../hover-icons/cup";
import {cn} from "@/lib/utils";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import ParticleButton from "../particle-button/particle";
import {
  addEmailToNewsletterList,
  checkIfEmailAlreadyExistsInNewsletterList,
} from "@/app/actions/contents";
import {useRef, useState} from "react";
import {Spinner} from "../kibo-ui/spinner";
import {toast} from "sonner";
import {FaXTwitter} from "react-icons/fa6";
import Link from "next/link";

const marker = Fraunces({
  variable: "--font-shadow",
  weight: "400",
  style: "normal",
});

const sans = Inter({
  variable: "--font-shadow",
  weight: "400",
  style: "normal",
});

export default function Newsletter() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  const addEmailToNewsletterListfn = async () => {
    try {
      setIsLoading(true);

      const email = emailRef.current?.value?.trim();
      if (!email) {
        toast.error("Please enter an email");
        return;
      }

      const emailExists =
        await checkIfEmailAlreadyExistsInNewsletterList(email);

      if (emailExists) {
        toast.error("Hey, you have already subscribed!");
        return;
      }

      await addEmailToNewsletterList(email);
      setJoined(true);
      toast.success("You're in! ☕");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
 
    <Card id="newsletter" className="justify-self-center text-center bg-neutral-950 dark:bg-black dark:border flex flex-col items-center gap-3 sm:max-w-xl w-full max-w-[calc(100%-2.5rem)] mx-auto">
      {!joined ? (
        <>
          {/* icon */}
          <div className="rounded-full flex justify-center items-center p-2 md:p-2.5 bg-neutral-800 text-white">
            <CoffeeIcon />
          </div>

          {/* title */}
          <div className={cn("text-white text-xl md:text-2xl", marker.className)}>
            Want updates from me?
          </div>

          {/* description */}
          <div
            className={cn(
              "text-white text-[12px] md:text-sm text-center px-12 md:px-24",
              sans.className,
            )}
          >
            I occasionally send out an email with updates about my journey or
            when I have an interesting story to share.
          </div>

          {/* input + button */}
          <div className={cn("flex items-center border-b", sans.className)}>
            <Input
              ref={emailRef}
              placeholder="youremail@example.com"
              className="border-none bg-transparent dark:bg-transparent text-white text-xs  "
              disabled={isLoading}
            />

            <div onClick={addEmailToNewsletterListfn}>
              <ParticleButton
                className="text-white opacity-70 hover:opacity-100"
                particleClass="bg-white"
                disabled={isLoading}
              >
                {isLoading ? <Spinner variant="throbber" /> : "Join"}
              </ParticleButton>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* success icon */}

          {/* thank you message */}
          <div className={cn("text-white text-2xl mt-2.5", marker.className)}>
            Thank you...
          </div>

          {/* subtext */}
          <div
            className={cn(
              "text-white/70 text-sm text-center px-16",
              sans.className,
            )}
          >
            for being interested in my journey ♡
          </div>

          <Link
            href={"https://x.com/mrityunjay_18"}
            className={cn(
              "text-white text-sm flex items-center gap-2 text-center mx-16 border-b border-orange-200 mb-2.5",
              sans.className,
            )}
          >
            <FaXTwitter /> Join me on X
          </Link>

          <div className="rounded-full p-2.5 bg-neutral-800 text-white mb-2.5">
            <CoffeeIcon />
          </div>
        </>
      )}
    </Card>
  );
}
