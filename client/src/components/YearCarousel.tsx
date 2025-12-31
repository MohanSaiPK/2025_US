import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { yearData } from "@/data/year-recap";
import MonthSlide from "./MonthSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YearCarouselProps {
  onComplete: () => void;
}

export default function YearCarousel({ onComplete }: YearCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    
    if (nextIndex >= yearData.length) {
      onComplete();
    } else if (nextIndex >= 0) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-20">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / yearData.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="relative flex-grow w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <MonthSlide data={yearData[currentIndex]} isActive={true} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Hints */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-6 z-20 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className={`pointer-events-auto rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-foreground transition-opacity ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
          onClick={() => paginate(-1)}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-foreground"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
