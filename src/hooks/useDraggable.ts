"use client";

import { useState, useRef, useCallback } from "react";

export function useDraggable() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);
  }, []);

  const open = useCallback(() => {
    setIsVisible(true);
    setIsMinimized(false);
  }, []);

  return {
    isMinimized,
    isVisible,
    constraintsRef,
    toggleMinimize,
    close,
    open,
  };
}
