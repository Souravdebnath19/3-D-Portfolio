import { Link, useHref } from "react-router-dom";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
import { div } from "three/examples/jsm/nodes/nodes.js";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
  //  {
  //   id:"Resume",
  //   title:"Resume",
  //  },
 
    {
      id: "contact",
      title: "Contact",
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
      title: "Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "API",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: figma,
    },
    {
      name: "vs-code",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Pabia Cherra Coloney High School",
      company_name: "10th Standard",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2007 - June 2017",
      points: [
        "My First School Was Pabia Cherra Coloney High School Located in Kumarghat,Unakoti Tripura.",
        "From There i have done my primary Schooling.",
        "I have done my Matriculation Exam Under TBSE Board Where I Scored 82% Marks.",
        
      ],
    },
    {
      title: "Pabia Cherra Class XII School",
      company_name: "12th Board",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2017 - May 2019",
      points: [
        "The Name Of My Second School Was Pabia Cherra Class XII School Loacted in Kumarghat,Unakoti Tripura.",
        "From There i have done my 12th Standards under TBSE Board Majoring in Science Stream and Scored 76.8% Marks.",
        "After That i Have Studied For Our State Entrance Exam For Engineering Colleges And Cleared the Entrance Exam.",
        
      ],
    },
    {
      title: "Tripura Institute Of Technology",
      company_name: "Bachelors Of Technology",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2019 - July 2023",
      points: [
        "After Clearing the Entrance Exam I Got Admission In TIT Agartala.",
        "From There i Have Done My Bachelors in Technology Specilazation In Electronics & Communication Engineering.",
        "Through Out My College Year I Have Done an Internship From Ardent Computech LTD. Kolkata In Core Java.",
        "Also I have done Internship from Udemy in Full Stack Web Development and done Various Projects."
      ],
    },

  ];
  

  
  const projects = [
    {
      name: "Car Rent",
      description:
        "J-Query Based  platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Jquery",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Souravdebnath19/Car-Rental-System",
    },
    {
      name: "HandWritten Digit Recognation",
      description:
        "Trained & Tested an Algorithm Using MNIST Dataset to identify Handwritten Digit & Chracter Using Supervised Machine Learning.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Souravdebnath19/Handwritten-Digit-Recognation",
    },
    {
      name: "Google Drive Clone",
      description:
        "Developed fully responsive end to end Google Drive Clone Using Html css Javascript to showcase the UI of The Google Drive.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Css3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://codesandbox.io/s/github/Souravdebnath19/Google-DriveClone",
    },
    
  ];
  
  export { services, technologies, experiences,  projects };