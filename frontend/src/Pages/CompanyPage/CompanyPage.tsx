import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import CompareFinder from "../../Components/CompareFinder/CompareFinder";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!); //!: assert that ticker isn't null or undefined, if it's null, will throw an error
      setCompany(result?.data[0]); // ?: optional chaining, prevent errors by stopping the evaluation of the expression. If result is not null/undefined will get data, otherwise, define result as "undefined" but not throw an error
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="CompanyName" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toFixed(2).toString()} />
            <Tile title="DCF" subTitle={"$" + company.dcf.toFixed(2).toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            {/* <CompareFinder ticker={company.symbol} /> */}
            <TenKFinder ticker={company.symbol} />
            <p className="p-4 m-4 text-md text-gray-600 shadow-sm rounded-md">{company.description}</p>
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company Not Found! </div>
      )}
    </>
  );
};

export default CompanyPage;
