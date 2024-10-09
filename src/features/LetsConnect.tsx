import Facebook from "../assets/icons/Facebook"
import Instagram from "../assets/icons/Instagram"
import YouTube from "../assets/icons/YouTube"

type Props = {}

function LetsConnect({}: Props) {
  return (
    <div
    className="w-[225px] h-[110px] rounded-2xl bg-cover bg-center"
    style={{
      backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4fb7/4079/004aa9266a66a90f2063599ffdd5f642?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvLSG9NZqac7vPUexE0u8~2wuizH60MOxTxF4p8n3SOwCjUdA-JZSUfkpLuev4rb018xkktCn1M0VpZO64uiK2zwZc2Ro7qV7bUSYMAeWW-n4hsRKd~xvmjqR-7qvbSqmujh2GTULNVhOl1n6btWsgA5LSQ~gG6aoF7dUIhOZ34bYBLmBJA3Fed8RvEmk34Ck~tL66rbQOMrWB2bLtO-7r3aLFPuRf-UHc23ktWVlskjYzYkoZ-IODjxXKph4jqKJmoRrVokvi1Yw0Mm2Q8Srl-tu2kAZ4bp-bcJ3TZH5hr~NE0zqQzRUVt0gQIJhNACrRHzAnjPK6ylSimyhTK59w__')`,
      objectFit: 'cover', 
    }}
  >
    <div className="text-center mt-5">
    <span className="text-white text-3xl">Let’s Connect</span>
    <div className="px-5">
    <div className="w-full rounded-xl py-0.5 mt-4 flex justify-evenly  bg-[#0c0c0c86]">
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