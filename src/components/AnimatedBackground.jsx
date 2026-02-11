import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "radial-gradient(circle at 20% 30%, #200000, #0b0000)"
      }}
    >
      {/* Floating Orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,46,46,0.3), transparent 70%)",
          filter: "blur(80px)"
        }}
      />

      {/* Floating Orb 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,80,80,0.25), transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      {/* Subtle Center Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.08), transparent 70%)"
        }}
      />
    </Box>
  );
}
