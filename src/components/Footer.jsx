import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        mt: 15,
        py: 6,
        backgroundColor: "background.paper",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4, opacity: 0.1 }} />

        <Typography variant="h6" fontWeight={700} gutterBottom>
          Anandhalakshmi PA
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
          Full Stack Developer • Java • React • Python • Cloud
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            href="https://github.com/anandhalakshmii/"
            target="_blank"
            color="primary"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/anandhalakshmip/"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="mailto:anandhalakshmip16@gmail.com"
            color="primary"
          >
            <EmailIcon />
          </IconButton>
        </Box>

        <Typography
          variant="caption"
          sx={{ display: "block", mt: 4, opacity: 0.5 }}
        >
          © {new Date().getFullYear()} Anandhalakshmi. Built with React & MUI.
        </Typography>
      </Container>
    </Box>
  );
}
