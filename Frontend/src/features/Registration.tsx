import { useState } from "react";
import Modal from "../components/Modal";
import line from "../assets/images/Frame 1161.png";
import emailIcon from "../assets/images/Group.png";
import { register } from "../services/allApi";
import { useRegistration } from "../context/RegistrationContext"; // Import the context

type Props = {
    isModalOpen: boolean;
    closeModal: () => void;
    isDarkMode: boolean;
};

function Registration({ isModalOpen, closeModal, isDarkMode }: Props) {
    const { setIsRegistered } = useRegistration();
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        fullname: "",
        phone_no: "",
        company_name: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        fullname: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const newErrors = {
            fullname: !userData.fullname,
        };
        setErrors(newErrors);

        try {
            const response = await register(userData);
            if (response && response.status === 201) {
                localStorage.setItem("isRegistered", "true");
                setIsRegistered(true);
                closeModal();
            } else {
                console.error("Registration failed:", response?.data?.error || "Unknown error");
            }
        } catch (error: any) {
            console.error("Registration failed:", error.response?.data || error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal open={isModalOpen} onClose={closeModal} isDarkMode={isDarkMode} className={`md:w-[32%] w-[100%] h-[100vh] md:h-auto text-start  px-8 py-6 ${isDarkMode ? "bg-[#1C1C1C]" : "bg-white"}`}>
            <div>
                <span className={`text-3xl font-semibold ${isDarkMode ? "text-[#E6E6E6]" : "text-[#3A3838]"}`}>
                    Connect With Us
                </span>
                <br />
                <p className={`mt-2 text-sm font-extralight ${isDarkMode ? "text-[#5A5958]" : "text-[#A8A4A4]"}`}>
                    Join our community and unlock new opportunities.
                </p>
                <img src={line} className="mt-3" alt="line" />

                <form onSubmit={handleRegister} className="mt-6 space-y-6 text-[#403C3C]">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullname" className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"}`}>
                            Full name
                        </label>
                        <br />
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={userData.fullname}
                            onChange={handleInputChange}
                            className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                focus:outline-none rounded-lg h-11 ${isDarkMode
                                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"} `}
                            placeholder="Enter name"
                        />
                        {errors.fullname && (
                            <div className="text-red-800 text-xs mt-2 ms-1">
                                Name is required
                            </div>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone_no" className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"}`}>
                            Phone Number
                        </label>
                        <br />
                        <input
                            type="number"
                            id="phone_no"
                            name="phone_no"
                            value={userData.phone_no}
                            onChange={handleInputChange}
                            className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
    focus:outline-none rounded-lg h-11 ${isDarkMode
                                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"} no-spinner`}
                            placeholder="Enter number"
                        />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label htmlFor="company_name" className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"}`}>
                            Company Name
                        </label>
                        <br />
                        <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            value={userData.company_name}
                            onChange={handleInputChange}
                            className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                focus:outline-none rounded-lg h-11 ${isDarkMode
                                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"} `}
                            placeholder="Example"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label htmlFor="email" className={`font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"}`}>
                            Email
                        </label>
                        <br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] 
                focus:outline-none rounded-lg h-11 ${isDarkMode
                                    ? "border-[#2F2F2F] placeholder-[#313131] text-white"
                                    : "border-[#B9B8B8] placeholder-[#DEDCDC]"} `}
                            placeholder="user@gmail.com"
                        />
                        <img src={emailIcon} className="w-7 absolute top-[50%] right-3" alt="email icon" />
                    </div>

                    {/* Register Button */}
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className={`mt-6 px-14 py-1.5 text-lg font-semibold rounded-[33px] 
                ${isDarkMode
                                    ? "bg-gradient-to-r from-[#C6FFAC] to-[#5DD723] text-[#1D5A00]"
                                    : "bg-[#C6FFAC] text-[#1D5A00]"}`}
                        >
                            {isLoading ? "Connecting.." : "continue"}
                        </button>
                    </div>
                    <p className="text-xs text-center text-[#A8A4A4]">
                        Please review our Terms of Service and{" "}
                        <span className={`underline cursor-pointer ${isDarkMode ? "text-[#4ABC15]" : "text-[#555454]"}`}>
                            Privacy Policy
                        </span>{" "}
                        before submitting.
                    </p>
                </form>
            </div>
        </Modal>
    );
}

export default Registration;
