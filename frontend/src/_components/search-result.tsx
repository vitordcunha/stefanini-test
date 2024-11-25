export interface SearchResultResponse {
  name: string;
  release_year: string;
  rating: string;
}

interface SearchResultProps {
  value?: SearchResultResponse;
}

const SearchResult = ({ value }: SearchResultProps) => {
  return (
    <div className="container bg-background p-5 rounded-lg mt-5 border borded-dashed border-border text-center">
      {value ? (
        <div className="w-full flex justify-between">
          <p>{value.name}</p>
          <p>{value.release_year}</p>
        </div>
      ) : (
        <p>O resultado aparecera aqui</p>
      )}
    </div>
  );
};

export default SearchResult;
