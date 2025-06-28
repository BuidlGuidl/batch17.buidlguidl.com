"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { BatchMemberLink } from "~~/components/BatchMemberLink";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const BATCH_REGISTRY_START_BLOCK: bigint = 346262647n;

const BuildersPage: NextPage = () => {
  //get available builder pages
  const [builderNames, setBuilderNames] = useState<string[]>([]);
  const [pagesLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/builders")
      .then(res => res.json())
      .then(data => {
        setBuilderNames(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  //get checkedIn event data with hook
  const { data: checkInEvents, isLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: BATCH_REGISTRY_START_BLOCK,
  });

  if (isLoading || pagesLoading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center p-5">Batch 17&apos;s builders</h1>
        <span className="flex items-center gap-1 text-gray-400 ml-2" title="Loading">
          Loading...
        </span>
      </div>
    );
  }

  if (!checkInEvents || !builderNames) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center p-5">Batch 17&apos;s builders</h1>
        <span className="flex items-center gap-1 text-gray-400 ml-2" title="Loading no data">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold text-center p-5">Batch 17&apos;s builders</h1>
      <ul className="space-y-2">
        {checkInEvents.map(event => (
          <BatchMemberLink
            address={event.args.builder ?? ""}
            hasPage={builderNames.includes(event.args.builder ?? "")}
            key={event.args.builder ?? ""}
          />
        ))}
      </ul>
    </div>
  );
};

export default BuildersPage;
