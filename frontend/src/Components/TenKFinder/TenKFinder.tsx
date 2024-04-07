import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company'
import { getTenK } from '../../api';
import TenKFinderItem from '../TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
  ticker: string;
}

const TenKFinder = ({ticker}: Props) => {
  const [tenKData, setTenKData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getCompanyTenKData = async () => {
      const value = await getTenK(ticker);
      setTenKData(value?.data);
    }
    getCompanyTenKData();
  }, [ticker])
  
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {tenKData ? (
        tenKData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />
        })
      ): (<Spinner />)}
    </div>
  )
}

export default TenKFinder