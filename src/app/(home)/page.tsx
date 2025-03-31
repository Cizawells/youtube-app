import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" height={30} width={30} alt="Logo"/>
      <p className="text-xl font-semibold tracking-tight">NewTube</p>
    </div>
  );
}
