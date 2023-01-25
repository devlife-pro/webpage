import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 bg-[#1f1b27] backdrop-blur-lg sticky top-0 dark:bg-[#12181d]/60 bg-white/60 rounded-md z-10">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://i.imgur.com/U2tAYnX.png"
            width={50}
            className="rounded-full"
            height={50}
            alt="devlife logo"
          />
        </Link>
        <Link href="/">
          <h1 className="text-white">Devlife</h1>
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
