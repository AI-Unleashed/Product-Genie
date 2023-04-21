import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full m:px-4 px-2">
      <Image
        alt="product genie logo"
        src="/ProductGenie.png"
        width={250}
        height={250}
      />
    </header>
  );
}
