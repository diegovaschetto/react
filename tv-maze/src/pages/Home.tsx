import { SearchForm } from "../components/SearchForm";
import { ResultsList } from "../components/ResultsList";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callToApi, ResultsMapped } from "../service/api.service";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const { search } = useParams();
  const navigate = useNavigate();

  const [allResults, setAllResults] = useState<any>([]);

  useEffect(() => {
    if (search) {
      callToApi(search).then((mappedData: ResultsMapped[]) => {
        mappedData.length ? setAllResults(mappedData) : setAllResults([]);
      });
    }
  }, [search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/${searchParams.get("search")?.trim()}`);
  };

  const handleDisabled = () => {
    return searchParams.get("search")?.trim().length === 0;
  };

  return (
    <>
      <SearchForm onChange={handleChange} onSubmit={handleSubmit} isDisabled={handleDisabled()} />
      {allResults.length ? <ResultsList allResults={allResults} /> : <p>nessun risultato</p>}
    </>
  );
};
