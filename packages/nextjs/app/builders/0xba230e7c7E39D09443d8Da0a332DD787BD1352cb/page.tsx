"use client";

import { useState } from "react";
import Image from "next/image";

export default function Personal() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="
        flex flex-col items-center justify-center min-h-screen
        /* LIGHT MODE: pale greens */
        bg-gradient-to-br from-green-100 via-green-50 to-green-200
        text-green-900
        /* DARK MODE: rich greens */
        dark:bg-gradient-to-br dark:from-green-950 dark:via-green-800 dark:to-green-900
        dark:text-green-100
        px-6 py-10 space-y-6
      "
    >
      <Image
        src="https://github.com/ankur-JA.png"
        alt="Avatar"
        width={128}
        height={128}
        className="rounded-full w-32 h-32 border-4 border-green-500 shadow-xl"
      />

      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-2 tracking-wide animate-pulse">Gearhead</h1>
        <p className="text-green-600 dark:text-green-200 text-lg italic">
          Software Developer | Web3 Enthusiast | Bug Bounty Hunter
        </p>
      </div>

      <p className="text-green-700 dark:text-green-300 text-center text-sm">Mumbai, India</p>

      <div
        className="
          w-full max-w-2xl p-5 rounded-xl shadow-md text-center
          /* LIGHT */
          bg-green-200/50 text-green-800
          /* DARK */
          dark:bg-green-800/50 dark:text-green-200
        "
      >
        <p>
          I am passionate about building modern web applications and decentralized applications (dApps). I enjoy
          exploring new blockchain technologies, contributing to open-source projects, and learning about cybersecurity
          and smart contract development.
        </p>
      </div>

      <div className="flex space-x-6 pt-4">
        {[
          { href: "https://instagram.com/raj0_ankur", label: "📸 Instagram" },
          { href: "https://github.com/ankur-JA", label: "💻 GitHub" },
          {
            href: "https://www.linkedin.com/in/ankur-raj-gearhead/",
            label: "💼 LinkedIn",
          },
        ].map(link => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-green-600 hover:text-green-800
              dark:text-green-200 dark:hover:text-green-50
              text-2xl transition duration-300 hover:scale-110
            "
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="
          mt-4 px-6 py-2 rounded-full shadow-md transition duration-300
          /* LIGHT */
          bg-green-600 hover:bg-green-700 text-green-50
          /* DARK */
          dark:bg-green-300 dark:hover:bg-green-400 dark:text-green-900
        "
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div
          className="
            w-full max-w-2xl p-5 rounded-xl shadow-md text-center space-y-3
            /* LIGHT */
            bg-green-200/50 text-green-800
            /* DARK */
            dark:bg-green-800/50 dark:text-green-200
          "
        >
          <p>🌐 Favorite Tech Stack: Next.js, React.js, TypeScript, Solidity, Foundry</p>
          <p>👨‍💻 Currently learning advanced DeFi protocols and core Eth</p>
          <p>🚀 Goal: Build scalable Web3 products that make a real-world impact</p>
        </div>
      )}
    </div>
  );
}
