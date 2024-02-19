import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";

const Project = ({ project, maxDescriptionHeight }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);

  const oneClickHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: themeColors.background.primary }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project?.image || '/fff.png'}
          alt={project?.title}
        />
        <CardContent sx={{ backgroundColor: themeColors.background.secondary }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={themeColors.text.primary}
            align="left"
          >
            {project?.title}
          </Typography>
          <Typography
            variant="body2"
            color={themeColors.text.secondary}
            height={isMobile ? "auto" : maxDescriptionHeight/3}
          >
            {project?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: themeColors.background.tertiary }}>
        <IconButton
          aria-label="github"
          onClick={() => {
            oneClickHandler(project?.link);
          }}
        >
          <GitHubIcon
            fontSize="medium"
            style={{ color: themeColors.button.primary }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Project;
