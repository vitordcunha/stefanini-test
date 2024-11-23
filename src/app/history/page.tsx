"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HistoryTable from "@/_components/history-table";
import Input from "@/_components/input";

const History = () => {
  const TABLE_PAGE_LIMIT = 5;

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const history = [
    {
      id: "1",
      username: "John Doe",
      movie: { title: "Inception", year: 2010 },
      created_at: "1995-12-17T03:24:00",
    },
    {
      id: "2",
      username: "Jane Doe",
      movie: { title: "The Matrix", year: 1999 },
      created_at: "1995-12-17T03:24:00",
    },
    {
      id: "3",
      username: "John Doe",
      movie: { title: "Inception", year: 2010 },
      created_at: "1995-12-17T03:24:00",
    },
    {
      id: "4",
      username: "Jane Doe",
      movie: { title: "The Matrix", year: 1999 },
      created_at: "1995-12-17T03:24:00",
    },
    {
      id: "5",
      username: "Jane Doe",
      movie: { title: "The Matrix", year: 1999 },
      created_at: "1995-12-17T03:24:00",
    },
    {
      id: "6",
      username: "Jane Doe",
      movie: { title: "The Matrix", year: 1999 },
      created_at: "1995-12-17T03:24:00",
    },
    {
      id: "7",
      username: "Jane Doe",
      movie: { title: "The Matrix", year: 1999 },
      created_at: "1995-12-17T03:24:00",
    },
  ];

  const totalPages = Math.ceil(history.length / TABLE_PAGE_LIMIT);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const filteredHistory = history.filter((item) => {
    const titleAndName = [item.movie.title, item.username]
      .join(" ")
      .toLowerCase();
    return titleAndName.includes(searchValue.toLowerCase());
  });

  const currentHistory = filteredHistory.slice(
    (currentPage - 1) * TABLE_PAGE_LIMIT,
    currentPage * TABLE_PAGE_LIMIT
  );

  return (
    <div className="flex flex-col gap-6 w-[800px] min-h-[380px]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Histórico</h1>

        <Input
          placeholder="Buscar por nome"
          name="search_value"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
      </div>

      <HistoryTable history={currentHistory} />

      <div className="flex items-center justify-center gap-4 mt-auto">
        <button
          className="p-2 rounded-full hover:bg-card-foreground"
          onClick={handlePreviousPage}
        >
          <ChevronLeft />
        </button>

        <span className="text-sm">{currentPage}</span>

        <button
          className="p-2 rounded-full hover:bg-card-foreground"
          onClick={handleNextPage}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default History;
