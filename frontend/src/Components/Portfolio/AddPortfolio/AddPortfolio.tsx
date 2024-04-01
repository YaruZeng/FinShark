import React, { SyntheticEvent } from 'react'

type Props = {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return <form onSubmit={onPortfolioCreate}>
    <input readOnly={true} hidden={true} value={symbol}></input>
    <button type="submit">Add</button>
  </form>
}

export default AddPortfolio