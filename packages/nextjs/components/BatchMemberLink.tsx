import Link from "next/link";
import { Address } from "~~/components/scaffold-eth/Address/Address";

type BatchMemberLinkProps = {
  address: string;
  hasPage: boolean;
};

export const BatchMemberLink = ({ address, hasPage }: BatchMemberLinkProps) => {
  if (!hasPage) {
    return (
      <div className="max-w-xl mx-auto p-5 dark:bg-slate-800 bg-slate-200 rounded-xl flex items-center gap-3 shadow">
        <Address address={address} />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-5 dark:bg-slate-800 bg-slate-200 rounded-xl flex items-center gap-3 shadow">
      <Address address={address} />
      {hasPage && (
        <Link
          href={"/builders/" + address}
          className="link font-semibold dark:text-gray-200 text-gray-800 hover:underline"
        >
          Builder&apos;s page
        </Link>
      )}
    </div>
  );
};
