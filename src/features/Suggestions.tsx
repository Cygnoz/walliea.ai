import SuggestionContent from "./SuggestionContent"

type Props = {
    isDarkMode: boolean;
}

function Suggestions({ isDarkMode}: Props) {
    return (
        <div className="flex justify-center gap-3 items-center">
        <SuggestionContent isDarkMode={isDarkMode} />
        <SuggestionContent isDarkMode={isDarkMode} />
        <SuggestionContent isDarkMode={isDarkMode} />
        </div>
    )
}

export default Suggestions