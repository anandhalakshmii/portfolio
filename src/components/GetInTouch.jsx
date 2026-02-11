import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Box
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_b8fk7oz",
        "template_iuw929t",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        "r7raXev1XMm-Pl01w"
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Container id='contact' maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
        >
          Let’s Connect
        </Typography>

        <Typography
          sx={{ textAlign: "center", opacity: 0.7, mb: 6 }}
        >
          Have a project in mind or just want to say hi? I’m open to new opportunities.
        </Typography>

        <Grid container spacing={6}>
          {/* FORM */}
          <Grid item xs={12} md={7}>
            <Card sx={{ bgcolor: "background.paper", p: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Send a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>

                  {success && (
                    <Typography sx={{ mt: 2 }} color="primary">
                      Message sent successfully!
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* DIRECT INFO */}
          <Grid item xs={12} md={5}>
            <Card sx={{ bgcolor: "background.paper", p: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Direct Contact
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  📧 anandhalakshmip16@gmail.com
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  📍 India
                </Typography>

                <Typography>
                  Open to remote & hybrid roles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
