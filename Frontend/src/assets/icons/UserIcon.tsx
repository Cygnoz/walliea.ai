import personIMage from "../../assets/images/Ellipse 2.png";
import { useRegistration } from "../../context/RegistrationContext";
type Props = {
    isDarkMode: boolean;
};

function UserIcon({ isDarkMode }: Props) {
    const { isRegistered } = useRegistration();
    return (
        <>
            {
                isRegistered ?
                    <div>
                        <img src={personIMage} className="w-8 object-cover" alt="" />
                    </div>
                    :
                    <div className={`${isDarkMode ? 'bg-[#272626]' : 'bg-[#FDFDFD]'}  rounded-full p-1.5 cursor-pointer`} >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99999 12.5H4.99999C4.11593 12.5 3.26809 12.8512 2.64297 13.4763C2.01785 14.1014 1.66666 14.9493 1.66666 15.8333V17.5M15.8333 6.66667V11.6667M18.3333 9.16667H13.3333M10.8333 5.83333C10.8333 7.67428 9.34094 9.16667 7.49999 9.16667C5.65904 9.16667 4.16666 7.67428 4.16666 5.83333C4.16666 3.99238 5.65904 2.5 7.49999 2.5C9.34094 2.5 10.8333 3.99238 10.8333 5.83333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
            }
        </>
    )
}

export default UserIcon