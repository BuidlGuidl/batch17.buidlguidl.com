import Image from "next/image";
import Link from "next/link";
import { Address } from "./scaffold-eth";

export interface Member {
  address: string;
  name: string;
  avatar: string;
  description: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
}

export const MemberCard = ({ member }: { member: Member }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-indigo-900 p-5 sm:p-6 flex flex-col items-center text-left cursor-pointer transition h-full min-h-[400px]">
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-indigo-400 dark:border-indigo-300 shadow-lg mb-4">
      <Image
        src={member.avatar}
        alt={`${member.name}'s avatar`}
        width={96}
        height={96}
        className="object-cover w-full h-full"
      />
    </div>
    <Link
      href={`/builders/${member.address}`}
      className="font-bold text-lg sm:text-xl mb-2 text-gray-900 dark:text-white text-center hover:scale-[1.2]"
    >
      {member.name}
    </Link>
    <Address address={member.address} />
    <div className="mb-4 text-sm text-gray-700 dark:text-gray-200 text-center min-h-[60px]">{member.description}</div>
    <div className="flex gap-3 sm:gap-4 mt-auto">
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
);
