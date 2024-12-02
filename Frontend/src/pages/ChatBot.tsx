import { useEffect, useRef, useState } from "react";
import walleiaiImage from "../assets/images/fileasjhb 1.png";
import InputField from "../features/InputField";
import MoreSuggestions from "../features/MoreSuggestions";
import OfferView from "../features/OfferView";
import Suggestions from "../features/Suggestions";
import personIMage from "../assets/images/Ellipse 2.png";
import botImage from "../assets/images/Vector.png";
import ArrowDown from "../assets/icons/ArrowDown";
import NewLetsConnect from "../features/NewLetsConnect";
import { sendMessage } from "../services/allApi";
import SkeletonLoader from "../features/SkeletonLoader ";
import { useRegistration } from "../context/RegistrationContext";
import MobileSuggestion from "../features/MobileSuggestion";

type Props = {
  isDarkMode: boolean;
};

function ChatBot({ isDarkMode }: Props) {
  const { isRegistered } = useRegistration();
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [showDownButton, setShowDownButton] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    const storedMessages = sessionStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, [])

  const handleSendMessage = async (message: string) => {
    if (isTyping) return;

    setMessages((prevMessages: any) => {
      const updatedMessages = [...prevMessages, { text: message, sender: "user" }];
      sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    setIsTyping(true);

    try {
      const response = await sendMessage({ message });
      if (response.status === 200) {
        const botResponse = response.data.response;

        setTimeout(() => {
          setMessages((prevMessages: any) => {
            const updatedMessages = [...prevMessages, { text: botResponse, sender: "bot" }];
            sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
            return updatedMessages;
          });
          setIsTyping(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
    }
  };
  const handleQuestionSelection = (question: string) => {
    handleSendMessage(question);
  };



  const handleSuggestionClick = (suggestion: string) => {
    if (!isTyping) {
      handleSendMessage(suggestion);
    }
  };
  const chatMessages = JSON.parse(sessionStorage.getItem("chatMessages") || "[]");
  const ischatMessages = chatMessages.length === 0;

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (container) {
      const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 100;
      setShowDownButton(!isAtBottom);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Left Section */}
      <div className="hidden md:col-span-3 md:flex flex-col h-[75vh]">
        <div className="flex ms-5 items-center justify-center">
          {isRegistered && (
            <MoreSuggestions
              isDarkMode={isDarkMode}
              onSuggestionClick={handleSuggestionClick}
            />
          )}
        </div>
        <div className="flex mt-auto justify-start md:ms-8 ms-4">
          {!isRegistered && <NewLetsConnect isDarkMode={isDarkMode} />}
        </div>
      </div>

      {/* Middle Section */}
      <div className="md:col-span-6 p-2  md:h-[73vh] h-[73vh] w-full">
        {ischatMessages &&
          <MobileSuggestion onSuggestionClick={handleSuggestionClick} isDarkMode={isDarkMode} />
        }
        <div className="flex items-center justify-center">
          <div className={`relative ${isRegistered ? "mt-[-1.75rem]" : "mt-[-0.75rem]"}`}>
            <span
              className={`hidden md:block ${isRegistered ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"} font-medium bg-clip-text text-transparent`}
              style={{
                backgroundImage: isDarkMode
                  ? "linear-gradient(92.92deg, #7BE53A 0.81%, #36AA00 99.19%)"
                  : "linear-gradient(92.92deg, #7BE53A 0.81%, #36AA00 99.19%)",
              }}
            >
              Hello, there
            </span>
            <br />
            <span
              className={`hidden md:block md:-mt-6 ${isRegistered ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"} 
              font-medium ${isDarkMode ? "text-gray-400" : "bg-clip-text text-transparent"}`}
              style={{
                backgroundImage: isDarkMode
                  ? "none"
                  : "linear-gradient(90.29deg, #CECECE 0.1%, #504F4F 99.9%)",
              }}
            >
              What can I help you with today?
            </span>
            <p className={`text-sm md:text-base hidden md:block ${isDarkMode ? "text-gray-400" : "text-[#BEBEBE]"} mt-1`}>
              Use one of the most common prompts below or use your own to begin
            </p>
            <div
              className={`relative md:absolute bottom-0 md:bottom-[58%] right-[10%] mt-2 md:right-2 
                ${!ischatMessages ? "md:block hidden" : "hidden md:block"
                }`}
            >
              <img
                src={walleiaiImage}
                alt="Wallei AI Bot"
                className={`h-auto ${isRegistered ? "w-20 md:w-28" : "w-28 md:w-36"}`}
              />
            </div>


          </div>
        </div>

        <div className={`flex  h-auto md:h-[70%] ${isRegistered ? "flex-col" : "items-center"}`}>
          <div>
            {!isRegistered && (
              <Suggestions
                onQuestionSelect={handleQuestionSelection}
                isDarkMode={isDarkMode}
              />
            )}
            {!isRegistered && (
              <p className="text-[#BEBEBE] text-sm mt-4 hidden md:block">More Suggestions</p>
            )}
            <div
              className="md:mt-4 mt-10 overflow-y-auto md:max-h-[54.5vh] max-h-[60vh]"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              ref={messagesContainerRef}
            >
              {messages.map((msg, index) => (
                <div key={index} className="mb-4 text-sm flex items-center justify-end">
                  <div
                    className={`px-4 max-w-[86%] md:max-w-[70%] md:px-5 py-2 flex items-center rounded-lg 
                    ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    style={{
                      wordBreak: "break-word",
                      background: msg.sender === "user"
                        ? "linear-gradient(90.33deg, #DBFFCA 0.1%, #ABFF83 99.9%)"
                        : "linear-gradient(90.33deg, #E0E0E0 0.1%, white 99.9%)",
                      color: msg.sender === "user" ? "#4ABC15" : "black",
                    }}
                  >
                    {msg.text}
                  </div>
                  <img
                    src={msg.sender === "user" ? personIMage : botImage}
                    className={`ms-3 ${msg.sender === "user" ? "w-6 md:w-7" : "w-5 md:w-[1.375rem]"}`}
                    alt={msg.sender === "user" ? "User" : "Bot"}
                  />
                </div>
              ))}
              {isTyping && <SkeletonLoader />}
              <div ref={messagesEndRef} />
            </div>

            {showDownButton && (
              <div
                className="text-white p-2 rounded-full animate-pulse cursor-pointer fixed bottom-[20%] md:left-[50%] left-[43%]"
                onClick={scrollToBottom}
                style={{ background: "linear-gradient(90.33deg, #E0E0E0 0.1%, white 99.9%)" }}
              >
                <ArrowDown />
              </div>
            )}
          </div>
        </div>

        <div className="absolute w-[97%] text-center bottom-0 md:bottom-0 md:w-[50%]">
          <InputField
            isDarkMode={isDarkMode}
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
          />
          <span className="md:text-xs text-[10px] text-[#999999] px-1">
            Walliea.ai may display inaccurate info
            <span className="hidden md:inline">, including about availability</span>, so double-check its responses
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-3 w-full h-[75vh] hidden md:block">
        <div
          className="fixed -right-20 bottom-0 w-[23%] space-y-5 h-[75vh]"
        >
          <OfferView />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
