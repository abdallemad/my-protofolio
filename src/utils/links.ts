import webAppIcon from "/public/images/svgs/carbon_application-web.svg";
import serverIcon from "/public/images/svgs/server_icon.svg";
import userInteractive from "/public/images/svgs/user_Interactive.svg";
import arakilImage from "../../public/images/arakil-alkil.png";
import caseCobraImage from "../../public/images/case-cobra.png";
import comfyStoreImage from "../../public/images/comfy-store.png";
import jobifyAppImage from "../../public/images/jobify-app.png";
import pingPandaImage from "../../public/images/ping-panda.png";

export const links = [
  {
    label: "about",
    href: "/about",
  },
  {
    label: "work",
    href: "/work",
  },
  {
    label: "services",
    href: "/services",
  },
  {
    label: "contact",
    href: "/contact",
  },
];
export const projects = [
  {
    label: "ARAKEIL ALKhil",
    primaryColor: "#ef9995",
    image: arakilImage,
    index: 0,
    featured:true,
  },
  {
    label: "PING PANDA",
    primaryColor: "#3659b1",
    image: pingPandaImage,
    index: 1,
    featured:true,
  },
  {
    label: "CASE COBRA",
    primaryColor: "#16a34a",
    image: caseCobraImage,
    index: 2,
    featured:true,
  },
  {
    label: "COMFY STORE",
    primaryColor: "#3b82f6",
    image: comfyStoreImage,
    index: 3,
    featured:true,
  },
  {
    label: "JOBIFY APP",
    primaryColor: "#313131",
    image: jobifyAppImage,
    index: 4,
    featured:true
  },
];
export const services = [
  {
    label: "Custom Web Application Development",
    description:
      "Struggling with outdated or inefficient websites? I build scalable and performance-driven web applications tailored to your business needs using the MERN stack",
    icon: webAppIcon,
    keyFeatures: [
      "Scalable architecture to grow with your business",
      "Secure and efficient backend solutions using Node.js.",
      "Fully customized designs tailored to your brand.",
    ],
  },
  {
    label: "API Development & Integration",
    description:
      "Need seamless data exchange between platforms? I design and implement secure APIs that integrate your app with third-party services effortlessly.",
    icon: serverIcon,
    keyFeatures: [
      "Seamless integration with third-party platforms (e.g., Stripe, PayPal, or social media).",
      "Custom-built RESTful APIs or GraphQL endpoints.",
      "Secure authentication and data handling for robust performance.",
    ],
  },
  {
    label: "Responsive & Interactive UI Design",
    description:
      "Losing customers due to poor mobile experiences? I craft responsive, interactive, and user-centric interfaces that work flawlessly on all devices.",
    icon: userInteractive,
    keyFeatures: [
      "Mobile-first design for optimal user experience on all devices",
      "Smooth animations and transitions for engaging user interactions",
      "Intuitive layouts that enhance usability and accessibility",
    ],
  },
];
export const socialLinks = [
  {
    label: "github",
    href: "https://github.com/abdallemad",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/abdalla-emad-618b8b317/",
  },
  {
    label: "twitter",
    href: "https://x.com/AbdallaEma97034",
  },
  {
    label: "instagram",
    href: "https://www.instagram.com/abdallah_emad901/?__pwa=1",
  },
  {
    label: "whatsapp",
    href: "https://wa.me/201557646408",
  },
];
