import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Engineer",
    company: "Mr. Cooper",
    duration: "Jul 2023 – Present",
    description: [
      "Engineered scalable microservices using Java & Spring Boot on GCP.",
      "Redesigned backend using Event-Driven Architecture eliminating timeout failures.",
      "Reduced manual workflows by 30% through backend automation."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Mr. Cooper",
    duration: "Jan 2023 – Jun 2023",
    description: [
      "Built real-time messaging application using Next.js and Redis.",
      "Integrated Google SSO authentication.",
      "Worked in Agile teams delivering production features."
    ]
  }
];

export default function Experience() {
  return (
    <Container id='experience' maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: 700, mb: 8 }}
      >
        Experience
      </Typography>

      <Box sx={{ position: "relative" }}>
        {/* Vertical Line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(255,46,46,0.5), rgba(255,0,0,0.1))"
          }}
        />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                mb: 8,
                position: "relative"
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  boxShadow: "0 0 15px rgba(255,46,46,0.8)"
                }}
              />

              <motion.div
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ width: "45%" }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    bgcolor: "background.paper",
                    borderRadius: 3,
                    border: "1px solid rgba(255,46,46,0.1)"
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {exp.role}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="primary"
                    sx={{ mb: 2 }}
                  >
                    {exp.company} • {exp.duration}
                  </Typography>

                  {exp.description.map((point, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ mb: 1, opacity: 0.8 }}
                    >
                      • {point}
                    </Typography>
                  ))}
                </Paper>
              </motion.div>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
