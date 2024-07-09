import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const { searchText: search } = useParams();
  const [searchText, setSearchText] = useState( searchParams.get("search") || "");

  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
  }, [searchParams]);

  console.log(searchText);
  
  return (
    <div className="shadow-lg flex gap-2 px-2 rounded-md border">
      <input
        type="text"
        placeholder="Search name, email, comment"
        className="w-64 outline-none px-2 py-2 "
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />

      <button
        className="text-gray-500 border-l px-2"
        onClick={() => {
          searchParams.delete("page");
          searchParams.delete("limit");
          searchParams.delete("sortBy");
          searchParams.delete("order");
          searchParams.set("search", searchText);
          setSearchParams(searchParams);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
