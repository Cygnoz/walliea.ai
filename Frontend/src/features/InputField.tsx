import { useEffect, useState } from "react";
import GalleryIcon from "../assets/icons/GalleryIcon";
import MicIcon from "../assets/icons/MicIcon";
import SendIcon from "../assets/icons/SendIcon";
import starIcon from "../assets/images/Vector.png";
import Registration from "./Registration";

type Props = {
  isDarkMode: boolean;
  isTyping: boolean;
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  onSendMessage: (message: string) => void;
};

function InputField({
  isDarkMode,
  isRegistered,
  isTyping,
  setIsRegistered,
  onSendMessage,
}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const registered = localStorage.getItem("isRegistered");
    if (registered === "true") {
      setIsRegistered(true);
    }
  }, [setIsRegistered]);

  const openModal = () => {
    if (!isRegistered) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isRegistered) {
      setInputValue(e.target.value);
    } else {
      openModal();
    }
  };

  const handleSend = () => {
    if (inputValue.trim() && !isTyping) {
      onSendMessage(inputValue);
      setInputValue(""); 
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <div className="flex justify-center relative mb-1">
        <img
          src={starIcon}
          className="w-5 h-5 absolute top-1/2 left-[9.5%] transform -translate-y-1/2"
          style={{ objectFit: "contain" }}
          alt="Star Icon"
        />
        <input
          type="text"
          value={inputValue}
          onClick={openModal} // Open modal if not registered
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={`w-[86.4%] h-14 pl-14 pr-32 border-0 rounded-[58px] text-base focus:outline-none 
            ${isDarkMode ? "bg-[#272626] text-white" : "bg-white text-black"}`}
          placeholder="Need plywood ideas? Consult our wallya.ai"
          style={{
            boxShadow: `
              0px 1px 3px 0px #8FFB5D1A,
              0px 5px 5px 0px #8FFB5D17,
              0px 2px 7px 0px #8FFB5D0D,
              0px 20px 8px 0px #8FFB5D03,
              0px 32px 9px 0px #8FFB5D00
            `,
          }}
        />

        <div className="absolute flex gap-3 top-1/2 right-[10%] transform -translate-y-1/2">
          <MicIcon />
          <GalleryIcon />
          <div className="ms-4" onClick={handleSend}>
            <SendIcon isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Registration
        isModalOpen={isModalOpen}
        setIsRegistered={setIsRegistered}
        isDarkMode={isDarkMode}
        closeModal={closeModal}
      />
    </>
  );
}

export default InputField;
