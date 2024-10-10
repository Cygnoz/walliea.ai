import BrushIcon from "../assets/icons/BrushIcon";

type Props = {
    isDarkMode: boolean;
    onSuggestionClick: (message: string) => void; 
};

function MoreSuggestions({ isDarkMode, onSuggestionClick }: Props) {
    return (
        <div className="">
            <p
                className="mt-10 mb-3 text-transparent bg-clip-text text-sm"
                style={{
                    backgroundImage: 'linear-gradient(91.33deg, #A6A6A6 0.61%, #6E6B6B 99.39%)',
                }}
            >
                Suggestions
            </p>


            {/* Grid container for the suggestions */}
            <div className="flex space-x-3">
                <div className="space-y-2">
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]" } `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("Baltic Birch plywood. It's known for its strength, stability, and smooth finish.")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Baltic Birch plywood. It's known for its strength, stability, and smooth finish."</p>
                    </div>

                    {/* Suggestion 2 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]" } `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("Looking for inspiration? Check out our gallery of DIY plywood projects.")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Looking for inspiration? Check out our gallery of DIY plywood projects.</p>
                    </div>

                    {/* Suggestion 3 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]" } `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("Sign up for our newsletter and receive exclusive discounts.")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Sign up for our newsletter and receive exclusive discounts. </p>
                    </div>
                </div>

                <div className="space-y-2">
                    {/* Suggestion 4 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]" } `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("Low-VOC Finishes: Choose plywood with finishes that have low or no volatile.")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Low-VOC Finishes: Choose plywood with finishes that have low or no volatile</p>
                    </div>

                    {/* Suggestion 5 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]" } `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("Sign up for our newsletter and receive exclusive discounts.")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Sign up for our newsletter and receive exclusive discounts </p>
                    </div>

                    {/* Suggestion 6 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]" } `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("Our plywood features low-VOC finishes comfortable home.")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Our plywood features low-VOC finishes comfortable home.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MoreSuggestions;
