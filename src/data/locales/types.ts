// src/locales/types.ts

export interface TranslationContent {
  uiSandboxTitles: {
    aboutMe: string;
    howIWork: string;
    workStatus: string;
    // Если вы раскомментируете карту и календарь, добавьте и их заголовки
    // calendar: string;
    // whereIAm: string;
  };
  common: {
    readMore: string;
    readLess: string;
  };

  logoTitle: string;
  hero: {
    mainTitle: string;
    mainSubTitle: string;
    buttonText: string;
  };
  footer: {
    copyright: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  aboutMe: {
    title: string;
    name: string;
    position: string;
    rotatingTexts: string[];
    skillsChips: string[];
  };
  timeline: {
    items: {
      title: string;
      description: string;
    }[];
  };
  WorkStatusDescription: {
    title: string;
  };
  photoGallery: {
    title: string;
  };
  skills: {
    title: string;
    list: { name: string; level?: string }[];
  };
  experience: {
    title: string;
    positions: {
      title: string;
      company: string;
      duration: string;
      responsibilities: string[];
      technologies?: string[];
    }[];
  };
  education: {
    title: string;
    degrees: {
      degree: string;
      institution: string;
      duration: string;
      details?: string;
    }[];
  };
  projects: {
    title: string;
    list: {
      name: string;
      description: string;
      technologies: string[];
      link?: string;
      githubLink?: string;
    }[];
  };
  // ... добавь другие секции по мере необходимости
}
