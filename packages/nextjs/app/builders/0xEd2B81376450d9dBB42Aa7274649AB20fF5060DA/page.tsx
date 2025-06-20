import Image from "next/image";

export default function builder_adashima() {
  const socialLinks = [
    {
      href: "https://speedrunethereum.com/builders/0xEd2B81376450d9dBB42Aa7274649AB20fF5060DA",
      label: "SRE",
      colorClass: "text-purple-300",
    },
    {
      href: "https://github.com/adashima152",
      label: "GitHub",
      colorClass: "text-blue-300",
      Icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/GallantZ152",
      label: "X",
      colorClass: "text-blue-400",
      Icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" fill="currentColor">
          <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="max-w-xl mx-auto p-6 bg-dark-blue">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-slate-300 flex items-center justify-center">
          <Image
            src={"/0xEd2B81376450d9dBB42Aa7274649AB20fF5060DA_avatar.jpg"}
            alt="Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold text-white">Adashima152</h1>
        <p className="text-2xl text-center text-white-700">Adashima is here, glad to see you!</p>
        <p className="text-lg text-center text-gray-300 mt-2">
          Passionate about building on Ethereum and exploring decentralized technologies. Always learning.
        </p>
        <p className="text-md text-gray-400 mt-1">Address: 0xEd2B81376450d9dBB42Aa7274649AB20fF5060DA</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.colorClass} hover:underline flex items-center gap-1`}
            >
              {link.Icon ? (
                <span className="w-5 h-5 flex items-center justify-center">{link.Icon}</span>
              ) : (
                <span className="font-semibold text-lg">{link.label}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
