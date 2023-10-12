import {
  mobile,
  backend,
  creator,
  web,
  redux,
  tailwind,
  Digital,
  Graphic_design,
  carrent,
  jobit,
  tripguide,
  Walmart,
  Ebay,
  Shopify,
  amz,
  Benilli,
  Brooks,
  Coworking,
  HealthCare,
  HomeService,
  Neicy,
  MorningSideLogo, 
  Food,


} from "../assets";



export const navLinks = [
  {
    key: "portfolio",
    title: "Portfolio",
    link:'/portfolio'
  },
  {
    key: "about",
    title: "About",
    link:"/about"
  },
  {
    key: "services",
    title: "Services",
    link:"/services"
  },
  {
    key: "contact",
    title: "Contact",
    link:"/contact"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Walmart WFS Wholesale",
    icon: Walmart,
  },
  {
    name: "Walmart PL",
    icon: Walmart,
  },
  {
    name: "Walmart Brand Building",
    icon: Walmart,
  },
  {
    name: "Amazon Wholesale",
    icon: amz,
  },
  {
    name: "Amazon PL",
    icon: amz,
  },
  {
    name: "Shopify Stores",
    icon: Shopify,
  },
  {
    name: "Graphic Designing",
    icon: Graphic_design,
  },
  {
    name: "Digital Marketing",
    icon: Digital,
  },
  {
    name: "Web Development",
    icon: redux,
  },
  {
    name: "App Development",
    icon: tailwind,
  },

];

const experiences = [ 
  {
    title: "Walmar WFS Wholesale",
    company_name: "Amazon",
    icon: Walmart,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Walmart PL",
    company_name: "Walmart",
    icon: Walmart,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Walmart Brand Building",
    company_name: "Walmart",
    icon: Walmart,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Amazon Wholesale",
    company_name: "Amazon",
    icon: amz,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Amazon PL",
    company_name: "Amazon",
    icon: amz,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Shopify Store",
    company_name: "Shopify",
    icon: Shopify,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Graphic Designing",
    company_name: "Graphics",
    icon: Graphic_design,
    iconBg: "#ffffff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
  {
    title: "Digital Marketing",
    company_name: "Digital Marketing",
    icon: Digital,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     
    ],
  },
  {
    title: "Web Development",
    company_name: "Shopify",
    icon: Shopify,
    iconBg: "#ffffff",
    points: [
    "Custom web application design and development",
    "Database design and integration",
    "Front-end and back-end development",
    "User experience (UX) design",
    "Testing, debugging, and quality assurance",
    "Ongoing maintenance and updates",
    ],
  },
  {
    title: "App Development",
    company_name: "Shopify",
    icon: Shopify,
    iconBg: "#ffffff",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];



const shuffle =[ 
  {
    img: Benilli,
  },
  {
    img:Brooks,
  },
  {
    img: Coworking,
  },
  {
    img: HealthCare,
  },
  {
    img:HomeService,
  },
  {
    img: Neicy,
  },
  {
    img: MorningSideLogo, 
 
  },
  {
    img:   Food,
  },
 
]

export { services, technologies, experiences, testimonials, projects, shuffle };
