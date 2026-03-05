"use client";

import type { HTMLAttributes } from "react";
import { useRef } from "react";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  spotlightColor?: string;
};

/**
 * Adapted from React Bits "SpotlightCard" component.
 * Source: https://github.com/DavidHDev/react-bits
 * Copyright (c) 2026 David Haz
 * License: MIT + Commons Clause (see repository license)
 */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(45, 212, 191, 0.14)",
  ...rest
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { onMouseMove, ...divProps } = rest;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    cardRef.current.style.setProperty("--spotlight-color", spotlightColor);
    onMouseMove?.(event);
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      {...divProps}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
