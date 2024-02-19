const lightThemes = {
  background: { primary: "#F8F9FA", secondary: "#EEEDEB" , tertiary: "#F6F6F6"},
  text: { primary: "#0F0E0E", secondary: "#191919", button: "#F8F9FA" },
  button: { primary: "#D89216", hover: "#8B8000", active: "#F3B95F" },
};

const darkThemes = {
  background: { primary: "#0F0E0E", secondary: "#191919" , tertiary: "#151515"},
  text: { primary: "#F8F9FA", secondary: "#EEEDEB", button: "#F8F9FA" },
  button: { primary: "#D89216", hover: "#8B8000", active: "#F3B95F" },
};

export const renderColor = (theme) => {
  if (theme === "dark") {
    return darkThemes;
  } else {
    return lightThemes;
  }
};
