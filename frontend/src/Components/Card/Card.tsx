import React from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props) : JSX.Element => {
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1711100360031-24aaccbcd408?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='company logo'></img>
      <div className='details'>
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>${searchResult.currency}</p>
      </div>
      <p className='info'>
      {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
    </div>
  )
}

export default Card