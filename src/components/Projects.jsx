import { Stack } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";
import Project from "./Project";
import FadeInSection from "../utils/FadeInSection";

const Projects = ({ projects }) => {
  const { theme: colorTheme } = useContext(ThemeContext);

  const themeColors = renderColor(colorTheme);

  const maxDescriptionHeight = useMemo(() => {
    if (!projects) return 0;
    return Math.max(
      ...projects.map((project) => project?.description?.length ?? 0)
    );
  }, [projects]);

  return (
    <FadeInSection>
      <Stack
        id="projects"
        direction="column"
        spacing={2}
        sx={{
          color: themeColors.text.primary,
          textAlign: "justify",
          alignItems: "center",
          justifyContent: "center",
          marginX: { xs: 1, md: 2 },
          my: 2,
          p: 2,
        }}
      >
        <h2
          className={
            colorTheme === "dark"
              ? "ui horizontal divider header mt-3 mb-3 text-light"
              : "ui horizontal divider header mt-3 mb-3 text-dark"
          }
        >
          Projects
        </h2>
        <Row xs={1} md={2} lg={3} className="justify-content-center m-1">
          {projects?.map((project, index) => (
            <Col className="mt-3 d-flex justify-content-center" key={index}>
              <Project
                project={project}
                maxDescriptionHeight={maxDescriptionHeight}
              />
            </Col>
          ))}
        </Row>
      </Stack>
    </FadeInSection>
  );
};

export default Projects;
