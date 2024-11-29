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
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("How much plywood do I need to wall panel a 300 sqft room with plywood size 8 x 4")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How much plywood do I need to wall panel a 300 sqft room with plywood size 8 x 4</p>
                    </div>

                    {/* Suggestion 2 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("What are some common applications for plywood in furniture making?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">What are some common applications for plywood in furniture making?</p>
                    </div>

                    {/* Suggestion 3 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("How does the number of layers in plywood affect its strength and durability?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How does the number of layers in plywood affect its strength and durability?</p>
                    </div>
                </div>

                <div className="space-y-2">
                    {/* Suggestion 4 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("What is the lifespan of plywood when used in outdoor applications?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">What is the lifespan of plywood when used in outdoor applications?</p>
                    </div>

                    {/* Suggestion 5 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("How does the thickness of plywood affect its strength and usage?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How does the thickness of plywood affect its strength and usage?</p>
                    </div>

                    {/* Suggestion 6 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("How can plywood be used in construction for structural applications?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How can plywood be used in construction for structural applications?</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MoreSuggestions;
