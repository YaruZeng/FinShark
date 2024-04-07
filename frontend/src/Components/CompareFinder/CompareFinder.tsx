import React, { useEffect, useState } from "react";
import { CompanyCompareData } from "../../company";
import { getCompareData } from "../../api";
import CompareFinderItem from "../CompareFinderItem/CompareFinderItem";

type Props = {
  ticker: string;
};

const CompareFinder = ({ ticker }: Props) => {
  const [compareData, setCompareData] = useState<CompanyCompareData>();
  useEffect(() => {
    const getCompanyCompareData = async () => {
      const value = await getCompareData(ticker);
      setCompareData(value?.data[0]);
    };
    getCompanyCompareData();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {compareData?.peersList.map((ticker) => {
        return <CompareFinderItem ticker={ticker} />;
      })}
    </div>
  );
};

export default CompareFinder;
