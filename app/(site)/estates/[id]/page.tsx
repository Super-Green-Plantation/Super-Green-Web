import { notFound } from "next/navigation";
import EstateContent from "./EstateContent"; // client component
import { estates } from "../estateData";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const estate = estates.find(e => e.id.toString() === params.id);
  if (!estate) return { title: "Estate Not Found | SuperGreen" };

  return {
    title: `${estate.location} Estate | SuperGreen Sri Lanka`,
    description: estate.description,
  };
}

export default async function EstatePage({ params }: { params: { id: string } }) {
  const estate = estates.find(e => e.id.toString() === params.id);
  if (!estate) return notFound();

  return <EstateContent estate={estate} />;
}
