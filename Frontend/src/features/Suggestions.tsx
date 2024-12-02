import { useRegistration } from "../context/RegistrationContext";
import BrushIcon from "../assets/icons/BrushIcon";
import Registration from "./Registration";
import { useEffect, useRef, useState } from "react";

type Props = {
  isDarkMode: boolean;
  onQuestionSelect: (question: string) => void; 
};

function Suggestions({ isDarkMode, onQuestionSelect }: Props) {
  const { isRegistered } = useRegistration();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  console.log(selectedQuestion);
  
  const modalRef = useRef<HTMLDivElement | null>(null);

  const questions = [
    "What are the advantages of using plywood over solid wood?",
    "What are some common applications for plywood in furniture making?",
    "How does the number of layers in plywood affect its strength and durability?",
  ];

  const openModal = (question: string) => {
    if (!isRegistered) {
      setSelectedQuestion(question);
      setModalOpen(true);
    } else {
      onQuestionSelect(question); // Notify parent of selected question
      sendQuestionToBot(question);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedQuestion(null);
  };

  const sendQuestionToBot = (question: string) => {
    console.log("Sending question to bot:", question);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex justify-center gap-3 items-center">
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => openModal(question)}
            className={`rounded-lg p-4 w-[34%]  hidden md:block
              ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"}`}
            style={{
              boxShadow: `
                0px 2px 4px 0px #D8B0F21A,
                0px 7px 7px 0px #D8B0F217,
                0px 1px 10px 0px #D8B0F20D,
                0px 29px 12px 0px #D8B0F203,
                0px 46px 13px 0px #D8B0F200
              `,
            }}
          >
            <div className="mb-5">
              <BrushIcon />
            </div>
            <span className="text-[#676666] text-[0.900rem]">{question}</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div ref={modalRef}>
            <Registration
              isModalOpen={isModalOpen}
              isDarkMode={isDarkMode}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}


export default Suggestions;
