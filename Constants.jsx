import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const pages = [
  { text: "Home", link: "/",key:1 },
  { text: "Browse Jobs", link: "browsejobs",key:2 },
  { text: "Contact", link: "contacts",key:3 },
];

export const searches = [
  "Design & Creative",
  "Marketing",
  "Administration",
  "Teaching",
  "Education",
  "Engineering",
  "Software & Web",
  "Telemarketing",
];

function IconStyles(bg) {
  return { fontSize: 20, color: bg ? "white" : "grey" };
}

export const SOCIAL_LINKS = [
  {
    Icon: ({ bg }) => <TwitterIcon sx={IconStyles(bg)} />,
    link: "twitter.com/zidioDev",
    key: 2,
  },
  {
    Icon: ({ bg }) => <InstagramIcon sx={IconStyles(bg)} />,
    link: "instagram.com/zidiodev",
    key: 3,
  },
  {
    Icon: ({ bg }) => <YouTubeIcon sx={IconStyles(bg)} />,
    link: "https://www.youtube.com/@zidioDevelopment",
    key: 4,
  },
  {
    Icon: ({ bg }) => <LinkedInIcon sx={IconStyles(bg)} />,
    link: "https://www.linkedin.com/company/zidio-development/posts/?feedView=all",
    key: 5,
  },
];

export const GREEN_COLOR = "#00D363";
export const GREY_COLOR = "#f5f7fa";
export const LIGHT_BLUE_COLOR = "#e6f3ff";
export const LIGHT_GREEN_COLOR = "#00d36333";
export const FOOTER_BG = "#001D38";

export const CATEGORIES = [
  { category: "Design & Creative", seats: 28 },
  { category: "Marketing", seats: 25 },
  { category: "Web Development", seats: 18 },
  { category: "Data Science", seats: 22 },
  { category: "Human Resources", seats: 14 },
  { category: "IT Support", seats: 26 },
  { category: "Sales", seats: 19 },
  { category: "Customer Support", seats: 13 },
  { category: "Content Writing", seats: 17 },
  { category: "Operations", seats: 21 },
  { category: "Engineering", seats: 23 },
  { category: "Legal", seats: 16 },
];

export const JOBS = [
  {
    name: "Software Engineer",
    key: 1,
    location: "Part-time",
    country: "Pakistan",
    img: (
      <img
        src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/1.svg"
        alt="Loading..."
      />
    ),
    description:
      "As a Software Engineer, you will develop, test, and maintain software applications that drive our core services. You’ll work closely with a dynamic team, translating business needs into technical solutions and optimizing our system for performance.",
    responsibility: [
      "Design, develop, and test software applications.",
      "Collaborate with cross-functional teams to define and implement solutions.",
      "Maintain code integrity and ensure it meets performance standards.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "2+ years of experience in software development using JavaScript, Python, or similar languages.",
      "Strong problem-solving skills and ability to work in an agile environment.",
    ],
    benefits:
      "Health insurance, flexible working hours, remote work options, and professional development opportunities.",
    salary: "$60,000 - $80,000 per year",
    vacancy: 3,
    publishedOn: "2024-09-01",
  },
  {
    name: "UI/UX Designer",
    key: 2,
    location: "Full-time",
    country: "India",
    img: (
      <img
        src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/2.svg"
        alt="Loading..."
      />
    ),
    description:
      "We are seeking a creative UI/UX Designer who will be responsible for designing seamless and engaging user interfaces for web and mobile applications. You will collaborate with developers and product managers to create designs that enhance user experience.",
    responsibility: [
      "Create intuitive and aesthetically pleasing user interfaces.",
      "Collaborate with developers and product managers to implement designs.",
      "Conduct user research and usability testing to improve design.",
    ],
    qualifications: [
      "Bachelor's degree in Design, Fine Arts, or related field.",
      "3+ years of experience in UI/UX design with a strong portfolio.",
      "Proficiency in design tools like Sketch, Figma, and Adobe XD.",
    ],
    benefits:
      "Comprehensive health coverage, annual bonus, stock options, and a creative work environment.",
    salary: "$70,000 - $90,000 per year",
    vacancy: 2,
    publishedOn: "2024-08-15",
  },
  {
    name: "Data Scientist",
    key: 3,
    location: "Remote",
    country: "China",
    img: (
      <img
        src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/3.svg"
        alt="Loading..."
      />
    ),
    description:
      "As a Data Scientist, you will analyze large datasets to uncover trends and insights that will influence business decisions. You will work closely with product teams to implement machine learning models and predictive analytics solutions.",
    responsibility: [
      "Analyze large datasets to uncover business insights.",
      "Develop and implement machine learning models.",
      "Collaborate with product teams to improve data-driven decision making.",
    ],
    qualifications: [
      "Master's degree in Data Science, Statistics, or a related field.",
      "Experience with Python, R, and SQL for data analysis.",
      "Proficiency in machine learning frameworks such as TensorFlow or PyTorch.",
    ],
    benefits:
      "Work from home, paid time off, wellness programs, and opportunities for continuing education.",
    salary: "$90,000 - $120,000 per year",
    vacancy: 4,
    publishedOn: "2024-09-03",
  },
  {
    name: "Digital Marketing Manager",
    key: 4,
    location: "Full-time",
    country: "Australia",
    img: (
      <img
        src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/4.svg"
        alt="Loading..."
      />
    ),
    description:
      "The Digital Marketing Manager will be responsible for developing and executing digital marketing strategies across various online platforms. You will work with a cross-functional team to drive traffic, enhance engagement, and grow our brand’s presence.",
    responsibility: [
      "Develop and implement comprehensive digital marketing campaigns.",
      "Monitor and analyze website traffic, SEO, and performance metrics.",
      "Collaborate with content creators and designers to create engaging marketing materials.",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Business, or a related field.",
      "5+ years of experience in digital marketing with proven success in SEO and SEM strategies.",
      "Excellent understanding of social media platforms, email marketing, and online advertising.",
    ],
    benefits:
      "Flexible working hours, health and dental insurance, team-building events, and performance-based bonuses.",
    salary: "£45,000 - £60,000 per year",
    vacancy: 1,
    publishedOn: "2024-08-25",
  },
  {
    name: "Product Manager",
    key: 5,
    location: "Full-time",
    country: "Spain",
    img: (
      <img
        src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/5.svg"
        alt="Loading..."
      />
    ),
    description:
      "We are looking for an experienced Product Manager to lead the development and launch of innovative products. You will work with stakeholders to gather requirements, prioritize tasks, and ensure successful delivery of high-quality products.",
    responsibility: [
      "Gather and prioritize product requirements based on market trends and user needs.",
      "Lead cross-functional teams to ensure timely product delivery.",
      "Monitor product performance and iterate based on user feedback.",
    ],
    qualifications: [
      "Bachelor's degree in Business, Engineering, or related field.",
      "3+ years of experience as a Product Manager.",
      "Strong leadership and communication skills.",
    ],
    benefits:
      "Competitive salary, health benefits, annual travel stipend, and opportunities for career growth.",
    salary: "€60,000 - €80,000 per year",
    vacancy: 2,
    publishedOn: "2024-09-02",
  },
  {
    name: "DevOps Engineer",
    key: 6,
    location: "Remote",
    country: "America",
    img: (
      <img
        src="https://preview.colorlib.com/theme/jobboard2/img/svg_icon/6.svg"
        alt="Loading..."
      />
    ),
    description:
      "The DevOps Engineer will automate and optimize our software development process, ensuring efficient CI/CD pipelines and reliable deployment workflows. You will collaborate with developers to improve system scalability, performance, and security.",
    responsibility: [
      "Build and maintain CI/CD pipelines for seamless deployments.",
      "Collaborate with developers to optimize system performance.",
      "Implement monitoring and security best practices across infrastructure.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "3+ years of experience in DevOps engineering.",
      "Proficiency with AWS, Docker, Kubernetes, and CI/CD tools.",
    ],
    benefits:
      "Remote work flexibility, health and wellness programs, stock options, and annual performance bonuses.",
    salary: "$80,000 - $100,000 per year",
    vacancy: 3,
    publishedOn: "2024-08-30",
  },
];

export const COUNTRIES = [
  "Afghanistan",
  "America",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
