import React, { SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <div
    className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
    key={id}
    id={id}
  >
    <h2 className="font-bold text-center text-black md:text-left">
      {searchResult.name} ({searchResult.symbol})
    </h2>
    <p className="text-black">{searchResult.currency}</p>
    <Link to={`/company/${searchResult.symbol}`} className="font-bold text-black" >
      {searchResult.exchangeShortName} - {searchResult.stockExchange}
    </Link>
    <AddPortfolio
      onPortfolioCreate={onPortfolioCreate}
      symbol={searchResult.symbol}
    />
  </div>
  )
}

export default Card