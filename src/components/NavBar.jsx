import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";

const pages = ["About", "Experience", "Education", "Projects", "Contact"];

const NavBar = ({ scrollToSection }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [themeChanged, setThemeChanged] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const onThemeChange = (mode) => {
    theme === "dark" ? toggleTheme("light") : toggleTheme("dark");
    setThemeChanged((prev) => !prev);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const themeColors = renderColor(theme);

  return (
    <AppBar
      id="navbar"
      position="sticky"
      sx={{
        margin: 0,
        padding: 0,
        backgroundColor: scrolled
          ? themeColors.background.secondary
          : themeColors.background.primary,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 0 }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                ":hover": { color: themeColors.button.active },
                color: themeColors.text.primary,
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  onClickCapture={() =>
                    scrollToSection(page.toLocaleLowerCase())
                  }
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e) => {
                  handleCloseNavMenu(e);
                  scrollToSection(page.toLocaleLowerCase());
                }}
                sx={{
                  my: 2,
                  color: themeColors.text.primary,
                  ":hover": { color: themeColors.button.active },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Tooltip title="Change Theme">
              {theme === "dark" ? (
                <IconButton
                  onClick={onThemeChange}
                  sx={{ p: 0 }}
                  className={themeChanged ? "animate-icon" : ""}
                >
                  <LightModeOutlinedIcon
                    sx={{
                      color: themeColors.text.primary,
                      ":hover": { color: themeColors.button.active },
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton
                  onClick={onThemeChange}
                  sx={{ p: 0 }}
                  className={themeChanged ? "animate-icon" : ""}
                >
                  <DarkModeOutlinedIcon
                    sx={{
                      color: themeColors.text.primary,
                      ":hover": { color: themeColors.button.hover },
                    }}
                  />
                </IconButton>
              )}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
