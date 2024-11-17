import { useEffect, useRef, useState } from "react";
import BrushIcon from "../assets/icons/BrushIcon";
import Registration from "./Registration";

type Props = {
  isDarkMode: boolean;
  question: string;
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

function SuggestionContent({ isDarkMode, question }: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const registered = localStorage.getItem("isRegistered");
    if (registered === "true") {
      setIsRegistered(true);
    }
  }, []);

  const openModal = () => {
    if (!isRegistered) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Handle clicks outside the modal
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
    <>
      <div
        onClick={openModal}
        className={`rounded-lg p-4 w-[34%] 
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div ref={modalRef}>
            <Registration
              isModalOpen={isModalOpen}
              setIsRegistered={setIsRegistered}
              isDarkMode={isDarkMode}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SuggestionContent;
