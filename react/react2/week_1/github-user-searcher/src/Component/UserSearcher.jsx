import { SearchingContext } from "../SearchContext";
import { useContext } from "react";

export default function UserSeacher() {
  const { query, setQuery, userList, loading, error } = useContext(SearchingContext);
 
  const renderUser = () => {
    return userList?.map((user) => <p key={user.id}>{user.login}</p>);
  };

  return (
    <div>
      <div>
        <h1>Github user seacher</h1>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <div>
        {loading ? <h1>Loading...</h1> : null}
        {query.length && userList ? renderUser() : <p>No Item</p>}
        {error && error !== "The user aborted a request." ? (
          <p>Error Fetching: {error}</p>
        ) : null}
      </div>
    </div>
  );
}
