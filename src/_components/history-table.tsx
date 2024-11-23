"use client";

import moment from "moment";

interface HistoryItem {
  id: string;
  username: string;
  movie: {
    title: string;
    year: number;
  };
  created_at: string;
}

interface HistoryProps {
  history: HistoryItem[];
}

const HistoryTable = ({ history }: HistoryProps) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-y border-card-foreground">
          <th className="text-left py-2 pl-2 w-[200px]">Nome</th>
          <th className="text-left py-2 pl-2 w-[200px]">Filme</th>
          <th className="text-center py-2 pl-2 w-[100px]">Ano do filme</th>
          <th className="text-right p-2 w-[150px]">Data de consulta</th>
        </tr>
      </thead>

      <tbody>
        {history.length > 0 ? (
          history.map((item) => (
            <tr key={item.id}>
              <td className="text-left py-2 pl-2">{item.username}</td>
              <td className="text-left py-2 pl-2">{item.movie.title}</td>
              <td className="text-center py-2 pl-2">{item.movie.year}</td>
              <td className="text-right p-2">
                {moment(item.created_at).format("DD/MM/YYYY HH:mm")}
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
  );
};

export default HistoryTable;
