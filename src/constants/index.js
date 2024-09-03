import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    spring,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    docker,
    starbucks,
    carrent,
    jobit,
    tripguide,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Machine-Learning Enthusiast",
      icon: backend,
    },
    {
      title: "Perpetual Learner",
      icon: creator,
    },
  ];

  const mobileTech = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring boot",
      icon: spring,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ]
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring boot",
      icon: spring,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer 1",
      company_name: "Mr.Cooper Groups, Chennai",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jul 2023 - Present",
      points: [
        "Played an integral role in the development efforts as a Software Engineer at Mr. Cooper, contributing to Pyro, an advanced document understanding platform revolutionizing home loan processing.",
        "Utilized an expert command of React, Java, and Python within the tech stack to architect, develop, and maintain Pyro, resulting in the efficient functioning of the product",
        "Decreased human interaction in servicing home loans by 61% through enhancements by increasing the accuracy of the document understanding platform, through feedback loop",
        "Contributed to the continuous improvement of the product through proactive bug fixing, performance optimization, and feature enhancements",
      ],
    },
    {
      title: "Intern",
      company_name: "Mr.Cooper Groups, Chennai",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jul 2023",
      points: [
        "Spearheaded a Proof-of-Concept project focusing on the workings of Next.js. Developed a real-time chat application using Next.js, Express, Redis, and Google SSO technology stack, demonstrating proficiency in full-stack development. ",
        "Acquired a comprehensive understanding of the agile workflow methodology through active participation and collaboration during the internship period. ",
        "Demonstrated adaptability and a rapid learning curve by successfully applying newly acquired knowledge and technologies to deliver innovative solutions within project timelines ",
      ],
    }
  ];


  const projects = [
    {
      name: "Chat Application",
      description:
        "A real time messaging application with enhanched security features that lets users to add, accept/deny and message friends instantly using nextjs",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "redis",
          color: "green-text-gradient",
        },
        {
          name: "googleAuth",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/anandhalakshmii/chatAppNext",
    },
    {
      name: "Fertilizer Recommender",
      description:
        "A web application for image classification of diseased leaves to suggest an appropriate fertilizer that treats the disease, using CNN algorithm.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "IBMCloud",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/anandhalakshmii/fertilizer-Recommendation-and-Disease-Classification",
    },
    {
      name: " Yelp Camp ",
      description:
        "Yelp Camp is a web application that allows user to add, rate and review different campgrounds. so that it is a well-informed camping trip for other users.",
      tags: [
        {
          name: "mongo",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/anandhalakshmii/yelpCamp",
    },
  ];
  
  export { services, technologies, mobileTech, experiences, projects };