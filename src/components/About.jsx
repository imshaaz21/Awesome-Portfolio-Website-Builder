import React, { useContext, useMemo } from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { renderColor } from "../utils/renderColor";
import { ThemeContext } from "../ThemeContext";
import SocialMediaIcons from "./SocialMediaIcons";

const About = ({ about }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);

  const avatarStyle = useMemo(
    () => ({
      sx: {
        bgcolor: themeColors.secondaryBg,
        borderColor: themeColors.text,
        m: 1,
        boxShadow: "1px 1px 5px 0 rgba(69,69,69,0.5)",
        border: 3,
        width: "auto",
        height: "auto",
        maxWidth: 200,
        maxHeight: 200,
        color: "white",
        [theme.breakpoints.down("sm")]: {
          width: "80%",
        },
      },
    }),
    [theme.breakpoints, themeColors.secondaryBg, themeColors.text]
  );

  const handleDownload = () => {
    if (about?.cv) {
      const link = document.createElement("a");
      link.href = about?.cv || "/dummy.pdf";
      link.download = `${about?.name || "User"}_CV.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Stack
      id="about"
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{
        bgcolor: themeColors.background.secondary,
        borderRadius: 2,
        color: themeColors.text.primary,
        textAlign: "justify",
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { xs: "center", md: "flex-start" },
        "& > :first-of-type": {
          marginBottom: { xs: 2, md: 0 },
        },
        "& > :last-child": {
          alignSelf: { xs: "center", md: "center" },
        },
        marginX: { xs: 1, md: 2 },
        my: 2,
        p: 2,
      }}
    >
      <Avatar {...avatarStyle} src={about?.image || '/user.png'} alt={about?.name || "User"} />

      <Box sx={{ flexGrow: 1, marginLeft: 0, marginRight: 0 }}>
        <Typography
          variant="h5"
          color={themeColors.text.secondary}
          fontWeight="500"
          sx={{
            textAlign: { xs: "center", md: "left" },
            marginBottom: 0,
            paddingBottom: 0,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          Hi, I'm {about?.name || "User"} <span className="wave">👋</span>
        </Typography>
        {(isMobile && about?.socials) && (
          <SocialMediaIcons
            email={about?.socials?.email}
            github={about?.socials?.github}
            linkedin={about?.socials?.linkedin}
          />
        )}
        <Typography
          variant="body1"
          color={themeColors.text.primary}
          fontWeight="normal"
          my={0}
          py={0}
          sx={{
            alignSelf: "center",
            marginTop: 1,
            paddingTop: 0,
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontWeight: 300,
          }}
        >
          {about?.description || ""}
        </Typography>
        {!isMobile && about?.socials && (
          <SocialMediaIcons
            email={about?.socials?.email}
            github={about?.socials?.github}
            linkedin={about?.socials?.linkedin}
          />
        )}
        <Stack
          direction="row"
          justifyContent={isMobile ? "center" : "flex-start"}
          mt={{ xs: 1, md: 2 }}
        >
          {about?.cv && (
            <Button
              variant="contained"
              startIcon={<CloudDownloadIcon />}
              size="small"
              sx={{
                color: themeColors.text.primary,
                ":hover": { backgroundColor: themeColors.button.hover },
                backgroundColor: themeColors.button.primary,
                mt: isMobile ? 1 : 2,
              }}
              onClick={handleDownload}
            >
              Download CV
            </Button>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default About;
