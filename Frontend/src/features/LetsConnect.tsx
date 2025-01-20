import NewFbIcon from "../assets/icons/NewFbIcon";
import NewInstaIcon from "../assets/icons/NewInstaIcon";
import youtubeIcon from "../assets/images/image.png"
type Props = {isDarkMode:any}

function LetsConnect({isDarkMode}: Props) {
  return (
    <div
    className={`${isDarkMode ? "bg-[#272626]" : "bg-white"} w-[55%] rounded-xl px-3 py-2.5 flex justify-evenly items-center`}
    style={{
      boxShadow: "0px 0px 1px 0px #8A85851A, -2px 0px 2px 0px #8A858517, -4px 0px 3px 0px #8A85850D, -8px 0px 3px 0px #8A858503, -12px 0px 3px 0px #8A858500",
    }}
  >
    <a href="https://www.youtube.com/@wallmarkply4298" target="blank"><img src={youtubeIcon} className="w-7 h-5.5 object-fill" alt="" /></a>
    <a href="https://www.instagram.com/wallmarkply/" target="blank"><NewInstaIcon /></a>
    <a href="https://www.facebook.com/wallmarkply/" target="blank"><NewFbIcon /></a>
  </div>
  )
}

export default LetsConnect