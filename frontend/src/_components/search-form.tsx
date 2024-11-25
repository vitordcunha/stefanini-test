"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import FormInput, { InputProps } from "./form-input";
import SearchResult, { SearchResultResponse } from "./search-result";

import { searchMovie } from "@/app/actions";

const SearchForm = () => {
  const [searchResult, setSearchResult] = useState<SearchResultResponse>();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmitError(error: Error) {
    toast.error(error.message);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent form submission
    setIsLoading(true);

    // Get form data.
    const formData = new FormData(e.currentTarget);

    // send data to backend and handle response and error 404, 500
    searchMovie(formData)
      .then((data) => setSearchResult(data))
      .catch(handleSubmitError)
      .finally(() => setIsLoading(false));
  }

  const formInputs: InputProps[] = [
    {
      name: "username",
      label: "Digite seu nome",
      required: true,
    },
    {
      name: "movie_name",
      label: "Digite o nome do filme",
      required: true,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-5">
        {formInputs.map((input) => (
          <FormInput key={input.name} {...input} />
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-blue-700 text-white w-full p-3 transition-colors hover:bg-blue-600 disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "Buscando..." : "Buscar"}
      </button>

      <SearchResult value={searchResult} />
    </form>
  );
};

export default SearchForm;
