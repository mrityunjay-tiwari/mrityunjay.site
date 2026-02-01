"use client";

import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { type RefObject, useMemo, useRef, useState } from "react";
// import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "react-day-picker";
import { CursorClickIcon } from "../hover-icons/click";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  successDuration?: number;
  particleClass?: string;
}

function SuccessParticles({
  buttonRef,
  particleClassName
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
  particleClassName?: string;
}) {
  const [center, setCenter] = useState<{ x: number; y: number } | null>(null);
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number }[]
  >([]);

  React.useLayoutEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
  }, [buttonRef]);

  React.useEffect(() => {
    setParticles(
      [...Array(6)].map((_, i) => ({
        x: (i % 2 ? 1 : -1) * (Math.random() * 50 + 20),
        y: -Math.random() * 50 - 20,
        delay: i * 0.1,
      }))
    );
  }, []);

  if (!center || particles.length === 0) return null;

  return (
    <AnimatePresence>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: [0, p.x],
            y: [0, p.y],
          }}
          transition={{
            duration: 0.6,
            delay: p.delay,
            ease: "easeOut",
          }}
          className={cn("fixed h-1 w-1 rounded-full", particleClassName)}
          style={{ left: center.x, top: center.y }}
        />
      ))}
    </AnimatePresence>
  );
}


export default function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 1000,
  className,
  particleClass,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowParticles(true);

    setTimeout(() => {
      setShowParticles(false);
    }, successDuration);
    onClick?.(e);
  };

  return (
    <>
      {showParticles && (
        <SuccessParticles
          buttonRef={buttonRef as RefObject<HTMLButtonElement>}
          particleClassName={particleClass}
        />
      )}
      <Button
        className={cn(
          "relative",
          showParticles && "scale-95",
          "transition-transform duration-100",
          className
        )}
        variant={"ghost"}
        onClick={handleClick}
        ref={buttonRef}
        {...props}
      >
        {children}
        
      </Button>
    </>
  );
}
