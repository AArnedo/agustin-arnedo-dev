import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánta experiencia tienes programando?",
    answer: "Comencé a programar hace 2 años aproximadamente.",
  },
  {
    question: "¿Por qué te interesa el desarrollo web?",
    answer: "Porque me permite crear aplicaciones que pueden ser utilizadas por cualquier persona en cualquier lugar, y eso me parece increíble.",
  },
  {
    question: "¿Cómo obtuviste los conocimientos?",
    answer: "Principalmente de cursos online y mucha práctica, siempre de manera autodidacta.",
  },
];

export const FAQs = () => {
  return (
    <div className="w-full max-w-2xl max-h-[60vh] mx-auto px-4 py-10">
      <h2 className="text-2xl pl-4 mb-6 underline text-[#D9D9D9]">Preguntas Frecuentes</h2>
      <div className="space-y-2 space-x-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#d9d9d938]">
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-[#D9D9D9] focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronDownIcon
                      className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-[#00B6FE]`}
                    />
                  </Disclosure.Button>
                  <Transition
                    as="div" 
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 rounded-xl text-sm text-[#00B6FE]">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};
