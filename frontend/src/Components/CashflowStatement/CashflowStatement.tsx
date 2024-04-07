import React, { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../company";
import { useOutlet, useOutletContext } from "react-router";
import { getCashflowStatement } from "../../api";
import RatioList from "../RatioList/RatioList";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

type Props = {};
const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashflowStatement, setCashflowStatement] = useState<CompanyCashFlow[]>();

  useEffect(() => {
    const getCompanyCashflow = async () => {
      const value = await getCashflowStatement(ticker);
      setCashflowStatement(value!.data);
    };
    getCompanyCashflow();
  }, []);

  return (
    <>
      {cashflowStatement ? (
        <Table config={config} data={cashflowStatement} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CashflowStatement;
