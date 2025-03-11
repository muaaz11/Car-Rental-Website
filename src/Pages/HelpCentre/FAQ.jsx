import FAQItem from "./FAQitem";

const FAQ = () => {
  const faqData = [
    { 
      question: "How old do you have to be to rent a car?", 
      answer: "You must be at least 21 years old to rent a car in most places. Some companies may charge extra fees for drivers under 25."
    },
    { 
      question: "Do I need insurance to rent a car?", 
      answer: "Most car rental companies require insurance. You can either provide your own or purchase insurance through the rental company."
    },
    { 
      question: "What documents are needed?", 
      answer: "You need a valid driver's license, a credit card, and sometimes proof of insurance."
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 mb-10 lg:grid-cols-2">
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
