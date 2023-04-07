import { createContext, useEffect, useState } from "react";

export const SearchingContext = createContext();

export default function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    fetch(`https://api.github.com/search/users?q=${query}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setUserList(data.items))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

      return () => {
        abortController.abort();
      };
  }, [query]);
  
  return (
    <SearchingContext.Provider
      value={{ query, setQuery, userList, loading, error }}
    >
      {children}
    </SearchingContext.Provider>
  );
}
