"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const members = [
  {
    address: "0x4aa32F424d0E8fcF71B542B837ce804153773080",
    name: "Bobby Liu",
    avatar: "https://avatars.githubusercontent.com/u/215039033?v=4",
    description:
      "I'm passionate about blockchain and novel technologies. I'm studying ZKPs. Hit me up if you want to chat about it!",
    github: "mufasa-0420",
    telegram: "bobbyliu0420",
  },
  {
    address: "0x452fC452af3DCbC320400E8CA117EB71279B43c4",
    name: "Cool Guy",
    avatar: "https://avatars.githubusercontent.com/u/146797715?v=4",
    description:
      "👋 Hi! I’m CoolGuy, a passionate builder focused on smart contracts, DeFi, and open source. I love learning, collaborating, and shipping unstoppable apps!",
    github: "coolguy0525",
    telegram: "coologuy0525",
  },
  {
    address: "0x645b4605dC74e8eFF38d3FD26C3cabA853ABbF61",
    name: "Daniel",
    avatar: "/0x645b4605dC74e8eFF38d3FD26C3cabA853ABbF61/0x645b4605dC74e8eFF38d3FD26C3cabA853ABbF61_avatar.jpeg",
    description: `Hi, I'm Daniel, a full-stack developer with a foundation in JavaScript based stacks. I've been
          interested in web3 development for a while now and decided to start out my journey with BuidlGuidl's
          SpeedRunEthereum. I enjoy the challenge of building complete applications from start to finish and I look
          forward to leveraging my skills by contributing to interesting and innovative decentralized applications.`,
    github: "otomdee",
    telegram: "Ox_Money",
  },
  {
    address: "0xba230e7c7E39D09443d8Da0a332DD787BD1352cb",
    name: "ankur-JA",
    avatar: "https://github.com/ankur-JA.png",
    description: `I am passionate about building modern web applications and decentralized applications (dApps). I enjoy
          exploring new blockchain technologies, contributing to open-source projects, and learning about cybersecurity
          and smart contract development.`,
    github: "ankur-JA",
    linkedin: "ankur-raj-gearhead",
  },
  {
    address: "0xdaC6E56F86Fb6f18c4114C2E4f41901ab9803096",
    name: "Nejc",
    avatar: "https://avatars.githubusercontent.com/u/26038365?v=4",
    description: `I am a blockchain enthusiast and a researcher exploring the connections between mechatronics and
              blockchain technology. Hit me up if you want to chat about it!`,
    github: "NejcRozman",
    telegram: "NRosca",
  },
  {
    address: "0xE474023791245Ff654167397Ea8262B891Ba207c",
    name: "Neeraj27",
    avatar: "https://avatars.githubusercontent.com/u/87654321?v=4",
    description: `Hi, I'm Daniel, a full-stack developer with a foundation in JavaScript based stacks. I've been
          interested in web3 development for a while now and decided to start out my journey with BuidlGuidl's
          SpeedRunEthereum. I enjoy the challenge of building complete applications from start to finish and I look
          forward to leveraging my skills by contributing to interesting and innovative decentralized applications.`,
    github: "",
    telegram: "",
  },
  {
    address: "0xE474023791245Ff654167397Ea8262B891Ba207c",
    name: "Adashima152",
    avatar: "/0xEd2B81376450d9dBB42Aa7274649AB20fF5060DA_avatar.webp",
    description: `Hi, I'm Daniel, a full-stack developer with a foundation in JavaScript based stacks. I've been
          interested in web3 development for a while now and decided to start out my journey with BuidlGuidl's
          SpeedRunEthereum. I enjoy the challenge of building complete applications from start to finish and I look
          forward to leveraging my skills by contributing to interesting and innovative decentralized applications.`,
    github: "adashima152",
    telegram: "",
  },
  // ...add avatars for other members as needed...
];

const Home: NextPage = () => {
  const { data: checkedInCount, isLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });
  return (
    <>
      <div className="flex items-center flex-col grow pt-6 sm:pt-10">
        <div className="px-3 sm:px-5 w-full max-w-4xl">
          <h1 className="text-center">
            <span className="block text-xl sm:text-2xl mb-2">Welcome to</span>
            <span className="block text-3xl sm:text-4xl font-bold">Batch 17</span>
          </h1>
          <p className="text-center text-base sm:text-lg">
            Get started by taking a look at your batch GitHub repository.
          </p>
          <div className="flex justify-center my-4">
            <span className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 text-white text-base sm:text-xl font-extrabold shadow-lg animate-pulse border-2 border-white dark:border-indigo-400">
              🚀 Community Sprint: June 11 – June 28, 2025 🚀
            </span>
          </div>
          <p className="text-base sm:text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <span className="inline-block animate-pulse">{checkedInCount}</span>
            )}
          </p>
        </div>

        <div className="grow bg-base-300 w-full mt-10 sm:mt-16 px-2 sm:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {members.map(member => (
              <div
                key={member.address}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-indigo-900 p-5 sm:p-6 w-full max-w-xs flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-indigo-400 dark:border-indigo-300 shadow-lg mb-4">
                  <Image
                    src={member.avatar}
                    alt={`${member.name}'s avatar`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="font-bold text-lg sm:text-xl mb-2 text-gray-900 dark:text-white">{member.name}</div>
                <div className="mb-2 break-all text-xs text-gray-500 dark:text-gray-300">{member.address}</div>
                <div className="mb-4 text-sm text-gray-700 dark:text-gray-200 text-center">{member.description}</div>
                <div className="flex gap-3 sm:gap-4">
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600 dark:text-blue-400"
                    >
                      GitHub
                    </a>
                  )}
                  {member.telegram && (
                    <a
                      href={`https://t.me/${member.telegram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-400 dark:text-blue-300"
                    >
                      Telegram
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-700 dark:text-blue-300"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
