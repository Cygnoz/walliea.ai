import { useState } from "react";
import Modal from "../../components/Modal"
import line from "../../assets/images/Frame 1161.png"
import emailIcon from "../../assets/images/Group.png"

type Props = {
    isDarkMode: boolean;
};

function UserIcon({ isDarkMode }: Props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <div onClick={openModal} className="bg-[#FDFDFD] rounded-full p-1.5 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99999 12.5H4.99999C4.11593 12.5 3.26809 12.8512 2.64297 13.4763C2.01785 14.1014 1.66666 14.9493 1.66666 15.8333V17.5M15.8333 6.66667V11.6667M18.3333 9.16667H13.3333M10.8333 5.83333C10.8333 7.67428 9.34094 9.16667 7.49999 9.16667C5.65904 9.16667 4.16666 7.67428 4.16666 5.83333C4.16666 3.99238 5.65904 2.5 7.49999 2.5C9.34094 2.5 10.8333 3.99238 10.8333 5.83333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <Modal open={isModalOpen} onClose={closeModal} className={`w-[32%]  px-8 py-6 ${isDarkMode ? 'bg-[#1C1C1C]' : 'bg-white'
                }`}>
                <div>
                    <span className={`text-3xl font-semibold ${isDarkMode ? 'text-[#E6E6E6]' : 'text-[#3A3838]'
                        }`}>Registration</span>
                    <br />
                    <p className={`mt-2  text-sm font-extralight ${isDarkMode ? "text-[#5A5958]" : "text-[#A8A4A4]"
                        }`}>Join our community and unlock new opportunities.</p>
                    <img src={line} className="mt-3" alt="" />

                    <form className="mt-6 space-y-6 text-[#403C3C]">
                        <div>
                            <label htmlFor="" className={` font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                                }`}>
                                Full name</label> <br />
                            <input
                                type="text"
                                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] focus:outline-none rounded-lg h-11 ${isDarkMode ? "border-[#2F2F2F] placeholder-[#313131] text-white" : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                                    }`}
                                placeholder="Enter name"
                            />


                        </div>
                        <div>
                            <label htmlFor="" className={` font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                                }`}>
                                Phone Number</label> <br />
                            <input
                                type="text"
                                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] focus:outline-none rounded-lg h-11 ${isDarkMode ? "border-[#2F2F2F] placeholder-[#313131] text-white" : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                                    }`}
                                placeholder="Enter number "
                            />
                        </div>
                        <div>
                            <label htmlFor="" className={` font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                                }`}>
                                Company Name</label> <br />
                            <input
                                type="text"
                                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] focus:outline-none rounded-lg h-11 ${isDarkMode ? "border-[#2F2F2F] placeholder-[#313131] text-white" : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                                    }`}
                                placeholder="example"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="" className={` font-semibold ms-1 ${isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
                                }`}>
                                Email</label> <br />
                            <input
                                type="text"
                                className={`w-full mt-1 px-3 bg-transparent border focus:border-[#73F238] focus:outline-none rounded-lg h-11 ${isDarkMode ? "border-[#2F2F2F] placeholder-[#313131] text-white" : "border-[#B9B8B8] placeholder-[#DEDCDC]"
                                    }`}
                                placeholder="user@gmail.com"
                            />
                            <img src={emailIcon} className="w-7 absolute top-[50%] right-3" alt="" />
                        </div>

                        <div className="flex justify-center items-center">
                            <button
                                className={`mt-6 px-14 py-1.5 text-lg font-semibold rounded-[33px] 
                       bg-[#C6FFAC] text-[#1D5A00] dark:bg-[linear-gradient(91.81deg,#C6FFAC_0.53%,#5DD723_99.47%)]`}
                            >
                                Register
                            </button>

                        </div>
                        <p className="text-xs text-center text-[#A8A4A4]">Please review our Terms of Service and <span className={`
                        underline cursor-pointer ${
                            isDarkMode ? "text-[#4ABC15]": "text-[#555454]"
                        }`}>Privacy Policy</span> before submitting.</p>

                    </form>
                </div>


            </Modal>
        </>
    )
}

export default UserIcon