import React, { useContext } from "react";
import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import List from "@mui/material/List";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";
import FadeInSection from "../utils/FadeInSection";

const Education = ({ educations }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);

  return (
    <FadeInSection>
      <Stack
        id="education"
        direction={{ xs: "column" }}
        spacing={2}
        sx={{
          bgcolor: themeColors.background.secondary,
          borderRadius: 2,
          color: "text.primary",
          textAlign: "justify",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginX: { xs: 1, md: 2 },
          my: 2,
          p: 2,
        }}
      >
        <Stack direction="row" spacing={1} my={0.5}>
          <SchoolOutlinedIcon
            fontSize="large"
            htmlColor={themeColors.text.primary}
          />
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            gutterBottom
            fontWeight="bold"
            color={themeColors.text.primary}
            sx={{
              paddingBottom: "2px",
              marginBottom: 2,
            }}
          >
            Education
          </Typography>
        </Stack>
        <List>
          {educations?.map((education, index) => (
            <Container
              key={index}
              sx={{ marginBottom: isSmallScreen ? 3 : 4 }}
              style={{ marginLeft: 0, paddingLeft: 0 }}
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ color: themeColors.text.primary }}
                style={{ marginTop: 0, paddingTop: 0 }}
              >
                {education?.field}
              </Typography>
              <Stack direction="row" spacing={1} my={0.5}>
                <BookmarkIcon
                  fontSize="small"
                  htmlColor={themeColors.text.secondary}
                />
                <Typography
                  variant="body1"
                  color={themeColors.text.secondary}
                  sx={{ fontWeight: "lighter" }}
                >
                  {education?.place}
                </Typography>
              </Stack>
              <Typography
                variant="subtitle2"
                color={themeColors.text.secondary}
                fontSize="0.8rem"
                my={0.5}
              >
                {education?.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginLeft: 0, my: 0.5 }}
                color={themeColors.text.secondary}
                textAlign="justify"
              >
                {isSmallScreen
                  ? education?.descriptions?.map((description, eduIndex) => (
                      <span key={eduIndex}>
                        - {description}
                        <br />
                      </span>
                    ))
                  : education?.descriptions?.join(" | ")}
              </Typography>
            </Container>
          ))}
        </List>
      </Stack>
    </FadeInSection>
  );
};

export default Education;
