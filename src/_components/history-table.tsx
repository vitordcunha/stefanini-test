"use client";

import moment from "moment";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Input from "@/_components/input";

interface HistoryItem {
  id: string;
  username: string;
  movie_name: string;
  timestamp: string;
}

interface HistoryProps {
  history: HistoryItem[];
}

const HistoryTable = ({ history }: HistoryProps) => {
  const TABLE_PAGE_LIMIT = 5;

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(history.length / TABLE_PAGE_LIMIT);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const filteredHistory = history.filter((item) => {
    const titleAndName = [item.movie_name, item.username]
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

      <table className="w-full">
        <thead>
          <tr className="border-y border-card-foreground">
            <th className="text-left py-2 pl-2 w-[200px]">Nome</th>
            <th className="text-left py-2 pl-2 w-[200px]">Filme</th>
            <th className="text-right p-2 w-[150px]">Data de consulta</th>
          </tr>
        </thead>

        <tbody>
          {currentHistory.length > 0 ? (
            currentHistory.map((item) => (
              <tr key={item.id}>
                <td className="text-left py-2 pl-2">{item.username}</td>
                <td className="text-left py-2 pl-2">{item.movie_name}</td>
                <td className="text-right p-2">
                  {moment(item.timestamp).format("DD/MM/YYYY HH:mm")}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-2">
                Nenhum registro encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex items-center justify-center gap-4 mt-auto">
        <button
          className="p-2 rounded-full hover:bg-card-foreground"
          onClick={handlePreviousPage}
        >
          <ChevronLeft />
        </button>

        <span className="text-sm">
          {currentPage} / {totalPages}
        </span>

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

export default HistoryTable;
