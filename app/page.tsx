"use client"
import Lottie from "react-lottie";
import loading from "../public/lottie/loading.json";
import order_processing from "../public/lottie/order_processing.json";

const page = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: loading,
    renderSetting: {
      preverseAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie options={defaultOption} height={200}  width={200}/>
    </div>
  )
}

export default page