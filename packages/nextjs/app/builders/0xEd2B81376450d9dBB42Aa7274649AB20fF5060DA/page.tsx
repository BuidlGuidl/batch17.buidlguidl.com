import Image from "next/image";

// Assuming you're using Next.js

export default function builder_adashima() {
  return (
    <main className="max-w-xl mx-auto p-6 bg-dark-blue">
      {" "}
      {/* Added a placeholder class for dark blue background */}
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-slate-300 flex items-center justify-center">
          {" "}
          {/* Changed background to a lighter slate */}
          <Image src={"/favicon.png"} alt="Avatar" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <h1 className="text-3xl font-bold text-white">Adashima152</h1> {/* Changed text color to white */}
        <p className="text-2xl text-center text-white-700">Adashima is here, glad to see you!</p>{" "}
        {/* Changed text color to a light off-white */}
        {/* Short Bio */}
        <p className="text-lg text-center text-gray-300 mt-2">
          {" "}
          {/* Changed text color to a lighter gray */}
          Passionate about building on Ethereum and exploring decentralized technologies. Always learning.
        </p>
        {/* Address (Placeholder)
        <p className="text-md text-gray-400 mt-1"> 
          Address: `0xEd2B81376450d9dBB42Aa7274649AB20fF5060DA`
        </p> */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://github.com/adashima152"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline flex items-center gap-1"
          >
            GitHub
          </a>

          <a
            href="https://speedrunethereum.com/builders/0xEd2B81376450d9dBB42Aa7274649AB20fF5060DA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline flex items-center gap-1"
          >
            SRE
          </a>

          {/* New Social Links
          <a
            href="https://twitter.com/your_twitter_handle" // Replace with your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            Twitter
          </a>

          <a
            href="https://linkedin.com/in/your_linkedin_profile" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center gap-1"
          >
            LinkedIn
          </a> */}
        </div>
      </div>
    </main>
  );
}
