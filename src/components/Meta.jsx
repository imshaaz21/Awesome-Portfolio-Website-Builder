import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ meta }) => {
  return (
    <Helmet>
      <title>{meta?.title || "Portfolio"}</title>
      <meta property="og:title" content={meta?.title || "Portfolio"} />
      <meta
        property="og:description"
        content={meta?.description || "Personal portfolio"}
      />
      <meta property="og:url" content={meta?.url} />
      <meta property="og:type" content={meta?.type || "website"} />
      <meta property="og:site_name" content={meta?.siteName} />
      <meta
        property="og:image"
        itemprop="image"
        content={meta?.image || "/my-image.png"}
      />
      <meta
        name="keywords"
        content={
          meta?.keywords ||
          "portfolio, personal, website, developer, software, engineer, react, node, express, mongodb, javascript, html, css, bootstrap, material-ui, ant-design, react-bootstrap, reactstrap, react-router, react-helmet-async, react-icons, react-toastify, react-modal, react-loader-spinner, react-lazy-load-image-component, react-image-gallery, react-image-magnifiers, react-image-crop, react-dropzone, react-datepicker, react-calendar, react-big-calendar, react-beautiful-dnd, react-animations, react-accordion, react-accessible-accordion"
        }
      />
    </Helmet>
  );
};

export default Meta;
