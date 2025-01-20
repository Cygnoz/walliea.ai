import BrushIcon from "../assets/icons/BrushIcon";

type Props = {
    isDarkMode: boolean;
    onSuggestionClick: (message: string) => void;
};

function MoreSuggestions({ isDarkMode, onSuggestionClick }: Props) {
    return (
        <div className="hidden md:block">
            <p
                className="mt-1 mb-1.5 text-transparent bg-clip-text text-xs"
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
                        onClick={() => onSuggestionClick("Can I get the contact details of the nearest Wallmark Ply distributor ?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">Can I get the contact details of the nearest Wallmark Ply distributor?</p>
                    </div>

                    {/* Suggestion 2 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("How can plywood be creatively utilized in home decor?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How can plywood be creatively utilized in home decor?</p>
                    </div>

                    {/* Suggestion 3 */}
                    <div
                        className={`  rounded-2xl px-3 w-36 py-3 space-y-4 shadow-md cursor-pointer
                            ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"} `}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => onSuggestionClick("How much plywood do I need for a 12x15 ft ceiling?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How much plywood do I need for a 12x15 ft ceiling?</p>
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
                        onClick={() => onSuggestionClick("How is plywood used for structural purposes in construction?")}
                    >
                        <BrushIcon />
                        <p className="text-[0.625rem]">How is plywood used for structural purposes in construction?</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MoreSuggestions;
