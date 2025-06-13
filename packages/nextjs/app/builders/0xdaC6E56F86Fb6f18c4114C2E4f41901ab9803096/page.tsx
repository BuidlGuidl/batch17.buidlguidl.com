"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const BuilderPage: NextPage = () => {
  const size = { width: 32, height: 32 };

  const iconStyle = "w-8 h-8 transition-transform duration-300";

  const anchorStyle = "text-2xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg";

  const icons = [
    {
      anchorUrl: "https://github.com/NejcRozman",
      anchorStyle,
      iconUrl: "https://api.iconify.design/tabler:brand-github.svg",
      iconAlt: "Github",
      iconStyle,
    },
    {
      anchorUrl: "https://t.me/NRosca",
      anchorStyle,
      iconUrl: "https://api.iconify.design/tabler:brand-telegram.svg",
      iconAlt: "Telegram",
      iconStyle,
    },
    {
      anchorUrl: "https://www.linkedin.com/in/nejc-ro%C5%BEman-51567917b/",
      anchorStyle,
      iconUrl: "https://api.iconify.design/tabler:brand-linkedin.svg",
      iconAlt: "LinkedIn",
      iconStyle,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg animate-fadeIn">
              <Image
                src="https://avatars.githubusercontent.com/u/26038365?v=4"
                alt="Nejc's Avatar"
                width={128}
                height={128}
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-5xl font-extrabold drop-shadow-lg animate-fadeIn delay-200">Hi, I&apos;m Nejc</h1>

            <div className="animate-fadeIn delay-400">
              <Address address="0xdaC6E56F86Fb6f18c4114C2E4f41901ab9803096" />
            </div>

            <p className="text-center text-lg max-w-xl break-words leading-relaxed text-gray-800 animate-fadeIn delay-600">
              I am a blockchain enthusiast and a researcher exploring the connections between mechatronics and
              blockchain technology. Hit me up if you want to chat about it!
            </p>

            <div className="flex space-x-8 mt-4 animate-fadeIn delay-800">
              {icons.map(icon => (
                <a
                  href={icon.anchorUrl}
                  key={icon.iconAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={icon.anchorStyle}
                  aria-label={icon.iconAlt}
                >
                  <Image
                    src={icon.iconUrl}
                    alt={icon.iconAlt}
                    width={size.width}
                    height={size.height}
                    className={icon.iconStyle}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default BuilderPage;
