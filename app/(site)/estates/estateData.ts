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
  {
    id: 3,
    name: "Hambantota Highland",
    location: "Hambantota, Sri Lanka",
    heroImg: "/hero.png",
    details: {
      totalArea: "600 Acres",
      workersCount: 500,
      cropTypes: ["Paddy", "Fruits"],
      yearEstablished: 1990,
    },
    description: "Expansive farmland with modern irrigation systems, producing top-grade paddy and a variety of tropical fruits.",
    galleryImages: ["/hero.png"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.189283733074!2d81.1189408!3d6.1245695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae69f1a0737a4c7%3A0xe54955c4d519b5c!2sHambantota!5e0!3m2!1sen!2slk!4v1740000000000!5m2!1sen!2slk",
    contactEmail: "hambantota.officer@supergreen.com",
  },
  {
    id: 4,
    name: "Rathnapura Spice Garden",
    location: "Rathnapura, Sri Lanka",
    heroImg: "/hero.png",
    details: {
      totalArea: "200 Hectares",
      workersCount: 250,
      cropTypes: ["Cinnamon", "Pepper", "Cloves"],
      yearEstablished: 1975,
    },
    description: "Eco-friendly estate producing top-grade spices and fruits in the heart of the gem city.",
    galleryImages: ["/hero.png"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31704.568435136!2d80.384736!3d6.682775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3eb4b3e8c8a1f%3A0x8e8e3f4f4f4f4f4f!2sRatnapura!5e0!3m2!1sen!2slk!4v1740000000000!5m2!1sen!2slk",
    contactEmail: "rathnapura.officer@supergreen.com",
  },
  {
    id: 5,
    name: "Thanamalwila Green Hub",
    location: "Thanamalwila, Sri Lanka",
    heroImg: "/hero.png",
    details: {
      totalArea: "450 Acres",
      workersCount: 380,
      cropTypes: ["Vegetables", "Maize"],
      yearEstablished: 2005,
    },
    description: "Remote estate emphasizing sustainability and community farming, feeding the nation with fresh produce.",
    galleryImages: ["/hero.png"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.719669527263!2d81.130638!3d6.440263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae69795d3a5a5a5%3A0x7d7d7d7d7d7d7d7d!2sThanamalwila!5e0!3m2!1sen!2slk!4v1740000000000!5m2!1sen!2slk",
    contactEmail: "thanamalwila.officer@supergreen.com",
  },
];
