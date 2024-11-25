import HistoryTable from "@/_components/history-table";

const History = async () => {
  const history = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`).then(
    (res) => res.json()
  );

  return <HistoryTable history={history} />;
};

export default History;
