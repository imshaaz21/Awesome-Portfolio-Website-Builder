# Awesome Portfolio Website 

Build your own portfolio website

![Portfolio](https://img.shields.io/badge/Build-Awesome%20Portfolios-blue)

---

Welcome to the Awesome Portfolio Website Builder! This project aims to help you effortlessly create and deploy stunning portfolio websites using Vite and JSON configuration, all without needing to write a single line of code. Whether you're a designer, developer, or both, this tool will streamline the process, allowing you to focus on showcasing your work.

## Features

- **Simple Configuration**: Customize your portfolio by adding values in the `JSON` configuration file.
- **Fast Build**: Utilizes Vite for quick and efficient building.
- **Easy Deployment**: Easily deploy your portfolio to GitHub Pages.
- **No Code**: Build your stunning portfolio without writing a single line of code.

## Getting Started

During development, you can set up a local development environment and then deploy to a GitHub Pages repository named `username.github.io`.

1. Clone this repository:

   ```bash
   git clone https://github.com/imshaaz21/Awesome-Portfolio-Website-Builder.git
   ```

2. ```bash
   cd Awesome-Portfolio-Website-Builder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Customize your portfolio by editing the `portfolio.json` file with your information.
5. Start the development server:
   ```bash
   npm run dev
   ```
6. View your portfolio locally at `http://localhost:5173`.

**NOTE**: Make sure to place the images and PDFs in the `public` folder.

## Demo

[🌐 View Demo](https://imshaaz21.github.io/)

## Sample Portfolio JSON

```json
{
  "meta": {
    "description": "Jake Lockley's personal portfolio",
    "title": "Jake Lockley | Portfolio",
    "keywords": "YJake Lockley, Jake Lockley Portfolio, Jake Lockley Resume, Jake Lockley Projects",
    "siteName": "Jake Lockley",
    "url": "https://jakelockley.github.io",
    "image": "my-image.webp",
    "type": "website"
  },
  "about": {
    "name": "Jake Lockley",
    "image": "my-image.webp",
    "description": "Duummy text about yourself. You can also include your interests",
    "cv": "/dummy.pdf",
    "socials": {
      "github": "https://github.com/jakelockley",
      "linkedin": "https://www.linkedin.com/in/jakelockley",
      "email": "EMAIL"
    }
  },
  "experiences": [
    {
      "position": "SAMPLE POSITION 1",
      "workplace": "SAMPLE WORKPLACE 1",
      "date": "Jan 2023 - Jun 2023",
      "descriptions": [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ]
    }
  ],
  "educations": [
    {
      "field": "SAMPLE DEGREE",
      "place": "SAMPLE UNIVERSITY",
      "date": "2020 - 2024",
      "descriptions": ["Description 1"]
    }
  ],
  "projects": [
    {
      "title": "Sample Project 1",
      "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      "image": "fff.png",
      "link": "https://github.com/jakelockley/project1"
    }
  ],
  "contact": {
    "email": "jakelockley@email.com",
    "name": "Jake Lockley"
  }
}
```
This JSON structure can be used to customize your portfolio. Replace placeholders like `YOUR_NAME`, `GITHUB_USERNAM`E, `GITHUB_URL`, `LINKEDIN_URL`, `EMAIL`, and `GITHUB_REPO_LINK` with your actual information and URLs. 


If you have any further adjustments or questions, feel free to let me know!

[✉️ Email Me]("mainto:shanaaz.19@cse.mrt.ac.lk)

## Contributing

We welcome contributions from everyone! Whether you're fixing a bug, improving the documentation, or adding new features, feel free to submit a pull request.

Before contributing, please read our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
