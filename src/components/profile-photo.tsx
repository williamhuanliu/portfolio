"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const PHOTO_CANDIDATES = ["/photo.png", "/photo.jpg", "/photo.webp"] as const;
const FALLBACK_PATH = "/avatar-fallback.svg";

/**
 * 圆形头像：正方形裁切 + object-cover。
 * 从 `public/` 依次尝试 png / jpg / webp，失败则 `avatar-fallback.svg`。
 */
export function ProfilePhoto({ className = "" }: { className?: string }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const acceptErrorsRef = useRef(false);

  const activeSrc = useMemo(() => {
    if (candidateIndex >= PHOTO_CANDIDATES.length) return FALLBACK_PATH;
    return PHOTO_CANDIDATES[candidateIndex];
  }, [candidateIndex]);

  const isPhoto = activeSrc !== FALLBACK_PATH;

  useEffect(() => {
    acceptErrorsRef.current = false;
    const id = window.setTimeout(() => {
      acceptErrorsRef.current = true;
    }, 120);
    return () => window.clearTimeout(id);
  }, [candidateIndex]);

  const handleError = useCallback(() => {
    if (!acceptErrorsRef.current) return;
    setCandidateIndex((i) => {
      if (i + 1 < PHOTO_CANDIDATES.length) return i + 1;
      return PHOTO_CANDIDATES.length;
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      className={`relative size-36 shrink-0 sm:size-40 lg:size-48 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-[-2px] z-0 rounded-full opacity-50 blur-md"
        style={{
          background: "var(--photo-glow)",
        }}
      />
      <div className="relative z-10 size-full overflow-hidden rounded-full border border-[var(--photo-border)] bg-[var(--bg-card)] shadow-[var(--photo-shadow)]">
        <img
          key={activeSrc}
          src={activeSrc}
          alt="刘欢"
          width={512}
          height={512}
          loading="eager"
          decoding="async"
          className="size-full object-cover object-[center_20%]"
          onError={isPhoto ? handleError : undefined}
        />
      </div>
    </motion.div>
  );
}
