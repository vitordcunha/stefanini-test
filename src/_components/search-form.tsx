"use client";

import { useState } from "react";

import Input, { InputProps } from "./input";
import SearchResult, { SearchResultResponse } from "./search-result";

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  search_value: HTMLInputElement;
}

interface CustomFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

const SearchForm = () => {
  const [searchResult, setSearchResult] = useState<SearchResultResponse>();

  function handleSubmit(e: React.FormEvent<CustomFormElements>) {
    e.preventDefault(); // Prevent form submission

    // Get form data.
    const target = e.currentTarget;
    const data = {
      username: target.username.value,
      movieName: target.search_value.value,
    };

    // TODO: Send the data to your backend API or perform any other required actions.
    console.log(data);

    setSearchResult({
      name: "Test Movie",
      release_year: "2022",
      rating: "9.5",
    });
  }

  const inputs: InputProps[] = [
    {
      name: "username",
      label: "Digite seu nome",
      required: true,
    },
    {
      name: "search_value",
      label: "Digite o nome do filme",
      required: true,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-5">
        {inputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-blue-700 text-white w-full p-3 transition-colors hover:bg-blue-600"
      >
        Search
      </button>

      <SearchResult value={searchResult} />
    </form>
  );
};

export default SearchForm;
