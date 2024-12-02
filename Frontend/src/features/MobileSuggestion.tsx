import { useEffect, useRef, useState } from "react";
import BulbIcon from "../assets/icons/BulbIcon";
import walleiaiImage from "../assets/images/fileasjhb 1.png";
import { useRegistration } from "../context/RegistrationContext";
import Registration from "./Registration";

type Props = {
  isDarkMode: boolean;
  onSuggestionClick: (message: string) => void;
};

function MobileSuggestion({ isDarkMode, onSuggestionClick }: Props) {
  const { isRegistered } = useRegistration();
  const [isModalOpen, setModalOpen] = useState(false);
  
  const modalRef = useRef<HTMLDivElement | null>(null);

  const suggestions = [
    { label: "Plywood", message: "What thickness of plywood is ideal for flooring?" },
    { label: "Calculator", message: "How much plywood do I need for a 12x15 ft ceiling?" },
    { label: "Products", message: "What are Wallmark top-selling products?" },
  ];

  const handleSuggestionClick = (message: string) => {
    if (!isRegistered) {
      setModalOpen(true); 
    } else {
      onSuggestionClick(message);}
  };

  const closeModal = () => {
    setModalOpen(false);
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
    <div className="md:hidden flex flex-col justify-center items-center h-[55vh]">
      <img src={walleiaiImage} className="w-24 mb-4" alt="Wallei AI" />
      <span
        className="font-medium bg-clip-text text-transparent text-3xl"
        style={{
          backgroundImage: isDarkMode
            ? "linear-gradient(92.92deg, #7BE53A 0.81%, #36AA00 99.19%)"
            : "linear-gradient(92.92deg, #7BE53A 0.81%, #36AA00 99.19%)",
        }}
      >
        Hello, there
      </span>
      <span
        className={`font-medium text-3xl text-center mt-1 ${
          isDarkMode ? "text-gray-400" : "bg-clip-text text-transparent"
        }`}
        style={{
          backgroundImage: isDarkMode
            ? "none"
            : "linear-gradient(90.29deg, #CECECE 0.1%, #504F4F 99.9%)",
        }}
      >
        What can I help you with today?
      </span>
      <br />
      <div
        style={{ boxShadow: "0px 3px 9px 0px rgba(0, 0, 0, 0.15)" }}
        className={`rounded-[100px] flex justify-center items-center px-4 py-3 gap-2 ${
          isDarkMode ? "bg-[#1C1C1C]" : "bg-[#FFFFFF]"
        }`}
      >
        <BulbIcon />
        <span className={`text-base ${isDarkMode ? "text-[#EEEEEE]" : "text-[#7D7C7C]"}`}>
          Suggestions
        </span>
      </div>

      {/* Map suggestions */}
      <div className="mt-5 flex justify-center items-center gap-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={`border-[0.5px] border-[#FFD012] px-4 py-2.5 rounded-[100px] ${
              isDarkMode ? "text-[#EEEEEE]" : "text-[#7D7C7C]"
            }`}
            style={{ boxShadow: "0px 3px 9px 0px rgba(0, 0, 0, 0.15)" }}
            onClick={() => handleSuggestionClick(suggestion.message)}
          >
            {suggestion.label}
          </div>
        ))}
      </div>

      {/* Modal for registration */}
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

export default MobileSuggestion;
