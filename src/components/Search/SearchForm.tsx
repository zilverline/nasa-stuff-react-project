import React, { useCallback, useState, FormEvent } from "react";

interface SearchFormProps {
  fetchImages: (query: string) => void;
}

const SearchForm = ({ fetchImages }: SearchFormProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      fetchImages(query);
    },
    [fetchImages, query]
  );

  return (
    <div className="searchcontent">
      <h3 className="searchtext">Enter a Celestial Term:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button id="searchformbutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
