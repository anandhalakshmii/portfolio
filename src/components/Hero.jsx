import { Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Container sx={{ mt: 20, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            background: "linear-gradient(90deg,#ff2e2e,#ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Crafting Digital Masterpieces
        </Typography>

        <Typography variant="h5" sx={{ mt: 2 }}>
          Anandhalakshmi — Full Stack Engineer
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          href="#projects"
        >
          View My Work
        </Button>
      </motion.div>
    </Container>
  );
}
