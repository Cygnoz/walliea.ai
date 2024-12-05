import { useEffect, useState } from "react";
import { getAllBanner } from "../services/allApi";

type Props = {}

function OfferView({ }: Props) {
  const [banners, setBanners] = useState<any[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getAllBanner();
        console.log("Fetched Banners:", data.data);
        setBanners(data.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <>
      {banners.map((banner, index) => (
        <div
          key={index}
          className="h-[42%] p-3 rounded-2xl w-[60%] bg-cover bg-center object-cover relative"
          style={{
            backgroundImage: `url(${banner.image})`,
          }}
        >
          {/* <div className="flex justify-end ">
            <span className=" bg-[#fef7ff4a] cursor-pointer text-2xl font-thin h-6 w-6 flex justify-center items-center text-[#FEF7FF] rounded-full">
              &times;
            </span>
          </div> */}

          <div
            className="w-[90%] rounded-md absolute text-center bottom-3 px-2 py-2"
            style={{
              background: "rgba(181, 181, 181, 0.6)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {/* title here */}
            <div className="max-w-[100%] overflow-x-auto whitespace-nowrap"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <span
                className="text-white text-center text-xs"
              >
                {banner.title}
              </span>
            </div>
            <p className="border-b border-dashed border-white mb-2 mt-1"></p>
            <div className="flex justify-between items-center">
              <span
                className="text-[#5E5E5E] text-[0.625rem] max-w-[72%] overflow-x-auto whitespace-nowrap"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {banner.subtitle}
              </span>

              {/* url link here */}
              <a
                href={banner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white bg-[#161616] rounded-md px-2 py-1 text-[10px]">View</a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default OfferView;
