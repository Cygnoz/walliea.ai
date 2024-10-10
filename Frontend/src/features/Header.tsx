import BellIcon from "../assets/icons/BellIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import UserIcon from "../assets/icons/UserIcon";
import wallmarkAi from "../assets/images/Walliea.ai.png";
import wallMarlLogo from "../assets/images/WALLMARK-PLY-Logo 1 1.png";
import whiteSunLogo from "../assets/images/sun-medium.svg";
import darkSunLogo from "../assets/images/sun-medium (1).svg";

type Props = {
  isDarkMode: boolean;
  onToggle: () => void;
};

function Header({ isDarkMode, onToggle }: Props) {
  return (
    <div className="px-6 py-2 flex justify-between items-center">
      <div>
        <div className="flex items-center gap-10">
          <img src={wallmarkAi} alt="Wallmark AI Logo" className="w-36" />
          <div className="mt-4">
          <HomeIcon isDarkMode={isDarkMode} />
          </div>
        </div>
        <div className="flex items-center mt- gap-1 ms-5">
          <span className="text-xs text-[#787878]">Powered By</span>
          <img src={wallMarlLogo} alt="Wallmark Logo" className="w-14" />
        </div>
      </div>

      <div className="flex gap-5 items-center">
        {/* Toggle button */}
        <div>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={onToggle} />
              <div
                className={`w-14 h-7 border-1 rounded-full transition-colors ${isDarkMode ? 'bg-[#4d4d4d] border-[#3f3f3f]' : 'bg-[#C4C4C4] border-[#ECECEC]'}`}
                style={isDarkMode
                  ? { boxShadow: 'inset 0px 4px 4px 0px #00000040, inset 4px 0px 5.2px 0px #00000040' }
                  : { boxShadow: 'inset 0px 4px 4px 0px #00000040, inset 1px 0px 1px 0px #00000040' }
                }
              ></div>
              {/* Toggle button */}
              <div
                className={`dot absolute w-5 h-5 rounded-full top-1 transition-transform ${isDarkMode ? 'transform translate-x-full left-3 bg-[#171616]' : 'left-1 bg-white'}`}
              >
                <img
                  src={isDarkMode ? darkSunLogo : whiteSunLogo}
                  className="w-5 h-5"
                  alt="Toggle Icon"
                />
              </div>
            </div>
          </label>
        </div>

        <div>
          <BellIcon />
        </div>
        <div>
          <UserIcon isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Header;
