

// import figmaicon from "../../assets/icons/figmaicon.png";
import python from "../../assets/icons/python.svg";
import r from "../../assets/icons/r.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import react from "../../assets/icons/react.svg";
import frame from "../../assets/icons/frame.svg";
import three from "../../assets/icons/three.svg";
import vite from "../../assets/icons/vite.svg"; 
import javascripticon from "../../assets/icons/javascripticon.svg";
import powerbi from "../../assets/icons/powerbi.svg";
import tableauicon from "../../assets/icons/tableauicon.svg";
import bigdata from "../../assets/icons/bigdata.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import ml from "../../assets/icons/ml.svg";
import excelicon from "../../assets/icons/excelicon.svg";
import matplotlib from "../../assets/icons/matplotlib.svg";
import mysql from "../../assets/icons/mysql.svg";
import scikitlearn from "../../assets/icons/scikitlearn.svg";
import panda from "../../assets/icons/panda.svg";
import numpy from "../../assets/icons/numpy.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg"; 
// import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
// import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import next from "../../assets/icons/next.svg";
import express from "../../assets/icons/express.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, Ateeq Rehman Khan",
    en: "Hi, Ateeq Rehman Khan",
  },
  subtitle: "Machine Learning Engineer",
  description: {
    // de: "I leverage Python, SQL, scikit-learn, and Tableau to extract insights, build predictive models, and communicate data-driven stories. Whether it's structured or unstructured data, I’m passionate about solving real-world problems with code and creativity",
    en: "ML models should solve problems, not just pass benchmarks.” That’s the mindset I bring to every project — blending data intuition, mathematical insight, and production-ready engineering",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        // de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        // de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Insightly – Customer Churn Prediction System",
    // description:
      // "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A complete developer p Features include user authentication, admin controls, and real-time MongoDB-backed content management",
    technologies: [
      { name: "Python", icon: python },
      { name: "R", icon: r },
      { name: "JavaScript", icon: javascripticon },
      { name: "Power Bi", icon: powerbi },
      { name: "SQL", icon: mysql },
      { name: "pandas", icon: panda },
      { name: "Matplotlib", icon: matplotlib },
      { name: "SciKit-Learn", icon: scikitlearn },
      { name: "ML", icon: ml },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "SalesPulse – Predictive Sales Analytics Dashboard",
    // description:
      // "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A complete developer p Features include user authentication, admin controls, and real-time MongoDB-backed content management.",
    technologies: [
      { name: "Python", icon: python },
      { name: "R", icon: r },
      { name: "Power BI", icon: powerbi },
      { name: "Tableau", icon: tableauicon },
      { name: "SQL", icon: mysql },
      { name: "Pandas", icon: panda },
      { name: "Matplotlib", icon: matplotlib },
      { name: "Scikit-Learn", icon: scikitlearn },
      { name: "Flask", icon: r },
      { name: "Node.js", icon: nodejsicon },
      { name: "Web Scrapping", icon: python },
      { name: "ML", icon: ml },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "SkillHub – Full-Stack Developer Platform",
    // description:
      // "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A complete developer p Features include user authentication, admin controls, and real-time MongoDB-backed content management",
    technologies: [
      { name: "Html", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: react },
      { name: "tailwind css", icon: tailwind },
      { name: "Framer Motion", icon: frame },
      { name: "Mysql", icon: mysql },
      { name: "Express", icon: express },
      { name: "Node.js", icon: nodejsicon },
      { name: "next.js", icon: next },
      { name: "Three.js", icon: three },
      { name: "vite", icon: vite },
    ],
    image: html,
    deploymenturl: "https://github.com/ateeqkhan9891",
    githuburl: "https://github.com/ateeqkhan9891",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    // de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Data Science",
    skills: [
      {
        title: "Python",
        hash: "#python",
        icon: python,
        color: "#F1662A",
      },
      {
        title: "R",
        hash: "#CSS",
        icon: r,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "Power BI",
        hash: "#TypeScript", 
        icon: powerbi,
        color: "#007ACC",
      },
      {
        title: "Tableau",
        hash: "#React",
        icon: tableauicon,
        color: "#61DAFB",
      },
      {
        title: "Big Data",
        hash: "#Next.js",
        icon: bigdata,
        color: "#000000",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "ML",
        hash: "#Tailwind",
        icon: ml,
        color: "#38B2AC",
      },
      {
        title: "Matplotlib",
        hash: "#MongoDB",
        icon: matplotlib,
        color: "#449C45",
      },
      {
        title: "Sikit-Learn",
        hash: "#Vue.js",
        icon: scikitlearn,
        color: "#4FC08D",
      },
      {
        title: "Pandas",
        hash: "#Express",
        icon: panda,
        color: "#000000",
      },
      {
        title: "Numpy",
        hash: "#SASS/SCSS",
        icon: numpy,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Data Visualization ",
    skills: [
      { title: "Power BI", hash: "#Figma", icon: powerbi, color: "#F24E1E" },
      {
        title: "Tableau ",
        hash: "#Adobe XD",
        icon: tableauicon,
        color: "#FF61F6",
      },
      { title: "Excel  ", hash: "#Canva", icon: excelicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "Wordpress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "#",
  text: "myami@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "#",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "#",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "myami@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    // de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "myami wazir",
  },
  {
    // de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"Data never lies... unless you forget to clean it."`,
  },
] as const;

export const aboutMeData = {
  // title: "Über mich",
  title_EN: "About me",
  // description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  
  paragraphs_EN: [
    {
      title: "Emotion in Every Line",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    // de: "Kontakt",
    en: "Contact",
  },
  description: {
    // de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        // de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        // de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        // de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        // de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        // de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        // de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      // de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      // de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      // de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Ateeq Rehman may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      // de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    // de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    // de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    // de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    // de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
