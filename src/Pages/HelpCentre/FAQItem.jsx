import { motion } from "framer-motion";
import { GoPlus, GoDash } from "react-icons/go";

const FAQItem = ({ id, question, answer, openFAQ, setOpenFAQ }) => {
  const isOpen = openFAQ === id;

  const toggleFAQ = () => {
    setOpenFAQ(isOpen ? null : id); 
  };

  return (
    <div className="bg-[#EFF4FB] border border-white rounded-xl shadow-md overflow-hidden">
      {/* Question Section */}
      <div 
        onClick={toggleFAQ} 
        className="flex items-center justify-between p-4 cursor-pointer"
      >
        <p className="text-lg font-semibold">{question}</p>
        <button className="bg-[#39acf9] hover:bg-[#50b7fc] transition-all duration-300 p-2 rounded-xl text-white">
          {isOpen ? <GoDash /> : <GoPlus />}
        </button>
      </div>

      {/* Animated Answer Section */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden px-4 text-gray-600"
      >
        {isOpen && <p className="py-3">{answer}</p>}
      </motion.div>
    </div>
  );
};

export default FAQItem;
