import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";



const WorksPage = () => {
  const theme = useTheme();
  const [width, setWidth] = useState(null);
  const carousel = useRef();
  const { t } = useTranslation();

  const worksArray = [
    {
      name: t("works.weather.title"),
      description:t("works.weather.introduce"),
      img: "assets/images/weather-web.png",
      href: "https://hankhsiao823.github.io/weather-web/",
      github: "https://github.com/hankhsiao823/weather-web",
      tools:'#reactjs #api #material ui'
    },
    {
      name: t("works.colour.title"),
      description:t("works.colour.introduce"),
      img: "assets/images/colour-palette-web.png",
      href: "https://hankhsiao823.github.io/colour-palette/",
      github: "https://github.com/hankhsiao823/colour-palette",
      tools:'#reactjs #material ui'
    },
    {
      name: t("works.photo.title"),
      description:t("works.photo.introduce"),
      img: "assets/images/photo-web.png",
      href: "https://hankhsiao823.github.io/photo-website/",
      github: "https://github.com/hankhsiao823/photo-website",
      tools:'#reactjs #api #scss #react-router'
    },
    {
      name: t("works.todo.title"),
      description:t("works.todo.introduce"),
      img: "assets/images/todo-list-web.png",
      href: "https://hankhsiao823.github.io/todo-list/",
      github: "https://github.com/hankhsiao823/todo-list",
      tools:'#html #css #js'
    },
  ];

  const variant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    //??????card box??? drag range
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          zIndex: -1,
          "&::before": {
            content: '"WORKS"',
            fontSize: { xs: "5rem", md: "10rem" },
            position: "absolute",
            top: 50,
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
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex" }}
          justifyContent="center"
          alignItems="center"
          order={{ xs: 2, md: 1 }}
        >
          <Box
            component={motion.div}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            sx={{
              position: "relative",
              cursor: "grab",
              overflow: "hidden",
              width: { xs: "90%", sm: "80%" },
              my: { xs: 10, md: 0 },
              "&::before": {
                content: '""',
                position: "absolute",
                background: `linear-gradient(to left,${alpha(
                  theme.palette.background.default,
                  0.7
                )} 0% ,transparent 15% 80%,${alpha(
                  theme.palette.background.default,
                  0.7
                )}  100%)`,
                width: "100%",
                height: "100%",
                zIndex: 1,
                pointerEvents: "none",
              },
            }}
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
          >
            <Box
              component={motion.div}
              style={{ x: -width / 2 }}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              sx={{ display: "flex" }}
            >
              {worksArray.map((data) => (
                <Box component={motion.div} sx={{ p: 1 }} key={data.name}>
                  <Card sx={{ maxWidth: 345, minWidth: 280 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      src={data.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {data.description}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {data.tools}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        component="a"
                        startIcon={<LinkIcon />}
                        href={data.href}
                        target="_blank"
                      >
                        demo
                      </Button>
                      <Button
                        component="a"
                        startIcon={<GitHubIcon />}
                        href={data.github}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex" }}
          justifyContent="center"
          alignItems="center"
          order={{ xs: 1, md: 2 }}
        >
          <Box
            component={motion.img}
            variants={variant}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: false }}
            src="assets/svg/works_coding.svg"
            sx={{
              width: { xs: "90%", md: "400px", lg: "500px" },
              mt: { xs: 20, md: 0 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorksPage;
