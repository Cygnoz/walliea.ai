type Props = {
    isDarkMode: boolean;
};


function BellIcon({ isDarkMode}: Props) {
    return (
        <div className={`${isDarkMode ? 'bg-[#272626]' : 'bg-[#FDFDFD]'}  rounded-full p-1.5 cursor-pointer`} >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1667 12.4167C16.8333 13.6667 17.5 14.1667 17.5 14.1667H2.5C2.5 14.1667 5 12.5 5 6.66666C5 3.91666 7.25 
                1.66666 10 1.66666C10.5833 1.66666 11.0833 1.74999 11.5833 1.91666M8.58337 17.5C8.72286 17.7537 
                8.92791 17.9653 9.17712 18.1127C9.42632 18.26 9.71052 18.3378 10 18.3378C10.2896 18.3378 10.5738
                 18.26 10.823 18.1127C11.0722 17.9653 11.2772 17.7537 11.4167 17.5M17.5 6.66666C17.5 8.04737 16.3807
                  9.16666 15 9.16666C13.6193 9.16666 12.5 8.04737 12.5 6.66666C12.5 5.28595 13.6193 4.16666 15 4.16666C16.3807 
                  4.16666 17.5 5.28595 17.5 6.66666Z"     stroke={isDarkMode ? 'white' : '#000000'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}

export default BellIcon