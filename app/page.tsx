import Image from "next/image";
import Icon from "@/public/icon.svg";

export default function Home() {
  return (
    <div className="flex-center h-screen w-screen gap-2 text-3xl font-semibold text-primary">
      <span>Hello World</span>
      <div className="relative h-12 w-12">
        <Image src={Icon} alt="Icon" fill />
      </div>
      <span>Waroeng Us</span>
    </div>
  );
}
