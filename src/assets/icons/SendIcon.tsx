type Props = {
    isDarkMode: boolean;
};

function SendIcon({ isDarkMode }: Props) {
    return (
        <div className="cursor-pointer">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z" fill={isDarkMode ? "white" : "#1C1B1B"} />
            </svg>

        </div>
    )
}

export default SendIcon;