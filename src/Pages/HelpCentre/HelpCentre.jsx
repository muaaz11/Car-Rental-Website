import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import FAQItem from "./FAQitem"; 

const faqs = [
  { id: 1, question: "How old do you have to be to rent a car?", answer: "You must be at least 21 years old to rent a car in most locations, but this may vary by country and rental company." },
  { id: 2, question: "What documents are needed to rent a car?", answer: "You need a valid driver's license, a credit card, and in some cases, an International Driving Permit." },
  { id: 3, question: "How do insurance coverages work for rental cars?", answer: "Rental car insurance covers damages, theft, and liability depending on the policy you choose." },
  { id: 4, question: "What are the limits for excess insurance?", answer: "Excess insurance limits vary based on the provider and coverage plan you opt for." },
];

function HelpCentre() {
  const [openFAQ, setOpenFAQ] = useState(null); // Single state to track open FAQ

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#edf0f7] h-full">
      <div className="max-w-xs m-auto flex flex-col gap-10 pt-5 lg:max-w-[1200px] md:max-w-[700px] ">
        <div>
          <BreadCrumbs />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl pb-5">Help Centre</h1>
          <p>
            Here you will find answers to frequently asked questions about our company and services.
            If you don't find the answer to your question, please contact our customer support and we'll
            be happy to assist you. <a href="#" className="text-[#39acf9]">Ask a question.</a>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 gap-5 mb-10 lg:grid-cols-1">
          {faqs.map((faq) => (
            <FAQItem 
              key={faq.id} 
              id={faq.id}
              question={faq.question} 
              answer={faq.answer} 
              openFAQ={openFAQ}
              setOpenFAQ={setOpenFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpCentre;
