import Link from "next/link";
import { NextPage } from "next";

const CypherpunkPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-black text-gray-200 font-mono px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">🕶️ neeraj27.eth Portfolio</h1>

        {/* Core Values Card */}
        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 hover:shadow-lg hover:bg-zinc-800 transition-all">
          <h2 className="text-2xl font-semibold mb-4">🧠 Core Values</h2>
          <ul className="space-y-2">
            <li>✅ End-to-end encryption is non-negotiable</li>
            <li>✅ Code is law — transparency is freedom</li>
            <li>✅ Self-sovereignty and zk-primitives are the future</li>
          </ul>
        </div>

        {/* Projects Card */}
        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 hover:shadow-lg hover:bg-zinc-800 transition-all">
          <h2 className="text-2xl font-semibold mb-4">📦 Projects</h2>
          <div className="space-y-3">
            <Link
              href="https://ethglobal.com/showcase/urban-odyssey-d0vor"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-700 hover:bg-zinc-600 px-4 py-3 rounded-lg"
            >
              🕵️‍♂️ urban odyssey → ZK Email using proof of email.
            </Link>
            <Link
              href="https://ethglobal.com/showcase/discova-e3jc2"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-700 hover:bg-zinc-600 px-4 py-3 rounded-lg"
            >
              🧰 dicova → NFT metadata tagging to improve visibility of NFTs
            </Link>
          </div>
        </div>

        {/* Identity Card */}
        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 hover:shadow-lg hover:bg-zinc-800 transition-all text-center">
          <h2 className="text-2xl font-semibold mb-2">👤 Identity</h2>
          <p className="text-green-400">0xE474023791.............262B891Ba207c</p>
        </div>
      </div>
    </main>
  );
};

export default CypherpunkPage;
