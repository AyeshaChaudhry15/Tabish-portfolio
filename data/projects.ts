export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "E-COMMERCE",
    description:
      "A modern e-commerce platform designed with a clean interface, smooth navigation, and a seamless shopping experience.",
    image: "/projects/ecommerce-platform.jpeg",
    tags: ["E-Commerce", "Shopping", "Web App"],
    liveUrl: "https://your-ecommerce-platform.vercel.app",
  },

  {
    title: "Fitness App",
    category: "FITNESS APP",
    description:
      "A modern fitness application designed to help users manage workouts, track progress, and maintain a consistent fitness routine.",
    image: "/projects/fitness-app.jpeg",
    tags: ["Fitness", "Mobile App", "Health"],
    liveUrl: "https://your-fitness-app.vercel.app",
  },

  {
    title: "Multi Device Dashboard",
    category: "DASHBOARD",
    description:
      "A responsive multi-device dashboard built to present important data, analytics, and application controls in a clean interface.",
    image: "/projects/multi-device-dashboard.png",
    tags: ["Dashboard", "Analytics", "Responsive"],
    liveUrl: "https://your-multi-device-dashboard.vercel.app",
  },

  {
    title: "Quotes App",
    category: "MOBILE APP",
    description:
      "A simple and engaging quotes application featuring inspirational content with a clean and user-friendly experience.",
    image: "/projects/qoutes-app.jpeg",
    tags: ["Quotes", "Mobile App", "UI/UX"],
    liveUrl: "https://your-quotes-app.vercel.app",
  },

  {
    title: "Restaurant App",
    category: "RESTAURANT",
    description:
      "A modern restaurant application designed to showcase menus, restaurant information, and an engaging digital dining experience.",
    image: "/projects/resturent-app.jpeg",
    tags: ["Restaurant", "Food", "Web App"],
    liveUrl: "https://your-restaurant-app.vercel.app",
  },

  {
    title: "Shopping App",
    category: "E-COMMERCE",
    description:
      "A modern shopping application focused on product discovery, smooth browsing, and a simple digital shopping experience.",
    image: "/projects/shopping-app.jpeg",
    tags: ["Shopping", "E-Commerce", "Mobile App"],
    liveUrl: "https://your-shopping-app.vercel.app",
  },
];