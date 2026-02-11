import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo / Name */}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            background: "linear-gradient(90deg,#ff2e2e,#ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          AP
        </Typography>

        {/* Navigation Tabs */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="primary" href="#projects">
            Projects
          </Button>

          <Button color="primary" href="#experience">
            Experience
          </Button>

          <Button color="primary" href="#contact">
            Contact
          </Button>

          {/* Divider Space */}
          <Box sx={{ width: 20 }} />

          {/* GitHub Icon */}
          <IconButton
            href="https://github.com/anandhalakshmii/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              transition: "0.3s",
              "&:hover": {
                color: "#ff2e2e",
                transform: "scale(1.1)"
              }
            }}
          >
            <GitHubIcon />
          </IconButton>

          {/* LinkedIn Icon */}
          <IconButton
            href="https://www.linkedin.com/in/anandhalakshmip/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              transition: "0.3s",
              "&:hover": {
                color: "#ff2e2e",
                transform: "scale(1.1)"
              }
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
