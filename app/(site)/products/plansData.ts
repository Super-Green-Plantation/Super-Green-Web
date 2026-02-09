export const plansData = [
  {
    id: "1",
    name: "Marrge Plan",
    duration: "5, 10, or 15 Years", 
    interest: "Up to 24%",  
    img:"/marge-plan.png",
    description: "A secure long-term savings plan with a 5-year paying term and high maturity returns.",
    payingTerm: "5 Years",
    minPremium: "15,000.00",
    premiums: [
      { type: "Monthly", amount: "15,000.00", commission: "2.5%" },
      { type: "3 Month", amount: "50,000.00", commission: "5%" },
      { type: "6 Month", amount: "100,000.00", commission: "7%" },
      { type: "1 Year", amount: "200,000.00", commission: "8%" },
    ],
    // Maturity Data [cite: 14]
    maturityBenefits: [
      { type: "Monthly Installments", rate: "15%" },
      { type: "Quarterly Installments", rate: "18%" },
      { type: "Semi-Annual Installments", rate: "21%" },
      { type: "Annual Installments", rate: "24%" },
    ],
    // Withdrawal Rules [cite: 8-13]
    rules: [
      "Stop payments < 1 year: 2.5% interest paid after 5 years.",
      "Stop payments > 1 year: 6% interest paid after 5 years.",
      "Stop payments > 2 years: 9% interest paid after 5 years.",
      "Withdraw after 4 years: 12% interest paid after 5 years.",
      "Withdraw after 5 years: 15% interest paid after 5 years."
    ]
  },
  {
    id: "2",
    name: "Super Green Child Plan", // [cite: 20]
    duration: "6, 9, or 12 Years", // [cite: 22]
    interest: "Up to 24%", // [cite: 37]
    img:"/child plan.png",
    description: "Secure your child's future with a short 3-year paying term and flexible maturity options.", // [cite: 23]
    payingTerm: "3 Years", // [cite: 23]
    minPremium: "15,000.00", // [cite: 24]
     premiums: [
      { type: "Monthly", amount: "15,000.00", commission: "2.5%" },
      { type: "3 Month", amount: "50,000.00", commission: "5%" },
      { type: "6 Month", amount: "100,000.00", commission: "7%" },
      { type: "1 Year", amount: "200,000.00", commission: "8%" },
    ],
     maturityBenefits: [
      { type: "Monthly Installments", rate: "15%" },
      { type: "Quarterly Installments", rate: "18%" },
      { type: "Semi-Annual Installments", rate: "21%" },
      { type: "Annual Installments", rate: "24%" },
    ],
     rules: [
      "Stop payments < 1 year: 2.5% interest paid after 3 years.",
      "Stop payments > 1 year: 8% interest paid after 3 years.",
      "Stop payments > 2 years: 10% interest paid after 3 years.",
      "Withdraw after 3 years: 12% interest paid after 4 years.",
      "Withdraw after 4 years: 15% interest paid after 4 years."
    ]
  },
  {
    id: "3",
    name: "Ran Aswanu Nidanaya", // [cite: 50]
    duration: "Retire at 35 - 55", // [cite: 55]
    interest: "Lifetime Pension", // [cite: 75]
    img:"/ran aswanu.png",
    description: "Retirement planning for ages 18-50. Receive 10% of maturity amount monthly.", // [cite: 53, 75]
    payingTerm: "1 - 10 Years", // [cite: 54]
    minPremium: "15,000.00", // [cite: 56]
    extraInfo: "Age Limit: 18-50 years", // [cite: 53]
    premiums: [
      { type: "Monthly", amount: "15,000.00", commission: "2.5%" },
      { type: "3 Month", amount: "50,000.00", commission: "5%" },
      { type: "6 Month", amount: "100,000.00", commission: "7%" },
      { type: "1 Year", amount: "200,000.00", commission: "8%" },
    ],
     pensionMatrix: [
      { year: "1 Year", monthlyRate: "6%", yearlyRate: "10%" },
      { year: "2 Years", monthlyRate: "9%", yearlyRate: "12%" },
      { year: "3 Years", monthlyRate: "12%", yearlyRate: "15%" },
      { year: "4 Years", monthlyRate: "15%", yearlyRate: "18%" },
      { year: "5 Years", monthlyRate: "18%", yearlyRate: "18%" },
      { year: "6-10 Years", monthlyRate: "20%", yearlyRate: "20%" },
    ],
    rules: [
     "10% of the maturity amount is paid as pension every month until exhausted.", // [cite: 75]
      "Stop payments < 1 year: 2.5% interest paid after required pension year." // [cite: 60]
    ]
  }
];