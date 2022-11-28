import { SearchForm } from "../components/SearchForm";
import { ResultsList } from "../components/ResultsList";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams({ search: "" });
    const navigate = useNavigate();

    const [isSearched, setIsSearched] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const [allResults, setAllResults] = useState<any>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearch(event.target.value);
        setSearchParams({ search: event.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSearched(true);
        setInputSearch("");
        navigate(`/${searchParams.get("search")?.trim()}`);
    };

    const handleDisabled = () => {
        return searchParams.get("search")?.trim().length === 0;
    };

    return (
        <>
            <SearchForm
                onChange={handleChange}
                inputSearch={inputSearch}
                onSubmit={handleSubmit}
                isDisabled={handleDisabled()}
            />
            {isSearched && <ResultsList setAllResults={setAllResults} allResults={allResults} />}
        </>
    );
};
