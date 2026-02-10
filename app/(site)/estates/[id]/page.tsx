import { notFound } from "next/navigation";
import EstateContent from "./EstateContent"; // client component

interface Estate {
  id: string;
  location: string;
  description: string;
  image: string;
}

const estates: Estate[] = [
  { id: "1", location: "Galle", description: "Lush green tea estate with sustainable practices.", image: "/sample-1.jpg" },
  { id: "2", location: "Matara", description: "Premium organic estate specializing in high-quality crops.", image: "/sample-2.png" },
  { id: "3", location: "Hambantota", description: "Expansive farmland with modern irrigation systems.", image: "/sample-3.png" },
  { id: "4", location: "Rathnapura", description: "Eco-friendly estate producing top-grade spices and fruits.", image: "/sample-4.png" },
  { id: "5", location: "Thanamalwila", description: "Remote estate emphasizing sustainability and community farming.", image: "/sample-5.jpg" },
];

export async function generateMetadata({ params }: { params: { id: string } }) {
  const estate = estates.find(e => e.id === params.id);
  if (!estate) return { title: "Estate Not Found | SuperGreen" };

  return {
    title: `${estate.location} Estate | SuperGreen Sri Lanka`,
    description: estate.description,
  };
}

export default async function EstatePage({ params }: { params: { id: string } }) {
  const estate = estates.find(e => e.id === params.id);
  if (!estate) return notFound();

  return <EstateContent estate={estate} />;
}
