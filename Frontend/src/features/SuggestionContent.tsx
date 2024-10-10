import BrushIcon from "../assets/icons/BrushIcon"

type Props = {
    isDarkMode: boolean;
}

function SuggestionContent({ isDarkMode }: Props) {
    return (
        <div
            className={`rounded-lg p-4 w-[34%] 
        ${isDarkMode ? "bg-[#1e1e1e] text-[#AAAAAA]" : "bg-white text-[#676666]"}`}
            style={{
                boxShadow: `
                   0px 2px 4px 0px #D8B0F21A,
                   0px 7px 7px 0px #D8B0F217,
                   0px 1px 10px 0px #D8B0F20D,
                   0px 29px 12px 0px #D8B0F203,
                   0px 46px 13px 0px #D8B0F200
                   `,
            }}
        >
            <div className="mb-5">
                <BrushIcon />
            </div>
            <span className="text-[#676666] text-[0.900rem] ">
                Baltic Birch plywood. It's known for its strength, stability, and smooth finish.
            </span>
        </div>

    )
}

export default SuggestionContent