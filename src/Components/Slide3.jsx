import { useState } from "react";

const Slide3 = () => {
    const faqs = [
        {
          question: "What is Dyvos?",
          answer:
            "Dyvos is a forward-thinking company focused on delivering innovative solutions in technology, AI, and modern digital experiences.",
        },
        {
          question: "What services does Dyvos offer?",
          answer:
            "Dyvos specializes in AI-driven applications, cutting-edge technology solutions, and personalized digital strategies to help businesses thrive in the modern era.",
        },
        {
          question: "How can I contact Dyvos for support?",
          answer:
            "You can reach Dyvos through our official website’s contact form or by emailing support@dyvos.com. Our team is available to assist you promptly.",
        },
     
      ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked FAQ
  };

  return (
    <div className="bg-[#060809] min-h-[512px] max-h-[512px] overflow-hidden  text-white sm:py-16 p-8 border-b-2 border-[#1A1C1F] flex flex-col sm:flex-row gap-8 sm:justify-between ">
        <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Some of the things you may want to know</h1>
            <p className="sm:mb-8 text-gray-400">We answered questions so you {`don’t`} have to ask them.</p>
        </div>
        <div className="sm:space-y-4 space-y-2 md:w-1/2 ">
        {faqs.map((faq,index)=>{
            return(
                <div key={index} className={`flex  divide-y divide-gray-400/40 flex-col sm:p-2 ${openIndex===index?"bg-[#1A1C1F] ":""}`}>
                    <div className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={()=>toggleFAQ(index)}
                    >
                        <p>{faq?.question}</p>
                        <span className={` transform transition-transform duration-300 ${openIndex === index?"rotate-180":""}`}>▼</span>
                    </div>
                    <div
                     className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px]" : "max-h-0"}`}
                    >
                    {openIndex === index && (
                        <div className="p-4 text-gray-300 ">{faq?.answer}</div>
                    )}
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Slide3