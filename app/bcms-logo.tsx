import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana, roboto_serif } from "./ui/fonts";

export default function BCMSLogo(){
    return (
        <div
          className={`${roboto_serif.className} flex flex-row items-center leading-none text-white`}
        >
          {<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />}
          {/*<Image
             src="/botswana_logo.png"
             width={72}
             height={72}
             alt="Logo"
             quality={100}
    />*/}
          <p className="text-[18px]">e-CSRM</p>
        </div>
      );
}