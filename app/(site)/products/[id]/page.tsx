'use client'

import React from 'react'
import Link from "next/link";
import { plansData } from '../plansData';
import { CircleAlert } from 'lucide-react';

// --- Types based on your data structure ---
interface DetailBoxProps {
  label: string;
  value: string | number;
  
}

// --- Reusable Stats Component ---
const DetailBox: React.FC<DetailBoxProps> = ({ label, value }) => (
  <div className="bg-green-800 text-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center h-full min-h-25 transition duration-300 hover:bg-green-700">
    <p className="text-xl sm:text-2xl font-bold">{value}</p>
    <p className="text-sm sm:text-base opacity-90 mt-1">{label}</p>
  </div>
);

const PlanDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  
  // Find the plan
  const plan = plansData.find((pl) => pl.id === id);

  // --- 404 State ---
  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 bg-gray-50">
        <h1 className="text-3xl font-bold text-red-600">
          404 - Plan Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The requested plan with ID: {id} does not exist.
        </p>
        <Link
          href="/"
          className="text-green-600 hover:text-green-700 mt-4 font-semibold border border-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      
       <header className="relative h-80 overflow-hidden bg-linear-to-br from-green-700 to-green-800">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-0 px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-2 tracking-wide text-center">
            {plan.name}
          </h1>
          <p className="text-lg sm:text-2xl font-light opacity-90">
            {plan.description}
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 -mt-10 sm:-mt-16 relative z-10 flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
          <DetailBox label="Duration" value={plan.duration} />
          <DetailBox label="Interest Rate" value={plan.interest} />
          <DetailBox label="Paying Term" value={plan.payingTerm} />
          <DetailBox label="Min Premium" value={plan.minPremium} />
        </div>
      </section>
 <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
          Premium Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plan.premiums?.map((prem, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 text-center">
                    <h3 className="text-xl font-bold text-green-700 mb-2">{prem.type}</h3>
                    <div className="text-3xl font-extrabold text-gray-800 my-4">{prem.amount}</div>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Commission: {prem.commission}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- MATURITY & RULES GRID --- */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Maturity Benefits if availble*/}
                {plan.maturityBenefits ? (

                <div>
                    <h2 className="text-2xl font-bold mb-6 text-green-800 border-b-2 border-green-200 pb-2">
                        Maturity Benefits
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <ul className="space-y-4">
                            {plan.maturityBenefits?.map((benefit, index) => (
                                <li key={index} className="flex justify-between items-center border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                    <span className="text-gray-600 font-medium">{benefit.type}</span>
                                    <span className="text-green-700 font-bold text-lg">{benefit.rate}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ):(null)}

                {/* Withdrawal Rules */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-green-800 border-b-2 border-green-200 pb-2">
                        Withdrawal Rules
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <ul className="space-y-3">
                            {plan.rules?.map((rule, index) => (
                                <li key={index} className="flex items-start">
                                    <CircleAlert className='mr-5 text-red-500'/>
                                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <footer className="px-2 bg-green-800 text-white text-center py-20 mt-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to secure your future with the {plan.name} ?
        </h3>
        <p className="mb-10 text-green-100 max-w-2xl mx-auto px-4">
            Contact us today to set up your savings plan. Our agents are ready to assist you with the paperwork and details.
        </p>
        <div className="flex-col justify-center items-center">
            <Link 
                href="/contact"
                className="bg-white text-green-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
                Contact Us
            </Link>
        </div>
      </footer>

    </div>
  )
}

export default PlanDetailsPage