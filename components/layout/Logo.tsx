import Image from "next/image";
import { productImages } from "@/config/products";

export function Logo() {
  return (
    <Image
      src={productImages.logoBlack}
      alt="LAIKFVEA"
      width={190}
      height={30}
      priority
      unoptimized
      className="h-auto w-40 sm:w-52"
    />
  );
}
