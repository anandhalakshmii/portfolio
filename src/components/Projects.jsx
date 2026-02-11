import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Skeleton,
  Chip,
  Box
} from "@mui/material";
import { motion } from "framer-motion";
import useGithubRepos from "../hooks/useGithubRepos";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const { repos, loading, error } = useGithubRepos();

  const excludedRepos = ["anandhalakshmii", "Python--BasicGame", "Hospital-Tracker_Madurai-City", "resume", "portfolio", "nextjs-todoapp"];

  // Map project name to themed local images
  const getProjectImage = (name) => {
    const imageMap = {
      "chatAppNext": "/project-images/chat.png",
      "ExpenseTracker": "/project-images/expenseTracker.png",
      "yelpCamp": "/project-images/yelp.png",
      "fertilizer-Recommendation-and-Disease-Classification": "/project-images/FertilizerRecommender.png",
      "grievances-tce": "/project-images/grievance.png",
      "classification.ml": "/project-images/classification.png"
    };

    return imageMap[name] || "/project-images/default.png";
  };

  return (
    <Container id="projects" maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <SectionWrapper>
        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Featured Projects
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 4 }}>
            {error}
          </Typography>
        )}

        <Grid container spacing={4}>
          {loading
            ? Array.from(new Array(6)).map((_, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Skeleton
                    variant="rectangular"
                    height={320}
                    sx={{ borderRadius: 3 }}
                  />
                </Grid>
              ))
            : repos
                .filter(
                  (repo) =>
                    !repo.fork &&
                    !excludedRepos.includes(repo.name)
                )
                .map((repo) => {
                  const imageUrl = getProjectImage(repo.name);

                  return (
                    <Grid item xs={12} md={4} key={repo.id}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Card
                          sx={{
                            bgcolor: "background.paper",
                            borderRadius: 3,
                            overflow: "hidden",
                            transition: "0.3s",
                            boxShadow: 4,
                            "&:hover": {
                              boxShadow: 12
                            }
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={imageUrl}
                            alt={repo.name}
                            sx={{ filter: "brightness(0.85)" }}
                            onError={(e) =>
                              (e.target.src =
                                "/project-images/default.png")
                            }
                          />

                          <CardContent>
                            <Typography variant="h6" fontWeight={600}>
                              {repo.name.replace(/-/g, " ")}
                            </Typography>

                            <Typography
                              variant="body2"
                              sx={{ mt: 1, minHeight: 60 }}
                            >
                              {repo.description ||
                                "Full stack application showcasing scalable architecture and modern engineering practices."}
                            </Typography>

                            <Box
                              sx={{
                                mt: 2,
                                display: "flex",
                                gap: 1,
                                flexWrap: "wrap"
                              }}
                            >
                              {repo.languages?.map((lang) => (
                                <Chip
                                  key={lang}
                                  label={lang}
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                />
                              ))}
                            </Box>

                            <Button
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="contained"
                              color="primary"
                              sx={{ mt: 3 }}
                            >
                              View Code
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  );
                })}
        </Grid>
      </SectionWrapper>
    </Container>
  );
}
