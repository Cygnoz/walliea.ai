import { useState } from "react";
import Modal from "../components/Modal";
import line from "../assets/images/Frame 1161.png";
import emailIcon from "../assets/images/Group.png";
import { register } from "../services/allApi";
import { useRegistration } from "../context/RegistrationContext";

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  isDarkMode: boolean;
};

const Registration = ({ isModalOpen, closeModal, isDarkMode }: Props) => {
  const { setIsRegistered } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullname: "",
    phone_no: "",
    company_name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    phone_no: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateInputs = () => {
    const newErrors: { fullname: string; phone_no: string; email: string } = {
      fullname: "",
      phone_no: "",
      email: "",
    };
  
    if (!userData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!/^\d{10}$/.test(userData.phone_no))
      newErrors.phone_no = "Phone number must be 10 digits.";
    if (
      userData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)
    )
      newErrors.email = "Enter a valid email address.";
  
    return newErrors;
  };
  

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validateInputs();
    if (
      validationErrors.fullname ||
      validationErrors.phone_no ||
      validationErrors.email
    ) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await register(userData);
      if (response?.status === 201) {
        localStorage.setItem("isRegistered", "true");
        setIsRegistered(true);
        closeModal();
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: response?.data?.error?.email || "Registration failed.",
        }));
      }
    } catch (error: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: error?.response?.data?.error?.email || "An error occurred.",
      }));
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      isDarkMode={isDarkMode}
      className={`md:w-[32%] w-[100%] h-[100vh] md:h-auto text-start px-8 py-6 ${
        isDarkMode ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div>
        <h2
          className={`text-3xl font-semibold ${
            isDarkMode ? "text-[#E6E6E6]" : "text-[#3A3838]"
          }`}
        >
          Connect With Us
        </h2>
        <p
          className={`mt-2 text-sm font-extralight ${
            isDarkMode ? "text-[#5A5958]" : "text-[#A8A4A4]"
          }`}
        >
          Join our community and unlock new opportunities.
        </p>
        <img src={line} className="mt-3" alt="decorative line" />

        <form onSubmit={handleRegister} className="mt-6 space-y-6">
          {/* Full Name */}
          <InputField
            label="Full Name"
            id="fullname"
            name="fullname"
            value={userData.fullname}
            onChange={handleInputChange}
            placeholder="Enter name"
            error={errors.fullname}
            isDarkMode={isDarkMode}
          />

          {/* Phone Number */}
          <InputField
            label="Phone Number"
            id="phone_no"
            name="phone_no"
            value={userData.phone_no}
            onChange={handleInputChange}
            placeholder="Enter number"
            error={errors.phone_no}
            isDarkMode={isDarkMode}
            type="number"
            
          />

          {/* Company Name */}
          <InputField
            label="Company Name"
            id="company_name"
            name="company_name"
            value={userData.company_name}
            onChange={handleInputChange}
            placeholder="Company name"
            isDarkMode={isDarkMode}
          />

          {/* Email */}
          <InputField
            label="Email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="user@example.com"
            error={errors.email}
            isDarkMode={isDarkMode}
            icon={emailIcon}
          />

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={`mt-6 px-14 py-1.5 text-lg font-semibold rounded-[33px] ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#C6FFAC] to-[#5DD723] text-[#1D5A00]"
                  : "bg-[#C6FFAC] text-[#1D5A00]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Connecting..." : "Continue"}
            </button>
          </div>
          <p className="text-xs text-center text-[#A8A4A4]">
            Please review our Terms of Service and{" "}
            <span
              className={`underline cursor-pointer ${
                isDarkMode ? "text-[#4ABC15]" : "text-[#555454]"
              }`}
            >
              Privacy Policy
            </span>{" "}
            before submitting.
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default Registration;

// Reusable InputField Component
type InputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isDarkMode: boolean;
  error?: string;
  type?: string;
  icon?: string;
};

const InputField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  isDarkMode,
  error,
  type = "text",
  icon,
}: InputProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`font-semibold ms-1 ${
          isDarkMode ? "text-[#E6E6E6]" : "text-[#333030]"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full no-spinner mt-1 px-3 bg-transparent border focus:border-[#73F238] focus:outline-none rounded-lg h-11 ${
          isDarkMode
            ? "border-[#2F2F2F] placeholder-[#313131] text-white"
            : "border-[#B9B8B8] placeholder-[#DEDCDC]"
        }`}
        aria-describedby={`${id}-error`}
      />
      {icon && <img src={icon} className="w-7 absolute top-[50%] right-3" alt={`${label} icon`} />}
      {error && (
        <div
          id={`${id}-error`}
          className="text-red-800 text-xs mt-1.5 ms-1 absolute"
        >
          {error}
        </div>
      )}
    </div>
  );
};
