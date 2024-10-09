import botImage from "../assets/images/Vector.png";
type Props = {}

function SkeletonLoader ({}: Props) {
  return (
    <div className="mb-4 text-sm flex items-center justify-end">
      <div
        className="px-5 py-2 rounded-xl flex justify-center gap-2 items-center animate-pulse bg-gray-300"
        style={{
          width: "100px",  
          height: "2rem",  
        }}
      ><p className="bg-white w-2 h-2 rounded-full animate-bounce"></p>
      <p className="bg-white w-2 h-2 rounded-full animate-bounce"></p>
      <p className="bg-white w-2 h-2 rounded-full animate-bounce"></p>
      </div>
      <img src={botImage} className="ms-3 w-[1.375rem] animate-pulse" alt="Bot" />
    </div>
  )
}

export default SkeletonLoader 