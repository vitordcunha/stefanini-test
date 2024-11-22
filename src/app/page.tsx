import SearchForm from "@/_components/search-form";

export default function Home() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="bg-card-background p-10 border border-border rounded-lg w-[500px]">
        <h1 className="text-xl mb-6">Buscar filme</h1>
        <SearchForm />
      </div>
    </div>
  );
}
