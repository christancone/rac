export const siteConfig = {
  name: "Rotaract Club of Mannar",
  description: "Service Above Self - Making a difference in our community",
  contact: {
    address: "Rotaract Club of Mannar, Community Center, Mannar, Sri Lanka",
    phone: "+94 XX XXX XXXX",
    email: "info@rotaractmannar.org",
  },
};

export const statistics = {
  totalProjects: 25,
  activeMembers: 50,
  plannedProjects: 10,
};

export const aboutContent = {
  title: "About Us",
  description: "The Rotaract Club of Mannar is a community of young leaders dedicated to making a positive impact through service projects, professional development, and community engagement. We strive to create lasting change in our community while developing leadership skills and building lifelong friendships.",
};

export const projects = [
  {
    id: 1,
    title: "Community Health Camp",
    description: "A comprehensive health camp providing free medical check-ups and awareness sessions to the local community.",
    image: "/images/projects/health-camp.jpg",
    date: "March 15, 2024",
    category: "Health",
    details: {
      impact: "Served 200+ community members",
      duration: "2 days",
      location: "Mannar Community Center",
    },
  },
  {
    id: 2,
    title: "Education for All",
    description: "Providing educational resources and support to underprivileged children in rural areas.",
    image: "/images/projects/education.jpg",
    date: "February 28, 2024",
    category: "Education",
    details: {
      impact: "Supported 50+ students",
      duration: "Ongoing",
      location: "Rural schools in Mannar",
    },
  },
  {
    id: 3,
    title: "Environmental Cleanup",
    description: "A community-wide initiative to clean and maintain local parks and public spaces.",
    image: "/images/projects/environment.jpg",
    date: "January 20, 2024",
    category: "Environment",
    details: {
      impact: "Cleaned 5 public spaces",
      duration: "1 day",
      location: "Various locations in Mannar",
    },
  },
];

export const announcements = [
  {
    id: 1,
    title: "Monthly Meeting",
    description: "Join us for our monthly meeting on April 5th at 6:00 PM at the Community Center.",
    date: "March 28, 2024",
    important: true,
    type: "meeting",
  },
  {
    id: 2,
    title: "Volunteer Training",
    description: "New volunteer training session scheduled for April 10th. All new members are required to attend.",
    date: "March 25, 2024",
    important: true,
    type: "training",
  },
  {
    id: 3,
    title: "Project Planning",
    description: "Planning meeting for the upcoming community health camp. All members are welcome to contribute ideas.",
    date: "March 22, 2024",
    important: false,
    type: "planning",
  },
];

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Announcements", href: "/announcements" },
  { name: "Contact Us", href: "/contact" },
];

export const heroContent = {
  title: "Rotaract Club of Mannar",
  subtitle: "Service Above Self",
  backgroundImage: "/images/members/newyear2025.jpg",
};

export const socialLinks = {
  facebook: "https://facebook.com/rotaractmannar",
  instagram: "https://instagram.com/rotaractmannar",
  twitter: "https://twitter.com/rotaractmannar",
  linkedin: "https://linkedin.com/company/rotaractmannar",
};

export const events = [
  {
    id: 1,
    title: "Annual Charity Gala",
    description: "Join us for an evening of fundraising and celebration at our annual charity gala. All proceeds will go towards our community development projects.",
    date: "2024-06-15",
    time: "6:00 PM",
    location: "Mannar Town Hall",
    image: "/images/events/gala.jpg",
    category: "Fundraising",
    details: {
      attendees: 200,
      duration: "4 hours",
      registration: "Required"
    }
  },
  {
    id: 2,
    title: "Youth Leadership Workshop",
    description: "A comprehensive workshop designed to develop leadership skills among young individuals in our community.",
    date: "2024-07-20",
    time: "9:00 AM",
    location: "Mannar Community Center",
    image: "/images/events/workshop.jpg",
    category: "Education",
    details: {
      attendees: 50,
      duration: "6 hours",
      registration: "Required"
    }
  },
  {
    id: 3,
    title: "Beach Cleanup Drive",
    description: "Join us in our efforts to keep our beaches clean and protect marine life. All necessary equipment will be provided.",
    date: "2024-08-05",
    time: "8:00 AM",
    location: "Mannar Beach",
    image: "/images/events/beach-cleanup.jpg",
    category: "Environment",
    details: {
      attendees: 100,
      duration: "3 hours",
      registration: "Not Required"
    }
  }
]; 