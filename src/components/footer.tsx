"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [politics, setPolitics] = useState<any>();
  const [politicsStorage, setPoliticsStorage] = useState<any>();

  return (
    <>
      <div
        className={`fixed bottom-10 bg-white-900 w-[90%] mx-[5%] flex justify-between items-center py-2 px-4 border-[1px] rounded-md z-50 border-black-800 ${
          politics === true ? "hidden" : "block"
        }`}
      >
        <p>
          Ao permanecer nesta página, você estará de acordo com nossa{" "}
          <Link href="/politicaa-de-privacidade">Política de privacidade</Link>
        </p>

        <button
          onClick={() => {
            setPolitics(true);
          }}
          className="bg-yellow-800 py-2 px-4 rounded-md"
        >
          Aceitar e fechar
        </button>
      </div>
      <footer className="bg-black-800 text-center text-xs text-white-900 py-2">
        <p>
          {" "}
          Todos os direitos reservados a{" "}
          <Link href="https://isaquesestudios.com.br/">
            isaquesestudios.com.br
          </Link>
        </p>
        <p>
          <Link href="/politicaa-de-privacidade">Política de privacidade</Link>
        </p>
      </footer>
    </>
  );
}
