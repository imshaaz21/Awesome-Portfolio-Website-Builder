import {
  Button,
  Link,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";

const SocialMediaIcons = ({ github,linkedin,email}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);

  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{
        marginTop: 1,
        justifyContent: {
          xs: "center",
          md: theme.breakpoints.up("md") ? "flex-start" : "center",
        },
        paddingLeft: { md: 0 },
        marginLeft: { md: 0 },
        mt: isMobile ? 1 : 2,
      }}
    >
      <Button
        component={Link}
        href={`mailto:${email}`}
        target="_blank"
        variant="text"
        sx={{
          color: themeColors.text.primary,
          ":hover": { color: themeColors.button.active },
          padding: 0,
          minWidth: 0,
          width: "auto",
          marginRight: { xs: 1, md: 2 },
        }}
      >
        <Tooltip title={email} placement="top">
          <EmailIcon fontSize={isMobile ? "small" : "medium"} />
        </Tooltip>
      </Button>
      <Button
        component={Link}
        href={github}
        target="_blank"
        variant="text"
        sx={{
          color: themeColors.text.primary,
          ":hover": { color: themeColors.button.active },
          padding: 0,
          minWidth: 0,
          width: "auto",

          marginRight: { xs: 1, md: 2 },
        }}
      >
        <Tooltip title={github && github.split("/").pop()}>
          <GitHubIcon fontSize={isMobile ? "small" : "medium"} />
        </Tooltip>
      </Button>
      <Button
        component={Link}
        href={linkedin}
        target="_blank"
        variant="text"
        sx={{
          color: themeColors.text.primary,
          ":hover": { color: themeColors.button.active },
          padding: 0,
          minWidth: 0,
          width: "auto",
        }}
      >
        <Tooltip title={linkedin && linkedin.split("/").pop()} placement="top">
          <LinkedInIcon fontSize={isMobile ? "small" : "medium"} />
        </Tooltip>
      </Button>
    </Stack>
  );
};

export default SocialMediaIcons;
