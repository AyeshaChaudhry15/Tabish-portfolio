
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
    title: "EatMeat – Meat Delivery App",
    category: "MOBILE APP",
    description:
      "A modern meat delivery application designed to make ordering fresh meat simple, fast, and convenient with a smooth mobile shopping experience.",
    image: "/projects/ecommerce-platform.jpeg",
    tags: ["Food Delivery", "E-Commerce", "Mobile App"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.carivore.lifestyle.eatmeat",
  },

  {
    title: "Health & Fitness Mobile App UI/UX",
    category: "FITNESS APP",
    description:
      "A modern fitness application designed to help users manage workouts, track progress, and maintain a consistent fitness routine.",
    image: "/projects/fitness-app.jpeg",
    tags: ["Fitness", "Health", "Mobile App", "UI/UX"],
    liveUrl: "https://your-fitness-app.vercel.app",
  },

  {
    title: "Multi Device Dashboard",
    category: "DASHBOARD",
    description:
      "A responsive multi-device dashboard designed to present important data, analytics, and application controls through a clean and intuitive interface.",
    image: "/projects/multi-device-dashboard.png",
    tags: ["Dashboard", "Analytics", "Responsive UI"],
    liveUrl: "https://your-multi-device-dashboard.vercel.app",
  },

  {
    title: "Quotes App – Daily Motivation & Inspiration",
    category: "MOBILE APP",
    description:
      "A simple and engaging quotes application featuring inspirational and motivational content through a clean and user-friendly mobile experience.",
    image: "/projects/qoutes-app.jpeg",
    tags: ["Quotes", "Motivation", "Mobile App", "UI/UX"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mujeebdev.quotes",
  },

  {
    title: "Qatari Bites – Restaurant App",
    category: "RESTAURANT APP",
    description:
      "A modern restaurant application designed to showcase menus, restaurant information, and provide an engaging digital dining experience.",
    image: "/projects/resturent-app.jpeg",
    tags: ["Restaurant", "Food", "Mobile App", "UI/UX"],
    liveUrl: "https://your-restaurant-app.vercel.app",
  },

  {
    title: "Doctor Appointment App",
    category: "HEALTH APP",
    description:
      "A modern doctor appointment application designed to help users discover doctors, manage appointments, and access healthcare services through a simple digital experience.",
    image: "/projects/shopping-app.jpeg",
    tags: ["Healthcare", "Doctor Appointment", "Mobile App", "UI/UX"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.nexusappstech.doctorapp",
  },
];
