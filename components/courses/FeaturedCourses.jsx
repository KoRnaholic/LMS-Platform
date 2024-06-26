import Image from "next/image";
import bgArrow from "../../public/images/bg-arrow.png";
import FeaturedList from "./FeaturedList";

export default function FeaturedCourses() {
  return (
    <section className="background relative h-[1400px]">
      <div className="background-arrow absolute -top-48 -mt-2 left-0 w-full  h-[700px] ">
        <div className=" flex flex-col md:flex-row justify-around px-16 gap-4  items-center z-30">
          <div className="flex flex-col gap-4 mt-20">
            <span className="text-[#FF6575] tracking-wider font-bold text-lg">
              What’s New
            </span>
            <h2 className="text-4xl font-bold text-[#002058] tracking-wider">
              Featured Courses
            </h2>
            <p className="max-w-[700px] text-[#685f78] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div>
            <button
              className="py-2.5 px-5 border-4 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#B4A7F5] hover:text-white
            transition-all duration-300 hover:border-[#B4A7F5]"
            >
              All Categories
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-10 px-4 sm:px-20 justify-center">
          {[...Array(6)].map((idx, indx) => {
            return <FeaturedList key={indx} />;
          })}
        </div>
      </div>
    </section>
  );
}

{
  /* <Image
          className="absolute top-0 w-full z-0"
          alt="arrow"
          src={bgArrow}
        /> */
}
