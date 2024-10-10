import NewFbIcon from "../assets/icons/NewFbIcon";
import NewInstaIcon from "../assets/icons/NewInstaIcon";
import WhatsAppIcon from "../assets/icons/whatsAppIcon";

type Props = {};

function NewLetsConnect({}: Props) {
  return (
    <div
      className="w-56 h-28 flex justify-between items-center bg-white rounded-2xl"
      style={{
        boxShadow:
          "-1px 2px 5px 0px #B6B4B41A, -5px 7px 9px 0px #B6B4B417, -11px 17px 12px 0px #B6B4B40D, -20px 29px 14px 0px #B6B4B403, -31px 46px 16px 0px #B6B4B400",
      }}
    >
      <div className="pl-4 w-full">
        <p
          className="text-2xl flex justify-center items-center  me-2 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(91.15deg, #4D4D4D 0.42%, #B3B3B3 99.58%)",
          }}
        >
          Let's Connect
        </p>
      </div>

      <div
        className="bg-white rounded-2xl px-3 py-2 flex flex-col space-y-3"
        style={{
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
          <WhatsAppIcon/>
          <NewInstaIcon />
          <NewFbIcon/>
      </div>
    </div>
  );
}

export default NewLetsConnect;
