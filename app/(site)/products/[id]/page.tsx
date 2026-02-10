import PlanDetailsPage from './PlanDetailsPageClient'; // client component
import { plansData } from '../plansData';
import { notFound } from 'next/navigation';

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params }: Params) {
  const plan = plansData.find(p => p.id === params.id);
  if (!plan) {
    return {
      title: "Plan Not Found | SuperGreen",
      description: "The requested plan does not exist."
    };
  }

  return {
    title: `${plan.name} | SuperGreen Investment Plans`,
    description: plan.description
  };
}

export default function PlanPage({ params }: Params) {
  const plan = plansData.find(p => p.id === params.id);
  if (!plan) return notFound();

  return <PlanDetailsPage plan={plan} />;
}
