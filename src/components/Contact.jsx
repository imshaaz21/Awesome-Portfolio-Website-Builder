import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Input } from "semantic-ui-react";
import { ThemeContext } from "../ThemeContext";
import { renderColor } from "../utils/renderColor";
import FadeInSection from "../utils/FadeInSection";

const Contact = ({ contact }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { theme } = useContext(ThemeContext);

  const themeColors = renderColor(theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(nameError || messageError)) {
      setName("");
      setMessage("");
      e.target.reset();
      const subject = "Message from Portfolio Site";
      const recipient = contact?.email ?? "";
      const body = `Hi ${
        contact?.name ?? ""
      },\n\nI'm reaching out from your portfolio site regarding the following message:\nMessage:\n${message}.\n\nThanks and Regards,\n${name}.`;
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      return;
    }
  };

  const onNameChange = (e) => {
    const name = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (name === "" || !regex.test(name)) {
      setNameError(true);
      setName("");
    } else {
      setNameError(false);
      setName(name);
    }
  };

  const onMessageChange = (e) => {
    if (e.target.value === "") {
      setMessageError(true);
      setMessage("");
    } else {
      setMessageError(false);
      setMessage(e.target.value);
    }
  };

  return (
    <FadeInSection>
      <Container className={"mt-5"} id="contact">
        <h2
          className={
            theme === "dark"
              ? "ui horizontal divider header mt-5 mb-5 text-light"
              : "ui horizontal divider header mt-5 mb-5 text-dark"
          }
        >
          Contact Me
        </h2>
        <Row className="mx-auto justify-content-center">
          <Col lg={6} className="text-lg-left mb-5">
            <Form
              onSubmit={handleSubmit}
              inverted={theme === "dark" ? true : false}
            >
              <Form.Field
                id="form-input-control-name"
                control={Input}
                label={
                  <label style={{ color: themeColors.text.primary }}>
                    Name
                  </label>
                }
                placeholder="Eg: John Doe"
                required
                onChange={onNameChange}
                error={
                  nameError && {
                    content: "Please enter a valid name",
                    pointing: "below",
                  }
                }
              />
              <Form.TextArea
                id="form-textarea-control-opinion"
                label={
                  <label style={{ color: themeColors.text.primary }}>
                    Message
                  </label>
                }
                placeholder="Enter your message here"
                required
                onChange={onMessageChange}
                error={
                  messageError && {
                    content: "Please enter a valid message",
                    pointing: "below",
                  }
                }
              />
              <div
                className="d-flex"
                style={{ color: themeColors.text.primary }}
              >
                <Form.Button
                  disabled={name === "" || message === ""}
                  style={{
                    backgroundColor: themeColors.button.primary,
                    color: themeColors.text.primary,
                    ":hover": { backgroundColor: themeColors.button.hover },
                  }}
                >
                  Send <i className="telegram plane icon"></i>
                </Form.Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </FadeInSection>
  );
};

export default Contact;
