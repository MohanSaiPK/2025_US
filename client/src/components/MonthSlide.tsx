import { motion } from "framer-motion";
import { MonthData } from "@/data/year-recap";
import { getCloudinaryImageUrl } from "@/lib/cloudinary";
import placeholderImg from "@assets/generated_images/couple_holding_hands_silhouette_against_sunset.png";

interface MonthSlideProps {
  data: MonthData;
  isActive: boolean;
}

export default function MonthSlide({ data, isActive }: MonthSlideProps) {
  // Compute image URL at render time when env is available
  const imageUrl = data.imageId
    ? getCloudinaryImageUrl(data.imageId)
    : placeholderImg;

  return (
    <div className="flex flex-col h-full w-full p-6 pt-12 md:p-12 justify-between relative overflow-hidden">
      {/* Background Month Number Watermark */}
      <div className="absolute top-0 right-[-2rem] text-[12rem] font-serif opacity-[0.1] pointer-events-none select-none leading-none z-0">
        {data.id === "jan"
          ? "01"
          : data.id === "feb"
          ? "02"
          : data.id === "mar"
          ? "03"
          : data.id === "apr"
          ? "04"
          : data.id === "may"
          ? "05"
          : data.id === "jun"
          ? "06"
          : data.id === "jul"
          ? "07"
          : data.id === "aug"
          ? "08"
          : data.id === "sep"
          ? "09"
          : data.id === "oct"
          ? "10"
          : data.id === "nov"
          ? "11"
          : "12"}
      </div>

      {/* Content Container */}
      <div className="z-10 flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: isActive ? 0 : -20, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-5xl font-serif text-primary font-bold tracking-tight">
            {data.month}
          </h2>
          <div className="h-1 w-16 bg-primary/40 mt-2 rounded-full" />
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-grow max-h-[45vh] my-4 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl -rotate-2 transform group-hover:-rotate-1 transition-transform duration-700" />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 rotate-1 transform group-hover:rotate-0 transition-transform duration-700">
            <img
              src={imageUrl}
              alt={data.month}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>

        {/* Memory & Quote */}
        <div className="mt-auto space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: isActive ? 0 : -20, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg font-sans text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4">
              {data.memory}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white/40 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm shadow-sm"
          >
            <p className="text-xl font-serif italic text-primary text-center">
              "{data.quote}"
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
