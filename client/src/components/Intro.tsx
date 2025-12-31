import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setTextStage(1), 1000);
    const timer2 = setTimeout(() => setTextStage(2), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-10 p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: textStage >= 0 ? 1 : 0, y: textStage >= 0 ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground drop-shadow-md">
          {new Date().getFullYear()}
        </h1>
      </motion.div>

      {textStage >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl font-serif italic text-white/90">
            A year of memories.<br/>A year of us.
          </p>
        </motion.div>
      )}

      {textStage >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={onComplete}
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-serif bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white transition-all duration-300 hover:scale-105 group"
          >
            Start Our Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      )}

      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-50">
        <Heart className="animate-pulse text-white h-6 w-6" fill="currentColor" />
      </div>
    </div>
  );
}
