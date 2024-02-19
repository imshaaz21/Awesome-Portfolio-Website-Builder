import React, { useContext } from "react";
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";
import FadeInSection from "../utils/FadeInSection";

const Experience = ({ experiences }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);

  return (
    <FadeInSection>
      <Stack
        id="experience"
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          backgroundColor: themeColors.background.secondary,
          borderRadius: 2,
          color: themeColors.text.primary,
          textAlign: "justify",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginX: { xs: 1, md: 2 },
          my: 2,
          p: 2,
          overflowX: "hidden",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            spacing={1}
            my={0.5}
            sx={{
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            {/* <WorkOutlineOutlinedIcon
              fontSize="large"
              htmlColor={themeColors.text.primary}
            /> */}
            <Typography
              variant={isSmallScreen ? "h6" : "h5"}
              gutterBottom
              fontWeight="bold"
              color="inherit"
              sx={{
                paddingBottom: "2px",
                // marginBottom: 5,
                // borderBottom: `2px solid ${themeColors.text.primary}`,
                // width: '100%',
              }}
            >
              Experience
            </Typography>
          </Stack>
          <Timeline
            sx={{
              margin: isSmallScreen ? "auto" : "initial",
              textAlign: isSmallScreen ? "center" : "left",
              width: "100%",
              overflowX: "hidden", // Prevent horizontal scrolling
              mt: 2,
            }}
          >
            {experiences?.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  color={themeColors.text.secondary}
                  sx={{
                    flex: isSmallScreen ? 1 : 2,
                    textAlign: isSmallScreen ? "center" : "flex-start",
                    paddingRight: isSmallScreen ? 1 : 2,
                    margin: 0,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color={themeColors.text.secondary}
                  >
                    {item?.date}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{ backgroundColor: themeColors.text.secondary }}
                  />
                  <TimelineConnector
                    sx={{ backgroundColor: themeColors.text.secondary }}
                  />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ flex: isSmallScreen ? 2 : 2, width: "100%" }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ color: themeColors.text.primary }}
                  >
                    {item?.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={themeColors.text.secondary}
                    sx={{ fontWeight: "lighter" }}
                  >
                    {item?.workplace}
                  </Typography>
                  <List style={{ marginTop: 0, paddingTop: 0 }}>
                    {item?.descriptions?.map((desc, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          paddingX: 0,
                          "& .MuiSvgIcon-root": {
                            verticalAlign: "middle",
                          },
                        }}
                      >
                        <div
                          className="MuiListItemIcon-root"
                          style={{ marginRight: 5 }}
                        >
                          <BookmarkIcon
                            fontSize="small"
                            htmlColor={themeColors.text.primary}
                          />
                        </div>
                        <Typography
                          variant="body2"
                          sx={{ margin: 0 }}
                          color={themeColors.text.secondary}
                          textAlign={isSmallScreen ? "left" : "justify"}
                        >
                          {desc}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Stack>
    </FadeInSection>
  );
};

export default Experience;
