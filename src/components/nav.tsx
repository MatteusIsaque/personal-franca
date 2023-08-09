import Link from "next/link";
import Image from "next/image";
import Logo from "./../img/personal-frança.png";
import { Metadata } from "next";

export default function Nav() {
  return (
    <nav
      id="nav"
      className="w-full z-20 h-[70px] flex justify-between items-center bg-black-800 px-[5%] m-auto fixed top-0 backdrop-blur-md backdrop-opacity-60"
    >
      <div>
        <Image src={Logo} alt="logo isaques estúdios" height={50} />
      </div>

      {/* <div className="hidden mobile:block"> */}
        <p className="text-white-900 mobile:text-sm">Cref 018333-G/PE</p>
      {/* </div> */}
      {/* <ul className="flex items-center justify-center text-white-900 gap-x-4 mobile:hidden">
        <li>
          <Link href="/?counter=#inicio" scroll={true} className="text-xl">
            Ínicio
          </Link>
        </li>
        <li>
          <Link href="/?counter=#beneficios" scroll={true} className="text-xl">
            Benefícios
          </Link>
        </li>
        <li>
          <Link href="/?counter=#testemunhos" scroll={true} className="text-xl">
            Testemunhos
          </Link>
        </li>
        <li>
          <Link href="/?counter=#duvidas" className="text-xl">
            Dúvidas
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}
