import { Box } from "@mui/material";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* Background Layer */}
      <AnimatedBackground />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Wrapper */}
      <Box
        component="main"
        sx={{
          position: "relative",
          zIndex: 1,
          pt: 10 // prevents hero hiding behind fixed navbar
        }}
      >
        <Hero />
        <About/>
        <Experience />
        <Projects />
        <GetInTouch />
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
