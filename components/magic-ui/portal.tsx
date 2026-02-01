// src/components/ui/Portal.tsx
"use client";

import {ReactNode} from "react";
import {createPortal} from "react-dom";

export function Portal({children}: {children: ReactNode}) {
  if (typeof document === "undefined") return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
}
