import { motion } from "framer-motion";

const waveHeights = [8, 24, 16, 36, 12, 40, 20, 32, 10, 28, 14, 38, 22, 18, 34, 8, 30, 16, 26, 40];

export default function AudioWaveform() {
  return (
    <div className="w-[200px] h-[48px] flex items-end gap-[4px] my-6">
      {waveHeights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[6px] bg-[#d48c1a] rounded-t-sm origin-bottom"
          style={{ height: `${h}px` }}
          animate={{ scaleY: [0.4, 1.0, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}