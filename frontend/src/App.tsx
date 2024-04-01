import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    // type narrowing
    if (typeof result === "string") {
      setServerError(result);
      console.log(serverError);
    } else if (Array.isArray(result.data)) {
      console.log(result.data);
      setSearchResult(result.data); 
    }
  };
  return (
    <div className="App">
      <Search onClick={onClick} handleChange={handleChange} search={search}/>
      {serverError && <h1>{serverError}</h1>} 
      <CardList searchResults={searchResults}/>
    </div>
  );
}

export default App;
