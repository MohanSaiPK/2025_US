import { motion } from "framer-motion";
import { outroData } from "@/data/year-recap";
import { Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OutroProps {
  onRestart: () => void;
}

export default function Outro({ onRestart }: OutroProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center relative z-10">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8 p-4 bg-white/30 rounded-full backdrop-blur-md shadow-xl"
      >
        <Sparkles className="h-16 w-16 text-yellow-200" fill="currentColor" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-5xl font-serif text-white mb-6 drop-shadow-md">
          {outroData.title}
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-md"
      >
        <p className="text-xl font-sans text-white/90 leading-relaxed mb-12">
          {outroData.message}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button 
          onClick={onRestart}
          variant="outline" 
          className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
        >
          Watch Again
        </Button>
      </motion.div>

      <div className="absolute bottom-8 animate-bounce">
         <Heart className="text-white/80 h-5 w-5" />
      </div>
    </div>
  );
}
