import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 bg-[#151016] backdrop-blur-lg sticky top-0 dark:bg-[#151016]/60 bg-white/60 rounded-md z-10 h-22 lg:h-16 md:h-18 mt-4 4k:h-24 border-gray-300 border-solid border-[0.1px]">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://i.imgur.com/JM6YrSM.jpg"
            width={50}
            className="rounded-full"
            height={50}
            alt="devlife logo"
          />
        </Link>
        <Link href="/">
          <h1 className="text-white md:text-base text-2xl 4k:text-3xl">
            Devlife
          </h1>
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
