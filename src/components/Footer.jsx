import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useContext} from "react";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";

const Footer = () => {
  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);
  return (
    <Paper
      sx={{
        marginTop: "auto",
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        bgcolor: themeColors.background.secondary,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
          }}
        >
          <Typography variant="caption" color={themeColors.text.primary}>
            &copy; 2024 - All rights reserved
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
