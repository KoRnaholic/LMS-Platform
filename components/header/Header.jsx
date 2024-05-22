import Image from "next/image";

export default function Header(props) {
  return (
    <header className="content-center p-5 fixed z-10 w-full">
      <nav className="flex justify-center gap-32">
        <div>
          {" "}
          <img
            src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg"
            className="w-40"
            alt="Logo"
          ></img>
        </div>

        <div className=" flex justify-center items-center">
          <ul className="flex gap-7 text-[#685F78] ">
            <li className="hover:text-[#FF6575] cursor-pointer">Home</li>
            <li className="hover:text-[#FF6575] cursor-pointer">About Us</li>
            <li className="hover:text-[#FF6575] cursor-pointer">instructors</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Students</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Pages</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Blog</li>
            <li className="hover:text-[#FF6575] cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button
            className="py-2.5 px-9 bg-white rounded-full hover:bg-[#FF6575]
           hover:text-white transition-all duration-300"
          >
            Login
          </button>
          <button
            className="py-2.5 px-9 border-2 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#FF6575] hover:text-white
            transition-all duration-300 hover:border-[#FF6575] "
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}
