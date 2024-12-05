import Facebook from "../assets/icons/Facebook"
import Instagram from "../assets/icons/Instagram"
import YouTube from "../assets/icons/YouTube"

type Props = {}

function LetsConnect({}: Props) {
  return (
    <div
    className="w-[225px] h-[110px] rounded-2xl bg-cover bg-center"
  >
    <div className="text-center mt-5">
    <div className="px-5">
    <div className="w-full rounded-xl py-2 mt-4 flex justify-evenly  bg-[#0c0c0c86]">
      <Facebook/>
      <Instagram/>
      <YouTube/>
    </div>
    </div>
    </div>
  </div>
  )
}

export default LetsConnect