import { SearchForm } from "../components/SearchForm";
import { ResultsList } from "../components/ResultsList";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callToApi, ResultsMapped } from "../service/api.service";
import { store } from "../service/redux/store";
import { ShowsList } from "../service/redux/showsList.slice";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const { search } = useParams();
  const navigate = useNavigate();
  const [storeKey, setStoreKey] = useState<Partial<ShowsList>>({});
  const [searchInput, setSearchInput] = useState<any>();

  const [allResults, setAllResults] = useState<ResultsMapped[]>([]);

  useEffect(() => {
    if (search) {
      callToApi(search).then((mappedData: ResultsMapped[]) =>
        mappedData.length ? setAllResults(mappedData) : setAllResults([])
      );
      setStoreKey(store.getState().showsListReducer?.showsList);
    }
  }, [search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInput(searchParams.get("search")?.trim());
    navigate(`/${searchParams.get("search")?.trim()}`);
  };

  const handleDisabled = () => {
    return searchParams.get("search")?.trim().length === 0;
  };

  return (
    <>
      <SearchForm onChange={handleChange} onSubmit={handleSubmit} isDisabled={handleDisabled} />
      {allResults.length ? (
        <ResultsList allResults={allResults} storeKey={storeKey} />
      ) : !searchInput ? (
        <p></p>
      ) : (
        <div
          className="p-4 my-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          Nessun risultato per questa ricerca
        </div>
      )}
    </>
  );
};
