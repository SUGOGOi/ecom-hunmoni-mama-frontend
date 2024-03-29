"use client";
import style from "./page.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carouselPhoto1 from "../public/images/carousel2.jpg";
import carouselPhoto2 from "../public/images/carousel3.jpg";
import carouselPhoto3 from "../public/images/carousel4.jpg";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/shared/navbar/navbar";

const page = () => {
  // const pathname = usePathname();
  // const dashboard = pathname.split("/dash");

  return (
    <>
      <div className={style.container}>
        <div className={style.nav}>
          <Navbar />
        </div>
        <div className={style.carousel}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            emulateTouch={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
          >
            <div>
              <Image src={carouselPhoto1} height={380} alt="image" />
            </div>
            <div>
              {" "}
              <Image src={carouselPhoto2} height={380} alt="image" />
            </div>
            <div>
              {" "}
              <Image src={carouselPhoto3} height={380} alt="image" />
            </div>
          </Carousel>
        </div>
        <div className={style.categorymain}>
          <div className={style.category}></div>
        </div>
      </div>
    </>
  );
};

export default page;
