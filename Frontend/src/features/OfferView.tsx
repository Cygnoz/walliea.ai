import chairImage from "../assets/images/Rectangle 32.png"; // Import your image

type Props = {}

function OfferView({ }: Props) {
  return (
    <div
      className="h-[43.5%] p-3 rounded-2xl w-[60%] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${chairImage})`,
      }}
    >
      <div className="flex justify-end ">
        <span className=" bg-[#fef7ff4a] cursor-pointer text-2xl font-thin h-6 w-6 flex justify-center items-center text-[#FEF7FF] rounded-full">
          &times;
        </span>
      </div>

      <div
        className="w-[90%] rounded-md absolute text-center bottom-3 px-2 py-2"
        style={{
          backgroundColor: "#B5B5B599", // Background color with transparency
          backdropFilter: "blur(10px)"   // Blur effect for the background
        }}
      >
        <span className="text-white text-xs">Flat 30% off on all plywood!</span>
        <p className="border-b border-dashed border-white mb-2 mt-1"></p>
        <div className="flex justify-between items-center">
        <span className="text-[#5E5E5E] text-[0.625rem]">Terms & Condition Apply</span>
        <button className="text-white bg-[#161616] rounded-md px-2 py-1 text-xs">View</button>
        </div>
      </div>
    </div>
  )
}

export default OfferView;
