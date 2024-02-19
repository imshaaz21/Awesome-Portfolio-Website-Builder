import React, { useContext } from "react";
import { Fab, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";

const ScrollToTopButton = ({ onClick }) => {
  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);
  return (
    <Tooltip title="Top">
    <Fab
      size="small"
      aria-label="scroll-to-top"
      onClick={() => onClick("about")}
      style={{ position: "fixed", bottom: "20px", right: "20px", opacity: 0.8, backgroundColor: themeColors.button.primary ,color: themeColors.text.primary}}
    >
      <KeyboardArrowUpIcon fontSize="small"/>
    </Fab>
    </Tooltip>
  );
};

export default ScrollToTopButton;
