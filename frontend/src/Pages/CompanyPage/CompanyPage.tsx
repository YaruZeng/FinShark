import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";

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
    {company ? (<div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
      <Sidebar />
      <CompanyDashboard>
        <Tile title="CompanyName" subTitle={company?.companyName}/>
      </CompanyDashboard>
    </div>) : (<div>Company Not Found! </div>)}
    </>
  );
};

export default CompanyPage;
