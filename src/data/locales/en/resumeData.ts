// src/locales/en/translation.ts
import type { TranslationContent } from '../types';

const translationEN: TranslationContent = {
  uiSandboxTitles: {
    aboutMe: 'About Me',
    howIWork: 'How I Work',
    workStatus: 'Working status',
    // calendar: "Date Selection",
    // whereIAm: "Where I Am",
  },
  logoTitle: 'Pavel Isaev',
  hero: {
    mainTitle: 'At the Forefront of Web Development',
    mainSubTitle:
      'My mission is to transform ideas into seamless digital products, utilizing the latest tools and methodologies to ensure exceptional user experience and efficiency in every project.',
    buttonText: 'Write to telegram',
  },
  footer: {
    copyright: 'All rights reserved.',
  },
  contact: {
    email: 'your.email@example.com',
    phone: '+7 9XX XXX XX XX',
    location: 'Your City, Your Country',
  },
  aboutMe: {
    title: 'About Me',
    name: 'Pavel Isaev',
    position: 'UI/UX Designer and Frontend Developer',
    rotatingTexts: [
      'I love creating interactive and beautiful user interfaces.',
      'Always striving for clean code and new technologies.',
      'This block demonstrates my skills in React state and effects!',
      'Open to new opportunities and interesting projects.',
    ],
    skillsChips: ['Figma (UI/UX)', 'HTML/CSS/JS', 'React/MUI'],
  },
  common: {
    readMore: 'Read more',
    readLess: 'Show less',
  },
  timeline: {
    items: [
      {
        title: 'Receiving the Order!',
        description:
          "More than just joy, it's a call to immediate responsibility. My first step is a deep dive into the project's essence through comprehensive information gathering from the client. I ask precise questions, identify key objectives, expectations, and potential challenges to ensure a complete and accurate understanding for execution.",
      },
      {
        title: 'Thinking! Planning...',
        description:
          'With a clearly formulated goal, I move to strategic thinking. This stage involves the thorough decomposition of the project into manageable subtasks and the definition of realistic deadlines. I develop a detailed plan that minimizes risks, optimizes resources, and ensures effective progress towards the intended goal.',
      },
      {
        title: 'Prototyping & Design',
        description:
          "In the prototyping and design phase, I transform ideas into visual and functional solutions. I create intuitive and aesthetically pleasing user interfaces, focused on maximum convenience and efficiency. My goal isn't just a beautiful picture, but a well-thought-out architecture that ensures a flawless user experience and full alignment with business objectives.",
      },
      {
        title: 'Thoughtfully Writing Code!',
        description:
          "In the development process, I focus on writing clean, efficient, and maintainable code. Using modern standards and best practices, I guarantee high performance, security, and scalability for your solutions. Every line of code written is the result of thoughtful analysis and a pursuit of perfection, ensuring the project's longevity and flexibility.",
      },
    ],
  },
  WorkStatusDescription: {
    title: 'Open to new opportunities and focused on long-term collaboration.',
  },
  photoGallery: {
    title: 'Guess from the photo where I live',
  },
  skills: {
    title: 'Skills',
    list: [
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'TypeScript', level: 'Beginner' },
      { name: 'React', level: 'Beginner' },
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'Git', level: 'Intermediate' },
      { name: 'Material UI', level: 'Beginner' },
      { name: 'Vite', level: 'Beginner' },
    ],
  },
  experience: {
    title: 'Work Experience',
    positions: [
      {
        title: 'Position',
        company: 'Company Name (if any)',
        duration: 'March 2023 - Present',
        responsibilities: [
          'Developing and maintaining user interfaces using React.',
          'Interacting with APIs for data retrieval and display.',
          'Writing clean and maintainable code.',
        ],
        technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
  },
  education: {
    title: 'Education',
    degrees: [
      {
        degree: 'Your Degree/Courses',
        institution: 'Educational Institution/Platform Name',
        duration: 'September 2020 - June 2024',
        details:
          'Key courses: Web Development, Algorithms and Data Structures.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    list: [
      {
        name: 'Sample Project (this resume site)',
        description:
          'A simple resume website developed to demonstrate skills using React, TypeScript, and Material UI. Deployed on GitHub Pages.',
        technologies: [
          'React',
          'TypeScript',
          'Material UI',
          'Vite',
          'GitHub Pages',
        ],
        githubLink: 'https://github.com/nishkalanka/nishkalanka.github.io',
      },
    ],
  },
};

export default translationEN;
