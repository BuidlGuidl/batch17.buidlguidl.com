import Image from "next/image";
import "../../../styles/coolguy.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const address = "0x452fC452af3DCbC320400E8CA117EB71279B43c4";

const CoolGuyPage: NextPage = () => {
  return (
    <main className="min-h-screen coolguy-bg flex items-center justify-center py-10 transition-colors">
      <div className="coolguy-card transition-transform hover:scale-105 duration-300 shadow-2xl rounded-3xl p-10 max-w-lg w-full flex flex-col items-center border-2 border-transparent hover:border-blue-400 dark:hover:border-pink-400">
        {/* Animated Gradient Avatar Border */}
        <div className="relative mb-2">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 p-1"
            style={{ zIndex: 1 }}
          />
          <div className="relative rounded-full bg-white dark:bg-gray-900 p-1" style={{ zIndex: 2 }}>
            <Image
              src="https://avatars.githubusercontent.com/u/146797715?v=4"
              alt="CoolGuy Avatar"
              width={140}
              height={140}
              className="rounded-full border-4 border-blue-300 dark:border-pink-400 shadow-lg"
            />
            {/* Animated Badge */}
            <span className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-pink-500 dark:from-blue-900 dark:to-pink-900 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse font-bold">
              🚀 Builder
            </span>
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-blue-800 dark:text-pink-300 tracking-tight drop-shadow-lg">
          Cool Guy
        </h1>
        <div className="mt-2 mb-4">
          <Address address={address} />
        </div>
        <ConnectButton showBalance={false} chainStatus="icon" />
        <p className="text-center text-lg text-gray-700 dark:text-gray-200 mb-4 mt-4">
          👋 Hi! I’m <span className="font-semibold text-blue-600 dark:text-pink-400">CoolGuy</span>, a passionate
          builder focused on <span className="text-purple-600 dark:text-purple-300 font-semibold">smart contracts</span>
          , <span className="text-pink-600 dark:text-pink-400 font-semibold">DeFi</span>, and{" "}
          <span className="text-blue-600 dark:text-blue-300 font-semibold">open source</span>.
          <br />
          I love learning, collaborating, and shipping unstoppable apps!
          <br />
          <span className="inline-block mt-2 text-sm text-gray-500 dark:text-gray-400">
            Batch 17 | Speedrun Ethereum
          </span>
        </p>
        {/* Skills Section */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
            Solidity
          </span>
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
            Next.js
          </span>
          <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded-full text-xs font-semibold">
            DeFi
          </span>
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">
            Web3
          </span>
          <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-xs font-semibold">
            NFT
          </span>
        </div>
        {/* Socials with animation */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/coolguy525"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white flex items-center gap-1 text-lg"
            title="GitHub"
          >
            <FaGithub /> <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://telegram.me/coolguy0525"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-1 text-lg"
            title="Telegram"
          >
            <FaTelegram /> <span className="hidden sm:inline">Telegram</span>
          </a>
          <a
            href="https://discord.com/users/coolman_525"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 text-indigo-500 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-400 flex items-center gap-1 text-lg"
            title="Discord"
          >
            <FaDiscord /> <span className="hidden sm:inline">Discord</span>
          </a>
        </div>
        {/* Fun Quote */}
        <div className="mt-8 w-full">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-blue-200 dark:border-pink-900 rounded-lg p-4 text-center text-blue-700 dark:text-pink-200 font-mono text-base shadow-inner">
            <span className="font-bold">“Code is like humor. When you have to explain it, it’s bad.”</span>
            <br />
            <span className="text-xs text-gray-400 dark:text-gray-500">— CoolGuy</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoolGuyPage;
