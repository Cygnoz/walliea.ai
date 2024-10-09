import { useEffect, useState } from "react";
import GalleryIcon from "../assets/icons/GalleryIcon";
import MicIcon from "../assets/icons/MicIcon";
import SendIcon from "../assets/icons/SendIcon";
import starIcon from "../assets/images/Vector.png";
import Modal from "../components/Modal";
import line from "../assets/images/Frame 1161.png";
import emailIcon from "../assets/images/Group.png";

type Props = {
  isDarkMode: boolean;
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  onSendMessage: (message: string) => void;
};

function InputField({ isDarkMode, isRegistered, setIsRegistered, onSendMessage }: Props) {
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

  const handleRegister = () => {
    localStorage.setItem("isRegistered", "true");
    setIsRegistered(true); 
    closeModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isRegistered) {
      setInputValue(e.target.value);
    } else {
      openModal();
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);  // Send the message to parent component
      setInputValue("");  // Clear the input after sending
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
          onKeyPress={handleKeyPress}  // Detect Enter key press
          className={`w-[86.4%] h-14 pl-14 pr-32 border-0 rounded-[58px] text-base focus:outline-none ${isDarkMode ? "bg-[#272626] text-white" : "bg-white text-black"
            }`}
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
          <div className="ms-4"> 
          <SendIcon isDarkMode={isDarkMode}  />
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className={`w-[32%] text-start  px-8 py-6 ${isDarkMode ? "bg-[#1c1c1c]" : "bg-white"
          }`}
      >
        <div>
          <span
            className={`text-3xl font-semibold ${isDarkMode ? "text-[#E6E6E6]" : "text-[#3A3838]"
              }`}
          >
            Registration
          </span>
          <br />
          <p
            className={`mt-2 text-sm font-extralight ${isDarkMode ? "text-[#5A5958]" : "text-[#A8A4A4]"
              }`}
          >
            Join our community and unlock new opportunities.
          </p>
          <img src={line} className="mt-3" alt="" />

          <form className="mt-6 space-y-6 text-[#403C3C]">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullname"
                className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                  }`}
              >
                Full name
              </label>
              <br />
              <input
                type="text"
                id="fullname"
                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                  focus:outline-none rounded-lg h-11 ${isDarkMode
                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                  }`}
                placeholder="Enter name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                  }`}
              >
                Phone Number
              </label>
              <br />
              <input
                type="text"
                id="phone"
                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                  focus:outline-none rounded-lg h-11 ${isDarkMode
                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                  }`}
                placeholder="Enter number "
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                  }`}
              >
                Company Name
              </label>
              <br />
              <input
                type="text"
                id="company"
                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                  focus:outline-none rounded-lg h-11 ${isDarkMode
                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                  }`}
                placeholder="example"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                  }`}
              >
                Email
              </label>
              <br />
              <input
                type="text"
                id="email"
                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                  focus:outline-none rounded-lg h-11 ${isDarkMode
                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                  }`}
                placeholder="user@gmail.com"
              />
              <img src={emailIcon} className="w-7 absolute top-[50%] right-3" alt="" />
            </div>

            {/* Register Button */}
            <div className="flex justify-center items-center">
              <button
                className={`mt-6 px-14 py-1.5 text-lg font-semibold rounded-[33px] 
               ${isDarkMode
                    ? 'bg-gradient-to-r from-[#C6FFAC] to-[#5DD723] text-[#1D5A00]'
                    : 'bg-[#C6FFAC] text-[#1D5A00]'
                  }`}
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <p className="text-xs text-center text-[#A8A4A4]">
              Please review our Terms of Service and{" "}
              <span
                className={`underline cursor-pointer ${isDarkMode ? "text-[#4ABC15]" : "text-[#555454]"
                  }`}
              >
                Privacy Policy
              </span>{" "}
              before submitting.
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default InputField;
