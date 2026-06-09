import { useState, useEffect, useRef } from "react";

interface UseCarouselProps {
  totalItems: number;
  itemsPerPage: number;
}

export function useCarousel({ totalItems, itemsPerPage }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [maxIndex]);

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }
    if (diff < -50) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }

    touchStartX.current = null;
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return {
    currentIndex,
    setCurrentIndex,
    maxIndex,
    handleTouchStart,
    handleTouchEnd,
    goToPrevious,
    goToNext,
  };
}
