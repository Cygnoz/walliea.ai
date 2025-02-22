type Props = {
    isDarkMode: boolean;
  };
  
  function HomeIcon({ isDarkMode }: Props) {
    return (
      <div
        className={` ${
          isDarkMode ? 'bg-[#272626]' : 'bg-[#FDFDFD]'
        } rounded-full p-1.5 cursor-pointer transition-colors`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 18.3333V9.99999H12.5V18.3333M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
            stroke={isDarkMode ? 'white' : '#000000'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  
  export default HomeIcon;
  