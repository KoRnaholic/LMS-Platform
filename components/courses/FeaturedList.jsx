import Image from "next/image";
import firstCourse from "../../public/images/course-1.jpg";

export default function FeaturedList(props) {
  return (
    <div className="max-w-[415px]  bg-white rounded-lg shadow-md overflow-hidden p-5 group hover:bg-[#4B3869] transition-all duration-700">
      <div className="">
        <div className="relative">
          <div className="group overflow-hidden">
            <Image
              src={firstCourse}
              alt="course-1"
              className="w-full h-full rounded-lg object-cover transform transition-all ease-in-out  duration-700 group-hover:scale-110"
            />
          </div>
          <span className="absolute bottom-2 text-2xl right-2 bg-white text-[#159f46]  font-bold px-2.5 py-0.5 rounded-lg">
            FREE
          </span>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                // src="https://your-image-source.com/instructor.jpg" // Replace with actual path to instructor image
                alt="Instructor"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="flex flex-col ">
                <p className="text-gray-900 font-semibold group-hover:text-white">
                  David Powell
                </p>
                <p className="text-gray-600 text-sm group-hover:text-white">
                  Instructor
                </p>
              </div>
            </div>
            <div>heart</div>
          </div>
          <h3 className="text-lg font-semibold cursor-pointer mt-2 w-4/5 group-hover:text-white hover:text-black">
            Complete HTML, CSS and Javascript Course
          </h3>
          <div className="flex justify-between text-gray-600  mt-2 ">
            <span className="flex items-center group-hover:text-white">
              <span>book</span>0 lessons
            </span>
            <span className="flex items-center ml-4 group-hover:text-white">
              <span>time</span>
              30 mins
            </span>
          </div>
        </div>
        <div className="pt-4 flex justify-between items-center border-t">
          <p className="text-gray-900 font-semibold">Stars</p>
          <button
            className="py-1.5 px-3.5 border-2 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#B4A7F5] hover:text-white
            transition-all duration-300 hover:border-[#B4A7F5]
             group-hover:text-white "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

//<div>
//   <div>
//     <div>
//       <Image src={firstCourse} alt="coures-1" />
//       <span>FREE</span>
//     </div>
//     <div>
//       <div>
//         <div>
//           <p>David Powell</p>
//           <p>Instructor</p>
//         </div>
//         <Image />
//       </div>
//       <h3>Complete HTML, CSS and Javascript Course</h3>
//       <div>
//         <span>0 lessons</span>
//         <span>30 mins</span>
//       </div>
//     </div>
//     <div>
//       <p>start</p>
//       <button>Buy Now</button>
//     </div>
//   </div>
// </div>
