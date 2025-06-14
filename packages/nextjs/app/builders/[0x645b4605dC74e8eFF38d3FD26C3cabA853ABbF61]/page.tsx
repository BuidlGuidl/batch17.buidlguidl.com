import React from "react";
import Image from "next/image";

// /app/builders/page.tsx

export default function AboutMe() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <section className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
          <Image
            src="/0x645b4605dC74e8eFF38d3FD26C3cabA853ABbF61_avatar.jpeg"
            alt="Avatar"
            className="rounded-full object-cover"
            width={192}
            height={192}
          />
        </div>
        <h1 className="text-3xl font-bold">otomdee</h1>
        {/* Address */}
        <p className="text-gray-800 dark:text-white">0x645b4605dC74e8eFF38d3FD26C3cabA853ABbF61</p>
        {/* Bio */}
        <p className="mt-4 text-center text-gray-900 dark:text-gray-100">
          Hi, I&apos;m Daniel, a full-stack developer with a foundation in JavaScript based stacks. I&apos;ve been
          interested in web3 development for a while now and decided to start out my journey with BuidlGuidl&apos;s
          SpeedRunEthereum. I enjoy the challenge of building complete applications from start to finish and I look
          forward to leveraging my skills to contributing to interesting and innovative decentralized applications.
        </p>
        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://x.com/0x_Money"
            className="text-blue-500 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
            Twitter
          </a>
          <a
            href="https://github.com/otomdee"
            className="text-blue-500 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://telegram.me/Ox_Money"
            className="text-blue-500 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 240 240" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0zm58.92 82.47l-19.7 92.97c-1.49 6.6-5.41 8.23-10.97 5.13l-30.36-22.39-14.65 14.12c-1.62 1.62-2.98 2.98-6.09 2.98l2.18-30.87 56.18-50.7c2.44-2.18-.53-3.4-3.78-1.22l-69.4 43.7-29.9-9.34c-6.5-2.03-6.62-6.5 1.36-9.62l116.8-45.07c5.44-2 10.19 1.22 8.46 9.01z" />
            </svg>
            Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
