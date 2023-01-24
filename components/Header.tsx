import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
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
