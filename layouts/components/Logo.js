import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { logo, title } = config.site;

  return (
    <Link href="/" className="navbar-brand flex items-center group">
      {/* Icon */}
      <div className="mr-3">
        <Image
          width={50}
          height={50}
          src={logo}
          alt={title}
          priority
          className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
        />
      </div>

      {/* Text Part */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-[#1e1b4b] dark:text-white">FAIZU-</span>
          <div className="relative">
             {/* Golden Arrow above TECH */}
            <span className="absolute -top-3 left-0 text-xs text-[#d69e2e]">➤</span>
            <span className="text-2xl font-black tracking-tighter text-[#38b2ac]">TECH</span>
          </div>
        </div>
        <div className="mt-1 border-t border-gray-300 pt-1">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#1e1b4b] dark:text-gray-400">
            TECH <span className="text-[#38b2ac]">•</span> AI <span className="text-[#38b2ac]">•</span> FREELANCING
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
