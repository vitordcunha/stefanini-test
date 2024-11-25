import SearchForm from "@/_components/search-form";

export default function Home() {
  return (
    <div className="flex flex-col w-[400px]">
      <h1 className="text-xl mb-6">Buscar filme</h1>
      <SearchForm />
    </div>
  );
}
