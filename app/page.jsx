import Header from "@/components/header/Header";
import Image from "next/image";
import girlImage from "../public/images/girl-image.png";
import MainInfo from "@/components/main-info/MainInfo";
import TopCategories from "@/components/categories/TopCategories";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <div className="background w-full h-[850px]">
        <div className="flex justify-center gap-32 items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-[#685F78]">
              The Leader in Online Learning
            </h1>
            <h2 className="text-6xl font-bold max-w-[500px] text-[#002058]">
              Engaging & Accessible Online Courses For All
            </h2>
            <p className="text-lg">
              Trusted by over 15K Users worldwide since 2022
            </p>
          </div>
          <div>
            <Image
              className="w-[520px] h-[533px]"
              src={girlImage}
              alt="girl-image"
              quality={100}
            />
          </div>
        </div>
      </div>
      <MainInfo />
      <TopCategories />
    </div>
  );
}
