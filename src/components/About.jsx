import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Grid container spacing={6} alignItems="center">
          
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            
            {/* Small Tag */}
            <Typography
              sx={{
                letterSpacing: 3,
                color: "primary.main",
                fontSize: 12,
                mb: 2
              }}
            >
              DISCOVERY
            </Typography>

            {/* Heading */}
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, mb: 4 }}
            >
              About{" "}
              <Box component="span" color="primary.main">
                The Architect
              </Box>
            </Typography>

            {/* Summary Card */}
            <Paper
              elevation={6}
              sx={{
                p: 4,
                bgcolor: "background.paper",
                borderRadius: 3,
                border: "1px solid rgba(255,46,46,0.1)",
                lineHeight: 1.8
              }}
            >
              <Typography sx={{ opacity: 0.9 }}>
                I am a Full Stack Developer with 3+ years of experience delivering 
                scalable, cloud-integrated web applications end to end. I build 
                intuitive user experiences with React and engineer reliable backend 
                services using Java Spring Boot and Python.
              </Typography>

              <Typography sx={{ mt: 2, opacity: 0.9 }}>
                Currently pursuing an MTech in AI & ML, I actively apply emerging 
                technologies to develop production-ready systems. I focus on 
                performance, automation, and maintainable architectures in 
                cloud-first environments.
              </Typography>

              <Typography sx={{ mt: 2, opacity: 0.9 }}>
                Passionate about continuous learning, I strive to deliver 
                scalable solutions that reduce operational overhead and drive 
                measurable business impact.
              </Typography>
            </Paper>

            {/* Stats */}
            <Box
              sx={{
                display: "flex",
                gap: 6,
                mt: 6
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  3+
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  YEARS EXPERIENCE
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" fontWeight={700}>
                  20+
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  PROJECTS BUILT
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" fontWeight={700}>
                  10+
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  TECHNOLOGIES
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SIDE IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,46,46,0.2)"
              }}
            >
              <Box
                component="img"
                src="/profile.jpg"  // Put your image inside public/
                alt="Profile"
                sx={{
                  width: "100%",
                  display: "block",
                  filter: "grayscale(100%) contrast(110%)"
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </motion.div>
    </Container>
  );
}
