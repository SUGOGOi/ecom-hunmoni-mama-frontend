"use client"
import style from "./loading.module.scss"
import Lottie from "react-lottie";
import loading from "../../../public/lottie/loading.json";

const Loading = () => {
    const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: loading,
    renderSetting: {
      preverseAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={style.container} ><Lottie options={defaultOption} height={200}  width={200}/></div>
  )
}

export default Loading