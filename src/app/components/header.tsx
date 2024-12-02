import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Menu from "../../../public/menu.png";

export function Header() {
  return (
    <header className="border-b border px-2 py-1 bg-white">
      <nav className="flex items-center gap-8 justify-between">
        <div id="menu" className="sm:hidden">
          <Image src={Menu} alt="Logo" className="w-7 h-auto"/>
        </div>
        <div id="logo">
          <h1 className="text-xl font-bold text-black hidden">Imperial Motors</h1>
          <Image src={Logo} alt="Logo" className="w-32 h-auto"/>
        </div>
        <div className="gap-4 flex text-black hidden sm:flex font-semibold">
          <Link href="../">Inicio</Link>
          <Link href="/quem-somos">Quem somos</Link>
        </div>
        <div className="text-black font-semibold">
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}
