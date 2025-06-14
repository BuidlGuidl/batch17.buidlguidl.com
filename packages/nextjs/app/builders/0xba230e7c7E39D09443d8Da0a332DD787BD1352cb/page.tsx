"use client";

import { useState } from "react";

export default function Personal() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-950 via-green-800 to-green-900 text-green-100 px-6 py-10 space-y-6">
      <img
        src="https://github.com/ankur-JA.png"
        alt="Avatar"
        className="rounded-full w-32 h-32 border-4 border-green-500 shadow-xl hover:scale-110 transform transition duration-300"
      />

      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-2 tracking-wide animate-pulse">Gearhead</h1>
        <p className="text-green-200 text-lg italic">Software Developer | Web3 Enthusiast | Bug Bounty Hunter</p>
      </div>

      <p className="text-green-300 text-center text-sm">Mumbai, India</p>

      <div className="w-full max-w-2xl bg-green-800/50 p-5 rounded-xl shadow-md text-green-200 text-center">
        <p>
          I am passionate about building modern web applications and decentralized applications (dApps). I enjoy
          exploring new blockchain technologies, contributing to open-source projects, and learning about cybersecurity
          and smart contract development.
        </p>
      </div>

      <div className="flex space-x-6 pt-4">
        <a
          href="https://instagram.com/raj0_ankur"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-200 text-2xl transition duration-300 hover:scale-110"
        >
          📸 Instagram
        </a>

        <a
          href="https://github.com/ankur-JA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-200 text-2xl transition duration-300 hover:scale-110"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ankur-raj-gearhead/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-200 text-2xl transition duration-300 hover:scale-110"
        >
          💼 LinkedIn
        </a>
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-green-50 rounded-full shadow-md transition duration-300"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="w-full max-w-2xl bg-green-800/50 p-5 rounded-xl shadow-md text-green-200 text-center space-y-3">
          <p>🌐 Favorite Tech Stack: Next.js, React.js, TypeScript, Solidity, Foundry</p>
          <p>👨‍💻 Currently learning advanced DeFi protocols and core Eth</p>
          <p>🚀 Goal: Build scalable Web3 products that make a real-world impact</p>
        </div>
      )}
    </div>
  );
}
