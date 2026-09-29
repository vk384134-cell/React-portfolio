const img = (n) => `/images/project-${n}.svg`;
export const projects = [
  { id: 1, title: "E-Commerce Application", description: "A responsive online store with product browsing, cart and checkout.", image: img(1),
    technologies: ["React", "Bootstrap", "Node.js", "MongoDB"], features: ["Product browsing", "Shopping cart", "User authentication"], githubUrl: "#", liveUrl: "#" },
  { id: 2, title: "Task Management App", description: "Plan and track work with boards, due dates and priorities.", image: img(2),
    technologies: ["React", "Express.js", "MySQL"], features: ["Drag-and-drop boards", "Due-date reminders", "Filter by priority"], githubUrl: "#", liveUrl: "#" },
  { id: 3, title: "Weather Application", description: "Current conditions and a 5-day forecast for any city.", image: img(3),
    technologies: ["React", "REST APIs", "CSS"], features: ["City search", "5-day forecast", "Unit switching"], githubUrl: "#", liveUrl: "" },
  { id: 4, title: "Full Stack CRUD App", description: "A complete create/read/update/delete app with an authenticated API.", image: img(4),
    technologies: ["React", "Node.js", "Express.js", "MongoDB"], features: ["JWT authentication", "Form validation", "Paginated lists"], githubUrl: "#", liveUrl: "#" },
  { id: 5, title: "Developer Portfolio", description: "This site: a data-driven, responsive React Bootstrap portfolio.", image: img(5),
    technologies: ["React", "React Bootstrap", "Vite"], features: ["Centralized content", "Accessible navigation", "Contact form"], githubUrl: "#", liveUrl: "#" },
];
