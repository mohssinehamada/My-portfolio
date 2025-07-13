/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mouhcine Hmada",
  title: "Hi all, I'm Mouhcine",
  subTitle: emoji(
    "Software Developer & AI Engineer with 3+ years of experience blending AI, Engineering, and Real-World Insight to Create Smart, Ethical, and Impactful Systems Driven by Curiosity, Built for Results."
  ),
  resumeLink: require("./assets/images/Mouhcine+hmada.pdf"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mohssinehamada",
  linkedin: "https://www.linkedin.com/in/mouhcinehma/",
  gmail: "Hmadamouhcine@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER & FULL-STACK DEVELOPER WITH 3+ YEARS OF EXPERIENCE",
  skills: [
    emoji(
      "⚡ Build autonomous AI agents and LLM-powered applications using Gemini API, OpenAI, and LangChain frameworks"
    ),
    emoji(
      "⚡ Develop machine learning models with 95%+ accuracy for satellite image analysis, trading prediction, and data processing"
    ),
    emoji(
      "⚡ Design and deploy scalable data pipelines processing 10K+ records/day with 99.9% uptime using NeonDB and cloud technologies"
    ),
    emoji(
      "⚡ Create full-stack CRM applications with secure authentication, real-time dashboards, and advanced analytics"
    ),
    emoji(
      "⚡ Implement RAG pipelines and prompt engineering solutions that improve data workflows by 45%"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-link" },
    { skillName: "OpenAI API", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Gemini API", fontAwesomeClassname: "fas fa-gem" },
    { skillName: "SQL/NoSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git/GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Deep Learning", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "NLP", fontAwesomeClassname: "fas fa-language" },
    { skillName: "Data Analytics", fontAwesomeClassname: "fas fa-chart-bar" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vistula University, Warsaw, Poland",
      logo: require("./assets/images/download (3).jpeg"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "2023 – 2025 (Expected)",
      desc: "Focused on AI systems, intelligent agents, and real-world problem-solving using LLMs and cloud technologies.",
      descBullets: [
        "Thesis: AI-Driven Early Detection of Misinformation in Digital Media",
        "Hands-on projects in NLP, anomaly detection, and LLM-based systems"
      ]
    },
    {
      schoolName: "ENSA Khouribga, Morocco",
      logo: require("./assets/images/download (20).png"),
      subHeader: "Master of Science in Artificial Intelligence (M1)",
      duration: "2021 – 2022",
      desc: "Explored cutting-edge AI techniques including deep learning, reinforcement learning, and knowledge representation.",
      descBullets: [
        "Worked on predictive modeling and intelligent decision-making systems",
        "Built foundational knowledge in machine learning and big data processing"
      ]
    },
    {
      schoolName: "ENSA Khouribga, Morocco",
      logo: require("./assets/images/download (20).png"),
      subHeader: "Bachelor in Artificial Intelligence and Big Data",
      duration: "2018 – 2021",
      desc: "Developed strong foundations in software engineering, data structures, and scalable data systems.",
      descBullets: [
        "Built early prototypes for AI-powered dashboards and smart apps",
        "Participated in multiple student-led innovation projects"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI & Software Engineer",
      company: "GLP Software",
      companylogo: require("./assets/images/glpsoftware_logo.jpeg"),
      date: "Feb 2025 – Present",
      desc: "Delivering AI-integrated software solutions for startups and entrepreneurs with exceptional client satisfaction.",
      descBullets: [
        "Delivered 10+ AI-integrated software solutions with 95%+ satisfaction rate and 60% client return rate",
        "Built and deployed ML models including trading predictors (87% accuracy) and developed 3 CRM platforms",
        "Engineered LangChain-based RAG pipelines using OpenAI & Pinecone, improving data workflows by 45%"
      ]
    },
    {
      role: "AI & Software Engineer (LLM Agent Fellow)",
      company: "Fellowship.AI",
      companylogo: require("./assets/images/fellowship_ai_logo.jpeg"),
      date: "Mar 2025 – Jun 2025",
      desc: "Developed autonomous web agents and scalable data pipelines using cutting-edge LLM technologies.",
      descBullets: [
        "Developed autonomous web agent using Gemini API and OpenAI, scraping 50+ sources with 95% accuracy",
        "Engineered modular data pipeline with NeonDB, ingesting 10K+ records/day with 99.9% uptime",
        "Gained expertise in LLM orchestration, prompt engineering, and cloud-based scalability"
      ]
    },
    {
      role: "AI & Full-Stack Developer",
      company: "Freelance",
      companylogo: require("./assets/images/images.jpeg"),
      date: "Jul 2023 – Jan 2025",
      desc: "Delivered custom software solutions to various clients, from startups to individual entrepreneurs.",
      descBullets: [
        "Designed and developed CRM applications with user authentication and data analytics dashboards",
        "Built and deployed machine learning models including predictive models for stock trading",
        "Used Python libraries such as Scikit-learn, TensorFlow, and PyTorch for ML implementations"
      ]
    },
    {
      role: "Machine Learning Researcher",
      company: "Fellowship.AI",
      companylogo: require("./assets/images/fellowship_ai_logo.jpeg"),
      date: "Jan 2023 – Jun 2023",
      desc: "Conducted advanced research in deep learning and computer vision for satellite image analysis.",
      descBullets: [
        "Trained CNN and Siamese networks on 10,000+ satellite images, achieving 96% accuracy in land-use change detection",
        "Developed autonomous AI agent for domain-specific web scraping using Gemini API",
        "Designed end-to-end pipeline for automated data retrieval and storage in Neon PostgreSQL (15,000+ records/week)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "KEY AI & SOFTWARE PROJECTS FROM MY PROFESSIONAL EXPERIENCE",
  projects: [
    {
      image: require("./assets/images/googleAssistantLogo.webp"),
      projectName: "Autonomous AI Web Agent",
      projectDesc: "Developed autonomous web agent using Gemini API and OpenAI, scraping 50+ sources with 95% accuracy, cutting manual research by 80%.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/mohssinehamada"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Satellite Image Analysis System",
      projectDesc: "Trained CNN and Siamese networks on 10,000+ satellite images, achieving 96% accuracy in land-use change detection and disaster damage assessment.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/mohssinehamada"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Trading Prediction Models",
      projectDesc: "Built and deployed ML models for stock trading prediction with 87% accuracy using Python, TensorFlow, and PyTorch.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/mohssinehamada"
        }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "LangChain RAG Pipeline",
      projectDesc: "Engineered LangChain-based RAG pipelines using OpenAI & Pinecone, automating document insights over 10K+ records/week, improving workflows by 45%.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/mohssinehamada"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI & Machine Learning Specialist",
      subtitle:
        "Specialized in developing AI systems, LLMs, and machine learning solutions for real-world applications.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AI Achievement",
      footerLink: [
        {
          name: "Portfolio",
          url: "https://github.com/mohssinehamada"
        }
      ]
    },
    {
      title: "Full-Stack Developer",
      subtitle:
        "Proficient in building end-to-end web applications using modern frameworks and cloud technologies.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Full-Stack Development",
      footerLink: [
        {
          name: "View Projects",
          url: "https://github.com/mohssinehamada"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/mohssinehamada",
      title: "Building AI Systems with LLMs",
      description:
        "Exploring the latest techniques in Large Language Models and their applications in real-world scenarios."
    },
    {
      url: "https://github.com/mohssinehamada",
      title: "Full-Stack Development Best Practices",
      description:
        "Sharing insights on building scalable web applications with modern frameworks and cloud technologies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE ABOUT AI AND DEVELOPMENT 🚀"
  ),

  talks: [
    {
      title: "AI in Modern Web Development",
      subtitle: "Tech Meetup Warsaw 2024",
      slides_url: "https://github.com/mohssinehamada",
      event_url: "https://github.com/mohssinehamada"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT AI AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Mouhcine-Hmada-AI-Engineer-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+48797292460",
  email_address: "Hmadamouhcine@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "mohssinehamada", //Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
