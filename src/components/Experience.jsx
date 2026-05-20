import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Engineer 2",
    company: "Rocket (Formerly Mr.Cooper)",
    description: [
      "Driving development of Pyro Vault, a distributed system managing billions of mortgage records using agentic workflow orchestration",
      "Architected LLM orchestration pipelines using Temporal, Apache Kafka and Redis queues, enabling scalable, asynchronous AI-driven document processing",
      "Designed resilient event-driven workflows with retry strategies, failure isolation, and queue-based load leveling to ensure reliability of long-running AI processes",
      "Integrated LLM services into backend decision systems, improving document validation accuracy and reducing manual effort."
    ]
  },
  {
    role: "Software Development Engineer 1",
    company: "Mr. Cooper",
    duration: "Jul 2023 – Present",
    description: [
      "Core contributor to Pyro AI, an enterprise document intelligence platform built with React and Spring Boot for high-scale mortgage workflows.",
      "Engineered scalable microservices using Java & Spring Boot on GCP.",
      "Co-developed AI Guardian, a secure AI validation platform to govern LLM usage across business workfl ows where I built validation pipelines to verify and score LLM outputs, improving reliability of AI-driven decisions. Enabled compliance and responsible AI adoption by introducing guardrails and monitoring mechanisms.",
      "Redesigned backend using Event-Driven Architecture eliminating timeout failures for an auditing application.",
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
