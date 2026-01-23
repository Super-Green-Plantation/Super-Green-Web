export interface Estate {
  id: number;
  name: string;
  location: string;
  heroImg: string; // The main image for the header
  details: {
    totalArea: string;
    workersCount: number;
    cropTypes: string[];
    yearEstablished: number;
  };
  description: string;
  galleryImages: string[];
  mapEmbedUrl: string; // Placeholder for a map URL/embed
  contactEmail: string;
}

export const estates: Estate[] = [
  {
    id: 1,
    name: "Green Valley Estate",
    location: "Galle, Sri Lanka",
    heroImg: "/hero.png", // Replace with your actual path
    details: {
      totalArea: "500 Acres",
      workersCount: 450,
      cropTypes: ["Ceylon Tea", "Spices"],
      yearEstablished: 1950,
      
    },
    description: "Our estates are strategically located across the country, each managed with sustainable practices and modern agricultural methods. Explore our estate lands and learn how we grow quality from the ground up.",
    galleryImages: [
      "/hero.png", // Replace with your actual paths
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1179.535968081805!2d80.22767999926535!3d6.067137348533814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1765945041682!5m2!1sen!2slk",
    contactEmail: "galle.officer@supergreen.com",
  },
  {
    id: 2,
    name: "South Coast Plantation",
    location: "Matara, Sri Lanka",
    heroImg: "/hero.png",
    details: {
      totalArea: "350 Hectares",
      workersCount: 320,
      cropTypes: ["Rubber", "Coconut"],
      yearEstablished: 1985,
    },
    description: "A beautiful coastal estate focusing on high-quality rubber and coconut production, adhering to strict organic standards.",
    galleryImages: [
      "/hero.png",
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.837877964147!2d80.53655331476717!3d5.95290629555198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae603126e7a76c5%3A0x1d3a5a1e2a0f8c7!2sMatara!5e0!3m2!1sen!2slk!4v1628761234568!5m2!1sen!2slk",
    contactEmail: "matara.officer@supergreen.com",
  },
  // Add more estate objects (id 3, 4, 5) with dummy data here...
];
