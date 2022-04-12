import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

const contactArray = [
  {
    img: "assets/svg/github.svg",
    name: "GitHub",
    href: "https://github.com/hankhsiao823",
  },
  {
    img: "assets/svg/messenger.svg",
    name: "Messenger",
    href: "http://m.me/100013389647013",
  },
  {
    img: "assets/svg/gmail.svg",
    name: "Gmail",
    href: "mailto:hankhsiao0823@gmail.com",
  },
  {
    img: "assets/svg/discord.svg",
    name: "Discord",
    href: "https://discordapp.com/users/hankhsiao#4732",
  },
];

const contactBox = {
  rest: {
    background: alpha("#808080", 0.1),
    scale: 1,
    duration: 0.2,
    opacity: 0,
    y:100
  },
  visible: (i) => ({
    opacity: 1,
    y:0,
    transition: {
      delay: i*0.5,
      duration: 0.2,
    },
  }),
  hover:{
    background: "#808080",
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

const contactText = {
  rest: {
    y: 0,
    opacity: 0,
    ease: "easeOut",
    duration: 0.2,
  },
  hover: {
    y: 20,
    opacity: 1,
    scale: 1.5,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const contactImg = {
  rest: {
    y: 0,
    scale: 2.5,
    ease: "easeOut",
    duration: 0.2,
  },
  hover: {
    y: -20,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const contactForm = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Contact = () => {
  const theme = useTheme();
  const { handleSubmit, reset, control } = useForm();
  const sendEmail = (data, e) => {
    e.preventDefault();
    // console.log(data,e.target);
    emailjs
      .sendForm(
        "service_gg1xoaw",
        "template_3hvrwwz",
        e.target,
        "jahDI5XXcy1EN_h-n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          zIndex: -1,
          "&::before": {
            content: '"CONTACT"',
            fontSize: { xs: "4rem", md: "8.5rem" },
            position: "absolute",
            top: { xs: 0, md: 50 },
            left: 50,
            color: alpha(theme.palette.text.disabled, 0.1),
          },
        }}
      />
      <Grid
        container
        sx={{
          minHeight: "100vh",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} my={5} sx={{ px: { xs: 0, sm: 10 } }}>
          <Container sx={{ maxWidth: { xs: "lg", sm: "sm" } }}>
            <Box
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              {contactArray.map((data,index) => (
                <Box
                  key={index}
                  component={motion.a}
                  variants={contactBox}
                  custom={index}
                  whileInView="visible"
                  viewport={{ once: false }}
                  whileHover="hover"
                  animate="rest"
                  sx={{
                    width: "50%",
                    height: "200px",
                    transition: `all .2s ease`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                  href={data.href}
                  target="_blank"
                >
                  <Box
                    component={motion.img}
                    variants={contactImg}
                    sx={{ position: "absolute" }}
                    src={data.img}
                  />
                  <Typography
                    component={motion.p}
                    variants={contactText}
                    sx={{ position: "absolute" }}
                  >
                    {data.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} my={5}>
          <motion.form
            onSubmit={handleSubmit(sendEmail)}
            variants={contactForm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <Container sx={{ maxWidth: { xs: "lg", sm: "sm" } }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Contact Me
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ flexWrap: "wrap" }}
              >
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field: { onChange }, fieldState: { error } }) => (
                    <Box sx={{ mb: 3, width: { xs: "100%", sm: "45%" } }}>
                      <TextField
                        name="name"
                        onChange={onChange}
                        error={error}
                        fullWidth
                        label="Name"
                        variant="outlined"
                        placeholder="insert your name"
                        sx={{
                          background: alpha("#808080", 0.1),
                        }}
                      />
                      <Typography color="error">
                        {error && error.message}
                      </Typography>
                    </Box>
                  )}
                />
                <Controller
                  name="mail"
                  control={control}
                  rules={{
                    required: "Mail is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  }}
                  render={({ field: { onChange }, fieldState: { error } }) => (
                    <Box sx={{ mb: 3, width: { xs: "100%", sm: "45%" } }}>
                      <TextField
                        name="mail"
                        onChange={onChange}
                        error={error}
                        label="Mail"
                        variant="outlined"
                        placeholder="insert your Email"
                        fullWidth
                        sx={{
                          background: alpha("#808080", 0.1),
                        }}
                      />
                      <Typography color="error">
                        {error && error.message}
                      </Typography>
                    </Box>
                  )}
                />
              </Box>
              <Controller
                name="title"
                control={control}
                rules={{ required: "Title is required" }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <Box mb={3}>
                    <TextField
                      name="title"
                      onChange={onChange}
                      error={error}
                      fullWidth
                      label="Title"
                      variant="outlined"
                      placeholder="write your title"
                      sx={{
                        background: alpha("#808080", 0.1),
                      }}
                    />
                    <Typography color="error">
                      {error && error.message}
                    </Typography>
                  </Box>
                )}
              />
              <Controller
                name="content"
                control={control}
                rules={{ required: "Content is required" }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <Box mb={3}>
                    <TextField
                      name="content"
                      onChange={onChange}
                      error={error}
                      multiline
                      rows={10}
                      fullWidth
                      label="Content"
                      variant="outlined"
                      placeholder="write your content..."
                      sx={{
                        background: alpha("#808080", 0.1),
                      }}
                    />
                    <Typography color="error">
                      {error && error.message}
                    </Typography>
                  </Box>
                )}
              />
              <Button
                variant="contained"
                size="large"
                type="submit"
                color="secondary"
                sx={{
                  mt: 3,
                  mb: 12,
                  color: "#fff",
                }}
              >
                Submit
              </Button>
            </Container>
          </motion.form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
