import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "@/components/Intro";
import YearCarousel from "@/components/YearCarousel";
import Outro from "@/components/Outro";
import bgImage from "@assets/generated_images/soft_romantic_pastel_gradient_background_with_dreamlike_clouds.png";

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'carousel' | 'outro'>('intro');

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-white/20 to-primary/10 backdrop-blur-[2px]" />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          {stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <Intro onComplete={() => setStage('carousel')} />
            </motion.div>
          )}

          {stage === 'carousel' && (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <YearCarousel onComplete={() => setStage('outro')} />
            </motion.div>
          )}

          {stage === 'outro' && (
            <motion.div
              key="outro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full bg-black/40 backdrop-blur-sm"
            >
              <Outro onRestart={() => setStage('intro')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
